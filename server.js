const express = require('express')
const app = express() //instance of express. 
const PORT = 3000

app.use(express.json()) //allows us to use it as a middleware.

app.post('/signup',(req,res) => {
    console.log(req.body) //Before app.use(), the body is stringified but now it is parsed to json.
    res.send('dadada')
})

app.listen(PORT, () => {
    console.log(`Server running at PORT ${PORT}`)
})

module.exports = () => {} 