var connection = require('../connections/mongo.connection');
var mongojs = require('mongojs');
var feedbackBean = require('../beans/feedback.bean');

exports.giveFeedback = function(req, res) {
  const feedbackObject = feedbackBean.toObject(req.body);
  connection((err, client) => {
    if (err) {
      console.log('Connection not created');
      res.status(500).json({
        message: 'We are facing issues with DB, please try after sometime'
      });
    } else {
      // console.log(loginObject);
      var db = client.db('powerprogrammer');

      db.collection('feedbacks').insertOne(feedbackObject, function(err, doc) {
        if (err) {
          console.log(err);
          return res.status(400).json({ message: 'Something Wrong Happened' });
        } else {
          return res.json({ feedbackId: doc.feedbackId });
        }
      });
    }
  });
};

exports.getFeedbacks = function(req, res) {
  connection((err, client) => {
    if (err) {
      console.log('Connection not created');
      res.status(500).json({
        message: 'We are facing issues with DB, please try after sometime'
      });
    } else {
      // console.log(loginObject);
      var db = client.db('powerprogrammer');
      db.collection('feedbacks')
        .find({
          productId: req.body.productId
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

exports.userBroughtProduct = function(req, res) {
  connection((err, client) => {
    if (err) {
      console.log('Connection not created');
      res.status(500).json({
        message: 'We are facing issues with DB, please try after sometime'
      });
    } else {
      // console.log(loginObject);
      var db = client.db('powerprogrammer');

      db.collection('recommendations')
        .find({
          userId: req.body.userId,
          productId: req.body.productId,
          canBeReviewed: true
        })
        .toArray(function(err, docs) {
          if (err) {
            return res
              .status(400)
              .json({ message: 'Something Wrong Happened' });
          } else {
            res.json({ count: docs.length });
          }
        });
    }
  });
};

exports.userGivenFeedback = function(req, res) {
  connection((err, client) => {
    if (err) {
      console.log('Connection not created');
      res.status(500).json({
        message: 'We are facing issues with DB, please try after sometime'
      });
    } else {
      // console.log(loginObject);
      var db = client.db('powerprogrammer');

      db.collection('feedbacks')
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
            res.json({ count: docs.length });
          }
        });
    }
  });
};
