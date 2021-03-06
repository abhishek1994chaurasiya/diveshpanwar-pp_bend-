var checkoutBean = function(addressId, cardId, userId, orderDate, grandTotal, orderStatus, products) {
    this.addressId = addressId;
    this.cardId = cardId;
    this.userId = userId;
    this.orderDate = orderDate;
    this.grandTotal = grandTotal;
    this.orderStatus = orderStatus;
    this.products = products
    this.deliveryDate = new Date(new Date().getTime() + (24*36000000));
    this.returnDate = new Date(new Date().getTime() + (24*36000000));
    this.canBeReturned = true;
  };
  
  checkoutBean.toObject = function(obj) {
    return new checkoutBean(obj.addressId, obj.cardId, obj.userId, obj.orderDate, obj.grandTotal, obj.orderStatus, obj.products);
  };
  
  module.exports = checkoutBean;
  