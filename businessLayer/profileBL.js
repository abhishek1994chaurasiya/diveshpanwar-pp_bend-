const profileDAL = require('../dataAccessLayer/profileDAL');

exports.getProfileData = function(req, res) {
    profileDAL.getProfileData(req, res);
}

exports.getAddresses = function(req, res) {
    profileDAL.getAddresses(req, res);
}

exports.getCards = function(req, res) {
    profileDAL.getCards(req, res);
}

exports.getRecommendations = function(req, res) {
    profileDAL.getRecommendations(req, res);
}