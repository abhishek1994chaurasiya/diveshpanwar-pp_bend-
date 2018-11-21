var signupBean = require('../beans/signup.bean');
var signupDAL = require('../dataAccessLayer/signupDAL');

var signupBL = function(req, res) {
    let signupObject = signupBean.toObject(req.body);
    signupDAL(req, res, signupObject);
}

module.exports = signupBL;