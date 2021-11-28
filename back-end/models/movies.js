const mongoose = require('mongoose')


const Movie = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,

    titulo: {
        type: String,
        required : true
    },

    avgScore: {
        type: Number,
        required: true
    },

    descripcion:{
        type: String,
        required: false
    }
})

module.exports = mongoose.model('Movie', Movie)