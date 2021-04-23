const mongoose = require("mongoose")

const createRecipeSchema = mongoose.Schema({
    name: String,
    area: String,
    category: String,
    ingredients: [String],
    instructions: [String]
}, {collection: 'recipes'})

module.exports = createRecipeSchema