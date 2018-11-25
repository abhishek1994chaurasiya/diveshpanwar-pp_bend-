const orderDAL = require('../dataAccessLayer/orderDAL');

exports.getOrders = function(req, res) {
    orderDAL.getOrders(req, res);
}

exports.filterOrder = function(req, res) {
    orderDAL.filterOrder(req, res);
}

exports.updateOrder = function(req, res) {
    orderDAL.updateOrder(req, res);
}

exports.getOrderDetail = function(req, res) {
    orderDAL.getOrderDetail(req, res);
}