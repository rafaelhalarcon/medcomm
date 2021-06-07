const express = require("express");
const router = express.Router();
const Message = require("../model/Message");
const AuthMiddleware = require("./../middlewares/authMiddleware");
// let jwtUser = null;

// // Token verfication middleware
// router.use(async function(req, res, next) {
//   try {
//       jwtUser = jwt.verify(getApiTokenFromHeader(req), keys.secretOrKey);
//       next();
//   } catch (err) {
//       console.log(err);
//       res.setHeader('Content-Type', 'application/json');
//       res.end(JSON.stringify({ message: 'Unauthorized' }));
//       res.sendStatus(401);
//   }
// });

//add message
router.post("/", async (req, res) => {
  //newMessage.sender = req.authInfo.id;
  try {
    const newMessage = new Message(req.body);
    const savedMessage = await newMessage.save();
    res.status(200).json(savedMessage);
  } catch (err) {
    res.status(500).json(err);
  }
});

//get conversation for user

router.get("/:Id", async (req, res) => {
  try {
    const messages = await Message.find({
      conversationId: req.params.Id,
    });
    res.status(200).json(messages);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
