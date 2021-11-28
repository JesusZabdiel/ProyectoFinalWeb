const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')

const app = express()
const routerMovies = require('./routes/movies')
const routerReviews = require('./routes/review')

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use('/Movies' , routerMovies)
app.use('/Reviews' , routerReviews)


mongoose.connect('mongodb://user7:root@54.173.202.133:27017/base7?authSource=admin')
.then(()=>{
    app.listen(8080,()=>console.log("Servidor en linea"))
})
.catch(err=>console.log(err))

app.get('*', (req, res)=>{
    res.sendStatus(404)
  });