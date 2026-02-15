const jwt = require("jsonwebtoken");
require("dotenv").config();

export const authMiddleware =async()=>{
  const token = res.cookies.token;
  console.log(token);
}
