const express = require('express');

const router = express.Router();

const { validateToken, validateSupervisor } = require('../middleware/index');

const { signUp, signIn }  = require('../controllers/authController');

const { getUser } =  require('../controllers/userController');

const { addProductCategory, getAllCategory } =  require('../controllers/productCategoryController');

router.post('/', signUp);

router.get('/', signIn);

router.post('/product/category', validateToken, validateSupervisor, addProductCategory);

router.get('/products', validateToken, validateSupervisor, getAllCategory);

router.get('/user', validateToken, validateSupervisor, getUser)

router.post('/product', )




module.exports = router;