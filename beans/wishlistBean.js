var wishlistBean = function(
    productId,
    userId,
    displayName,
    price,
    offerPrice,
    discount,
    maxQty,
    extra,
    productQuantity,
    imgUrl
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
  };
  
  wishlistBean.toObject = function(obj) {
    return new wishlistBean(
      obj.productId,
      obj.userId,
      obj.displayName,
      obj.price,
      obj.offerPrice,
      obj.discount,
      obj.maxQty,
      obj.extra,
      obj.productQuantity,
      obj.imgUrl
    );
  };
  
  module.exports = wishlistBean;
  