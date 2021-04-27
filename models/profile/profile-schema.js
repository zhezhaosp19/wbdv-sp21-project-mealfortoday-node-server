const mongoose = require("mongoose")
const userProfileSchema = mongoose.Schema({
    Gender: {type: String, enum: ["Male", "Female"]},
    Area: String,
    Bio: String,
    Flavor: String
}, {collection: "profile"})

module.exports = userProfileSchema