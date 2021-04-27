const favoriteService = require("../services/favorites-service")

module.exports = (app) => {
    const addFavoriteToMeal = (req, res) => {
        let recipeId = req.params.mealId
        console.log(recipeId)
        let username = req.body.username
        favoriteService.addFavoriteToMeal(recipeId, username)
            .then(favo => {
                console.log(favo)
                res.send(favo)
            })
    }

    const findAllUsersForAFavorite = (req, res) => {
        let recipeId = req.params.mealId
        favoriteService.findAllUsersForAFavorite(recipeId)
        .then()
    }

app.post('/api/favorites/:mealId', addFavoriteToMeal)
app.get('/api/favorites/:mealId', findAllUsersForAFavorite)

app.post('/api/favorites/:username', addFavoriteToUser)
}