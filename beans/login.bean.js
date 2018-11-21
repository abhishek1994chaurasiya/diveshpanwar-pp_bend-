var loginBean = function(email, password) {
  this.email = email;
  this.password = password;
};

loginBean.toObject = function(obj) {
  return new loginBean(obj.email, obj.password);
};

module.exports = loginBean;
