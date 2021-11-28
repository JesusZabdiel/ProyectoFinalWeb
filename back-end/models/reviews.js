const mongoose = require('mongoose')

const Review = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,

    movie: {
        type: String,
        required: true
    },

    score: {
        type: Number,
        required: true
    },

    reseñaTexto: {
        type: String,
        required: false
    }
})


module.exports = mongoose.model('Review' , Review)
