const express = require('express');

const port = 3000;
const cors = require('cors');
const bodyParser = require('body-parser');
const router = require('./routing/router');
const requestLogger = require('./middlewares/requestLogger');
const errorLogger = require('./middlewares/errorLogger');

var app = express();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(requestLogger);
app.use('/', router);
app.use(errorLogger);
app.listen(process.env.port || port, () => {
  console.log(`App launched at port ${port}`);
});
