export default {
  name: 'author',
  title: 'Author',
  type: 'object',
  fields: [
    {
      name: 'person',
      title: 'Actor',
      type: 'reference',
      to: [{ type: 'person' }],
    },
  ],
  preview: {
    select: {
      subtitle: 'characterName',
      title: 'person.name',
      media: 'person.image',
    },
  },
};
