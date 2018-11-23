var connection = require('../connections/mongo.connection');
var mongojs = require('mongojs');

exports.getProfileData = function(req, res) {
    connection((err, client) => {
        if (err) {
          console.log('Connection not created');
          res.status(500).json({
            message: 'We are facing issues with DB, please try after sometime'
          });
        } else {
          // console.log(loginObject);
          var db = client.db('powerprogrammer');
    
          db.collection('users')
            .findOne({
              _id: mongojs.ObjectId(req.body.userId)
            },function(err, doc) {
              if (err) {
                return res
                  .status(400)
                  .json({ message: 'Something Wrong Happened' });
              } else {
                res.json(doc);
              }
            });
        }
      });    
}

exports.getAddresses = function(req, res) {
    connection((err, client) => {
      if (err) {
        console.log('Connection not created');
        res.status(500).json({
          message: 'We are facing issues with DB, please try after sometime'
        });
      } else {
        // console.log(loginObject);
        var db = client.db('powerprogrammer');
  
        db.collection('addresses')
          .find({
              userId: req.body.userId
          })
          .toArray(function(err, docs) {
            if (err) {
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

exports.getCards = function(req, res) {
    console.log(req.body);
    
    connection((err, client) => {
      if (err) {
        console.log('Connection not created');
        res.status(500).json({
          message: 'We are facing issues with DB, please try after sometime'
        });
      } else {
        // console.log(loginObject);
        var db = client.db('powerprogrammer');
  
        db.collection('cards')
          .find({
            userId: req.body.userId
        })
          .toArray(function(err, docs) {
            if (err) {
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