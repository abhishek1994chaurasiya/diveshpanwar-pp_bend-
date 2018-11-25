const orderDAL = require('../dataAccessLayer/orderDAL');

exports.getOrders = function(req, res) {
    orderDAL.getOrders(req, res);
}

exports.updateOrder = function(req, res) {
    orderDAL.updateOrder(req, res);
}