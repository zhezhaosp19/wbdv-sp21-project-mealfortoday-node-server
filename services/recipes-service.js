const recipesModel = require('../models/recipe/recipe-model')

const createRecipe = (name, recipe) => {
    return recipesModel
        .create(recipe)
}

const findAllRecipe = () =>
    recipesModel.find()

const findRecipe = (name) =>
    recipesModel.find({strMeal: name})

module.exports = {
    createRecipe,
    findAllRecipe,
    findRecipe
}