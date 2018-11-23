var connection = require('../connections/mongo.connection');
var mongojs = require('mongojs');

exports.signUpDAL = function(req, res, signupObject) {
  connection((err, client) => {
    if (err) {
      console.log('Connection not created');
      res.status(500).json({
        error: 'We are facing issues with DB, please try after sometime'
      });
    } else {
      // console.log(signupObject);
      var db = client.db('powerprogrammer');

      db.collection('users')
        .find({ email: signupObject.email })
        .toArray(function(err, docs) {
          if (docs && docs.length > 0) {
            res.status(401).json({
              message:
                'Email already registered! Please choose another email id.'
            });
          } else {
            db.collection('users')
              .find({ contact: signupObject.contact })
              .toArray(function(err, docs) {
                if (docs && docs.length > 0) {
                  res.status(401).json({
                    message:
                      'Contact number  already registered. Please use another contact number.'
                  });
                } else {
                  db.collection('users').insertOne(signupObject, function(
                    err,
                    result
                  ) {
                    if (err) {
                      res
                        .status(400)
                        .json({ message: 'Unable to create user' });
                    } else {
                      console.log(result.insertedId);
                      res.json({ success: 'User Created Successfully' });
                    }
                  });
                }
              });
          }
        });
    }
  });
};

exports.editProfile = function(req, res, signupObject) {
  connection((err, client) => {
    if (err) {
      console.log('Connection not created');
      res.status(500).json({
        message: 'We are facing issues with DB, please try after sometime'
      });
    } else {
      // console.log(loginObject);
      var db = client.db('powerprogrammer');

      db.collection('users').findOne(
        { contact: signupObject.contact },
        function(err, doc) {
          if (doc) {
            if (doc._id != req.body.userId) {
              console.log('Number Exists');
              res.status(400).json({
                message: 'Number Already associated with another accouunt'
              });
            } else {
              db.collection('users').findOneAndUpdate(
                { _id: mongojs.ObjectId(req.body.userId) },
                { $set: signupObject },
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
          }
        }
      );
    }
  });
};
