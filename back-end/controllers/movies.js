const mongoose = require('mongoose')
const movie = require('../models/movies')

exports.getMovies = async (req, res)=>{
    try{

        const moviesResultado = await movie.find()
        console.log(moviesResultado)
        res.json(moviesResultado)

    }catch{

        res.send({status: "Request error"})

    }
}

exports.postAddMovie =  async (req, res)=>{
    
    try{
        const newMovie = await new movie(req.body)
        newMovie._id = await new mongoose.Types.ObjectId
        await newMovie.save()
        res.send({status: "Movie added correctly"})
        console.log(newMovie)
        
    }catch(err){
        console.log(err)
        res.send({status: "Error while adding a movie"} )
    }    

}