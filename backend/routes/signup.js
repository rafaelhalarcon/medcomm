const express = require("express");
const router = express.Router();

const bcrypt = require('bcrypt')

const User = require("../model/User");
const authControl = require("../controllers/authControl");

router.get("/", async(req, res) =>{
    res.send("I am hitting homepage");
})

//Post function for sign-up form
router.post('/register', authControl.register)


router.post('/login', authControl.login)


router.post('/logout', authControl.logout)


router.post('/refresh_token', authControl.generateAccessToken)

module.exports = router;