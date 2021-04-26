const mongoose = require('mongoose')
const favoritesSchema = require('./favorites-schema')

const favoritesModel = mongoose.model(
    "favoritesModel",
    favoritesSchema
)

module.exports = favoritesModel