const express = require('express')
const router = express.Router() 
const Conversation = require('../model/Conversation')
const AuthMiddleware = require("./../middlewares/authMiddleware")

// let jwtUser = null;
//middleware
// Token verfication middleware
// router.use(function(req, res, next) {
//     try {
//         jwtUser = jwt.verify(getApiTokenFromHeader(req), keys.secretOrKey);
//         next();
//     } catch (err) {
//         console.log(err);
//         res.setHeader('Content-Type', 'application/json');
//         res.end(JSON.stringify({ message: 'Unauthorized' }));
//         res.sendStatus(401);
//     }
//   });

 // new conversation
 router.post("/", AuthMiddleware, async (req, res) => {
     console.log(req.body)
     let senderId = req.authInfo.id;
    /**
     * maybe receiverId should be receiver username? Then, you'd have to query db for user by username. Then use the returned id
     */
    const newConversation = new Conversation({
      participants: [senderId, req.body.receiverId], 
    });
  
    try {
      const savedConversation = await newConversation.save();
      res.status(200).json(savedConversation);
    } catch (err) {
      res.status(500).json(err);
    }
  });

  //get conversation of a user
  router.get("/", AuthMiddleware, async (req, res) => {
    // let userId = jwtUser.id;
    let userId = req.authInfo.id;
    try {
        const conversation = await Conversation.find({
          participants: { $in: [userId] },
        });
        res.status(200).json(conversation);
      } catch (err) {
        res.status(500).json(err);
      }
})

//   router.get("/username", async (req, res) => {
//       console.log("what is req.params", req.params)
//     try {
//       const conversation = await Conversation.find({
//         participants: { $in: [req.params.userId] },
//       });
//       res.status(200).json(conversation);
//     } catch (err) {
//       res.status(500).json(err);
//     }
//   });

  // get conv includes two userId

// router.get("/find/:firstUserId/:secondUserId", async (req, res) => {
//     try {
//       const conversation = await Conversation.findOne({
//         participants: { $all: [req.params.firstUserId, req.params.secondUserId] },
//       });
//       res.status(200).json(conversation)
//     } catch (err) {
//       res.status(500).json(err);
//     }
//   });

 module.exports = router