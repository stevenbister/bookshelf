const fakeData_formatted = [
  {
    _id: '2f07baf9-756d-40c6-9722-9d1a74ec8749',
    title: 'This is Going to Hurt: Secret Diaries of a Junior Doctor',
    author: [
      {
        name: 'Adam Kay',
        slug: {
          current: 'adam-kay',
        },
      },
    ],
    slug: {
      current: 'this-is-going-to-hurt',
    },
    series: '',
    bookNumber: null,
    readStatus: ['Read'],
    cover: {
      asset: {
        url: 'https://cdn.sanity.io/images/vvmrkra8/production/7e4a8e27047dca5ce034f9ec89ea7dc606221581-1688x2560.jpg',
        altText: null,
        metadata: {
          lqip: 'data:image/jpeg;base64,/9j/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAeABQDASIAAhEBAxEB/8QAGQAAAgMBAAAAAAAAAAAAAAAAAAUCBgcD/8QAJRAAAgIBAgYCAwAAAAAAAAAAAQIDBAAFEQYHEhMhIiMxMkJR/8QAGAEAAwEBAAAAAAAAAAAAAAAABAUGAAP/xAAdEQACAgIDAQAAAAAAAAAAAAABAgADBAURITFB/9oADAMBAAIRAxEAPwBnYHcn6QDuxAGIeJnOj32rSuSsi/lt4ywafaYSiRAZujysY+ycWcxYFWjSl7oSUK3USP7jbPzSloRD19kdp9Wt9LW2D3yZzZZTMTvhii1abu+8oZtvsnDOwyVYczHDZepqvDNt2rvPC6jyBvnXmGHt6OneZV9v185QOD9beGgsXSSGlG5yxa5rstmvKGX0A8DFGUWttLyl19Iox1QfJkt347UqqSQGIBwyNxg9l2A23OGEK3QgrrwxE//Z',
        },
      },
    },
    relatedBooks: [],
  },
  {
    _id: 'c27b860c-51cd-4f2f-83f2-52fc72bf5c73',
    title: 'The Last Wish',
    author: [
      {
        name: 'Andrzej Sapkowski',
        slug: {
          current: 'andrzej-sapkowski',
        },
      },
    ],
    slug: {
      current: 'the-last-wish',
    },
    series: 'The Witcher',
    bookNumber: 1,
    readStatus: ['Reading'],
    cover: {
      asset: {
        url: 'https://cdn.sanity.io/images/vvmrkra8/production/b6474707bb6845cdc5e2f0901067b76c57d2e8f5-1043x1600.webp',
        altText: null,
        metadata: {
          lqip: 'data:image/jpeg;base64,/9j/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAfABQDASIAAhEBAxEB/8QAGAAAAwEBAAAAAAAAAAAAAAAAAAUGBwj/xAAnEAACAQQBAgUFAAAAAAAAAAABAgMABAUREhMhBgcxUXEWMkGBsf/EABYBAQEBAAAAAAAAAAAAAAAAAAIDBP/EABoRAQADAQEBAAAAAAAAAAAAAAEAAhEDBEH/2gAMAwEAAhEDEQA/AM38lIsLj5bvI5NjK8cJPTPYVs3hDxLg/pvMZDBrHb5AR8pEY6JPp2rmvBWlzdY2V4CFi3xYFtEj3+KoI5bu0x4tYViCMhXYYb/ZrB287dXZqr0AwJVeNfM6zv8ALxvBZPL04EjdmOjyG9/2isYzKzW2QljY7PYk0VevCoBJvV2N8Zm7iG1jG4olA4Ltd8vmm0t7eSBXiREj1vtHsE/moqFg3SLsOKH7detVOOzEFphL2N3czTjiiqOye5qlh+EBaJ83czzXge46IcoOy+1FJptmVjy5d/U0U8h2f//Z',
        },
      },
    },
    relatedBooks: [
      {
        _id: 'c27b860c-51cd-4f2f-83f2-52fc72bf5c73',
        title: 'The Last Wish',
        slug: {
          current: 'the-last-wish',
        },
        readStatus: ['Read'],
        cover: {
          asset: {
            url: 'https://cdn.sanity.io/images/vvmrkra8/production/b6474707bb6845cdc5e2f0901067b76c57d2e8f5-1043x1600.webp',
            altText: null,
            metadata: {
              lqip: 'data:image/jpeg;base64,/9j/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAfABQDASIAAhEBAxEB/8QAGAAAAwEBAAAAAAAAAAAAAAAAAAUGBwj/xAAnEAACAQQBAgUFAAAAAAAAAAABAgMABAUREhMhBgcxUXEWMkGBsf/EABYBAQEBAAAAAAAAAAAAAAAAAAIDBP/EABoRAQADAQEBAAAAAAAAAAAAAAEAAhEDBEH/2gAMAwEAAhEDEQA/AM38lIsLj5bvI5NjK8cJPTPYVs3hDxLg/pvMZDBrHb5AR8pEY6JPp2rmvBWlzdY2V4CFi3xYFtEj3+KoI5bu0x4tYViCMhXYYb/ZrB287dXZqr0AwJVeNfM6zv8ALxvBZPL04EjdmOjyG9/2isYzKzW2QljY7PYk0VevCoBJvV2N8Zm7iG1jG4olA4Ltd8vmm0t7eSBXiREj1vtHsE/moqFg3SLsOKH7detVOOzEFphL2N3czTjiiqOye5qlh+EBaJ83czzXge46IcoOy+1FJptmVjy5d/U0U8h2f//Z',
            },
          },
        },
      },
      {
        _id: '0b3d7153-98bc-44b6-8c7b-763e904b3dac',
        title: 'Blood of Elves',
        slug: {
          current: 'blood-of-elves',
        },
        readStatus: ['Read'],
        cover: {
          asset: {
            url: 'https://cdn.sanity.io/images/vvmrkra8/production/d89dd70c3ceac3097b4672a361ba61f0b6e901f8-653x1000.jpg',
            altText: null,
            metadata: {
              lqip: 'data:image/jpeg;base64,/9j/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAfABQDASIAAhEBAxEB/8QAFwAAAwEAAAAAAAAAAAAAAAAAAAQFBv/EACIQAAICAQQDAQEBAAAAAAAAAAECAwQRAAUGMRITIUFRIv/EABgBAAIDAAAAAAAAAAAAAAAAAAMFAQIE/8QAHxEAAQQCAgMAAAAAAAAAAAAAAQACESEDEhMUBDHR/9oADAMBAAIRAxEAPwDC8S43XFZWtq00i5b1hfL5jsj+ajcn4jbqHNQmKpZ/2tfslvw4/BprgXI94oUbFyutd3lT0EynDKv9Gm9+3zdbVAQxvAJZW8mmLZPz80k4vIZl2BmU25cLsepH1YynJepwellYMpORnrRqFvE9yvuEscsxZwfpHR0aYdcuswsvZDaBKq7Tv9lIFVWjT1gLj15yNMWOQWbDhoQqIvaiPP3WdqTQrBIHJEjH5gdaajvxRTxvEMeIwwx3opbdBBbrAkpXdtwmu3WlmVQ2AvxcdaNM3rVWxYMnp8cjodaNWDq9KDjE0V//2Q==',
            },
          },
        },
      },
      {
        _id: '5caa192f-50ce-473f-b724-c1f1e2fe2c60',
        title: 'Time of Contempt',
        slug: {
          current: 'time-of-contempt',
        },
        readStatus: ['Read'],
        cover: {
          asset: {
            url: 'https://cdn.sanity.io/images/vvmrkra8/production/1d42134148cc5cd4bdf8b41dd7088fc3d4a5eb2f-1482x2258.jpg',
            altText: null,
            metadata: {
              lqip: 'data:image/jpeg;base64,/9j/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAeABQDASIAAhEBAxEB/8QAGQAAAgMBAAAAAAAAAAAAAAAAAAQDBQYH/8QAIxAAAgICAgICAwEAAAAAAAAAAQIDBAARBQYSITFhEzJRgf/EABcBAQEBAQAAAAAAAAAAAAAAAAEDAgT/xAAbEQACAgMBAAAAAAAAAAAAAAAAAQIRAxIhMf/aAAwDAQACEQMRAD8A4qGRaaEFSS2yuavsXZqvL0OKp1g0awIFfyPwcpeC4A2aIsySKrhvcbA78f7jUvX00n45IgCTs6PrOlSZMq7MkQmYaDfYwyDl+NepcMUJd08QdgYZhvo0T1ew2o449TOHXQKqo0RjlnsNlp4/MyQet+PiBv7yiSEJEsg/Ye86V27galnrPW+Sba3LCeMjL8ED4/3KrE3wLXphLfN25ZiVfyUDQJX3hjF/gGrWDGk4I1vDB4Zp1QbI/9k=',
            },
          },
        },
      },
      {
        _id: 'd1fddb45-cd70-47ec-bc67-087ecf2f0e4f',
        title: 'Baptism of Fire',
        slug: {
          current: 'baptism-of-fire',
        },
        readStatus: ['Read'],
        cover: {
          asset: {
            url: 'https://cdn.sanity.io/images/vvmrkra8/production/4935a6289852c725ef933bda686c36a05a8cd920-329x499.jpg',
            altText: null,
            metadata: {
              lqip: 'data:image/jpeg;base64,/9j/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAeABQDASIAAhEBAxEB/8QAGAAAAwEBAAAAAAAAAAAAAAAAAAUGBwP/xAAkEAACAgICAQQDAQAAAAAAAAABAgMEAAUREiEGFDFBBzJRI//EABcBAQEBAQAAAAAAAAAAAAAAAAMCBAX/xAAcEQACAgMBAQAAAAAAAAAAAAABAgARAxIxBFH/2gAMAwEAAhEDEQA/AM63eyt7m1NsGIcxDohY8Dk/zHkNeHVaKBUrtNsZyshn7eBx85OaXWtY1rJJJJGwPKr18MPs4wsVpmrVoWsSssfIU9eCM5T+diAq8EUOB2WW4/Ib05oIXlHZYV54P3hmKepa88O3lRy5A46lvkjDHXDQAJk7Rj7mZ3kdrUjBB+oPHBzlYt2bZjkM8pP6jqxxz6K3Nc31hu0IZ3ZWUuVHkH+4zexrl9I2Pba6OO4k7ATffjDb0HG2tfJS49hdyC2rl7X+lhnZVC9mPk4YptzNPO0jfJ+cM2BDXYdz/9k=',
            },
          },
        },
      },
      {
        _id: 'ab6d9ec6-986e-4186-8abf-f1899c15b7c6',
        title: 'The Tower of the Swallow',
        slug: {
          current: 'the-tower-of-the-swallow',
        },
        readStatus: ['Read'],
        cover: {
          asset: {
            url: 'https://cdn.sanity.io/images/vvmrkra8/production/973ac03e7f7aacaa5e465a3027e27c9e67bf9212-325x499.jpg',
            altText: null,
            metadata: {
              lqip: 'data:image/jpeg;base64,/9j/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAfABQDASIAAhEBAxEB/8QAGQAAAgMBAAAAAAAAAAAAAAAAAAQFBgcD/8QAJBAAAQMEAgEFAQAAAAAAAAAAAQIDBAAFERITIVEiIzEyYXH/xAAYAQACAwAAAAAAAAAAAAAAAAABBAACBf/EABoRAAIDAQEAAAAAAAAAAAAAAAABAgMRIVH/2gAMAwEAAhEDEQA/AIEXMi1vKec416nUeKUs12Lxt7CSPtknHeKor0+RcAVL3U0k4ykdD8puImTF1fgc3MD0MfNFi8KVGLXpqwG5UUoOM0VE2m/Ew0i4ARpIOFIV0f7RQ6IyraeGe2G4sRYnG2h1QI9wAD7ealXbsWmkpSp9ST2NQBiq1CjuKeJjrCGj8kjNOKRIWpfup1A9Jx4q2mpp2nT4Mx/lfW8XManP5RVecVo4oOHKs5OKKgT/2Q==',
            },
          },
        },
      },
      {
        _id: '7449d00e-7c1d-433d-9637-48a6140fc147',
        title: 'The Lady of the Lake',
        slug: {
          current: 'the-lady-of-the-lake',
        },
        readStatus: ['Read'],
        cover: {
          asset: {
            url: 'https://cdn.sanity.io/images/vvmrkra8/production/0ca64a8fd9ec822cfdb571901930a9014c7bf8d2-653x1000.jpg',
            altText: null,
            metadata: {
              lqip: 'data:image/jpeg;base64,/9j/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAfABQDASIAAhEBAxEB/8QAGgAAAgIDAAAAAAAAAAAAAAAAAAIDBgQFB//EACQQAAICAgEEAgMBAAAAAAAAAAECAwQAEQUGEhMhMVEiMkFh/8QAFgEBAQEAAAAAAAAAAAAAAAAAAwUE/8QAHREAAgICAwEAAAAAAAAAAAAAAAIBIQMREhMUMf/aAAwDAQACEQMRAD8An6jjrUOqIVikBC+3QfsB95ob9sxdSRyJXfZQso/rE/G8q0vJW7+78c/exIUszabWMtu3JYimmn2U9p+X1lB3jdE5MUxFl+4Szet0zLFVWVe8juI97+sM5xZ615PhbEtWCftQt5NL8bOGL3KH52MDk4uS4dERjCCNJoLvIpLtxmWRvGgUb7e3JOoXa7BGdkbkB3v4xfCKtNe4eRyPknM7JdDplnjf0WarDyTCeVHdtBdqNDDHqSFIFB2P8U+sMSEXQM5n2f/Z',
            },
          },
        },
      },
    ],
  },
  {
    _id: '1f1b975e-7926-43f3-b116-09235eecf05b',
    title: 'Arcanium Unbounded',
    author: [
      {
        name: 'Brandon Sanderson',
        slug: {
          current: 'brandon-sanderson',
        },
      },
    ],
    slug: {
      current: 'arcanium-unbounded',
    },
    series: '',
    bookNumber: null,
    readStatus: ['Read'],
    cover: {
      asset: {
        url: 'https://cdn.sanity.io/images/vvmrkra8/production/939e941a3e5b29991315634536cf8b702c21a6df-329x500.jpg',
        altText: null,
        metadata: {
          lqip: 'data:image/jpeg;base64,/9j/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAeABQDASIAAhEBAxEB/8QAGQAAAwADAAAAAAAAAAAAAAAAAAYHAwUI/8QAJxAAAQMDBAEDBQAAAAAAAAAAAQIDBAAFEQYSITFxBxMyFCJhkcH/xAAXAQEBAQEAAAAAAAAAAAAAAAABAgAD/8QAGxEBAAICAwAAAAAAAAAAAAAAAAESEWEhMVH/2gAMAwEAAhEDEQA/AKpctZSmXXCZKQgOBASRjBNZF6puSQfZdQ4oElQyOqhFzjyWYl1Mua+8tpxpxO9fyyevOKaWLo0q3OIDRYcyVE558ZrnN56HJ0uXq+7Z5RiTYSlOgBWR1g0VOLhGjagmuzH5YYUk+0EE84SBzRTSfWwSJVzRLtLqkqVvcCQsKPJx0arGh2LTqvTDcQvfSXVtJO4j5p/tRGwSUTLa0y82N2OFAcnzTXZ7m7Z1NKYWrcD9hHBH4ptoW02k3ROppMp16BDfkRlqOxxvpQ6oroPRrjtw03ClNhDaXEbtu4jH6oqlP//Z',
        },
      },
    },
    relatedBooks: [],
  },
  {
    _id: 'efb4d371-1c33-4feb-841b-9a7c3cf8eb48',
    title: 'Elantris',
    author: [
      {
        name: 'Brandon Sanderson',
        slug: {
          current: 'brandon-sanderson',
        },
      },
    ],
    slug: {
      current: 'elantris',
    },
    series: '',
    bookNumber: null,
    readStatus: ['Read'],
    cover: {
      asset: {
        url: 'https://cdn.sanity.io/images/vvmrkra8/production/eff83506c3842bd3543d44992e5ffc7f0c1dbdef-652x1000.jpg',
        altText: null,
        metadata: {
          lqip: 'data:image/jpeg;base64,/9j/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAfABQDASIAAhEBAxEB/8QAGAAAAwEBAAAAAAAAAAAAAAAAAAQHBgj/xAAnEAABAwQBAwMFAAAAAAAAAAABAgMEAAUGEQcSITETUWEUIiNBQv/EABcBAQEBAQAAAAAAAAAAAAAAAAMBAAL/xAAZEQADAQEBAAAAAAAAAAAAAAAAAQISEwP/2gAMAwEAAhEDEQA/ANPy9ydcYrjcLHnlRpKPuKiPNTPFOZMnZvyUXqZ9UwrYU2tOtfI+a2GeWGXcsiE+Sx6SEg9Lf9GobljTz2S9DTepClBHQkUE2nWAV6J3zOm7bk6bhETIU+22VE9l+T80VicTxlbNkZRMH5/KtgmiuucovKSt8htSG0KegxVSXydem2jZ1Uwxniy+TORTebrCDMLQUkE/vVdD3KDKflFTLoS3061470q9bbkptKUyyCD7+ay80q0VQlWhuFYYTEdLZZSSPJ1RT8Bt1qI2h9fW4B3V70Uoh//Z',
        },
      },
    },
    relatedBooks: [],
  },
  {
    _id: '9f40fb32-3160-4c33-8611-2d18d02bd55f',
    title: 'The Final Empire',
    author: [
      {
        name: 'Brandon Sanderson',
        slug: {
          current: 'brandon-sanderson',
        },
      },
    ],
    slug: {
      current: 'the-final-empire',
    },
    series: 'Mistborn',
    bookNumber: 1,
    readStatus: ['Read'],
    cover: {
      asset: {
        url: 'https://cdn.sanity.io/images/vvmrkra8/production/cd909e680992b199a55858f43bfda3fba5fea21d-324x500.jpg',
        altText: null,
        metadata: {
          lqip: 'data:image/jpeg;base64,/9j/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAfABQDASIAAhEBAxEB/8QAGQAAAgMBAAAAAAAAAAAAAAAAAAUDBAcG/8QAJBAAAQMDBAIDAQAAAAAAAAAAAQIDBAAFEQYSITETQQciUUL/xAAXAQEBAQEAAAAAAAAAAAAAAAABAgME/8QAHBEAAgEFAQAAAAAAAAAAAAAAAAERAhIhIjFR/9oADAMBAAIRAxEAPwDR5PyHMfkv28pxIxwWx1g810A+Q44tcgKYealsseQJc4Kx+0n07o5+Jf7pckcvvOBLe8ZCUk80xuGjX3pFylvMpeW6khDYOMj0KjJeBfP1uESlKGdrgS4nnoFIopfbtByFx8yU7HNx+pOdo/KKJY2o1NU9AC8MOpUfYTSLT11uBu85ueHBHbVhG5PY9HNPLhaFypPlRKdaTjG1J4qs9pwurKjOkJJ9A1sqlyDndL7JdTJZVk47OaKnhwG48dDaj5Cn+ldmijUd/T//2Q==',
        },
      },
    },
    relatedBooks: [
      {
        _id: '9f40fb32-3160-4c33-8611-2d18d02bd55f',
        title: 'The Final Empire',
        slug: {
          current: 'the-final-empire',
        },
        readStatus: ['Read'],
        cover: {
          asset: {
            url: 'https://cdn.sanity.io/images/vvmrkra8/production/cd909e680992b199a55858f43bfda3fba5fea21d-324x500.jpg',
            altText: null,
            metadata: {
              lqip: 'data:image/jpeg;base64,/9j/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAfABQDASIAAhEBAxEB/8QAGQAAAgMBAAAAAAAAAAAAAAAAAAUDBAcG/8QAJBAAAQMDBAIDAQAAAAAAAAAAAQIDBAAFEQYSITETQQciUUL/xAAXAQEBAQEAAAAAAAAAAAAAAAABAgME/8QAHBEAAgEFAQAAAAAAAAAAAAAAAAERAhIhIjFR/9oADAMBAAIRAxEAPwDR5PyHMfkv28pxIxwWx1g810A+Q44tcgKYealsseQJc4Kx+0n07o5+Jf7pckcvvOBLe8ZCUk80xuGjX3pFylvMpeW6khDYOMj0KjJeBfP1uESlKGdrgS4nnoFIopfbtByFx8yU7HNx+pOdo/KKJY2o1NU9AC8MOpUfYTSLT11uBu85ueHBHbVhG5PY9HNPLhaFypPlRKdaTjG1J4qs9pwurKjOkJJ9A1sqlyDndL7JdTJZVk47OaKnhwG48dDaj5Cn+ldmijUd/T//2Q==',
            },
          },
        },
      },
      {
        _id: '2baf5414-1555-4893-b1ac-ee3d54fb7d5b',
        title: 'The Well of Ascension',
        slug: {
          current: 'the-well-of-ascension',
        },
        readStatus: ['Read'],
        cover: {
          asset: {
            url: 'https://cdn.sanity.io/images/vvmrkra8/production/32683d512a6179c9c5d55f7a77055ae8b3f39bdc-443x675.webp',
            altText: null,
            metadata: {
              lqip: 'data:image/jpeg;base64,/9j/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAeABQDASIAAhEBAxEB/8QAGwAAAQQDAAAAAAAAAAAAAAAAAAEFBgcCBAj/xAAmEAACAQQBBAEFAQAAAAAAAAABAgMABAUREgYhMUFRExQiM2Fx/8QAFwEBAQEBAAAAAAAAAAAAAAAAAAECA//EABkRAAMAAwAAAAAAAAAAAAAAAAABEQISIf/aAAwDAQACEQMRAD8A6GzeQNrNDCuzJJsnfgCmMZt5ZGRFZyjflrZFOVxm7d8jkLO4tzHNEp+lIy7DdvVVx0DfS4jP5G2v7tpo5AJAddgx81vF9OeS4XLbyNJCjxluLAEb80VliZ/urCObiBy9UVKXUj/Vstvb278FVrmT9YYdt/JNQPpbHZF8s97mr62SAyaaGKH0PHf+1Y+UxC3E3OR27+t+K1BhED7Ejf5ypGNkP9pDHDEQrMVJ5Dv80UlnaGG3SMOWC+ydmikQrP/Z',
            },
          },
        },
      },
      {
        _id: '50ffe4f0-eb9e-4c17-9334-5559d7021ac1',
        title: 'The Hero of Ages',
        slug: {
          current: 'the-hero-of-ages',
        },
        readStatus: ['Read'],
        cover: {
          asset: {
            url: 'https://cdn.sanity.io/images/vvmrkra8/production/a94af0474bcbd9a29f02cc2feff9312bddc5403e-326x500.jpg',
            altText: null,
            metadata: {
              lqip: 'data:image/jpeg;base64,/9j/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAfABQDASIAAhEBAxEB/8QAGAAAAwEBAAAAAAAAAAAAAAAAAAYHBAj/xAAoEAABBAIBAgYCAwAAAAAAAAABAgMEBQARBhIiEyExQVFhBxQVccH/xAAWAQEBAQAAAAAAAAAAAAAAAAADAAH/xAAaEQEBAQADAQAAAAAAAAAAAAABABECEzFB/9oADAMBAAIRAxEAPwCx8bsv5mrnPvNKYLilNtdu+32OIXI40yTT2XHL1DEhl1IU06gaXrfqR9ZusjcSbwV9DYKh10ZPa6E9pI9cXObUlxFtK6ZHtHVNujw5DhHetJ+PgYzzRx8iOAm0YWmXxl56sXHD/hrJCwNgg+mGP3JptFBszHnOkPIQNhH+/eGb2p42dZ9K78yhpgPwXGQkNodHU3vpTo+5OIXOrL9MSXJyFR2NdLalOb6j7BOVXl1XOuGJMLw2DEdA0pR0oayaw/xBFslB6wXImpbV2h2SojY+sHJdpM/wKx5A8uwQ4Alw+W2+ry/vDOtaSgiw65pgx0N9I10pOwMMtq//2Q==',
            },
          },
        },
      },
      {
        _id: 'e689883e-3600-45e9-b0cd-7ee4e390a0d3',
        title: 'The Alloy of Law',
        slug: {
          current: 'the-alloy-of-law',
        },
        readStatus: ['Read'],
        cover: {
          asset: {
            url: 'https://cdn.sanity.io/images/vvmrkra8/production/9eb9aa165dcddfb93edb3bf2a817a24a1c5fdb39-580x887.jpg',
            altText: null,
            metadata: {
              lqip: 'data:image/jpeg;base64,/9j/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAfABQDASIAAhEBAxEB/8QAGgAAAwADAQAAAAAAAAAAAAAAAAYIAwQFB//EACUQAAICAgICAgEFAAAAAAAAAAECAwQAEQUGEiEHMSIjQVFxwf/EABcBAQADAAAAAAAAAAAAAAAAAAABAwT/xAAcEQACAgIDAAAAAAAAAAAAAAAAAQIDETESMlH/2gAMAwEAAhEDEQA/AKO55Wq17N6a88NeJCxCj6AxK6l3in2DmTx0Ni3DK67iMoGn1/uMPyNZqRcBbimlAeRQGUEb8f6zwzpnL07XfKctGOWOKlJ4Egght+sApunC8FdUklaVh9sfs4ZlRw6Bl9gjeGATp8jdf7BynZuQtx17UkE1ZY0J9BDv36xf698bcvDPFahLxBG/UU/j5D98pm49lJW0FZD9bznTQz2dJKiEH1saGXJxezNLkupqcRbsx8dAkdeQKqgaJ3hjNRrGKsiOF8h/GGS7I+BVSxs//9k=',
            },
          },
        },
      },
      {
        _id: '4d9669ba-7851-483a-bddb-2dc0bbd380d2',
        title: 'Shadows of Self',
        slug: {
          current: 'shadows-of-self',
        },
        readStatus: ['Read'],
        cover: {
          asset: {
            url: 'https://cdn.sanity.io/images/vvmrkra8/production/228bfd1aaa543f536d2c8767539b044d9298e203-329x500.jpg',
            altText: null,
            metadata: {
              lqip: 'data:image/jpeg;base64,/9j/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAeABQDASIAAhEBAxEB/8QAGQAAAwEBAQAAAAAAAAAAAAAAAAQHBgUI/8QAJhAAAgIBAgYCAwEAAAAAAAAAAQIDBAAFIQYHERIxQRNRFDJhcf/EABUBAQEAAAAAAAAAAAAAAAAAAAID/8QAGhEAAwEBAQEAAAAAAAAAAAAAAAESESFRAv/aAAwDAQACEQMRAD8A9BavHfrTTWZNSWvU8gv0AXMtpXFMurXWqaXq8dmaNiGQdAxH30OdnmtHFc4RsANvEyyAez0PjJbyy4d+bmTHfeNliiTvTffce8cOdYKW4XvTXstVBsIVk6+CcMdwwDMrxqqLWrwLF3fNIA23rJjyvXWYOL9dVwWqQWe1HI2PX+5Z7teRpu5XUj0GHjEK9B4JHaIxoXbuboP2P2ctXEiL+et4PflWE2dN/wDMMcq95hHykM33hhpeCl+n/9k=',
            },
          },
        },
      },
      {
        _id: '025adbd1-4021-4e31-b751-42bf8cbce916',
        title: 'The Bands of Mourning',
        slug: {
          current: 'the-bands-of-mourning',
        },
        readStatus: ['Read'],
        cover: {
          asset: {
            url: 'https://cdn.sanity.io/images/vvmrkra8/production/1566b3b3a64475e7b7e43873c8e3388c2de9f685-652x1000.jpg',
            altText: null,
            metadata: {
              lqip: 'data:image/jpeg;base64,/9j/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAfABQDASIAAhEBAxEB/8QAGgAAAgIDAAAAAAAAAAAAAAAAAAUGCAMEB//EACcQAAEDAgYBBAMAAAAAAAAAAAECAwQABQYREhMhMQcUIkFhQlFx/8QAFQEBAQAAAAAAAAAAAAAAAAAAAwT/xAAbEQACAwEBAQAAAAAAAAAAAAAAAQIRIQMxQf/aAAwDAQACEQMRAD8A61jHEtws0vaku+nYW6Etq71D5phEk4gDLb4C1NdjohQpV5+tansMInw0FU5hwBAT2oHsAVAfHvk6RAnWu2XGQtQW4GHGnPw/VJjWBW1LSwVqluyISHJDZS6exlRW6laSkEZZHrKijoUSTrI/OuUZ+TKStiOorQ0Ucavgn+VX3y3gwWPEb16Effacc3M2xylX2KsVMXOTIXslJbI4zPVRy7WWVcxpmaVp+yKWCr6F0drwT4Vxk/OsMR7aU37AnSoc8UVlbtqI+poq29Jy0pHFFWrhFogfeaeH/9k=',
            },
          },
        },
      },
    ],
  },
];

export default fakeData_formatted;
