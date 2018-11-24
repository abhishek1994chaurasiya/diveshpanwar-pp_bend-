var connection = require('../connections/mongo.connection');
var mongojs = require('mongojs');
var wishlistBean = require('../beans/wishlistBean');

exports.addToWishlist = function(req, res) {
  const wishlistObject = wishlistBean.toObject(req.body);
  console.log(wishlistObject);
  connection((err, client) => {
    if (err) {
      console.log('Connection not created');
      res.status(500).json({
        message: 'We are facing issues with DB, please try after sometime'
      });
    } else {
      // console.log(loginObject);
      var db = client.db('powerprogrammer');
      userId = req.body.userId;
      db.collection('wishlists')
        .find({
          userId: req.body.userId,
          productId: req.body.productId
        })
        .toArray(function(err, docs) {
          if (err) {
            return res
              .status(400)
              .json({ message: 'Something Wrong Happened' });
          } else {
            console.log(docs);
            if (docs && docs.length == 0) {
              db.collection('wishlists').insertOne(wishlistObject, function(
                err,
                doc
              ) {
                if (err) {
                  console.log(err);
                  return res
                    .status(400)
                    .json({ message: 'Something Wrong Happened' });
                } else {
                  return res.json({ wishlistId: doc.insertedId });
                }
              });
            } else {
              console.log(err);
              return res
                .status(400)
                .json({ message: 'Product already in wishlist' });
            }
          }
        });
    }
  });
};

exports.removeFromWishlist = function(req, res) {

    connection((err, client) => {
        if (err) {
          console.log('Connection not created');
          res.status(500).json({
            message: 'We are facing issues with DB, please try after sometime'
          });
        } else {
          // console.log(loginObject);
          var db = client.db('powerprogrammer');
    
          db.collection('wishlists')
            .deleteOne({
              _id: mongojs.ObjectId(req.body.wishlistId)
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

};

exports.getWishlist = function(req, res) {
  connection((err, client) => {
    if (err) {
      console.log('Connection not created');
      res.status(500).json({
        message: 'We are facing issues with DB, please try after sometime'
      });
    } else {
      // console.log(loginObject);
      var db = client.db('powerprogrammer');
      userId = req.body.userId;
      db.collection('wishlists')
        .find({
          userId: req.body.userId
        })
        .toArray(function(err, docs) {
          if (err) {
            return res
              .status(400)
              .json({ message: 'Something Wrong Happened' });
          } else {
            console.log(docs);
            console.log(err);
            return res.json(docs);
          }
        });
    }
  });
};
