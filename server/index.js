const express = require('express')
require('dotenv').config();
const massive = require('massive')
const cors = require('cors')
const {SERVER_PORT, CONNECTION_STRING} = process.env
const ctrl = require('./controller')
const app = express();

app.use(express.json())
app.use(cors())

massive(CONNECTION_STRING).then((database) => {
    app.set('db', database)
    console.log('database set')
    app.listen(SERVER_PORT, () => console.log(`Cruising on port ${SERVER_PORT}`))
    
})

app.get('/api/inventory', ctrl.getInventory)
app.post('/api/inventory', ctrl.addProduct)
app.delete('/api/inventory/:id', ctrl.deleteProduct)
app.put('/api/inventory/:id', ctrl.updateProduct)
