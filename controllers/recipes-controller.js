const recipeService = require('../services/recipes-service')

module.exports = (app) => {
    app.post('/api/recipes/:name', (req, res) =>
        recipeService.createRecipe(req.params.name, req.body)
            .then(recipe => res.send(recipe)))
}