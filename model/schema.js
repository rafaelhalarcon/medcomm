const mongoose = require('mongoose');

const UserScheema = mongoose.Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    birthDate: { type: Date, required: true },
    registrationDate: { type: Date, default: Date.now },
    address: {
        streetName: { type: String, required: [true, "can't be blank"] },
        number: {
            type: Number, required: [true, "can't be blank"], match: [/^\d{1,5}/, "is invalid"]
        },
        postalCode: {
            type: String, required: [true, "can't be blank"], match: [/^[A-Za-z]\d[A-Za-z][ -]?\d[A-Za-z]\d$/, "is invalid"]
        },
        town: { type: String, required: true }
    },
    phoneNumber: { type: String, required: [true, "can't be blank"], match: [/\d{3}-\d{3}-\d{4}/, "is invalid"] },
    email: { type: String, lowercase: true, required: [true, "can't be blank"], match: [/\S+@\S+\.\S+/, 'is invalid'], index: true },
    gender: { values: [male, female, preferNotToAnswer] },
    specialty: { type: String, required: [true, "can't be blank"] },
    practiceType: { values: [private, public] },
    activeStatus: { values: [practicing, retired, mentoring] },
    cpsaStanding: { boolean }
});
//Users will be the collection in my mongoDB Atlas
module.exports = mongoose.model("Users", UserScheema)