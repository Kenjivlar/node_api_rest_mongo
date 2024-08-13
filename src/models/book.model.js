const mongoose = require('mongoose')

const bookSchema = new mongoose.Schema(
    {
        title: String,
        author: String,
        genre: String,
        publication_date: String
    }
)

//Modelo de Mongoose

module.exports = mongoose.model('Book', bookSchema)