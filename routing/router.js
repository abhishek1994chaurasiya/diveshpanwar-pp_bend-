const express = require('express');
const router = express.Router();
const login = require('../businessLayer/loginBL');
const signup = require('../businessLayer/signupBL');
const connection = require('../connections/mongo.connection');
const productBL = require('../businessLayer/productBL');
const addressBL = require('../businessLayer/addressBL');
const cardBL = require('../businessLayer/cardBL');
const profileBL = require('../businessLayer/profileBL');

router.get('/', function(req, res, next) {
  res.send('<h1>Welcome to the Express App</h1>');
});

router.post('/login', (req, res) => {
  login(req, res);
});

router.post('/signup', (req, res, next) => {
  signup(req, res);
});

router.get('/products', function(req, res) {
  productBL.allProducts(req, res);
});

router.get('/deals', function(req, res) {
  productBL.allDeals(req, res);
});

router.post('/singleProduct', function(req, res){
    productBL.singleProduct(req, res);
});

router.post('/searchProduct', function(req, res) {
  productBL.searchProduct(req, res);
});

router.post('/addAddress', function(req, res) {
  addressBL.addAddress(req, res);
});

router.post('/editAddress', function(req, res) {
  addressBL.editAddress(req, res);
});

router.post('/fetchAddress', function(req, res) {
  addressBL.fetchAddress(req, res);
});

router.post('/addCard', function(req, res) {
  cardBL.addCard(req, res);
});

router.post('/editCard', function(req, res) {
  cardBL.editCard(req, res);
});

router.post('/fetchCard', function(req, res) {
  cardBL.fetchCard(req, res);
});

router.post('/getProfileData', function(req, res) {
  profileBL.getProfileData(req, res);
});

router.post('/getAddresses', function(req, res) {
  profileBL.getAddresses(req, res);
});

router.post('/getCards', function(req, res) {
  profileBL.getCards(req, res);
});

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
