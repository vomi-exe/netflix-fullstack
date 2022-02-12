const router = require('express').Router();
const Movie = require('../models/Movie');
const verify = require("../verifyToken");

//Create
router.post('/', verify, async (req, res) => {
    if (req.user.isAdmin) {
        const newMovie = new Movie(req.body);
        try {
            const saveMovie = await newMovie.save();
            res.status(201).json(saveMovie);
        } catch (err) {
            res.status(500).json(err);
        }
    } else {
        res.status(403).json("You are not allowed to add movie");
    }
});

//UPDATE

router.put('/:id', verify, async (req, res) => {
    if (req.user.isAdmin) {
        const updateMovie = await Movie.findByIdAndUpdate(req.params.id, {
            $set: req.body,
        }, { new: true });
        try {
            res.status(200).json(updateMovie);
        } catch (err) {
            res.status(500).json(err);
        }
    } else {
        res.status(403).json("You are not allowed to add movie");
    }
});

//DELETE
router.delete('/:id', verify, async (req, res) => {
    if (req.user.isAdmin) {
        await Movie.findByIdAndDelete(req.params.id);
        try {
            res.status(200).json("Movie has been deleted");
        } catch (err) {
            res.status(500).json(err);
        }
    } else {
        res.status(403).json("You are not allowed to take action to remove this movie");
    }
});

//GET Movie

router.get('/:id', verify, async (req, res) => {
    try {
        const movie = await Movie.findById(req.params.id);
        res.status(200).json(movie);
    } catch (err) {
        res.status(500).json(err);
    }
});

//GET ALL MOVIE

router.get('/', verify, async (req, res) => {

    const query = req.query.new;
    try {
        const movie = query ? await User.find().sort({ _id: -1 }).limit(10) : await User.find();
        res.status(200).json(users);
    } catch (err) {
        res.status(500).json(err);
    }
});

//GET USER STATS

router.get("/stats", async (req, res) => {
    const today = new Date();
    const lastYear = today.setFullYear(today.setFullYear() - 1);

    const monthsArray = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December"
    ];


    try {
        const data = await User.aggregate([
            {
                $project: {
                    month: { $month: "$createdAt" }
                }
            }, {
                $group: {
                    _id: "$month",
                    total: { $sum: 1 }
                }
            }
        ]);

        res.status(200).json(data);



    } catch (err) {


        res.status(500).json(err);
    }




});


module.exports = router;