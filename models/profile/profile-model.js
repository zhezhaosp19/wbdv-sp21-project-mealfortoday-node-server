const mongoose = require("mongoose")
const profileSchema = require("./profile-schema")

const profileModel = mongoose.model(
    'profileModel',
    profileSchema
)

module.exports = profileModel