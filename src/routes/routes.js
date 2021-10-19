const express = require('express');

const router = express.Router();

const { signUp, signIn }  = require('../controllers/authController');

router.post('/', signUp);
router.get('/', signIn);


module.exports = router;