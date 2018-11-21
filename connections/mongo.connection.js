var MongoClient = require('mongodb').MongoClient;

module.exports = function(callback) {
  MongoClient.connect(
    'mongodb://localhost:27017/powerprogrammer',
    { useNewUrlParser: true },
    callback
  );
};
