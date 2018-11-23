var addressBean = function(name, contact, address, userId) {
    this.name = name;
    this.contact = contact;
    this.address = address;
    this.userId = userId;
  };
  
  addressBean.toObject = function(obj) {
    return new addressBean(obj.name, obj.contact, obj.address, obj.userId);
  };
  
  module.exports = addressBean;
  