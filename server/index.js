const express = require('express');
const {
  loggers: { logger, expressLogger },
  expressHelpers: { errorHandler },
} = require('@welldone-software/node-toolbelt');

const path = require('path');
const cors = require('cors');
const bodyParser = require('body-parser');

const config = require('./app/config');
const router = require('./router');

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(expressLogger());
app.set('trust proxy', 'loopback');
app.disable('x-powered-by');
app.use('/api/v1', router);
app.use(errorHandler);

const CLIENT_PATH = path.join(__dirname, '..', 'dist', 'isentia-fullstack-challenge');

app.use(express.static(CLIENT_PATH));

app.use('*', (_, res) => res.sendFile(path.resolve(CLIENT_PATH, 'index.html')));

const server = app.listen(config.port, () => {
  logger.info(server.address(), 'http server started');
});
