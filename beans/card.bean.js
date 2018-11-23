var cardBean = function(cardType, cardNumber, userId, expiry) {
    this.cardType = cardType;
    this.cardNumber = cardNumber;
    this.userId = userId;
    this.expiry = expiry;
  };
  
  cardBean.toObject = function(obj) {
    return new cardBean(obj.cardType, obj.cardNumber, obj.userId, obj.expiry);
  };
  
  module.exports = cardBean;
  