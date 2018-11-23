var connection = require('../connections/mongo.connection');
var mongojs = require('mongojs');

exports.addCard = function(req, res, cardObject) {
  // console.log(cardObject);
  connection((err, client) => {
    if (err) {
      console.log('Connection not created');
      res.status(500).json({
        message: 'We are facing issues with DB, please try after sometime'
      });
    } else {
      // console.log(loginObject);
      var db = client.db('powerprogrammer');

      db.collection('cards').insertOne(cardObject, function(err, doc) {
        if (err) {
          console.log(err);
          return res.status(400).json({ message: 'Something Wrong Happened' });
        } else {
          return res.json({ addressId: doc.insertedId });
        }
      });
    }
  });
};

exports.editCard = function(req, res, cardObject) {
  
  connection((err, client) => {
    if (err) {
      console.log('Connection not created');
      res.status(500).json({
        message: 'We are facing issues with DB, please try after sometime'
      });
    } else {
      // console.log(loginObject);
      var db = client.db('powerprogrammer');

      db.collection('cards').findOneAndUpdate(
        { _id: mongojs.ObjectId(req.body.cardId) },
        { $set: cardObject },
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
};

exports.fetchCard = function(req, res) {
  connection((err, client) => {
    if (err) {
      console.log('Connection not created');
      res.status(500).json({
        message: 'We are facing issues with DB, please try after sometime'
      });
    } else {
      // console.log(loginObject);
      var db = client.db('powerprogrammer');

      db.collection('cards').findOne(
        {
          _id: mongojs.ObjectId(req.body.cardId)
        },
        function(err, doc) {
          if (err) {
            return res
              .status(400)
              .json({ message: 'Something Wrong Happened' });
          } else {
            res.json(doc);
          }
        }
      );
    }
  });
};


exports.deleteCard = function(req, res) {
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
          .deleteOne({
            _id: mongojs.ObjectId(req.body.cardId)
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