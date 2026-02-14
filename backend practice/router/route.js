const express = require("express");

const router = express.Router();

const {signup ,login} = require('../controllers/Auth');
const {addProduct , getProduct} = require("../controllers/productController");

router.post('/signup', signup);
router.post('/login', login);
router.post('/addProduct', addProduct)
router.post('/getProduct', getProduct)


module.exports = router
