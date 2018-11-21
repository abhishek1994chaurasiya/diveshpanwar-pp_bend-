var loginBean = function(uname, password) {
  this.username = uname;
  this.password = password;
};

loginBean.toObject = function(obj) {
  return new loginBean(obj.username, obj.password);
};

module.exports = loginBean;
