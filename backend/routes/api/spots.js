// backend/routes/api/users.js
const express = require('express')
const bcrypt = require('bcryptjs');


const { setTokenCookie, requireAuth } = require('../../utils/auth');
const { User, Spot, SpotImage, Review} = require('../../db/models');

const { check } = require('express-validator');
const { handleValidationErrors } = require('../../utils/validation');

const router = express.Router();

const validateCreatePost = [
    check('address')
    .exists({ checkFalsy: true })
    .withMessage('Street address is required'),
    check('city')
      .exists({ checkFalsy: true })
      .withMessage('City is required'),
    check('state')
      .exists({ checkFalsy: true })
      .withMessage('State is required'),
    check('country')
        .exists({ checkFalsy: true })
        .withMessage('Country is required'),
      check('lat')
      .exists({ checkFalsy: true })
      .isDecimal()
        .withMessage('Latitude is not valid'),
    check('lng')
        .exists({ checkFalsy: true })
        .withMessage('Longitude is not valid'),
    check('name')
        .exists({ checkFalsy: true })
        .isLength({ max: 50 })
        .withMessage('Name must be less than 50 characters'),
    check('description')
        .exists({ checkFalsy: true })
        .withMessage('Description is required'),
    check('price')
        .exists({ checkFalsy: true })
        .withMessage('Price per day is required'),

    handleValidationErrors
  ];

router.get( '/current', requireAuth, async (req, res)=>{

    const userId = req.user.id;

    const allSpots = await Spot.findAll({
        where: {
            ownerId:userId
        }
    });
    return res.json({"Spots": allSpots})
})
router.get('/:spotId/reviews', async (req, res)=>{

})
router.get('/:spotId', async (req, res)=>{
        const spot = await Spot.findByPk(req.params.spotId)
        if(!spot)
        return res.status(404).json({
            "message":"Spot couldn't be found"
        })
    const spots = await Spot.findAll({
            where: {
                id: req.params.spotId
            },
            include:[
                {
                    model: SpotImage
                },
                {
                    model: User,
                    as: "Owner"
                }
            ],

        })
        return res.json(spots)
    })




router.get( '/', async (req, res) => {

    // const reviews = await Review.findAll({

    // });
    // const sumReviews = reviews.reduce((sum, review)=>(
    //     sum + review.stars
    // ), 0);
    // const avgReview =sumReviews/reviews.length;
    //  return res.json(avgReview)


    const spots = await Spot.findAll({
       include: [
       {
        model:SpotImage},
        {model :Review}
    ]
})
// spots.toJson()
let spotsList = [];



spots.forEach(spot=>{
    spotsList.push(spot.toJSON())
})

spotsList.forEach(spot=>{
  let star=0;
  let counter=0;
    spot.Reviews.forEach(review=>{
       star += review.stars
       counter++
    })
    spot.avgRating= star/counter

    spot.SpotImages.forEach(image=>{
        // console.log(image.preview)
        if(image.preview === true){
            spot.previewImage = image.url
            console.log(spot.previewImage)
        }
    })
})
spotsList.forEach(spot=>delete spot.SpotImages)
spotsList.forEach(spot=>delete spot.Reviews)

console.log(spotsList)
    return res.json({Spots: spotsList})
    }
)

  router.post('/:spotId/images', requireAuth, async (req, res)=>{
    const{ url, preview } = req.body


    const spotImage = await Spot.findByPk(req.params.spotId)


    if(!spotImage){
        return res.status(404).json({
            message: "Spot couldn't be found"
        })

    }
    if(req.user.id !== spotImage.ownerId){
        return res.status(403).json({
            message:"Spot must belong to the current user"
        })
    }
    const newSpotImage = SpotImage.build({
        spotId: spotImage.id,
        url,
        preview,
    })
    await newSpotImage.save()
    return res.json({
        id: newSpotImage.id,
        url: newSpotImage.url,
        preview: newSpotImage.preview
    })
  })


  router.post('/', requireAuth, validateCreatePost, async (req, res)=>{
    const {address, city, state, country, lat, lng, name, description, price} = req.body

    const newSpot = await Spot.create({
        address,
        city,
        state,
        country,
        lat,
        lng,
        name,
        description,
        price
      });

      res.json(newSpot);
  })
//   router.post()


  router.put('/:spotId', requireAuth, validateCreatePost, async (req, res)=>{
    const spotId = req.params.spotId;

    const updateSpot = await Spot.findByPk(spotId);

    if(req.user.id !== updateSpot.ownerId){
        return res.status(403).json({
            message:"Spot must belong to the current user"
        })
    }

    if(!updateSpot){
        return res.status(404).json({
            message: "Spot couldnt be found"
        })
    }

    const { address, city, state, country, lat, lng, name, description, price } = req.body
    if(updateSpot){
       updateSpot.address = address;
    };
    if(updateSpot){
       updateSpot.city = city;
    }
    if(updateSpot){
       updateSpot.state = state;
    }
    if(updateSpot){
       updateSpot.country = country;
    }
    if(updateSpot){
      updateSpot.lat = lat;
    }
    if(updateSpot){
      updateSpot.lng = lng;
    }
    if(updateSpot){
      updateSpot.name = name;
    }
    if(updateSpot){
      updateSpot.description = description;
    }
    if(updateSpot){
      updateSpot.price = price;
    }
    await updateSpot.save()
    res.status(200).json(updateSpot)

  })


  router.delete("/:spotId", requireAuth, async (req, res)=>{
    const spot = await Spot.findByPk(req.params.spotId);

     if(!spot){
        return res.status(404).json({
            message: "Spot couldn't be found"
        })

    }

    if(req.user.id !== spot.ownerId){
        return res.status(403).json({
            message:"Spot must belong to the current user"
        })
    }

    await spot.destroy();
    return res.json({message: "Successfully deleted"})
  })

  module.exports = router;
