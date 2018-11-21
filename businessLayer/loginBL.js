var loginBean = require('../beans/login.bean');
var loginDAL = require('../dataAccessLayer/loginDAL');

var SqlLogin = function(req, res) {
  let loginObject = loginBean.toObject(req.body);
  loginDAL(req, res, loginObject);
}

module.exports = SqlLogin;
