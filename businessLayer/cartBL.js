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