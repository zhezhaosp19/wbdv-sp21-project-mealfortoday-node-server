const mongoose = require("mongoose")

const createRecipeSchema = mongoose.Schema({
    id: String,
    name: String,
    keywords: [String],
    area: String,
    category: String,
    ingredients: [String],
    instructions: [String]
}, {collection: 'recipes'})

module.exports = createRecipeSchema