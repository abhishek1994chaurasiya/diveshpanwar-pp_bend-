var connection = require('../connections/mongo.connection');
var mongojs = require('mongojs');
exports.allCategories = function(req, res) {
  connection((err, client) => {
    if (err) {
      console.log('Connection not created');
      res.status(500).json({
        message: 'We are facing issues with DB, please try after sometime'
      });
    } else {
      // console.log(loginObject);
      var db = client.db('powerprogrammer');

      db.collection('categories')
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
