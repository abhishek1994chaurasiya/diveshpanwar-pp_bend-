var notificationBean = function(status, message, userId) {
    this.status = status;
    this.message = message;
    this.userId = userId;
  };
  
  notificationBean.toObject = function(obj) {
    return new notificationBean(obj.status, obj.message, obj.userId);
  };
  
  module.exports = notificationBean;
  