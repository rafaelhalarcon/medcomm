require("./db");
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema(
  {
    email: {
      type: String,
      lowercase: true,
      match: [/\S+@\S+\.\S+/, "is invalid"],
      index: true,
      trim: true,
    },
    password: { type: String, maxLenght: 12 },
    firstName: { type: String, trim: true, maxLength: 25 },
    lastName: { type: String, trim: true, maxLength: 25 },
    avatar: {type: String, default:"http://res.cloudinary.com/devatchannel/image/upload/v1602752402/avatar/avatar_cugq40.png"},
    birthDate: { type: Date },
    registrationDate: { type: Date, default: Date.now },
    addressStreetNumber: { type: Number, match: [/^\d{1,5}/, "is invalid"]},
    addressStreetName: { type: String},
    addressPostalCode: {type: String, match: [/^[A-Za-z]\d[A-Za-z][ -]?\d[A-Za-z]\d$/, "is invalid"]},
    addressTown: { type: String},
    addressProvince: { type: String },
    phoneNumber: {type: Number,
      match: [/\d{10}/, "is invalid"]},
    genderIdentity: { type: String,  },
    specialties: { type: String  },
    practiceType: { type: String  },
    activeStatus: { type: String  },
    // followers: [{ type: mongoose.Types.ObjectId, ref: 'Med-Com' }],
    // following: [{ type: mongoose.Types.ObjectId, ref: 'Med-Com' }],
    cpsaStanding: { type: Number },
  },
  {
    timestamps: true,
  }
);

//Users will be the collection in mongoDB Atlas
module.exports = mongoose.model("Users", UserSchema, "users");
