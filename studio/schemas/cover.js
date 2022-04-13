export default {
  title: 'Cover',
  name: 'cover',
  type: 'image',
  options: {
    hotspot: false,
  },
  fields: [
    {
      name: 'altText',
      title: 'Alt Text',
      type: 'string',
      options: {
        isHighlighted: true, // <-- make this field easily accessible
      },
    },
  ],
};
