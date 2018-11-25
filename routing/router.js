const express = require('express');
const router = express.Router();
const login = require('../businessLayer/loginBL');
const signup = require('../businessLayer/signupBL');
const connection = require('../connections/mongo.connection');
const productBL = require('../businessLayer/productBL');
const addressBL = require('../businessLayer/addressBL');
const cardBL = require('../businessLayer/cardBL');
const profileBL = require('../businessLayer/profileBL');
const cartBL = require('../businessLayer/cartBL');
const wishlistBL = require('../businessLayer/wishlistBL');
const checkoutBL = require('../businessLayer/checkoutBL');
const orderBL = require('../businessLayer/orderBL');

router.get('/', function(req, res, next) {
  res.send('<h1>Welcome to the Express App</h1>');
});

router.post('/login', (req, res) => {
  login(req, res);
});

router.post('/signup', (req, res, next) => {
  signup.signupBL(req, res);
});

router.post('/editProfile', (req, res, next) => {
  signup.editProfile(req, res);
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

router.post('/deleteAddress', function(req, res) {
  addressBL.deleteAddress(req, res);
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

router.post('/deleteCard', function(req, res) {
  cardBL.deleteCard(req, res);
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


router.post('/addBulkCart', function(req, res) {
  cartBL.addBulkCart(req, res);
});

router.post('/getCartItems', function(req, res) {
  cartBL.getCartItems(req, res);
});

router.post('/addOneProduct', function(req, res) {
  cartBL.addOneProduct(req, res);
});

router.post('/toggleQuantity', function(req, res) {
  cartBL.toggleQuantity(req, res);
});

router.post('/removeCartItem', function(req, res) {
  cartBL.removeCartItem(req, res);
});


router.post('/addToWishlist', function(req, res) {
  wishlistBL.addToWishlist(req, res);
});

router.post('/getWishlist', function(req, res) {
  wishlistBL.getWishlist(req, res);
});

router.post('/addFromWishlist', function(req, res) {
  cartBL.addFromWishlist(req, res);
});

router.post('/removeFromWishList', function(req, res) {
  wishlistBL.removeFromWishList(req, res);
});


router.post('/placeOrder', function(req, res) {
  checkoutBL.placeOrder(req, res);
});

router.post('/updateOrder', function(req, res) {
  orderBL.updateOrder(req, res);
});


router.post('/getOrders', function(req, res) {
  orderBL.getOrders(req, res);
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
