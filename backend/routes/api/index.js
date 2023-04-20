// backend/routes/api/index.js
const router = require('express').Router();
const sessionRouter = require('./session.js');
const usersRouter = require('./users.js');
const spotsRouter = require('./spots.js');
const reviewsRouter = require('./reviews.js')
const bookingsRouter = require('./bookings.js')
const spotImagesRouter = require('./spot-images.js')
const reviewImagesRouter = require('./review-images.js')
// router.post('/test', function(req, res) {
//     res.json({ requestBody: req.body });
//   });

// GET /api/restore-user
const { restoreUser } = require('../../utils/auth.js');

router.use(restoreUser);

router.use('/review-images',reviewImagesRouter)

router.use('/spot-images', spotImagesRouter)

router.use('/bookings', bookingsRouter)

router.use( '/reviews', reviewsRouter)
router.use('/session', sessionRouter);

router.use('/users', usersRouter);
//would look like router.get('/')
router.use('/spots', spotsRouter);

router.post('/test', (req, res) => {
  res.json({ requestBody: req.body });
});



module.exports = router;
