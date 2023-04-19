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
            ]
        },
        {
            model: ReviewImage,
            attributes: ["id", "url"]
        }
    ]
})
// const tweetOwner = await allReviews.getUser();
    res.json({Reviews:allReviews})
}
)

module.exports = router;
