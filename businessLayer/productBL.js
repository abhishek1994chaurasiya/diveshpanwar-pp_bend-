var productDAL = require('../dataAccessLayer/productDAL');
exports.allProducts = function(req, res) {
    productDAL.allProducts(req, res);
}

exports.singleProduct = function(req, res) {
    productDAL.singleProduct(req, res);
}