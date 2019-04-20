const {
  configs: { mapEnv },
} = require('@welldone-software/node-toolbelt');

module.exports = mapEnv({
  port: 3000,
  flickrPublicFeedApi: 'https://api.flickr.com/services/feeds/photos_public.gne?format=json',
});
