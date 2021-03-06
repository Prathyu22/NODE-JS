const database = require('../database/db')
const express = require('express')
const router = express.Router()

const {v4: uuidv4} = require('uuid');

/*
ROUTE : http://localhost:3001/category/all
METHOD : GET
*/

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

/*
ROUTE : http://localhost:3001/category/add
METHOD : POST
*/
router.post('/add',(req,res) => {

    const {name} = req.body

    const newCategory = {
            name,
            id: uuidv4() //string
    }

    try {
        let includes = database.categories.find(item => item.name === name)
        if (!includes) database.categories.push(newCategory)
        else console.log('Already exists.')
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

/*
ROUTE : http://localhost:3001/category/delete
METHOD : DELETE
*/

router.delete('/delete/:id',(req,res) => {
     
    try {
        
        const{id} = req.params
        /*let element = database.categories.find(item => item.id === id)
        const index = database.categories.indexOf(element)
        database.categories.splice(index,1)*/
        
    /*----filter don't modify the existing array. It creates new array.---------*/
        
        const newCategories = database.categories.filter(item => item.id!==id)
        database.categories = newCategories
        
        res.json({
            categories: newCategories,
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

/*
ROUTE : http://localhost:3001/category/update
METHOD : PUT
*/


module.exports = router