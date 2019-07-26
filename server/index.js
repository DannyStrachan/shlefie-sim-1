require('dotenv').config()
const express = require('express');
const massive = require("massive");

const app = express()

const {SERVER_PORT, CONNECTION_STRING} = process.env

massive(CONNECTION_STRING).then(database => {
    app.set("db", database)
    console.log("database set")})
    .catch(err => console.log(err));

app.use(express.json())

app.listen(SERVER_PORT, () => console.log(`Cruising on port ${SERVER_PORT}!!!!`))