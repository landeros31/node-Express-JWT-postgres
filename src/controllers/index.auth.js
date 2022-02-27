const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
const pool = require("../database/config")
const { jwtToken } = require("../helpers/jwt-helpers")

const login= async(req,res)=>{
    const {email,password} = req.body
    try {
        const user = await pool.query("SELECT * FROM users WHERE user_email = $1 ", [email])
         if(user.rows.length === 0) return res.status(401).json({error: "email is incorrect"})
         const validPassword = await bcrypt.compare(password,user.rows[0].user_password) 
         if(!validPassword) return res.status(401).json({error: "password is incorrect"})
         
         ///JWT
         const tokens = jwtToken(user.rows[0])
         res.cookie('refresh_token', tokens.refreshToken,{httpOnly: true})
         res.json(tokens)

    } catch (error) {
        res.status(401).json({error: error.message})
    }
    

}

const refreshToken = async(req,res)=>{

    try {
        const refreshToken = req.cookies.refresh_token;
        if(refreshToken === null) return res.status(401).json({error: "null refresh token"})
        jwt.verify(refreshToken,process.env.REFRESH_TOKEN_SECRET,(error,user)=>{
            if(error) return  res.status(401).json({error: error.message})
            let tokens = jwtToken(user)
            res.cookie('refresh_token', tokens.refreshToken,{httpOnly: true})
            res.json(tokens)
        })     
    } catch (error) {
        res.status(401).json({error: error.message})

    }
}

const logOut = async(req,res)=>{
    try {
        res.clearCookie('refresh_token')
        return res.status(200).json({message: "refresh token delete"})
    } catch (error) {
        res.status(401).json({error: error.message})

    }
}



module.exports= {
    login,
    refreshToken,
    logOut
};