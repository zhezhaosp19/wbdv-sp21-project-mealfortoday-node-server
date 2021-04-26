const usersModel = require("../models/users-model")

const findUserByUsername = (username) => {
    return usersModel.find({username: username})
}
const createUser = (newUser) => {
    return usersModel.create(newUser)
}

const findUserByCredentials = (credentials) => {
    return usersModel.findOne({username: credentials.username, password: credentials.password})
}

const findAllFavoritesForAUser = (username) => {
    return usersModel.find({username: username})
}

module.exports = {
    findUserByUsername,
    createUser,
    findUserByCredentials,
    findAllFavoritesForAUser
}