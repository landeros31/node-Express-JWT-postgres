const {Router} = require("express");
const {getProducts, createProducts, getProductById, deleteProduct, updateProduct} = require("../controllers/index.products");
const { authenticateToken } = require("../helpers/jwt-helpers");
const router = Router();


//endPoints Productos E-commerce

router.get('/products',authenticateToken, getProducts)
router.get('/products/:id',authenticateToken,getProductById)
router.post('/products',authenticateToken,createProducts)
router.put('/products/:id',authenticateToken,updateProduct)
router.delete('/products/:id',authenticateToken,deleteProduct)


module.exports = router;