const jwt = require("jsonwebtoken")
const { user } = require("pg/lib/defaults")

function jwtToken ({user_id, user_name, user_email}){
    const user = {user_id, user_name, user_email}
    const accessToken = jwt.sign(user,process.env.ACCESS_TOKEN_SECRET,{expiresIn: '1m'})
    const refreshToken = jwt.sign(user,process.env.REFRESH_TOKEN_SECRET,{expiresIn: '5m'})
    return ({accessToken, refreshToken})

}


function authenticateToken (req,res,next){
    const authHeader = req.headers['Authorization']
    const token = authHeader && authHeader.split(' ')[1];
    if(token ==null) return res.status(401).json({error: "Null token"})
    jwt.verify(token,process.env.ACCESS_TOKEN_SECRET,(error,user)=>{
       if(error) return res.status(403).json({erorr: error.message }) 
       req.user = user;
       next();
    })

}

module.exports = {
    jwtToken,
    authenticateToken
}