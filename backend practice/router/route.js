const express = require("express");

const router = express.Router();
const authMiddleware = require("../middleware/verifyToken")
const {signup ,login} = require('../controllers/Auth');
const {addProduct , getProduct} = require("../controllers/productController");
const verifyToken = require("../middleware/verifyToken");


router.post('/signup', signup);
router.post('/login', login);
router.post('/addProduct', addProduct)
router.post('/getProduct', getProduct)

router.get("/dashboard",authMiddleware, (req, res) => {
  res.json({
    message: `Welcome ${req.user.id}, This is a protected dashboard route!`
  });
});



router.get("/publicDashboard", (req, res) => {
  res.json({
    message: `Welcome  This is a public dashboard route!`
  });
});
module.exports = router
