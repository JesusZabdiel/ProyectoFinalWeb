const reviewCtrl = require('../controllers/reviews') 

const router = require('express').Router()

router.get('/reviews' , reviewCtrl.getReviews)
router.post('/addReview' , reviewCtrl.postReview)
router.post('/deleteReview' , reviewCtrl.postDeleteReview)
router.post('/editReview' , reviewCtrl.postEditReview)


module.exports = router