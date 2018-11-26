var productDAL = require('../dataAccessLayer/productDAL');
exports.allProducts = function(req, res) {
    productDAL.allProducts(req, res);
}

exports.allDeals = function(req, res) {
    productDAL.allDeals(req, res);
}

exports.singleProduct = function(req, res) {
    if(req.body.productId.length == 24 ) {
            productDAL.singleProduct(req, res);
    } else {
        res.status(400).json({message: 'Product Id is invalid'});
    }
}

exports.searchProduct = function(req, res) {
    productDAL.searchProduct(req, res);
}

exports.getProductCategory = function(req, res) {
    productDAL.getProductCategory(req, res);
}