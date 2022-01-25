const database = require('../database/db')
const express = require('express')
const router = express.Router()

const {v4: uuidv4} = require('uuid');

router.get('/all', (req,res) => {
    
    try {
        res.json({
            categories: database.categories,
            message: "Successfully fetched categories",
            status: "SUCCESS"
        })
    } catch (error) {
        res.json({
            categories: [],
            message: error.message,
            status: "FAILED"
        })
    }
})

router.post('/add',(req,res) => {

    const {name} = req.body

    const newCategory = {
            name,
            id: uuidv4() //string
    }

    database.categories.push(newCategory)

    try {
        res.json({
            categories: database.categories,
            message: "Successfully added categories",
            status: "SUCCESS"
        }) 
    } catch (error) {
        res.json({
            categories: [],
            message: error.message,
            status: "FAILED"
        })
    }
})

module.exports = router