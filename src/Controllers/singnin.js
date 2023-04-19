const jwt = require("jsonwebtoken");
const user = require("../models/user")
const bcrypt = require("bcrypt");
const { SECRET_KEY } = process.env;



const verifysingnin = async (data)=>{
try{}catch(err){res.status(500).send(err.message);}
}


module.exports={verifysingnin};