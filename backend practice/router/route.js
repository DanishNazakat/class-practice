const express = require("express");

const router = express.Router();

const {signup ,login} = require('../controllers/Auth');
const {addProduct , getProduct} = require("../controllers/productController");
const verifyToken = require("../middleware/verifyToken");


router.post('/signup', signup);
router.post('/login', login);
router.post('/addProduct', addProduct)
router.post('/getProduct', getProduct)

router.get("/dashboard", verifyToken, (req, res) => {
  res.json({
    message: `Welcome ${req.user.id}, This is a protected dashboard route!`
  });
});
module.exports = router
