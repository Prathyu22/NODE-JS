const express = require('express')
const app = express() //instance of express. 
const PORT = 3001
const databse = require('./database/db')

const categoryRoutes = require('./routes/categoryRoutes')
const productRoutes = require('./routes/productRoutes')

app.use(express.json())

app.use('/category', categoryRoutes)
app.use('/products', productRoutes)

app.listen(PORT, () => {
    console.log(`Server running at PORT ${PORT}`)
})
