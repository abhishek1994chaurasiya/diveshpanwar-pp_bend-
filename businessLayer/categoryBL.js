var categoryDAL = require('../dataAccessLayer/categoryDAL');
exports.allCategories = function(req, res) {
    categoryDAL.allCategories(req, res);
}