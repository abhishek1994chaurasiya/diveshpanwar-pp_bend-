var connection = require('../connections/mongo.connection');

var signUpDAL = function(req, res, signupObject) {
  connection((err, client) => {
    if (err) {
      console.log('Connection not created');
      res.status(500).json({
        error: 'We are facing issues with DB, please try after sometime'
      });
    } else {
      console.log(signupObject);
      var db = client.db('powerprogrammer');
      db.collection('users')
        .find({ username: signupObject.username })
        .toArray(function(err, docs) {
          if (docs.length > 0) {
            res.status(401).json({ message: 'Username Already Exist.' });
          } else {
            db.collection('users')
              .find({ email: signupObject.email })
              .toArray(function(err, docs) {
                if (docs.length > 0) {
                  res.status(401).json({
                    message:
                      'Email already registered! Please choose another email id.'
                  });
                } else {
                  db.collection('users')
                    .find({ contact: signupObject.contact })
                    .toArray(function(err, docs) {
                      if (docs.length > 0) {
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
    }
  });
};

module.exports = signUpDAL;
