var signupBean = function(username, email, contact, password) {
  this.username = username.toLowerCase();
  this.email = email.toLowerCase();
  this.contact = contact;
  this.password = password;
};

signupBean.toObject = function(obj) {
  return new signupBean(obj.username, obj.email, obj.contact, obj.password);
};

module.exports = signupBean;
