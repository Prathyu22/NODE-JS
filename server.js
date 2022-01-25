const express = require('express')
const app = express() //instance of express. 
const PORT = 3001
const databse = require('./database/db')
const categoryRoutes = require('./routes/categoryRoutes')
app.use(express.json())

app.use('/category', categoryRoutes)

/*app.get('/', (req,res) => {
    try {
        console.log(document)
    } catch (error) {
        res.send(203).send(error.message)
    }
})*/

app.listen(PORT, () => {
    console.log(`Server running at PORT ${PORT}`)
})
