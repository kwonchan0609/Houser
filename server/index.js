const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const massive = require('massive')
const houselist_controller = require('./controller')
require('dotenv').config()

massive(process.env.CONNECTION_STRING)
.then(dbInstance=>app.set('db',dbInstance))
.catch(err=>console.log(err))



app.use(bodyParser.json())


app.get('/api/houses', houselist_controller.getAll)
app.post('/api/house', houselist_controller.create)
app.delete('/api/house/:id', houselist_controller.delete)


const port = process.env.SERVER_PORT
app.listen(port,()=>{console.log(`Server listening on port ${port}`)})