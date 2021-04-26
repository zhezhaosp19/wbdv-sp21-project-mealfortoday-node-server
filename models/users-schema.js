const mongoose = require("mongoose")
const userRegisterSchema = mongoose.Schema({
    username : String,
    password : String,
    email : String,
    role : {type: String, enum: ["Client", "Chef", "Admin"]},
    birthday : String,
    Gender: {type: String, enum: ["Male", "Female"]},
}, {collection: "users"})

module.exports = userRegisterSchema