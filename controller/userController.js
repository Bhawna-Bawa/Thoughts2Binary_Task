const db = require('../config/mongodb-connect');
const Bcrypt = require("bcryptjs");

var User = require('../models/user');

module.exports = {
 
//Adding new user to users collection
    addUser : function(req, res) {
        
        var user = new User();
        user.user_id = req.body.user_id
        user.user_name = req.body.user_name;
        user.email = req.body.email;
        req.body.password = Bcrypt.hashSync(req.body.password, 10);
        user.password = req.body.password;
        user.save(err => {
            if (err) {
                return res.send({ message: err.message });
            }
            res.send({message: "User inserted successfully"});
        });
    
    },
//Getting user from users collection
    getUser : function(req,res){

        User.find({user_id : req.params.user_id},function(err,userDoc){
            if (err) throw err;
            if(!userDoc){
                return res.send({ message: "The user does not exist" });
            }
            res.send(userDoc)
        })

    }

};
