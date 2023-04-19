// backend/routes/api/users.js
const express = require('express')
const bcrypt = require('bcryptjs');


const { setTokenCookie, requireAuth } = require('../../utils/auth');
const { User, Spot, SpotImage, Review, ReviewImage} = require('../../db/models');

const { check } = require('express-validator');
const { handleValidationErrors } = require('../../utils/validation');

const router = express.Router();


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
            // Spot.forEach(spot=> delete )
        })
    })
list.forEach(review=> delete review.Spot.SpotImages)
// const tweetOwner = await allReviews.getUser();
    // res.json({Reviews:allReviews})
    res.json({Reviews:list})
}
)

module.exports = router;
