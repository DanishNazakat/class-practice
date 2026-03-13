const express = require('express');
const cookieParser = require("cookie-parser")
// const authMiddleware = require("./middleware/verifyToken")
require("dotenv").config();
const dbConnection = require('./db/dbconnection')
const app = express();
const router = require('./router/route')
app.use(cookieParser());
app.use(express.json());
app.use('/
    console.log(`server is running on PORT ${process.env.PORT}`);
})

