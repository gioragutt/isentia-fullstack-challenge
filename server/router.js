const { Router } = require('express');
const {
  expressHelpers: { createApiEndpoint: _ },
} = require('@welldone-software/node-toolbelt');

const { fetchFlickrPublicFeed } = require('./app/flickr');

const router = new Router();

router.get('/feed', _(({ query: { tags, tagmode } }) => fetchFlickrPublicFeed(tags, tagmode)));

module.exports = router;
