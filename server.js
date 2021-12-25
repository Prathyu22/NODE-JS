const express = require('express')
const app = express() //instance of express. 
const PORT = 3000

//middleware function
/*const verify = (req,res,next) => {
    if(req.headers['user-agent'] === "Thunder Client (https://www.thunderclient.io") next()
    //next proceeds to the next callback() / next middleware.
    else res.send("BLOCKED")
}*/ 

const isAdmin = (req,res,next) => {
    if(req.headers.admin === 'true') next()
    else res.send("UNAUTHOROISED")
}

app.get('/public', (req,res) => 
{
    console.log(req.headers)
    res.send("I'm a public route")   
})

app.get('/private',isAdmin,(req,res) => {
    res.send(`I'm an admin route`)
}) // this cannot be runned by browser as it is a post request.

app.listen(PORT, () => {
    console.log(`Server running at PORT ${PORT}`)
})

module.exports = () => {} 