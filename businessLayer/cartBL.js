const cartDAL = require('../dataAccessLayer/cartDAL');

exports.addBulkCart = function(req, res) {
    cartDAL.addBulkCart(req, res);
}

exports.getCartItems = function(req, res) {
    cartDAL.getCartItems(req, res);
}

exports.addOneProduct = function(req, res) {
    cartDAL.addOneProduct(req, res);
}

exports.toggleQuantity = function(req, res) {
    cartDAL.toggleQuantity(req, res);
}

exports.removeCartItem = function(req, res) {
    cartDAL.removeCartItem(req, res);
}

exports.addFromWishlist = function(req, res) {
    cartDAL.addFromWishlist(req, res);
}