const data = [{name: "Anisha"}, {name: "Suman"}, {name: "Varun"}]
const express = require('express')
const app = express() //instatiating express.

app.get('/getNames', (req,res) => {
    res.send(data) //response ---> in browser
})

app.listen(3000, () => {
    console.log("Server listening at PORT 3000")
})