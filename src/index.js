
////dependencias 
const cors = require("cors")
const cookieParser= require("cookie-parser")
const dotenv = require("dotenv")
const express = require("express")
const app = express();
/// path routes
const auth = require("./routes/auth-routes")
const products = require("./routes/index.products")
const users = require("./routes/index.users")

//redireccion de ruta principal
app.use( express.static('public')) 



//middlewares
dotenv.config()
app.use(cors())
app.use(cookieParser())
app.use(express.json())
app.use(express.urlencoded({extended:false}))
//routes
app.use('/auth',auth)
app.use('/',products)
app.use('/',users)


////server
app.listen(3000,()=>{
    try {
        console.log("server conected on port 3000 ")
    } catch (error) {
        console.log(error)
    }
})
    
