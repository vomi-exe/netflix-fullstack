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
        res.status(403).json("You can only Delete your account");
    }
});

//GET

router.get("/:id", verify, async (req, res) => {
    if (req.user.id === req.params.id || req.user.isAdmin) {
        try {
            const currentUser = await User.findById({ _id: req.params.id });
            const { password, ...info } = currentUser._doc;
            res.status(200).json(info);

        } catch (err) {
            res.status(500).json(err);
        }

    } else {
        res.status(403).json("You can only access your account");
    }


});

//GET ALL

//GET USER STATS


module.exports = router;