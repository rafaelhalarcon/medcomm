const express = require("express")
const router = express.Router()
const Users = require("../model/User")

const AuthMiddleware = require("../middlewares/authMiddleware")


router.post("/getById/:id", AuthMiddleware, async (req, res) => 
{
    const profileId = req.authInfo.id

    const userProfile = new Users.findById(
        {
            ownerProfile:[profileId, userName, req.body.id, firstName, lastName]
        })

        try 
        {
            const savedUser = await userProfile.save()
            res.status(200).json(savedUser)
        }
        catch(err)
        {
            res.status(500).json(err)
        }
})






router.get("/getById/:id", async (req, res) => {
    const userProfile = await Users.findOne({ _id: req.params.id });
  
    if (!userProfile) {
      return res.status(400).json({ msg: "This user does not exist." });
    }
    res.send(user);
  });


  module.exports = router;