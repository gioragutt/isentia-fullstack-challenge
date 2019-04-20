const axios = require('axios').create();

const { flickrPublicFeedApi } = require('./config');

const cleanupJsonFormat = (feed) => {
  const beginningOfJsonIndex = feed.indexOf('{');
  return feed.substring(beginningOfJsonIndex, feed.length - 1);
};

const constructFeedPath = (tags = '') => {
  if (!tags) {
    return flickrPublicFeedApi;
  }
  return `${flickrPublicFeedApi}&tags=${tags}`;
};

const fetchFlickrPublicFeed = async (tags) => {
  const feedPath = constructFeedPath(tags);
  const { data: feed } = await axios.get(feedPath);
  const cleanedupUpFeed = JSON.parse(cleanupJsonFormat(feed));
  return cleanedupUpFeed.items;
};

module.exports = {
  fetchFlickrPublicFeed,
};
