// backend/routes/api/users.js
const express = require('express')
const bcrypt = require('bcryptjs');


const { setTokenCookie, requireAuth } = require('../../utils/auth');
const { Booking, User, Spot, SpotImage, Review, ReviewImage} = require('../../db/models');

const { check } = require('express-validator');
const { handleValidationErrors } = require('../../utils/validation');

const router = express.Router();

router.delete('/:imageId', requireAuth, async (req, res)=>{
    const imageSpot = await SpotImage.findByPk(req.params.imageId)

    // const spotId = imageSpot.spotId

    // const spot = await Spot.findByPk(imageSpot.spotId)
    const user = req.user.id;
    console.log(user)



    if(!imageSpot){
        return res.status(404).json(
            {
                "message": "Spot Image couldn't be found"
              }
        )
    }
    const spot = await Spot.findByPk(imageSpot.spotId)
    if(imageSpot.spotId !== spot.id){
        return res.status(404).json({
            "message": "Spot Image couldn't be found"
        })
    }


if(spot.ownerId!== user){
        // console.log(spot.ownerId, user)
        return res.status(403).json({"message":"Forbidden"})
    }
    // if()
    await imageSpot.destroy();

    return res.status(200).json({ "message": "Successfully deleted"})
})


module.exports = router;
