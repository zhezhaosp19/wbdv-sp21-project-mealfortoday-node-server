const mongoose = require("mongoose")

const favoritesSchema = mongoose.Schema({
//    id: String,
    users: [String],
    recipeId: String
}, {collection: 'favorites'})

module.exports = favoritesSchema