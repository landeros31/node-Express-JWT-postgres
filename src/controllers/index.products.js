const pool = require("../database/config")



 
const getProducts= async(req,res)=>{
    const response= await pool.query('Select * FROM products')
    console.log(response.rows)
    res.status(200).json(response.rows)
    
}

const getProductById= async(req,res)=>{

    const id = req.params.id
    const response = await pool.query("SELECT * FROM products WHERE id= $1 ", [id])
    res.json(response.rows)
  }

const createProducts = async(req,res)=>{
    const {name, price, stock, description}=req.body
    const response=await pool.query("INSERT INTO products (name, price, stock, description) VALUES ($1, $2, $3, $4) ", [name, price, stock , description])
    res.json({
    message : "User Add Succesfully",
    body : {
        name,
        price,
        stock,
        description
    }
})
}

const updateProduct = async(req,res)=>{
    const id= req.params.id
    const {name, price, stock, description}= req.body
    const response = await pool.query("UPDATE products SET name = $1 , price = $2 , stock = $3 , description= $4 WHERE id= $5",[name, price,stock,description, id])
    res.json({
       message: `producto ${id} update succesfully`,
       body : {
           name,
           price,
           stock,
           description,
           id
       }  
    })
    
}


const deleteProduct = async(req,res)=>{
    const id= req.params.id
    const response = await pool.query("DELETE FROM products WHERE id=$1",[id])
    res.send(`producto ${id} delete succesfully`)
}
module.exports= {
    getProducts,
    createProducts,
    getProductById,
    updateProduct,
    deleteProduct
};