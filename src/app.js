const express = require('express');
const morgan = require('morgan');
const helmet = require('helmet');
const cors = require('cors');

require('dotenv').config();

const middleware = require('./middleware');
const routes = require('./routes');

const app = express();
app.use(morgan('dev'));
app.use(helmet());
app.use(cors());
app.use('/api', routes);

app.use(middleware.notFound);
app.use(middleware.errorHandler);

module.exports = app;