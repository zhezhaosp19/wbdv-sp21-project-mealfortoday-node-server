const recipeService = require('../services/recipes-service')

module.exports = (app) => {
    app.post('/api/recipes/:name', (req, res) =>
        recipeService.createRecipe(req.params.name, req.body)
            .then(recipe => res.send(recipe)))

    app.get('/api/recipes', (req, res) =>
        recipeService.findAllRecipe()
            .then(allRecipes => res.json(allRecipes)))

    app.get('/api/recipes/:name', (req, res) =>
        recipeService.findRecipe(req.params.name)
            .then(recipe => res.json(recipe)))

    app.delete('/api/recipes/:name', (req, res) =>
        recipeService.deleteRecipe(req.params.name)
            .then(recipe => res.json(recipe)))
}