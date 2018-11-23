var connection = require('../connections/mongo.connection');
var mongojs = require('mongojs');

exports.addAddress = function(req, res, addressObject) {
    // console.log(addressObject);
    connection((err, client) => {
        if (err) {
          console.log('Connection not created');
          res.status(500).json({
            message: 'We are facing issues with DB, please try after sometime'
          });
        } else {
          // console.log(loginObject);
          var db = client.db('powerprogrammer');
    
          db.collection('addresses').insertOne(
            addressObject,
            function(err, doc) {
              if (err) {
                console.log(err);
                return res.status(400).json({message: 'Something Wrong Happened'});
              } else {
                return res.json({addressId: doc.insertedId});
              }
            }
          );
        }
      });
    
}

exports.editAddress = function(req, res, addressObject) {
  // console.log(addressObject);
  connection((err, client) => {
      if (err) {
        console.log('Connection not created');
        res.status(500).json({
          message: 'We are facing issues with DB, please try after sometime'
        });
      } else {
        // console.log(loginObject);
        var db = client.db('powerprogrammer');
  
        db.collection('addresses').findOneAndUpdate(
            {_id: mongojs.ObjectId(req.body.addressId)},
            { $set : addressObject},
          function(err, doc, lastModifiedObjectError) {
            if (err) {
              console.log(err);
              return res.status(400).json({message: 'Something Wrong Happened'});
            } else {
              return res.json(doc);
            }
          }
        );
      }
    });
  
}


exports.fetchAddress = function(req, res) {
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
            .findOne({
              _id: mongojs.ObjectId(req.body.addressId)
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