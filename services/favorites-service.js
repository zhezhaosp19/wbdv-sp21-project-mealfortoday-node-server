const favoritesModel = require("../models/favorite/favorite-model")

const findAllUsersForAFavorite = (recipeId) => {
    return favoritesModel.find({recipeId: recipeId})
    .populate('favorites').exec()
}

const addFavoriteToMeal = (info) => {
    console.log(info)
    return favoritesModel.create(info)
}

const findAllFavoritesForAUser = (username) => {
    return favoritesModel.find({username: username})
        .populate('favorites').exec()
}

const findAllFavorites = () => {
    return favoritesModel.find()
}

const findFavoriteForUserAndMealID = (info) => {
    return favoritesModel.findOne(info)
}


// const removeFavorite = (recipeId, username) => {
//     return favoritesModel.updateOne(
//         {recipeId: recipeId},
//         {$pull: {users: username}}
//     )
// }

// const addFavoriteToUser = (recipeId, username) => {
//     return usersModel.updateOne(
//         {username: username}, {$push: {favorites, recipeId}}
//     )
// }

module.exports = {
    findAllUsersForAFavorite,
    addFavoriteToMeal,
    findAllFavoritesForAUser,
    findAllFavorites,
    findFavoriteForUserAndMealID
    // removeFavorite,
}