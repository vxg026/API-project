// backend/routes/api/index.js
const router = require('express').Router();
const sessionRouter = require('./session.js');
const usersRouter = require('./users.js');
// router.post('/test', function(req, res) {
//     res.json({ requestBody: req.body });
//   });

// GET /api/restore-user
const { restoreUser } = require('../../utils/auth.js');

router.use(restoreUser);

router.use('/session', sessionRouter);

router.use('/users', usersRouter);
//would look like router.get('/')
// router.use('/spots', spotsRouter)

router.post('/test', (req, res) => {
  res.json({ requestBody: req.body });
});



module.exports = router;
