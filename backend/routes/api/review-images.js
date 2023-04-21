// backend/routes/api/users.js
const express = require('express')
const bcrypt = require('bcryptjs');


const { setTokenCookie, requireAuth } = require('../../utils/auth');
const { Booking, User, Spot, SpotImage, Review, ReviewImage} = require('../../db/models');

const { check } = require('express-validator');
const { handleValidationErrors } = require('../../utils/validation');

const router = express.Router();

router.delete('/:imageId', requireAuth, async (req, res)=>{
    const imageReview = await ReviewImage.findByPk(req.params.imageId)



    if(!imageReview){
        return res.status(404).json(
            {
                "message": "Review Image couldn't be found"
              }
        )
    }
const review = await Review.findByPk(imageReview.reviewId)
console.log(review)
    const user = req.user.id
console.log(review.userId)
    if(req.user.id !== review.userId){
        return res.status(403).json({
            "message": "Forbidden"
        })
    }
    // if(req.user.id !== review.userId){
    //     return res.status(403).json({
    //         "message": "Forbidden"
    //     })
    // }

    await imageReview.destroy();
    return res.status(200).json({
        "message": "Successfully deleted"
    })
})

module.exports = router;
