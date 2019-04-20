export interface RawFeedItem {
  title: string;
  link: string;
  media: {
    m: string;
  };
  date_taken: string;
  description: string;
  published: string;
  author: string;
  author_id: number;
  tags: string;
}

export interface FeedItem {
  title: string;
  link: string;
  image: string;
  dateTaken: Date;
  published: Date;
  description: string;
  author: string;
  authorId: number;
  tags: string[];
}

export const parseRawFeedItem = ({
  tags: rawTags,
  media: { m: image },
  published,
  date_taken,
  author_id: authorId,
  ...rest
}: RawFeedItem): FeedItem => {
  const tags = rawTags.split(' ');

  return {
    ...rest,
    tags,
    image,
    published: new Date(published),
    dateTaken: new Date(date_taken),
    authorId,
  };
};
