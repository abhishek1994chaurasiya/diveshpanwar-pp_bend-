var connection = require('../connections/mongo.connection');
var mongojs = require('mongojs');
var notificationBean = require('../beans/notification.bean');


exports.getNotifications = function(req, res) {
    connection((err, client) => {
        if (err) {
          console.log('Connection not created');
          res.status(500).json({
            message: 'We are facing issues with DB, please try after sometime'
          });
        } else {
          // console.log(loginObject);
          var db = client.db('powerprogrammer');
          db.collection('notifications')
            .find({
              userId: req.body.userId
            })
            .toArray(function(err, docs) {
              if (err) {
                console.log(err);
                return res
                  .status(400)
                  .json({ message: 'Something Wrong Happened' });
              } else {
                res.json(docs);
              }
            });
        }
      });    
}

exports.updateNotification = function(req, res) {
    console.log(req.body);
    let notificationObject = notificationBean.toObject(req.body);
    connection((err, client) => {
      if (err) {
        console.log('Connection not created');
        res.status(500).json({
          message: 'We are facing issues with DB, please try after sometime'
        });
      } else {
        // console.log(loginObject);
        var db = client.db('powerprogrammer');
  
        db.collection('notifications').findOneAndUpdate(
          { _id: mongojs.ObjectId(req.body._id) },
          { $set: notificationObject },
          function(err, doc, lastModifiedObjectError) {
            if (err) {
              console.log(err);
              return res
                .status(400)
                .json({ message: 'Something Wrong Happened' });
            } else {
              return res.json(doc);
            }
          }
        );
      }
    });
  
}


exports.getUnreadNotifications = function(req, res) {
  connection((err, client) => {
      if (err) {
        console.log('Connection not created');
        res.status(500).json({
          message: 'We are facing issues with DB, please try after sometime'
        });
      } else {
        // console.log(loginObject);
        var db = client.db('powerprogrammer');
        db.collection('notifications')
          .find({
            userId: req.body.userId,
            status: 'unread'
          })
          .toArray(function(err, docs) {
            if (err) {
              console.log(err);
              return res
                .status(400)
                .json({ message: 'Something Wrong Happened' });
            } else {
              res.json(docs);
            }
          });
      }
    });    
}
