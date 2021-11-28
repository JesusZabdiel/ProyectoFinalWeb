const movieCtrl = require('../controllers/movies')

const router = require('express').Router()

router.get('/movies', movieCtrl.getMovies)
router.post('/addMovie', movieCtrl.postAddMovie)


module.exports = router