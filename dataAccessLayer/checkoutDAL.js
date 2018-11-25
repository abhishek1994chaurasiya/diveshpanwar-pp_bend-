var connection = require('../connections/mongo.connection');
var mongojs = require('mongojs');
var checkoutBean = require('../beans/checkoutBean');

exports.placeOrder = function(req, res) {
  const checkoutObject = checkoutBean.toObject(req.body);
  console.log(checkoutObject);
  connection((err, client) => {
    if (err) {
      console.log('Connection not created');
      res.status(500).json({
        message: 'We are facing issues with DB, please try after sometime'
      });
    } else {
      // console.log(loginObject);
      var db = client.db('powerprogrammer');

      db.collection('orders').insertOne(checkoutObject, function(err, doc) {
        if (err) {
          console.log(err);
          return res.status(400).json({ message: 'Something Wrong Happened' });
        } else {
          let orderId = doc.insertedId;

          db.collection('carts')
            .find({
              userId: checkoutObject.userId
            })
            .toArray(function(err, documents) {
              if (err) {
                console.log(err);
                return res
                  .status(400)
                  .json({ message: 'Something Wrong Happened' });
              } else {
                db.collection('recommendations').insertMany(documents, function(
                  err,
                  result
                ) {
                  if (err) {
                    console.log(err);
                  } else {
                    console.log(result);
                  }
                });

                db.collection('carts').deleteMany(
                  { userId: checkoutObject.userId },
                  function(err, result) {
                    if (err) {
                      console.log(err);
                    } else {
                      console.log(result);
                    }
                  }
                );

                db.collection('notifications').insertOne(
                  { userId: checkoutObject.userId,  message: `Order ${orderId} placed successfully`, status: 'unread', orderId: doc.insertedId },
                  function(err, result) {
                    if (err) {
                      console.log(err);
                    } else {
                      console.log(result);
                    }
                  }
                );
              }
            });

          return res.json({ orderId: doc.insertedId });
        }
      });
    }
  });
};
