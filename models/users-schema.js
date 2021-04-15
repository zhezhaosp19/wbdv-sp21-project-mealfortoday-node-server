const mongoose = require("mongoose")
const userRegisterSchema = mongoose.Schema({
    username : String,
    password : String,
    email : String,
    role : {type: String, enum: ["Client", "Chef", "Admin"]},
    birthday : String
}, {collection: "users"})

module.exports = userRegisterSchema