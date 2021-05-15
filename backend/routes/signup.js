const express = require("express");
const router = express.Router();

const User = require("../model/User");

router.get("/", async (req, res) => {
    let data = await User.find({});
    console.info("records received from DB: ", data?.length);
    res.send(data);
});

router.get("/:id", async (req, res) => {
    try {
        let data = await User.findOne({_id: req.params.id});
        console.info("found a user: ", data);
        res.send(data);
    } catch (err) {
        console.log(err);
        res.sendStatus(500);
    }
})

module.exports = router;