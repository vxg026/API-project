// backend/routes/api/users.js
const express = require('express')
const bcrypt = require('bcryptjs');
const { Op } = require('sequelize');

const { setTokenCookie, requireAuth } = require('../../utils/auth');
const { User, Spot, SpotImage, Review, ReviewImage, Booking} = require('../../db/models');

const { check } = require('express-validator');
const { handleValidationErrors } = require('../../utils/validation');

const router = express.Router();
// const validatorReview =[
//     check("review")
//         .exists({ checkFalsy: true })
//         .withMessage('Review text is required'),
//     check("stars")
//         .exists({ checkFalsy: true })
//         .isInt({ min:1, max:5})
//         .withMessage('Review text is required'),
//     handleValidationErrors
// ]
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
        .isDecimal()
        .withMessage('Longitude is not valid'),
    check('name')
        .exists({ checkFalsy: true })
        .isLength({ max: 49 })
        .withMessage('Name must be less than 50 characters'),
    check('description')
        .exists({ checkFalsy: true })
        .withMessage('Description is required'),
    check('price')
        .exists({ checkFalsy: true })
        .isDecimal()
        .withMessage('Price per day is required'),

    handleValidationErrors
  ];
  const validateQuery = [
    check("page")
        .optional()
        .exists({ checkFalsy: true })

        .isInt({ min: 1 })

        .withMessage('Page must be greater than or equal to 1'),
    check("size")
    .optional()
        .exists({ checkFalsy: true })
        .isInt({ min: 1 })
        .withMessage('Size must be greater than or equal to 1'),


    check("maxLat")
        .optional()
        .isNumeric()
        .withMessage('Maximum latitude is invalid'),


    check("minLat")
        .optional()
        .isDecimal()
        .withMessage('Minimum latitude is invalid'),

    check("minLng")
        .optional()
        .isDecimal()
        .withMessage('Maximum latitude is invalid'),
    check("maxLng")
        .optional()
        .isDecimal()
        .withMessage('Maximum latitude is invalid'),
    check("minPrice")
        .optional()
        .isFloat({min: 0})
        .withMessage('Minimum price must be greater than or equal to 0'),
     check("minprice")
        .optional()
        .isFloat({min: 0})
        .withMessage('Minimum price must be greater than or equal to 0'),

    handleValidationErrors
];

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




//get all spots of current user
router.get('/current', requireAuth, async (req, res, next) => {
    const spots = await Spot.findAll({
        where: {
            ownerId: req.user.id // instance of current user logged in
        },
        include: [{
            model: SpotImage
        },
        {
            model: Review
        }
        ]
    })

    const list = [];
    spots.forEach(spot => {
        let total = 0
        const spotJSON = spot.toJSON()

        spotJSON.Reviews.forEach(ele => {
            total += ele.stars
        })
        const avg = total / spotJSON.Reviews.length
        spotJSON.avgRating = avg

        spotJSON.SpotImages.forEach(ele => {
            if (ele.preview === true) {
                spotJSON.previewImage = ele.url
            } else {
                spotJSON.previewImage = 'No preview available'
            }
        })

        delete spotJSON.Reviews // deletes Reviews included
        delete spotJSON.SpotImages // deletes SpotImages included
        list.push(spotJSON)
    })

    return res.json({ Spots: list })
})



// router.get( '/current', requireAuth, async (req, res)=>{

//     const userId = req.user.id;


//     const allSpots = await Spot.findAll({
//         where: {
//             ownerId:userId
//         },
//         include:[
//             {model: SpotImage},
//             {model: Review}
//         ]
//     });

//     let spotsList = [];
//     allSpots.forEach(spot=>{
//         spotsList.push(spot.toJSON())
//     })
// // for(let i = 0; i< allSpots.length; i++){
// //     spotsList.push(allSpots[i].toJSON())
// // }
// // console.log(spotsList)
// for(let i = 0; i< spotsList.length; i++){
//     let star = 0;
//     let counter = 0;
//     // console.log(spotsList[0])
//     let spot = spotsList[i]
//     // console.log(spot)
//     //******************* */
//     // for(let j = 0; j<spot.Reviews.length; j++){
//     //     // console.log(spot.Reviews)
//     //     let review = spot.Reviews[j]
//     //     star+=review.stars
//     //     counter++
//     //     delete spot.Reviews
//     // }
//     // spot.avgRating= star/counter
//     // console.log(spot)
//     //******************** */
// //     for(let j = 0; j<spot.SpotImages.length; j++){
// //         console.log(spot.SpotImages)
// //         let image = spot.SpotImages[j];
// //         if(image.preview === true){
// //             spot.previewImage = image.url
// //         }
// //         delete spot.SpotImages
// //     }
// // }
// //****************** */
//     spotsList.forEach(spot=>{
//         let star=0;
//   let counter=0;
//     spot.Reviews.forEach(review=>{
//        star += review.stars
//        counter++
//     })


//         spot.SpotImages.forEach(image =>{
//             if(image.preview === true){
//                 spot.previewImage = image.url
//             }
//         })
//     })
//     spotsList.forEach(spot=>delete spot.Reviews)
//     spotsList.forEach(spot => delete spot.SpotImages)

//     // await spotsList.spot.spotImages
//     return res.json({Spots: spotsList})
// })

//get all bookings by spot
router.get('/:spotId/bookings', requireAuth, async (req, res)=>{
    const spot = await Spot.findByPk(req.params.spotId)

    if(!spot){
        return res.status(404).json({
            "message": "Spot couldn't be found"
        })
    }

         const regularBookings = await Booking.findAll({
             where: {
                  spotId: req.params.spotId
                }, attributes:{
                    exclude:
            ["createdAt", "updatedAt", "spotId", "userId"]
            }
             })


        const bookingsForUser = await Booking.findAll({
            where: {
           spotId: req.params.spotId
            }, include:{
                model: User,
                attributes:["id", "firstName", "lastName"]
            }
            })


  if(req.user.id !== spot.ownerId){
    res.json({Bookings: regularBookings})
  }
  if(req.user.id === spot.ownerId){
    res.json({Bookings: bookingsForUser})
  }
    // }


})

//get all reviews by spot

router.get('/:spotId/reviews', async (req, res)=>{
    const spot = await Spot.findByPk(req.params.spotId)
    if(!spot)
    return res.status(404).json({
        "message":"Spot couldn't be found"
    })
    const reviews = await Review.findAll({
        where:{
            spotId: req.params.spotId
        },
        include:[{
            model: User,
            attributes: ["id", "firstName", "lastName"]
        },
        {
            model:ReviewImage,

                attributes: ["id", "url"]

        }
    ]
        // include:[{
        //     model: User
        // }]
    })

    return res.status(200).json({Reviews: reviews})
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
                    model: Review
                },
                {
                    model: User,
                    as: "Owner"
                }
            ],

        })

        let spotsList = [];
spots.forEach(spot=>{
    spotsList.push(spot.toJSON())
})

spotsList.forEach(spot=>{
    let stars = 0;
    let count = 0;
    spot.Reviews.forEach(review=>{
        stars += review.stars
        count++
    })
    spot.numReviews = count
    spot.avgStarRating= stars/count
})
// spots[0].Reviews.forEach(review=>{
//     spotsList.push(review.toJSON())
// })
//  let star=0;
//       let counter=0;
// spotsList.forEach(review=>{

//         // spot.Reviews.forEach(review=>{
//            star += review.stars
//            counter++
// })
// spot.numReviews = counter
// spot.avgStarRating= star/counter
// console.log(spots[0])
// spotsList.forEach(spot=>{
//   let star=0;
//   let counter=0;
//     spot.Reviews.forEach(review=>{
//        star += review.stars
//        counter++
//     })


// })
// spotsList.forEach(spot=>delete spot.SpotImages)
// spotsList.forEach(spot=>delete spot.Reviews)
console.log(spotsList)
spotsList.forEach(spot=> delete spot.Reviews)
const [newSpotsList] = spotsList;
        return res.json(newSpotsList)
    })


///get all spots

router.get( '/', validateQuery, async (req, res) => {

    let { page, size, minLat, maxLat, minLng, maxLng, minPrice, maxPrice } = req.query;

    const pagination= {}

    if(isNaN(page) || !parseInt(page)>0) page = 1;
    if(isNaN(size) || !parseInt(size)>0) size = 20;
    if(parseInt(page)>10) page = 10;
    if(parseInt(size)> 20) size = 20

    pagination.limit = size;
    pagination.offset = size * (page-1)

    page = parseInt(page),
    size = parseInt(size)

    const where = {};


if(minLat){
    where.lat = {
        [Op.gte]: minLat
    };
}
if(maxLat){
    where.lat = {
        [Op.lte]: maxLat
    };//greater than
}
if(minLat && maxLat){
    where.lat = {
        [Op.between]: [
            minLat, maxLat
        ]
    };//greater than
}
if(minLng){
    where.lng = {
        [Op.gte]: minLng
    }//greater than
}
if(maxLng){
    where.lng = {
        [Op.lte]: maxLng
    }//greater than
}
if(minLng && maxLng){
    where.lng = {
        [Op.lte]: maxLng
    }
}
if(minPrice){
    where.price = {
       [Op.gte]:  minPrice
}
}
if(maxPrice){
    where.price = {
       [Op.lte]:  maxPrice
}
}
if(minPrice && maxPrice){
    where.price = {
        [Op.between]:
        [minPrice, maxPrice]
    }
}
    const spots = await Spot.findAll({
       include: [
       {
        model:SpotImage},
        {model :Review}
    ],
    where,
    ...pagination
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
    return res.json({"Spots": spotsList, page, size})
    }
)
//post images based on spotId
  router.post('/:spotId/images', requireAuth, async (req, res)=>{
    const{ url, preview } = req.body


    const spotImage = await Spot.findByPk(req.params.spotId)


    if(!spotImage){
        return res.status(404).json({
            "message": "Spot couldn't be found"
        })

    }
    if(req.user.id !== spotImage.ownerId){
        return res.status(403).json({
            "message":"Forbidden"
        })
    }
    const newSpotImage = SpotImage.build({
        spotId: spotImage.id,
        url,
        preview,
    })
    await newSpotImage.save()
    // await spotImage.addSpotImage(newSpotImage)
    return res.json({
        id: newSpotImage.id,
        url: newSpotImage.url,
        preview: newSpotImage.preview
    })
  })

  router.post('/:spotId/reviews', requireAuth, validateCreateReview,  async (req, res)=>{
    const userId = req.user.id
    const spot = await Spot.findByPk(req.params.spotId)
    const {review, stars} = req.body;

    if(!spot){
        return res.status(404).json({"message": "Spot couldn't be found"})
    }


    const reviewForSpot = await Review.findOne({
        where: {
            spotId: req.params.spotId,
            userId:req.user.id
        }
    })
    if(reviewForSpot){
        return res.status(500).json({message: "User already has a review for this spot"})
    }


    const newReview = await Review.create({
        userId,
        spotId: spot.id,
        review,
        stars

    })
    res.status(201).json(newReview)
  })
//create booking based on spot id
router.post('/:spotId/bookings', requireAuth, async (req, res)=>{
    const spot = await Spot.findByPk(req.params.spotId)
    const {startDate, endDate} =  req.body

    if(!spot){
        return res.status(404).json({
            message: "Spot couldn't be found"
        })
    }
    if(req.user.id === spot.ownerId){
        return res.status(403).json({
            message:"Forbidden"
        })
    }

    const allBookings = await Booking.findAll({
        where:{
            spotId: req.params.spotId
        }
    })

    const list = [];

    allBookings.forEach(booking =>{
        list.push(booking.toJSON())
    })

    const newStartDate = new Date(startDate)
    // console.log(date)
    const newEndDate = new Date(endDate)

    let hasConflict = false;

    list.forEach(booking =>{


        const startDateTaken = new Date(booking.startDate)
        const endDateTaken = new Date(booking.endDate)

        console.log(startDateTaken.getTime())
        if(newStartDate.getTime()>=newEndDate.getTime()){
            if(hasConflict) return;
            hasConflict = true;

            return res.status(400).json(
                {
                    "message": "Bad Request", // (or "Validation error" if generated by Sequelize),
                    "errors": {
                      "endDate": "endDate cannot be on or before startDate"
                    }
                  }
            )
        }
        if((newStartDate.getTime() >= startDateTaken.getTime() && newStartDate.getTime()<endDateTaken.getTime())||
        (newEndDate.getTime() > startDateTaken.getTime() && newEndDate.getTime()<=endDateTaken.getTime())||
        (newStartDate.getTime()<=startDateTaken.getTime() && newEndDate.getTime()>=endDateTaken.getTime())){
            if(hasConflict) return;
            hasConflict = true;

        // if(newStartDate.getTime() === startDateTaken.getTime() || newEndDate.getTime() === endDateTaken.getTime()){
           return res.status(403).json({

                "message": "Sorry, this spot is already booked for the specified dates",
                "errors": {
                  "startDate": "Start date conflicts with an existing booking",
                  "endDate": "End date conflicts with an existing booking"
                }

           })
        }

    })
if(hasConflict) return;

    const newBooking = await Booking.create({
        spotId: parseInt(req.params.spotId),
        userId: req.user.id,
        startDate,
        endDate
    })

    return res.status(201).json(newBooking)
})





  router.post('/', requireAuth, validateCreatePost, async (req, res)=>{
    const {address, city, state, country, lat, lng, name, description, price} = req.body

    const newSpot = await Spot.create({
        ownerId: req.user.id,
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

     if(!updateSpot){
        return res.status(404).json({
            "message": "Spot couldn't be found"
        })
    }

    if(req.user.id !== updateSpot.ownerId){
        return res.status(403).json({
            "message":"Forbidden"
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
            message:"Forbidden"
        })
    }

    await spot.destroy();
    return res.json({message: "Successfully deleted"})
  })

  module.exports = router;
