var cardDAL = require('../dataAccessLayer/cardDL');
var cardBean = require('../beans/card.bean');

exports.addCard = function(req, res) {
    let cardObject = cardBean.toObject(req.body);
    cardDAL.addCard(req, res, cardObject);
}

exports.editCard = function(req, res) {
    let cardObject = cardBean.toObject(req.body);
    cardDAL.editCard(req, res, cardObject);
}

exports.deleteCard = function(req, res) {
    cardDAL.deleteCard(req, res);
}

exports.fetchCard = function(req, res) {
    cardDAL.fetchCard(req, res);
}