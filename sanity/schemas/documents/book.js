import { BookIcon } from '@sanity/icons';

export default {
  name: 'book',
  title: 'Book',
  type: 'document',
  icon: BookIcon,
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 100,
      },
    },
    {
      name: 'cover',
      title: 'Cover',
      type: 'image',
      options: {
        hotspot: false,
      },
    },
    {
      name: 'author',
      title: 'Author',
      type: 'array',
      of: [{ type: 'author' }],
    },
  ],
  preview: {
    select: {
      title: 'title',
      media: 'cover',
      author: 'author',
    },
  },
};
