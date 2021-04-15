const usersModel = require("../models/users-model")

const findUserByUsername = (username) => {
    return usersModel.find({username: username})
}
const createUser = (newUser) => {
    return usersModel.create(newUser)
}

module.exports = {
    findUserByUsername,
    createUser
}