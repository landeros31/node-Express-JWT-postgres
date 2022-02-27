const pool = require("../database/config");
const bcrypt =require("bcrypt")
const {Router}= require("express");
const router = Router()
  
const getUsers= async(req,res)=>{
    try {
        const response = await pool.query("Select * FROM users")
        console.log(response.rows)
        res.status(200).json(response.rows)    
    } catch (error) {
        console.log(error)
        
    }
    

}

const CreateUsers = async(req,res)=>{
    const {name, email}=req.body
 
try {
    const hashedPassword = await bcrypt.hash(req.body.password,10)
    const newUser = await pool.query("INSERT INTO users (user_name, user_email, user_password)VALUES ($1, $2, $3) ",[name, email, hashedPassword] )
    res.status(200).json({message : "usuario agregado"})
} catch (error) {
    console.log(error)
    res.status(500).json({
        message: "error",
        body: error
    })
}

}

module.exports= {
    getUsers,
    CreateUsers
} 
