var wishlistDAL = require('../dataAccessLayer/wishlistDAL');

exports.addToWishlist = function(req, res) {
    wishlistDAL.addToWishlist(req, res);
}

exports.removeFromWishList = function(req, res) {
    wishlistDAL.removeFromWishlist(req, res);
}

exports.getWishlist = function(req, res) {
    wishlistDAL.getWishlist(req, res);
}