var connection = require('../connections/mongo.connection');
var mongojs = require('mongojs');
var orderBean = require('../beans/orderBean');

exports.getOrders = function(req, res) {
  connection((err, client) => {
    if (err) {
      console.log('Connection not created');
      res.status(500).json({
        message: 'We are facing issues with DB, please try after sometime'
      });
    } else {
      // console.log(loginObject);
      var db = client.db('powerprogrammer');
      db.collection('orders')
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
};

exports.updateOrder = function(req, res) {
  console.log(req.body);
  let orderObject = orderBean.toObject(req.body);
  connection((err, client) => {
    if (err) {
      console.log('Connection not created');
      res.status(500).json({
        message: 'We are facing issues with DB, please try after sometime'
      });
    } else {
      // console.log(loginObject);
      var db = client.db('powerprogrammer');

      db.collection('orders').findOneAndUpdate(
        { _id: mongojs.ObjectId(req.body._id) },
        { $set: orderObject },
        function(err, doc, lastModifiedObjectError) {
          if (err) {
            console.log(err);
            return res
              .status(400)
              .json({ message: 'Something Wrong Happened' });
          } else {
            db.collection('notifications').insertOne(
              {
                userId: orderObject.userId,
                message: `Order ${req.body._id} updated successfully`,
                status: 'unread',
                orderId: req.body._id

              },
              function(err, doc) {
                if (err) {
                  console.log(err);
                } else {
                  console.log(doc);
                }
              }
            );
            return res.json(doc);
          }
        }
      );
    }
  });
};


exports.getOrderDetail = function(req, res) {
  connection((err, client) => {
    if (err) {
      console.log('Connection not created');
      res.status(500).json({
        message: 'We are facing issues with DB, please try after sometime'
      });
    } else {
      // console.log(loginObject);
      var db = client.db('powerprogrammer');

      db.collection('orders').findOne(
        {
          _id: mongojs.ObjectId(req.body.orderId)
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
}