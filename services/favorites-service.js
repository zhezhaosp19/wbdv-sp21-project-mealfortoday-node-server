const favoritesModel = require("../models/favorites-model")

const findAllUsersForAFavorite = (recipeId) => {
    return favoritesModel.find({recipeId: recipeId}, 'users').exec()
}

const addFavorite = (recipeId, user) => {
    favoritesModel.update(
        {recipeId: recipeId},
        {$push: {users: user}},
        done
    )
}

const removeFavorite = (recipeId, user) => {
    favoritesModel.update(
        {recipeId: recipeId},
        {"$pull": {"users": "user"}}
    )
}

module.exports = {
    findAllUsersForAFavorite, addFavorite, removeFavorite
}