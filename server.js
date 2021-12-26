const express = require('express')
const app = express() //instance of express. 
const PORT = 3001

app.get('/products/cases')
app.get('/products/protection')
app.get('/products/bands')

//Dynamic Route
app.get('/products/:categories',(req,res) => {
    console.log(req.params) //params -- parameters.
    res.send('PING')
})

app.listen(PORT, () => {
    console.log(`Server running at PORT ${PORT}`)
})

module.exports = () => {} 