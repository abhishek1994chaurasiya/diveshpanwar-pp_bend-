var connection = require('../connections/mongo.connection');
var mongojs = require('mongojs');
exports.allProducts = function(req, res) {
  connection((err, client) => {
    if (err) {
      console.log('Connection not created');
      res.status(500).json({
        message: 'We are facing issues with DB, please try after sometime'
      });
    } else {
      // console.log(loginObject);
      var db = client.db('powerprogrammer');

      db.collection('products')
        .find()
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
};

exports.singleProduct = function(req, res) {
//   console.log(req.body.productId);

  connection((err, client) => {
    if (err) {
      console.log('Connection not created');
      res.status(500).json({
        message: 'We are facing issues with DB, please try after sometime'
      });
    } else {
      // console.log(loginObject);
      var db = client.db('powerprogrammer');

      db.collection('products').findOne(
        {
          _id: mongojs.ObjectId(req.body.productId)
        },
        function(err, doc) {
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
};


exports.searchProduct = function(req, res) {
    connection((err, client) => {
        if (err) {
          console.log('Connection not created');
          res.status(500).json({
            message: 'We are facing issues with DB, please try after sometime'
          });
        } else {
          // console.log(loginObject);
          var db = client.db('powerprogrammer');
    
          db.collection('products')
            .find({
                displayName: {
                    $regex: req.body.searchCriteria,
                    $options: 'i'
                }
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