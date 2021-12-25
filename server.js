const express = require('express')
const app = express() //instatiating express.

app.get('/', (req,res) => {
    console.log(req.url) // '/' ---> in terminal
    res.send('This is the homepage') //response  ---> in browser
})

app.get('/login', (req,res) => {
    console.log(req.url) //  '/login'  ---> in terminal
    res.send('This is the login page.') //response ---> in browser
})

app.get('/signup', (req,res) => {
    console.log(req.url) // '/signup' ---> in terminal 
    res.send('This is the signup page.') //response ---> in browser
})

app.listen(3000, () => {
    console.log("Server listening at PORT 3000")
})