// routes.js

const express = require("express");
const router = express.Router();
const {mailSender }= require('../controllers/auth')

router.post('/sendMail' , mailSender);


module.exports = router;
