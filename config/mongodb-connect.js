const mongoose = require('mongoose');

const { URL } = require('../config/constants');

const mongo = mongoose.connect(URL ,{useNewUrlParser: true}, (err,db) => {
    if(err){

        return console.log('Connection to MongoDB Server Failed',err);
    }
    console.log('Connected to MongoDB Server');
})

module.exports = mongo;