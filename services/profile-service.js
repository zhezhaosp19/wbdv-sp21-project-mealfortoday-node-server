const profileModel = require("../models/profile/profile-model")

const createProfile = (username, profile) => {
    return profileModel.create(profile)
}

// const findProfileByUser = (username) => {
//     return profileModel.find({username})
//         .populate("users")
//         .exec()
// }

module.exports = {
    createProfile,
    // findProfileByUser
}