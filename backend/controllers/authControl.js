const Users = require("../model/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
require("dotenv").config();

const authControl = {
  //Register function
  register: async (req, res) => {
    console.log("I am hitting signup/register POST");
    try {
      const {
        lastName,
        firstName,
        userName,
        email,
        password,
        genderIdentity,
        addressStreetNumber,
        addressStreetName,
        addressPostalCode,
        addressTown,
        addressProvince,
        birthDate,
        specialty,
        phoneNumber,
        practiceType,
        activeStatus,
        cpsaStanding,
      } = req.body;
      let newUserName = userName; //.toLowerCase().replace(/ /g, "");

      //checks to see if a user name exists
      const user_name = await Users.findOne({ userName: newUserName });
      if (user_name)
        return res.status(400).json({ msg: "This User Name already exists." });

      //checks to see if a user email exists
      const user_email = await Users.findOne({ email });
      if (user_email)
        return res.status(400).json({ msg: "This email already exists." });

      //checks to see if password letters are at least 6..
      if (password.length < 6)
        return res
          .status(400)
          .json({ msg: "Password must be at least 6 letters or more" });

      const passwordHash = await bcrypt.hash(password, 12);

      const newUser = new Users({
        lastName,
        firstName,
        userName: newUserName,
        email,
        password: passwordHash,
        genderIdentity,
        addressStreetNumber,
        addressStreetName,
        addressPostalCode,
        addressTown,
        addressProvince,
        birthDate,
        specialty,
        phoneNumber,
        practiceType,
        activeStatus,
        cpsaStanding,
      });

      //   const access_token = createAccessToken({ id: newUser._id });
      //   const refresh_token = createRefreshToken({ id: newUser._id });

      //   res.cookie("refreshtoken", refresh_token, {
      //     httpOnly: true,
      //     path: "api/refresh_token",
      //     maxAge: 30 * 24 * 60 * 60 * 1000,
      //   });

      await newUser.save();

      res.json({
        msg: "Registration Successful!",
        // access_token,
        user: {
          ...newUser._doc,
          password: "",
        },
      });
    } catch (err) {
      return res.status(500).json({ msg: err.message });
    }
  },

  //Login Function
  login: async (req, res) => {
    try {
      const { email, password } = req.body;

      const user = await Users.findOne({ email }).populate("");

      //Checks to see if email exists
      if (!user)
        return res.status(400).json({ msg: "This email does not exist." });

      //Checks to see if password is correct and exists
      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch)
        return res.status(400).json({ msg: "Password is incorrect." });

      res.cookie("refreshtoken", refresh_token, {
        httpOnly: true,
        path: "api/refresh_token",
        maxAge: 30 * 24 * 60 * 60 * 1000,
      });

      res.json({
        msg: "Login Sucessful!",
        access_token,
        user: {
          ...user._doc,
          password: "",
        },
      });
    } catch (err) {
      return res.status(500).json({ msg: err.message });
    }
  },

  //Logout Function
  logout: async (req, res) => {
    try {
      res.clearCookie("refreshtoken", { path: "/api/refresh_token" });
      return res.join({ msg: "Logged Out!" });
    } catch (err) {
      return res.status(500).json({ msg: err.message });
    }
  },

  generateAccessToken: async (req, res) => {
    try {
      const rf_token = req.cookies.refreshtoken;
      if (!rf_token) return res.status(400).json({ msg: "Please Login now" });

      jwt.verify(
        rf_token,
        process.env.REFRESH_TOKEN_SECRET,
        async (err, result) => {
          if (err) return res.status(400).json({ msg: "" });

          //Find the user by ID
          const user = await (await Users.findById(result.id))
            .select("-password")
            .populate("-password");

          if (!user)
            return res.status(400).json({ msg: "This does not exist" });

          const access_token = createAccessToken({ id: result.id });

          res.json({
            access_token,
            user,
          });
        }
      );
    } catch (err) {
      return res.status(500).json({ msg: err.message });
    }
  },
};

const createAccessToken = (payload) => {
  return jwt.sign(payload, process.env.ACCESS_TOKEN_SECRET, {
    expiresIn: "1d",
  });
};

//const createRefreshToken = (payload) => {
//  return jwt.sign(payload, process.env.REFRESH_TOKEN_SECRET, { expiresIn: '30d' })
//}

//Export authControl
module.exports = authControl;
