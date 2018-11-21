var errorLogger = function(err, req, res, next) {
  console.error(err);
  res.status(500).json({error: `<pre>${err.stack}<pre>`});
  next();
};

module.exports = errorLogger;
