const feedbackDAL = require('../dataAccessLayer/feedbackDAL');

exports.giveFeedback = function(req, res) {
    feedbackDAL.giveFeedback(req, res);
}

exports.getFeedbacks = function(req, res) {
    feedbackDAL.getFeedbacks(req, res);
}

exports.userBroughtProduct = function(req, res) {
    feedbackDAL.userBroughtProduct(req, res);
}