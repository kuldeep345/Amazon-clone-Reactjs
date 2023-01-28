const express = require('express');
const router = express.Router();
const { registerUser , loginUser , addToCart } = require('../controllers/user')
const authenticate = require("../middleware/authenticate")


router.post('/register' , registerUser)
router.post('/login' , loginUser)
router.post('/addToCart/:id' , authenticate , addToCart)

module.exports = router