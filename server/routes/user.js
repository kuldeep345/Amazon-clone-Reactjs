const express = require('express');
const router = express.Router();
const { registerUser , loginUser , addToCart , cartDetails , validUser , removeFromCart , Logout} = require('../controllers/user')
const authenticate = require("../middleware/authenticate")


router.post('/register' , registerUser)
router.post('/login' , loginUser)
router.post('/addToCart/:id' , authenticate , addToCart)
router.get('/cartDetails' , authenticate , cartDetails)
router.get('/validuser' , authenticate , validUser)
router.delete("/remove/:id" , authenticate , removeFromCart)
router.get("/logout" , authenticate , Logout)

module.exports = router