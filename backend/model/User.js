require("./db");
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema(
  {
    userName: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      maxLength: 25,
    },
    password: { type: String, required: true, maxLenght: 12 },
    firstName: { type: String, required: true, trim: true, maxLength: 25 },
    lastName: { type: String, required: true, trim: true, maxLength: 25 },
    avatar: {
      type: String,
      default:
        "http://res.cloudinary.com/devatchannel/image/upload/v1602752402/avatar/avatar_cugq40.png",
    },
    birthDate: { type: Date, required: true },
    registrationDate: { type: Date, default: Date.now },
    addressStreetNumber: {
      type: Number,
      required: [true, "can't be blank"],
      match: [/^\d{1,5}/, "is invalid"],
    },
    addressStreetName: { type: String, required: [true, "can't be blank"] },
    addressPostalCode: {
      type: String,
      required: [true, "can't be blank"],
      match: [/^[A-Za-z]\d[A-Za-z][ -]?\d[A-Za-z]\d$/, "is invalid"],
    },
    addressTown: { type: String, required: true },
    addressProvince: { type: String, required: true },
    phoneNumber: {
      type: Number,
      required: [true, "can't be blank"],
      match: [/\d{3}-\d{3}-\d{4}/, "is invalid"],
    },
    email: {
      type: String,
      lowercase: true,
      required: [true, "can't be blank"],
      match: [/\S+@\S+\.\S+/, "is invalid"],
      index: true,
      trim: true,
    },
    genderIdentity: { type: String, required: [true, "can't be blank"] },
    specialties: [{ type: String, required: [true, "can't be blank"] }],
    practiceType: { type: String, required: true },
    activeStatus: { type: String, required: true },
    // followers: [{ type: mongoose.Types.ObjectId, ref: 'Med-Com' }],
    // following: [{ type: mongoose.Types.ObjectId, ref: 'Med-Com' }],
    cpsaStanding: { type: Number, required: [true, "can't be blank"] },
  },
  {
    timestamps: true,
  }
);

//Users will be the collection in mongoDB Atlas
module.exports = mongoose.model("Users", UserSchema, "users");
