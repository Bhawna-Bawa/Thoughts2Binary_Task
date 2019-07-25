const express = require('express');
const bodyParser = require('body-parser');

const { PORT_NO } = require('./config/constants');

const app = express();

//body-parser -> middleware -> Parses the body, Set Sting body and parses it to Javascript Object
app.use(bodyParser.json());

// Importing Routes
const index = require('./routes/index');

// Setting Routes
app.use('/',index);

app.listen(PORT_NO , (err) => {
    if (err) {
        console.log("Failed to Start Server");
        return;
    }
    console.log("Server is up on Port 3000");

})

