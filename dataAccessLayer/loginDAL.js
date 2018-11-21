var mysql = require('../connections/sql.connector');

var loginDAL = function(loginObject) {
  var con;

  return mysql
    .then(connection => {
      con = connection;
      let result = con.query(
        'select * from users where username=? and password=?',
        [loginObject.username, loginObject.password]
      );
      return result;
    })
    .then(result => {
      return result;
    });
};

module.exports = loginDAL;
