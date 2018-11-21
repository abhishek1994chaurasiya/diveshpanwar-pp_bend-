var loginBean = require('../beans/login.bean');
var loginDAL = require('../dataAccessLayer/loginDAL');

var SqlLogin = function(req, res) {
  let loginObject = loginBean.toObject(req.body);
  loginDAL(loginObject).then(result => {
    if (result.length === 1) {
      res.json({ success: 'User have been authorized successfully' });
    } else {
      res.status(401).json({ error: 'User have not been authorized' });
    }
  });
};

module.exports = SqlLogin;
