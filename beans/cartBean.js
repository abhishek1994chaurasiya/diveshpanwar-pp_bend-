var cartBean = function(
  productId,
  userId,
  displayName,
  price,
  offerPrice,
  discount,
  maxQty,
  extra,
  productQuantity,
  imgUrl,
  category
) {
  this.productId = productId;
  this.userId = userId;
  this.displayName = displayName;
  this.price = price;
  this.offerPrice = offerPrice;
  this.discount = discount;
  this.maxQty = maxQty;
  this.extra = extra;
  this.productQuantity = productQuantity;
  this.imgUrl = imgUrl;
  this.category = category;
  this.canBeReviewed = false;
  this.orderId = 'na'
};

cartBean.toObject = function(obj) {
  return new cartBean(
    obj.productId,
    obj.userId,
    obj.displayName,
    obj.price,
    obj.offerPrice,
    obj.discount,
    obj.maxQty,
    obj.extra,
    obj.productQuantity,
    obj.imgUrl,
    obj.category
  );
};

module.exports = cartBean;
