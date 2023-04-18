// backend/routes/api/users.js
const express = require('express')
const bcrypt = require('bcryptjs');


const { setTokenCookie, requireAuth } = require('../../utils/auth');
const { Spot, SpotImage } = require('../../db/models');

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

router.get( '/current', async (req, res)=>{
    const userId = req.user.id;

    const allSpots = await Spot.findAll({
        where: {
            ownerId:userId
        }
    });

router.get('/:spotId', async (req, res)=>{
    const spots = await Spot.findAll({
            where: {
                id: req.params.spotId
            },
            include:[
                {
                    model: SpotImage
                }
            ]
        })
        return res.json(spots)
    })



    console.log(req.params.id)
    return res.json(allSpots)
})



router.get( '/', async (req, res) => {
    const allSpots = await Spot.findAll();
    return res.json(allSpots)
    }
  );

  router.post('/:spotId/images', async (req, res)=>{
    const{ url, preview } = req.body
    const spotImage = await Spot.findByPk(req.params.spotId)
    if(!spotImage){
        return res.status(404).json({
            message: "Spot couldn't be found"
        })

    }
    const newSpotImage = SpotImage.build({
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


  router.post('/', validateCreatePost, async (req, res)=>{
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


//   router.put('/:spotId', async (req, res)=>{
//     const { address, city, state, country, lat, lng, name, description, price } = req.body


//   })
  module.exports = router;
