const express = require('express');

const router = express.Router();

const { validateToken, validateSupervisor, validateEmployee } = require('../middleware/index');

const { signUp, signIn }  = require('../controllers/authController');

const { getUser } =  require('../controllers/userController');

const { addProductCategory, getAllCategory } =  require('../controllers/productCategoryController');

const { createProduct, allProducts } = require('../controllers/productController');

const { broadcastMail } =  require('../controllers/broadcastMailController');

router.post('/', signUp);

router.get('/', signIn);

router.post('/product/category', validateToken, validateSupervisor, addProductCategory);

router.get('/categories', validateToken, validateSupervisor, getAllCategory);

router.get('/user', validateToken, validateSupervisor, getUser);

router.post('/product/create', validateToken, validateSupervisor, createProduct);

router.get('/products', validateToken, validateSupervisor, allProducts);

router.get('/employee/products', validateToken, validateEmployee, allProducts);

router.post('/broadcastmail', validateToken, validateSupervisor, broadcastMail);




module.exports = router;