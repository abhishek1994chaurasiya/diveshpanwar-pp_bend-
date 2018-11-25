var notificationDAL = require('../dataAccessLayer/notificationDAL');

exports.getNotifications = function(req, res) {
    notificationDAL.getNotifications(req, res);
}

exports.updateNotification = function(req, res) {
    notificationDAL.updateNotification(req, res);
}