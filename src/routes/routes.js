const express = require('express');

const router = express.Router();

const { validateToken, validateSupervisor } = require('../middleware/index');

const { signUp, signIn }  = require('../controllers/authController');

const { addProductCategory } =  require('../controllers/productCategoryController');

router.post('/', signUp);

router.get('/', signIn);

router.post('/product/category', validateToken, validateSupervisor, addProductCategory);

router.post('/product', )




module.exports = router;