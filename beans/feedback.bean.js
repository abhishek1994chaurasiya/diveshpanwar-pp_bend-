var feedbackBean = function(rating, message, userId, productId, username, date) {
    this.rating = rating;
    this.message = message;
    this.userId = userId;
    this.productId = productId;
    this.username = username;
    this.date = date
  };
  
  feedbackBean.toObject = function(obj) {
    return new feedbackBean(obj.rating, obj.message, obj.userId, obj.productId, obj.username, obj.date);  
  };
  module.exports = feedbackBean;
  