require("./db");
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    username: { type: String, required: true, unique: true, trim: true, maxLength: 25 },
    password: { type: String, required: true, maxLenght: 12 },
    firstName: { type: String, required: true, trim: true, maxLength: 25 },
    lastName: { type: String, required: true, trim: true, maxLength: 25 },
    avatar: {
        type: String,
        default: 'http://res.cloudinary.com/devatchannel/image/upload/v1602752402/avatar/avatar_cugq40.png'
    },
    birthDate: { type: Date, required: true },
    registrationDate: { type: Date, default: Date.now },
    addressNumber: { type: Number, required: [true, "can't be blank"], match: [/^\d{1,5}/, "is invalid"] },
    addressStreetName: { type: String, required: [true, "can't be blank"] },
    addressPostalCode: { type: String, required: [true, "can't be blank"], match: [/^[A-Za-z]\d[A-Za-z][ -]?\d[A-Za-z]\d$/, "is invalid"] },
    addressTown: { type: String, required: true },
    addressProvince: { type: String, required: true },
    phoneNumber: { type: Number, required: [true, "can't be blank"], match: [/\d{3}-\d{3}-\d{4}/, "is invalid"] },
    email: { type: String, lowercase: true, required: [true, "can't be blank"], match: [/\S+@\S+\.\S+/, 'is invalid'], index: true, trim: true },
    genderIdentity: { type: String, required: [true, "can't be blank"] },
    specialty: { type: String, required: [true, "can't be blank"] },
    practiceType: { values: ["private", "public"] },
    activeStatus: { values: ["practicing", "retired", "mentoring"] },
    // followers: [{ type: mongoose.Types.ObjectId, ref: 'Med-Com' }],
    // following: [{ type: mongoose.Types.ObjectId, ref: 'Med-Com' }],
    cpsaStanding: "boolean"
}, {
    timestamps: true
});

//Users will be the collection in mongoDB Atlas
module.exports = mongoose.model("User", UserSchema, "user");