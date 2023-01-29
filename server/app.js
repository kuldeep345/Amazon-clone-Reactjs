require("dotenv").config()
const express = require('express')
const app = express()
const cors = require('cors')
require('./db/conn')
const cookieParser = require('cookie-parser')

app.use(express.json())
app.use(cookieParser(""))
app.use(cors())


app.use('/products' , require('./routes/product'))
app.use('/user' , require('./routes/user'))

const port = 5000;

app.listen(port , ()=>{
    console.log(`server is running on http://localhost:${port}`)
})
