const express = require("express");
const router = express.Router();
const Users = require("../model/User");
const authControl = require("../controllers/authControl");

//Post function for sign-up form
router.post("/register", authControl.register);

router.post("/login", authControl.login);

// router.get("/getById/:id", async (req, res) => {
//   const user = await Users.findOne({ _id: req.params.id });

//   if (!user) {
//     return res.status(400).json({ msg: "This user does not exist." });
//   }
//   res.send(user);
// });

router.get("/", async (req, res) => {
  res.send("I am hitting homepage");
});

router.post("/logout", authControl.logout);

module.exports = router;
