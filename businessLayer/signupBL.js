var signupBean = require('../beans/signup.bean');
var signupDAL = require('../dataAccessLayer/signupDAL');

exports.signupBL = function(req, res) {
    let signupObject = signupBean.toObject(req.body);
    signupDAL.signUpDAL(req, res, signupObject);
}

exports.editProfile = function(req, res) {
    let signupObject = signupBean.toObject(req.body);
    signupDAL.editProfile(req, res, signupObject);
}
