const axios = require('axios').create();

const { flickrPublicFeedApi } = require('./config');

const cleanupJsonFormat = (feed) => {
  const beginningOfJsonIndex = feed.indexOf('{');
  return feed.substring(beginningOfJsonIndex, feed.length - 1);
};

const constructFeedPath = (tags = '', tagmode = 'any') => {
  if (!tags) {
    return flickrPublicFeedApi;
  }
  return `${flickrPublicFeedApi}&tags=${tags}&tagmode=${tagmode}`;
};

const parseRawFeedItem = ({
  tags: rawTags,
  media: { m: image },
  published,
  // eslint-disable-next-line camelcase
  date_taken,
  author_id: authorId,
  ...rest
}) => {
  const tags = rawTags ? rawTags.split(' ') : [];

  return {
    ...rest,
    tags,
    image,
    published: new Date(published),
    dateTaken: new Date(date_taken),
    authorId,
  };
};

const fetchFlickrPublicFeed = async (tags, tagmode) => {
  const feedPath = constructFeedPath(tags, tagmode);
  const { data: feed } = await axios.get(feedPath);
  const cleanedupUpFeed = JSON.parse(cleanupJsonFormat(feed));
  return cleanedupUpFeed.items.map(parseRawFeedItem);
};

module.exports = {
  fetchFlickrPublicFeed,
};
