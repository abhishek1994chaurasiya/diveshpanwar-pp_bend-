const express = require('express');
const router = express.Router();
const login = require('../businessLayer/loginBL');
const signup = require('../businessLayer/signupBL');
const connection = require('../connections/mongo.connection');

router.get('/', function(req, res, next) {
  res.send('<h1>Welcome to the Express App</h1>');
});

router.post('/login', (req, res) => {
  login(req, res);
});

router.post('/signup', (req, res, next) => {
  signup(req, res);
})

router.get('/mongoTest', (req, res) => {
  connection((err, client) => {
    if (err) {
      console.log('Connection not created');
    } else {
      console.log('Connection created');
      var db = client.db('powerprogrammer');

      db.collection('users')
        .find()
        .toArray(function(err, result) {
          if (err) throw err;
          console.log(result);
          res.json(result);
        });
    }
  });
});

module.exports = router;
