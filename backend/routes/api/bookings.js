// backend/routes/api/users.js
const express = require('express')
const bcrypt = require('bcryptjs');


const { setTokenCookie, requireAuth } = require('../../utils/auth');
const { Booking, User, Spot, SpotImage, Review, ReviewImage} = require('../../db/models');

const { check } = require('express-validator');
const { handleValidationErrors } = require('../../utils/validation');

const router = express.Router();


router.get('/current', requireAuth, async (req,res)=>{
    const userId = req.user.id;

    const bookings = await Booking.findAll({
        where:{
            userId: userId
        },
        include:[{
            model:Spot,
            include:{
                model:SpotImage
            },
                attributes:{
                    exclude: ["description", "createdAt", "updateAt"]
                }
        },
        ],
    })

    const list = [];

    bookings.forEach(booking=>{
        list.push(booking.toJSON())
    })

    list.forEach(booking=>{
        booking.Spot.SpotImages.forEach(web=>{
            if(web.preview === true){
                booking.Spot.previewImage = web.url
            }
        })

    })
    list.forEach(booking => delete booking.Spot.SpotImages)
    // console.log(bookings)
    res.status(200).json({Bookings: list})
})


router.put('/:bookingId', requireAuth, async (req, res)=>{

    const {startDate, endDate} =  req.body

    const booking = await Booking.findByPk(req.params.bookingId)

    const allBookings = await Booking.findAll({
        where:{
            id : req.params.bookingId
        }

    })
    const list = [];

    allBookings.forEach(booking =>{
        list.push(booking.toJSON())
    })

    const newStartDate = new Date(startDate)
    // console.log(date)
    const newEndDate = new Date(endDate)

//   console.log(allBookings)
   if(!booking){
        return res.status(404).json({
            "message": "Booking couldn't be found"
        })
    }
    let hasConflict = false;

    list.forEach(booking =>{

        const startDateTaken = new Date(booking.startDate)
        const endDateTaken = new Date(booking.endDate)


        console.log(startDateTaken.getTime())
        if(newStartDate.getTime()>newEndDate.getTime()){
            hasConflict = true;

            return res.status(400).json(
                {
                    "message": "Bad Request", // (or "Validation error" if generated by Sequelize),
                    "errors": {
                      "endDate": "endDate cannot come before startDate"
                    }
                  }
            )
        }

        const now = new Date();

        if(newStartDate.getTime() <now.getTime() || newEndDate.getTime()<now.getTime){
            hasConflict=true;
            return res.status(403).json({
                "message": "Past bookings can't be modified"
              })
        }
        if((newStartDate.getTime() >= startDateTaken.getTime() && newStartDate.getTime()<endDateTaken.getTime())|| (newEndDate.getTime() > startDateTaken.getTime() && newEndDate.getTime()<=endDateTaken.getTime())||(newStartDate.getTime()<=startDateTaken.getTime() && newEndDate.getTime()>=endDateTaken.getTime())){

            hasConflict=true;

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

    if(hasConflict){
        return;
    }
    if(req.user.id !== booking.userId){

        return res.status(403).json(
            {
                "message": "Booking must belong to the current user"
            }
        )

    }




    booking.startDate = startDate
    booking.endDate = endDate

    await booking.save()

    return res.status(200).json(booking
        // {
        // id: booking.userId,
        // spotId:booking.spotId,
        // userId :booking.userId,
        // startDate :booking.startDate,
        // endDate: booking.endDate,
        // createdAt: booking.createdAt,
        // updatedAt: booking.updatedAt
    // }
    )

})

router.delete('/:bookingId', async (req, res)=>{
    const booking = await Booking.findByPk(req.params.bookingId)
 const spot = await Spot.findOne({
    where:{
        ownerId : req.user.id
    }
 })
    if(!booking){
        res.status(404).json(
            {
                "message": "Booking couldn't be found"
              }
        )
    }
console.log(spot)
    if(req.user.id !==booking.userId
        &&
        req.user.id !== spot.ownerId
        ){
        // console.log(booking.spot.ownerId)
        return res.status(404).json({
            "message": "Booking must belong to the current user or the Spot must belong to the current user"
        })
    }

    const currentDate = new Date().getTime();
    const newStartDate = new Date(booking.startDate).getTime()

    if(newStartDate <= currentDate){
        return res.status(403).json({
            "message":"Bookings that ahve been started can't be deleted"
        })
    }
    // await booking.destroy()
    res.json(
        {
            "message": "Successfully deleted"
        }
    )
})

module.exports = router;
