const router = require('express').Router();
const CryptoJS = require("crypto-js");
const User = require('../models/User');
const jwt = require('jsonwebtoken');



//REGISTER

router.post("/register", async (req, res) => {
    const newUser = new User({
        username: req.body.username,
        email: req.body.email,
        password: CryptoJS.AES.encrypt(req.body.password, process.env.SECRET_KEY).toString()
    });

    try {
        const user = await newUser.save();
        res.status(201).json(user);
    } catch (err) {
        res.status(500).json(err);
    }
});

//LOGIN

router.post('/login', async (req, res) => {

    try {
        const user = await User.findOne({ email: req.body.email });
        if (!user) {
            res.status(401).json("Wrong username or password")
            return;
        }
        const bytes = CryptoJS.AES.decrypt(user.password, process.env.SECRET_KEY);
        const originalText = bytes.toString(CryptoJS.enc.Utf8);

        if (originalText !== req.body.password) {
            res.status(401).json("Wrong Username or password");
            return;
        }

        const accessToken = jwt.sign({ id: user._id, isAdmin: user.isAdmin }, process.env.SECRET_KEY, {
            expiresIn: "5d"
        });
        const { password, ...info } = user._doc;

        res.status(200).json({ ...info, accessToken });

    } catch (err) {
        console.log(err)
        res.status(500).json(err);
    }




})


module.exports = router;