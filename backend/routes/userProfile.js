const express = require("express")
const router = express.Router()
const Users = require("../model/User")

const AuthMiddleware = require("../middlewares/authMiddleware")


// router.get("/getById/:id", async (req, res) => 
// {
//     const profileId = req.authInfo.id

//     const userProfile = new Users.findBy_Id(
//         {
//             ownerProfile:[profileId, email, req.body.id, firstName, lastName]
//         })

//         try 
//         {
//             const savedUser = await userProfile.save()
//             res.status(200).json(savedUser)
//         }
//         catch(err)
//         {
//             res.status(500).json(err)
//         }
// })

//Get User Profile 
router.get("/getById/:id", async (req, res) => {
    try 
        {
            const userProfile = await Users.findOne({ _id: req.params.id });
            res.status(200).json(userProfile)
        }
        catch(err)
        {
            res.status(500).json(err)
        }
  
    // if (!userProfile) {
    //   return res.status(400).json({ msg: "This user does not exist." });
    // }
    // res.send(user);
  });


  //get a user
// router.get("/", async (req, res) => {
//     const userId = req.query.user;
//     const username = req.query.userName;
//     try {
//       const user = userId
//         ? await User.findById(userId)
//         : await User.findOne({ username: username });
//       const { password, updatedAt, ...other } = user._doc;
//       res.status(200).json(other);
//     } catch (err) {
//       res.status(500).json(err);
//     }
//   });


  module.exports = router;