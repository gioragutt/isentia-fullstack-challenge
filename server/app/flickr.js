const axios = require('axios').create();

const { flickrPublicFeedApi } = require('./config');

const cleanupJsonFormat = (feed) => {
  const beginningOfJsonIndex = feed.indexOf('{');
  return feed.substring(beginningOfJsonIndex, feed.length - 1);
};

const fetchFlickrPublicFeed = async () => {
  const { data: feed } = await axios.get(flickrPublicFeedApi);
  const cleanedupUpFeed = JSON.parse(cleanupJsonFormat(feed));
  return cleanedupUpFeed.items;
};

module.exports = {
  fetchFlickrPublicFeed,
};
