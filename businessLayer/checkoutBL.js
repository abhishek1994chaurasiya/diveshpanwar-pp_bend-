const checkoutDAL = require('../dataAccessLayer/checkoutDAL');
exports.placeOrder = function(req, res) {
    checkoutDAL.placeOrder(req, res);
}