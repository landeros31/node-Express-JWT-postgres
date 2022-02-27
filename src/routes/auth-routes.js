

const {Router}= require("express")
const router = Router();
const {login, refreshToken, logOut}  = require ("../controllers/index.auth")


//endPoints login

router.post('/login',login)
router.get('/refresh_token', refreshToken)
router.delete('/refresh_token',logOut)




module.exports=router