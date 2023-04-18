// backend/routes/api/users.js
const express = require('express')
const bcrypt = require('bcryptjs');


const { setTokenCookie, requireAuth } = require('../../utils/auth');
const { Spot } = require('../../db/models');

const { check } = require('express-validator');
const { handleValidationErrors } = require('../../utils/validation');

const router = express.Router();


router.get( '/', async (req, res) => {
    console.log("888**************")
    const allSpots = await Spot.findAll();
    return res.json(allSpots)
//
//
//         return res.json({
//           user: safeUser
//         });
//       } else return res.json({ user: null });
    }
  );

  module.exports = router;
