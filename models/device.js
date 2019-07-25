const mongooose = require('mongoose');

/* Device Schema Attribute / characteristics  / fields */
var DeviceSchema = new mongooose.Schema({
    dev_id: {
        type: Number,
        unique : true,
        required : true
    },
    user_id: {
        type: Number,
        required : true
    }
   
});

module.exports = mongooose.model('Device', DeviceSchema);
