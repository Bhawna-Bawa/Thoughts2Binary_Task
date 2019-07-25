const apn = require('apn');
const deviceController = require('../controller/deviceController');

    module.exports = {

        sendPushNotification : function(req, res){
        user_id = req.params.user_id;

        var options = {
            token: {
              key: "example.p8 ",  // Path to the key p8 file
              keyId: "key-id",  // The Key ID of the p8 file (available at https://developer.apple.com/account/ios/authkey/)
              teamId: "developer-team-id" // The Team ID of your Apple Developer Account (available at https://developer.apple.com/account/#/membership/)

            },
            //Provider will first send HTTP request to specified proxy then establish connection to APN API Provider
            proxy: {
              host: "192.168.10.92",
              port: 8080
            },
            production: false
        };

        //New Connection to APNs Provider API
        var apnProvider = new apn.Provider(options);

        let notification = new apn.Notification();
        
        notification.payload = {
            from: "node-apn",
            source: "web",
        };
          
        notification.body = "Hello, world!";
        deviceController.getDevice(user_id).then((deviceDoc) => {
            apnProvider.send(notification, deviceDoc.dev_id).then( (result) => {
                res.send("Notification sent to device",deviceDoc.dev_id);
            });
        }).catch((err) => {
            res.send(err);
        })
        
    }

};