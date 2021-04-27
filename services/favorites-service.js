const favoritesModel = require("../models/favorite/favorite-model")
const usersModel = require("../models/users-model")

const findAllUsersForAFavorite = (recipeId) => {
    return favoritesModel.find({recipeId: recipeId})
    .populate('favorites').exec()
}

const addFavoriteToMeal = (recipeId, username) => {
    return favoritesModel.updateOne(
        console.log(username),
        {recipeId: recipeId},
        {$push: {users: username}},
        done
    )
}

const removeFavorite = (recipeId, username) => {
    return favoritesModel.updateOne(
        {recipeId: recipeId},
        {$pull: {users: username}}
    )
}

const addFavoriteToUser = (recipeId, username) => {
    return usersModel.updateOne(
        {username: username}, {$push: {favorites, recipeId}}
    )
}

module.exports = {
    findAllUsersForAFavorite,
    addFavoriteToMeal, 
    removeFavorite,
    addFavoriteToUser
}