const {ObjectId} = require('mongodb')
const db = require('../config/mongodb-connect');

var Device = require('../models/device');

module.exports = {
    getDevice : function(user_id){
        return new Promise((reject, resolve) => {
            Device.find({user_id : user_id},function(err,devDoc){
                if(!devDoc){
                    reject({ message: "The device does not exist" });
                }
                resolve({
                    data : devDoc
                });
            });  
        });
    },

// Inserting document to devices collection             
    addDevice : function(req,res){
        
            var device = new Device();
            device.dev_id =req.body.dev_id;
            device.user_id = req.body.user_id;
            device.save(err => {
                if (err) {
                 return res.send({ message: err.message });
                }
                res.send({
                 message : "Device inserted Successfully"
                });
           });
    }
};