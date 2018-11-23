var addressDAL = require('../dataAccessLayer/addressDL');
var addressBean = require('../beans/address.bean');

exports.addAddress = function(req, res) {
    let addressObject = addressBean.toObject(req.body);
    addressDAL.addAddress(req, res, addressObject);
}

exports.editAddress = function(req, res) {
    let addressObject = addressBean.toObject(req.body);
    addressDAL.editAddress(req, res, addressObject);
}

exports.fetchAddress = function(req, res) {
    addressDAL.fetchAddress(req, res);
}