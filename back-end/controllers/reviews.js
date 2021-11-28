const mongoose = require('mongoose')
const review = require('../models/reviews')

exports.getReviews = async (req, res) =>{

    try{
        const reviewsResultado = await review.find()
        console.log(reviewsResultado)
        res.json(reviewsResultado)

    }catch{

        res.send({status: "Request error"})

    }

}

exports.postReview = async (req, res) =>{

    try{

        const newReview = await new review(req.body)
        newReview._id = await new mongoose.Types.ObjectId
        await newReview.save()
        console.log(newReview)
        res.send("New review added")

    }catch{
        res.send("Error while adding a review")

    }

}

exports.postDeleteReview = async (req, res) =>{

    try{
        await review.findByIdAndRemove(req.body)
        res.send("Review deleted successfully")

    }catch{
        res.send("Error while deleting a review")
    }

}

exports.postEditReview = async (req, res) =>{

    try{
        await review.findByIdAndUpdate(req.body.filtro, req.body.cambio)
        console.log("success")
        res.send("Review Updated succesfully")

    }catch{
        res.send("Error while editing a review")

    }

}