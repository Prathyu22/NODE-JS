const express = require('express')
const app = express() //instance of express. 
const PORT = 3000

const logger = (req,res,next) => {
    console.log(req.method)
    next()
}

app.use(logger) //allows us to use it as a middleware.

app.post('/',(req,res) => {
    res.send('Server Running')
})

app.listen(PORT, () => {
    console.log(`Server running at PORT ${PORT}`)
})

module.exports = () => {} 