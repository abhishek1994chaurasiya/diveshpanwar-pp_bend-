var orderBean = function(addressId, cardId, userId, orderDate, grandTotal, orderStatus) {
    this.addressId = addressId;
    this.cardId = cardId;
    this.userId = userId;
    this.orderDate = orderDate;
    this.grandTotal = grandTotal;
    this.orderStatus = orderStatus;
  };
  
  orderBean.toObject = function(obj) {
    return new orderBean(obj.addressId, obj.cardId, obj.userId, obj.orderDate, obj.grandTotal, obj.orderStatus);
  };
  
  module.exports = orderBean;
  