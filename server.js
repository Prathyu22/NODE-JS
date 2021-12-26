const express = require('express')
const app = express() //instance of express. 
const PORT = 3000

app.use(express.json()) //allows us to use it as a middleware.

const token = "TOP_SECRET"

let products = [{name: 'iPhone12 case', price: '999'},{name: 'iPhone13 case', price: '1199'},{name: 'iPhone13 Pro case', price: '1499'} ]

/* <------------------------------ AUTHORISATION MIDDLEWARE ------------------------------> */
const isAuthorised = (req,res,next) => {
    if(req.headers.authorisation === token) next()
    else res.json({ error: "UNAUTHORISED"})
}

/* <------------------------------ VALIDATION MIDDLEWARE ------------------------------> */
const validator = (req,res,next) => {
    const{name,price} = req.body

    if(!name || !price) res.json({ error: "Validation Failed"})
    else next()
}
/* <------------------------------ PUBLIC ROUTE ------------------------------> */
//Get Route //Send all products.
app.get('/products', (req,res) => {
   // res.send(products) //text response ---> {...}
    res.json({products}) //array response  ---> [...]
})

/* <------------------------------ PRIVATE ROUTE ------------------------------> */
app.post('/products/add',isAuthorised,validator,(req,res) => {
    const{name,price} = req.body
    
    products.push({
            name,
            price
    })

    res.send({products})
})

/* <------------------------------ AUTH ROUTE ------------------------------> */
app.post('/auth',(req,res) => {
    const {email,password} = req.body
    if(email === 'admin@mail.com' && password ==='password') {
        res.send({token})
    } 
    else {
        res.send({message: "UNAUTHORISED"})
    }
})

app.listen(PORT, () => {
    console.log(`Server running at PORT ${PORT}`)
})

module.exports = () => {} 