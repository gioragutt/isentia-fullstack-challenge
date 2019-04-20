const { Router } = require('express');
const {
  loggers: { logger },
  expressHelpers: { createApiEndpoint: _ },
} = require('@welldone-software/node-toolbelt');

const router = new Router();

router.get(
  '/lobbies',
  _(() => {
    logger.info("All's good!");
    return ['just an example'];
  }),
);

module.exports = router;
