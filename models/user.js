const mongooose = require('mongoose');
require('mongoose-type-email');
const Bcrypt = require("bcryptjs");

/* Users Schema Attribute / characteristics  / fields */
var UserSchema = new mongooose.Schema({
    user_id: {
        type: Number,
        unique: true
      },
      user_name:{
          type : String,
          required : true
      },
    email: {
        type : mongooose.SchemaTypes.Email, 
        required : true
    },
    password :{
        type : String
    }
});

UserSchema.pre("save", function(next) {
    if(!this.isModified("password")) {
        return next();
    }
    this.password = Bcrypt.hashSync(this.password, 10);
    next();
});

module.exports = mongooose.model('User', UserSchema);
