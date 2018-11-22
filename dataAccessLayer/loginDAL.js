var connection = require('../connections/mongo.connection');

var loginDAL = function(req, res, loginObject) {
  // console.log(loginObject);
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
        .find({ email: loginObject.email, password: loginObject.password })
        .toArray(function(err, docs) {
          if (docs.length > 0) {
            res.json({
              message: 'User Found',
              id: docs[0]._id
            });
          } else {
            res.status(401).json({message: 'Invalid Credentials'});
          }
        });
    }
  });
};

module.exports = loginDAL;
