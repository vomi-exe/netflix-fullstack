const router = require('express').Router();
const User = require('../models/User');
const cryptojs = require('crypto-js');
const verify = require("../verifyToken");

//UPDATE
router.put('/:id', verify, async (req, res) => {
    if (req.user.id === req.params.id || req.user.isAdmin) {
        if (req.body.password) {
            req.body.password = CryptoJS.AES.encrypt(req.body.password, process.env.SECRET_KEY).toString();
        }
        try {
            const updateUser = await User.findByIdAndUpdate(req.params.id, {
                $set: req.body,
            }, { new: true });
            res.status(200).json(updateUser);
        } catch (err) {
            res.status(500).json(err);
        }


    } else {
        res.status(403).json("You can only update your account");
    }
});

//DELETE

router.delete('/:id', verify, async (req, res) => {
    if (req.user.id === req.params.id || req.user.isAdmin) {

        try {
            await User.deleteOne({ _id: req.params.id });
            res.status(200).json("User Deleted succesfully");
        } catch (err) {
            res.status(500).json(err);
        }

    } else {
        res.status(403).json("You can only delete your account");
    }
});

//GET

router.get("/find/:id", async (req, res) => {

    try {
        const currentUser = await User.findById({ _id: req.params.id });
        const { password, ...info } = currentUser._doc;
        res.status(200).json(info);
    } catch (err) {
        res.status(500).json(err);
    }


});

//GET ALL

router.get('/', verify, async (req, res) => {

    const query = req.query.new;
    if (req.user.isAdmin) {
        try {
            const users = query ? await User.find().sort({ _id: -1 }).limit(10) : await User.find();
            res.status(200).json(users);
        } catch (err) {
            res.status(500).json(err);
        }

    } else {
        res.status(403).json("You are not allowed to see all users");
    }
});

//GET USER STATS

router.get("/stats", verify, async (req, res) => {

    if (req.user.isAdmin) {
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
    } else {
        res.status(403).json("You are not autherized to access this");
    }


});







module.exports = router;