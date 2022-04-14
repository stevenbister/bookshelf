const fakeData = {
  allBook: [
    {
      _id: '5483de4a-44fb-4b1c-8f13-586b0aa0e91b',
      title: "'Salems Lot",
      slug: {
        current: 'salems-lot',
      },
      author: {
        name: 'Stephen King',
      },
      series: null,
      blurbRaw: null,
      cover: null,
      readStatus: ['Read'],
    },
    {
      _id: 'eb00b46d-45ef-456c-91c6-14d367cbe611',
      title: 'The Great Hunt',
      slug: {
        current: 'the-great-hunt',
      },
      author: {
        name: 'Robert Jorden',
      },
      series: {
        name: 'The Wheel of Time',
      },
      blurbRaw: [
        {
          _key: '9dcaf55300d6',
          _type: 'block',
          children: [
            {
              _key: '0b7d7dc16684',
              _type: 'span',
              marks: [],
              text: 'The Wheel of Time turns and Ages come and pass. What was, what will be, and what is, may yet fall under the Shadow. For centuries, gleemen have told of The Great Hunt of the Horn. Now the Horn itself is found: the Horn of Valere long thought only legend, the Horn which will raise the dead heroes of the ages.',
            },
          ],
          markDefs: [],
          style: 'normal',
        },
        {
          _key: 'ebdf0a2542d8',
          _type: 'block',
          children: [
            {
              _key: '86ebb46153500',
              _type: 'span',
              marks: [],
              text: 'And it is stolen.',
            },
          ],
          markDefs: [],
          style: 'normal',
        },
      ],
      cover: {
        asset: {
          url: 'https://cdn.sanity.io/images/vvmrkra8/production/a1edf48182cb87b4216d07c05aac08b7ffa9e8d6-636x1000.jpg',
          altText: '',
        },
      },
      readStatus: ['Read'],
    },
    {
      _id: 'f4e7685b-1119-411f-855b-6f77e4816f6b',
      title: 'The Eye of the World',
      slug: {
        current: 'the-eye-of-the-world',
      },
      author: {
        name: 'Robert Jorden',
      },
      series: {
        name: 'The Wheel of Time',
      },
      blurbRaw: [
        {
          _key: '7dbedc86f6f4',
          _type: 'block',
          children: [
            {
              _key: 'adc9fcaa8f04',
              _type: 'span',
              marks: [],
              text: 'When she arrives in a small village in the Two Rivers, Moiraine discovers three young men, each of whom might be the long-awaited and reviled Chosen One, the Dragon Reborn. But she is not the only stranger new to the village, nor the only one searching.\n\nIn a race against time and the agents of the Shadow, she must guide her charges through lands of myth and legend, toward allies both new and old, and into the footsteps of prophecy.\n\nThe Wheel of Time turns, and an epic adventure begins.',
            },
          ],
          markDefs: [],
          style: 'normal',
        },
      ],
      cover: {
        asset: {
          url: 'https://cdn.sanity.io/images/vvmrkra8/production/3a0831dc96a22f3ae304e80e44e76e05e0bcb5c8-319x500.jpg',
          altText: '',
        },
      },
      readStatus: ['Read'],
    },
  ],
};

export default fakeData;
