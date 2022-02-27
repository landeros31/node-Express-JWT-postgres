const {Router} = require("express");
const { getUsers, CreateUsers } = require("../controllers/index.users");
const { authenticateToken } = require("../helpers/jwt-helpers");
const router = Router();


//endPoints users
router.get('/users', authenticateToken, getUsers)
router.post('/users', authenticateToken, CreateUsers)  ///crear usuario


module.exports =router