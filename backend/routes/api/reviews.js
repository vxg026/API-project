// backend/routes/api/users.js
const express = require('express')
const bcrypt = require('bcryptjs');


const { setTokenCookie, requireAuth } = require('../../utils/auth');
const { User, Spot, SpotImage, Review, ReviewImage} = require('../../db/models');

const { check } = require('express-validator');
const { handleValidationErrors } = require('../../utils/validation');

const router = express.Router();

const validateCreateReview = [
    check('review')
    .exists({ checkFalsy: true })
    .withMessage('Review is required'),
    check('stars')
    .exists({ checkFalsy: true })
    // .isNumeric({checkFalsy: true})
    .isInt({min: 1, max: 5})
    .withMessage('Stars must be an integer from 1 to 5'),
    handleValidationErrors
  ]

router.get( '/current', requireAuth, async (req, res)=>{
    const userId = req.user.id;

    const allReviews = await Review.findAll({
        where: {
            userId: userId
        },
        include:[{
            model: User,
            attributes:["id","firstName", "lastName"]
        },
        {
            model: Spot,

            attributes:[
                "id",
                "ownerId",
                "address",
                "city",
                "state",
                "country",
                "lat",
                "lng",
                "name",
                "price"
            ], include: {
            model: SpotImage,
            }
        },
        {
            model: ReviewImage,
            attributes: ["id", "url"]
        }
    ]
})

let list = [];

allReviews.forEach(review=>{
    list.push(review.toJSON())
})

    list.forEach(review =>{
      review.Spot.SpotImages.forEach(web=>{
            if(web.preview===true){
                review.Spot.previewImage = web.url
                console.log(review.Spot.previewImage )
            }
        })
    })
list.forEach(review=> delete review.Spot.SpotImages)

    return res.status(200).json({Reviews:list})
}
)

router.post('/:reviewId/images', async (req, res)=>{
    const {url} = req.body
    const reviewId = req.params.reviewId

    const review = await Review.findByPk(reviewId)
    //look for a review that the user create
    const userReview = await Review.findOne({
        where:{
            id: req.params.reviewId,
            userId: req.user.id
        }
    })
    const images = await ReviewImage.findAll({
        where: {
            reviewId
        },
        attributes:{
            exclude: ["createdAt", "updatedAt"]
        }
    })
    // search for all the current review images, cant exceed 10.
    if(!review){
        res.status(404).json({ "message": "Review couldn't be found"})
        // return res 404 error
    }
    if(!userReview ){
        return res.status(403).json({
            message:"Forbidden"
        })
    }
    console.log(images.length)
    if(images.length>=10){
        return res.status(403).json({
            "message": "Maximum number of images for this resource was reached"
        })
        //error max images
    }

    const newImage = await ReviewImage.create({
    //    id: newImage.id,
       url,
        reviewId


    })
    return res.status(201).json(
       { id: newImage.id,
        url: newImage.url}
    )
})

router.put('/:reviewId', requireAuth, validateCreateReview,  async (req, res)=>{
    //make sure we have authorization and authentication
    //make sure we select the correct review that we want to edit
    const reviewId = req.params.reviewId
    const updateReview = await Review.findByPk(reviewId)

  if(!updateReview){
        return res.status(404).json({
            "message": "Review couldn't be found"
        })
    }

    if(req.user.id !== updateReview.userId){
        return res.status(403).json({
            "message": "Forbidden"
        })
    }


    const { review, stars } = req.body

    updateReview.review = review;
    updateReview.stars = stars;

    await updateReview.save()
    res.status(200).json(updateReview)
})

router.delete('/:reviewId', async (req, res)=>{
    const review = await Review.findByPk(req.params.reviewId)

    if(!review){
        return res.status(404).json({
            "message":"Review couldn't be found"
        })
    }
    if(review.userId !==req.user.id){
        return res.status(403).json({
            "message":"Forbidden"
        })
    }
    await review.destroy();
    return res.json({
        "message":"Successfully deleted"
    })
})

module.exports = router;
