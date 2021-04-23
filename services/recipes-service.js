const recipesModel = require('../models/recipe/recipe-model')

const createRecipe = (name, recipe) => {
    return recipesModel
        .create({
            name: name,
            area: recipe.area,
            category: recipe.category,
            ingredients: recipe.ingredients,
            instructions: recipe.instructions
        })
}

const findRecipe = () => {

}

module.exports = {
    createRecipe
}