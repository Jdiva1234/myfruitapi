const cors = require("cors")
const fruits = require('./fruits.json')
const express = require("express")
const app = express()

// const logger = require("/logger")
// app.use(logger)



app.use('/fruits', express.json())

app.get('/', (req, res) => {
    res.send("Hello Fruit Api")
})

app.get('/fruits', (req, res) => {
    res.send(fruits)
})

app.get('/fruits/:name', (req, res) => {
    const name = req.params.name.toLowerCase()
    const fruit = fruits.find((fruit) => fruit.name.toLowerCase() == name)
    if (fruit == undefined) {
        // do something
        res.status(404).send()
    } else {
        res.send(fruit)
    }
})

app.post('/fruits', (req, res) => {
    //check if fruits in json
    const fruit = fruits.find((fruit) => fruit.name.toLowerCase() == req.body.name)
    if (fruit != undefined) {
        res.status(404).send
    } else {
        //add the fruit to JSON
        fruit.push(req.body)
        res.status(201).send(req.body)
    }
})



app.delete('/fruits/:name', (req, res) => {
    //see if it exist
    const fruit = fruits.find((fruit) => fruit.name.toLowerCase() == req.params.name.toLowerCases)
    if (fruit == undefined) {
        //can not delete nothing 
        res.status(404).send()
    } else {
        //delete part
        // const indexToDelete = fruits.indexOf(fruit)
        // fruits.splice(indexToDelete, 1)
        fruits.splice(fruits.indexOf(fruit), 1)
        //To do
        res.status(204).send
    }


})




module.exports = app
