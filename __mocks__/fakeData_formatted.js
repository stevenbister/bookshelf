const fakeData_formatted = [
  {
    _id: '2f07baf9-756d-40c6-9722-9d1a74ec8749',
    title: 'This is Going to Hurt: Secret Diaries of a Junior Doctor ',
    author: 'Adam Kay',
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
    author: 'Andrzej Sapkowski',
    slug: {
      current: 'the-last-wish',
    },
    series: 'The Witcher',
    bookNumber: 1,
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
    author: 'Brandon Sanderson',
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
    author: 'Brandon Sanderson',
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
    author: 'Brandon Sanderson',
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
  {
    _id: 'd31ac08b-b2dd-42b2-943e-4feb9673a3d5',
    title: 'The Way of Kings',
    author: 'Brandon Sanderson',
    slug: {
      current: 'the-way-of-kings',
    },
    series: 'Stormlight Archive',
    bookNumber: 1,
    readStatus: ['Read'],
    cover: {
      asset: {
        url: 'https://cdn.sanity.io/images/vvmrkra8/production/e95cde63e7c85dd6942a7911063fa6a47631c466-310x500.jpg',
        altText: null,
        metadata: {
          lqip: 'data:image/jpeg;base64,/9j/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAgABQDASIAAhEBAxEB/8QAFwABAQEBAAAAAAAAAAAAAAAABwAGBf/EACYQAAEDBAEEAQUAAAAAAAAAAAECAwQABRESBgchMUFhFBUzUXH/xAAYAQACAwAAAAAAAAAAAAAAAAACBAEDBf/EAB8RAAIDAAEFAQAAAAAAAAAAAAECAAMREwQFITFBYf/aAAwDAQACEQMRAD8ASbZerxN5AGnjJZbV+XZOEoA8nNadm5RXWnvpb9uWlFCsYJz6o+60ctkWC3yIsV1K1rbKVlIyUn5xWC6PQ9rumW4VPKdSklCFkjY98mgpTFIJ2OdZYthVq0C6PkfXpshlQS9d0IUQDgnBqo95iylN7cCpidtRkb+D+qqpNxBzI3X24MoYv7mD5szcbZzW8tXJO0datWi54cz4NcrpLe3uMcxZgy23FW6flL6NeyD6IPoU6dQ+JweQXISHSoSUN6d/H9HzRxZOD3f7+tu5vIj2cEpC2u7gGO3enA6ZMzjsOeJmuoV6YXyuabbIbEUHCNjk1Uv2npZ09ZiauIMlzYlbrqzso+6qAFJJ5f2f/9k=',
        },
      },
    },
    relatedBooks: [
      {
        _id: 'd31ac08b-b2dd-42b2-943e-4feb9673a3d5',
        title: 'The Way of Kings',
        slug: {
          current: 'the-way-of-kings',
        },
        readStatus: ['Read'],
        cover: {
          asset: {
            url: 'https://cdn.sanity.io/images/vvmrkra8/production/e95cde63e7c85dd6942a7911063fa6a47631c466-310x500.jpg',
            altText: null,
            metadata: {
              lqip: 'data:image/jpeg;base64,/9j/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAgABQDASIAAhEBAxEB/8QAFwABAQEBAAAAAAAAAAAAAAAABwAGBf/EACYQAAEDBAEEAQUAAAAAAAAAAAECAwQABRESBgchMUFhFBUzUXH/xAAYAQACAwAAAAAAAAAAAAAAAAACBAEDBf/EAB8RAAIDAAEFAQAAAAAAAAAAAAECAAMREwQFITFBYf/aAAwDAQACEQMRAD8ASbZerxN5AGnjJZbV+XZOEoA8nNadm5RXWnvpb9uWlFCsYJz6o+60ctkWC3yIsV1K1rbKVlIyUn5xWC6PQ9rumW4VPKdSklCFkjY98mgpTFIJ2OdZYthVq0C6PkfXpshlQS9d0IUQDgnBqo95iylN7cCpidtRkb+D+qqpNxBzI3X24MoYv7mD5szcbZzW8tXJO0datWi54cz4NcrpLe3uMcxZgy23FW6flL6NeyD6IPoU6dQ+JweQXISHSoSUN6d/H9HzRxZOD3f7+tu5vIj2cEpC2u7gGO3enA6ZMzjsOeJmuoV6YXyuabbIbEUHCNjk1Uv2npZ09ZiauIMlzYlbrqzso+6qAFJJ5f2f/9k=',
            },
          },
        },
      },
      {
        _id: '44ac978f-4590-48ae-b251-7039b4ba2866',
        title: 'Words of Radiance',
        slug: {
          current: 'words-of-radiance',
        },
        readStatus: ['Read'],
        cover: {
          asset: {
            url: 'https://cdn.sanity.io/images/vvmrkra8/production/12c70a152d6808d402f04592c1a7c46e799d1d2c-1642x2560.jpg',
            altText: null,
            metadata: {
              lqip: 'data:image/jpeg;base64,/9j/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAfABQDASIAAhEBAxEB/8QAGAAAAwEBAAAAAAAAAAAAAAAAAAYHBQT/xAAlEAACAQMDBAIDAAAAAAAAAAABAgMABBEFBhITITFBUXEHFDP/xAAZAQACAwEAAAAAAAAAAAAAAAAFBgABAgP/xAAgEQADAAECBwAAAAAAAAAAAAAAAQIDBAUREhMxQVGR/9oADAMBAAIRAxEAPwCp6peXYumFq8iKvYgJnNLO/tW1G125ccJpAZDwJ447e629V3M9sHaNURV7kkVO4t0Xuv7iisdS6Zt5JOmiEYDIfJ+6lJtNI74KmMk1XZMR4pUKDmSG95oqp3v410/9l+jqUfDPYMMkUUP6F+hzW76bxa+MbNT0vSr6aGKZnMYbkyqcB/upzuLY0672hvNFuOpZIBIQT/Pv4pnuGd78wx26ExseJL+q19OsLyOJS0cWD5HL1RHiJXKb0ejQPGhLsDgZx80V2WTStADNjlnAx8eqKsyf/9k=',
            },
          },
        },
      },
      {
        _id: '2ce87596-375d-4796-8569-edfe974a8e64',
        title: 'Oathbringer',
        slug: {
          current: 'oathbringer',
        },
        readStatus: ['Read'],
        cover: {
          asset: {
            url: 'https://cdn.sanity.io/images/vvmrkra8/production/26c1fbdc5453fc5d4c9f95c551325dfb3ac3fb1d-326x500.jpg',
            altText: null,
            metadata: {
              lqip: 'data:image/jpeg;base64,/9j/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAfABQDASIAAhEBAxEB/8QAGgAAAgIDAAAAAAAAAAAAAAAAAAcFBgIECP/EACUQAAIBBAIBBAMBAAAAAAAAAAECAwAEBREGIRIHEzFBFBVRIv/EABcBAAMBAAAAAAAAAAAAAAAAAAIDBAH/xAAdEQACAgMBAQEAAAAAAAAAAAABAgARAwQxIRIi/9oADAMBAAIRAxEAPwCdy2QngufC3IAUf6DLuou95abKVYWZTIfoL8U0LjEQRq8jqp0Nk6pJYaGfk3NMqI4fOKNtx/GgB1ScpYL+Oy3QTA+Wtg0sYeIykV9YxzBuz0djXdFb1jxR/wAZPcl8G+1UdCijHPZPkChiF5Lpm7i3yYbH2QHtPGWeTet/wCqD6Q8Hm43mshfZaZFhPmU23WifuuZv3uYsGRxkrtTD0pWU9VkeXZq6jaNsrfSRv0ytKdH+1ga+Rra3z4zAR4c59Unw/Jryxx5huLeJtLIJPmikXaYZslD+THJoMdabs7oohEkUan//2Q==',
            },
          },
        },
      },
      {
        _id: '9097b4b1-2fed-4c3a-b15b-8bef6b7ddbac',
        title: 'Rhythm of War',
        slug: {
          current: 'rhythm-of-war',
        },
        readStatus: ['Read'],
        cover: {
          asset: {
            url: 'https://cdn.sanity.io/images/vvmrkra8/production/9ce199979aa92d626475984bbc406ad7f154d05c-650x1000.jpg',
            altText: null,
            metadata: {
              lqip: 'data:image/jpeg;base64,/9j/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAfABQDASIAAhEBAxEB/8QAGQAAAgMBAAAAAAAAAAAAAAAAAAYDBQgH/8QAJxAAAQQBBAEDBQEAAAAAAAAAAQIDBAUABhESITEHE0EUIjJRcdH/xAAYAQACAwAAAAAAAAAAAAAAAAACBAABA//EACARAAICAAYDAAAAAAAAAAAAAAECAAMEERIhMVETQZH/2gAMAwEAAhEDEQA/AOhWWoItTOWqA9GipcICgU9nbJJNuqzWgvSGnB5QQjoYlXWn5E9wTG3ULCm0kBPYPXeM01Tek9GwpIT9TIK0jiobefIzJHYsQRkI/fhqa6FsSzNjyOo7UiWnYIWyncFR35A+fnDIqDWFE/VtLkJchOn8mXAQQf8AMMPUO4oKnO4BlNo+BXQ9EVlhLk+2wI6VFSz0OsUtb3MS8S21Xc0Q21hQdPQUR8jM71fqNdwYBgRZzqoi9uTTv3J6/QOD/qDcPq4uyOTW+/AJAA/mQMB6hshblhNq6TTUXdDGlyIzDj/Hg4pQ75DDMxaN9RbNmoKG2VrHuq7S4EjwPjDL0Kd8oPlsXYMfs//Z',
            },
          },
        },
      },
    ],
  },
  {
    _id: '2318dace-3138-4236-98aa-a84e2c5a0747',
    title: 'Warbreaker',
    author: 'Brandon Sanderson',
    slug: {
      current: 'warbreaker',
    },
    series: '',
    bookNumber: null,
    readStatus: ['Read'],
    cover: {
      asset: {
        url: 'https://cdn.sanity.io/images/vvmrkra8/production/3165e2fbfd2963c93ec084ae29d41ccf8a01711a-653x1000.jpg',
        altText: null,
        metadata: {
          lqip: 'data:image/jpeg;base64,/9j/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAfABQDASIAAhEBAxEB/8QAGQAAAgMBAAAAAAAAAAAAAAAAAAcDBQYE/8QAJhAAAgEDAwMEAwAAAAAAAAAAAQIDAAQFBhESEyExIkFRYTKBof/EABYBAQEBAAAAAAAAAAAAAAAAAAEAAv/EABkRAQACAwAAAAAAAAAAAAAAAAARIQESYf/aAAwDAQACEQMRAD8AaNtq1MlrLK4XITXVtHFJtFMnZT9H4NbmLDu0AWDI3Ww8MTvvS11fALCaSZTxluZeQ4jfl80yNO5QS4iIqwlZVA2HY1Sc3a6sYGt7ZInlaVl8u3k0VJC/UjViCu/saKgXWrMFdifH3CO5bn0n6Y/EH3AP9rt0PY3S21w1zIrtHM0ZCrsOx81f5VboysDxaMn0/VV2OhurBTHbBVR2LN38k069aho4oYym4Zh+6KLaORogZwvU9+Piihl//9k=',
        },
      },
    },
    relatedBooks: [],
  },
  {
    _id: '0557e597-335d-4dcd-921e-164d0cc7519b',
    title: 'The Castle',
    author: 'Franz Kafka',
    slug: {
      current: 'the-castle',
    },
    series: '',
    bookNumber: null,
    readStatus: ['Read'],
    cover: {
      asset: {
        url: 'https://cdn.sanity.io/images/vvmrkra8/production/7b6e70c6328425762d1528cd00b6d4f889841673-3047x4675.jpg',
        altText: null,
        metadata: {
          lqip: 'data:image/jpeg;base64,/9j/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAfABQDASIAAhEBAxEB/8QAGQAAAgMBAAAAAAAAAAAAAAAAAAcDBAYF/8QAJhAAAQMDBAEEAwAAAAAAAAAAAQACAwQFEQYSEyFRBxYxYSJWkf/EABcBAQEBAQAAAAAAAAAAAAAAAAADAQL/xAAYEQEAAwEAAAAAAAAAAAAAAAAAARETEv/aAAwDAQACEQMRAD8AS9K0Fw+ytxFpw0MInu21tNt3N43jc8+ApfTvRLL1bpbjVV0cAaSIY3DO9w8/Sztxu01RWSNqeuN5ZsByBjrpdAqI4uZ3FkR5/Hd84QqLqoZ+UJYbNnsmnqChbSHXVvdC1xc0AYOSuNPofScz5Xs1tQxuc8nvvISHjfxyBwxkFTz1XJGWgDs+AqcIaydfsHS/73b/AOISKQszNZf/2Q==',
        },
      },
    },
    relatedBooks: [],
  },
  {
    _id: '5891e9f5-b764-4ba5-a087-ca8d7681f38a',
    title: 'Sabriel',
    author: 'Garth Nix',
    slug: {
      current: 'sabriel',
    },
    series: 'The Old Kingdom',
    bookNumber: 1,
    readStatus: ['Read'],
    cover: {
      asset: {
        url: 'https://cdn.sanity.io/images/vvmrkra8/production/ff765b046b940df344a14efb8ad83eff238b3951-400x620.jpg',
        altText: null,
        metadata: {
          lqip: 'data:image/jpeg;base64,/9j/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAfABQDASIAAhEBAxEB/8QAGQAAAgMBAAAAAAAAAAAAAAAAAAYCBAUI/8QAJBAAAgEEAgICAwEAAAAAAAAAAQIDAAQFERIhEzEGUQciQWH/xAAYAQADAQEAAAAAAAAAAAAAAAAAAwUBAv/EAB8RAAICAgIDAQAAAAAAAAAAAAECABEDBBIhMXGBof/aAAwDAQACEQMRAD8A6CmilDOfCzgHo/wCqscM7sSsasQddd6/2tzPw+SyUF3jj5DmUOuqX7FLpJrc2EkZJYjR7JX7NS8mMIwWpRxvyXl1LrY8ycWkU8iO+tUUwhGKr5dc9d69UUNpITFjbcSN44NrJrR69Vh2t5Z40STzmO3hUfsxGhWUmG+S2wZVykUn1ySqWU+GZHM4STH5XKF1kl8jlEA636FOD5WNlKr1AJjUFeYr7HObKwq4066IBB37FFLNz+P4roxuMpfRBUVAqv10KK4YbBPiao167b8n/9k=',
        },
      },
    },
    relatedBooks: [
      {
        _id: '5891e9f5-b764-4ba5-a087-ca8d7681f38a',
        title: 'Sabriel',
        slug: {
          current: 'sabriel',
        },
        readStatus: ['Read'],
        cover: {
          asset: {
            url: 'https://cdn.sanity.io/images/vvmrkra8/production/ff765b046b940df344a14efb8ad83eff238b3951-400x620.jpg',
            altText: null,
            metadata: {
              lqip: 'data:image/jpeg;base64,/9j/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAfABQDASIAAhEBAxEB/8QAGQAAAgMBAAAAAAAAAAAAAAAAAAYCBAUI/8QAJBAAAgEEAgICAwEAAAAAAAAAAQIDAAQFERIhEzEGUQciQWH/xAAYAQADAQEAAAAAAAAAAAAAAAAAAwUBAv/EAB8RAAICAgIDAQAAAAAAAAAAAAECABEDBBIhMXGBof/aAAwDAQACEQMRAD8A6CmilDOfCzgHo/wCqscM7sSsasQddd6/2tzPw+SyUF3jj5DmUOuqX7FLpJrc2EkZJYjR7JX7NS8mMIwWpRxvyXl1LrY8ycWkU8iO+tUUwhGKr5dc9d69UUNpITFjbcSN44NrJrR69Vh2t5Z40STzmO3hUfsxGhWUmG+S2wZVykUn1ySqWU+GZHM4STH5XKF1kl8jlEA636FOD5WNlKr1AJjUFeYr7HObKwq4066IBB37FFLNz+P4roxuMpfRBUVAqv10KK4YbBPiao167b8n/9k=',
            },
          },
        },
      },
      {
        _id: 'c58c0426-88fa-49b0-a9e6-ca0d296d99fe',
        title: 'Lirael',
        slug: {
          current: 'lirael',
        },
        readStatus: ['Read'],
        cover: {
          asset: {
            url: 'https://cdn.sanity.io/images/vvmrkra8/production/c1e46e863530d225631b4f27358d0dac6682f8d5-400x620.jpg',
            altText: null,
            metadata: {
              lqip: 'data:image/jpeg;base64,/9j/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAfABQDASIAAhEBAxEB/8QAGAAAAwEBAAAAAAAAAAAAAAAAAAUGAgP/xAAnEAABAwQABQQDAAAAAAAAAAABAgMEAAUREgcTITFBBhUygRciUf/EABcBAAMBAAAAAAAAAAAAAAAAAAIEBQP/xAAeEQABBAIDAQAAAAAAAAAAAAABAAIDBBEhEiJBMf/aAAwDAQACEQMRAD8AkrvdY0yfvcFtJWhvqQr5GkjbEJtXNfmJ55Tnlbd8noc/zFTFhRGnS0pmuOA/IpQPkB4zVH6ihWcWluU2xK5mu6StwZAzjX6qo+YuwQVOirtjHEhcLldHlTXeUpsNg4TqemKKQMz06DRhOvjIzRTbZtDaSdV7HqrOBw1nOy2stK0z+2OmKYX/AIdzmYjQbbWrXonGTqKwjitc7a42l9tpa043AHf7p1+eHA2A3bmVnwVCkDKzPxUQyT0qRZ9E3IIwGSfqinKOOkiO4+Pb2ju4V9u2fFFaC2B4gNck5X//2Q==',
            },
          },
        },
      },
      {
        _id: 'ea91836b-d211-4fb0-9feb-d3722eba9f42',
        title: 'Abhorsen',
        slug: {
          current: 'abhorsen',
        },
        readStatus: ['Read'],
        cover: {
          asset: {
            url: 'https://cdn.sanity.io/images/vvmrkra8/production/8a174c74d8ea6e96d22f68fd64e77402c3462f7f-400x620.jpg',
            altText: null,
            metadata: {
              lqip: 'data:image/jpeg;base64,/9j/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAfABQDASIAAhEBAxEB/8QAGAAAAwEBAAAAAAAAAAAAAAAAAAMGBQL/xAAnEAACAQQABQQDAQAAAAAAAAABAgMABAURBhITITEiQVFhFBUyQv/EABgBAAIDAAAAAAAAAAAAAAAAAAEFAwQH/8QAHhEAAgICAgMAAAAAAAAAAAAAAQIAAxEhBSJRYZH/2gAMAwEAAhEDEQA/AIuSJhJzIpIJ7Ed60LiOa3tSs8PKrgEDXmszgnK2DXgTKySI+/Qv+d/dWOSmxv4c5yPXSLm0jn+gfofFIWUrozQTerNlcyH/AFxYlgRondFKnuR1m6Lc0W/SzHRIoo9pMDV4isTw69+DcRq0iKd7A71SpY3ecAsB1XljTSKR8VOYrjDK2TkRLFFGRylF9xXMnE+Rtbt7mxZo5NeS/g0TXcx3j1FA5CpRoTGzHCOdW/kUiZdeAFNFKveKOJrm5eVsjIpb2Vu1FXFF4AGVit76GYko32f/2Q==',
            },
          },
        },
      },
      {
        _id: '57468692-504b-4123-b76c-3d45a4e05cb4',
        title: 'Clariel',
        slug: {
          current: 'clariel',
        },
        readStatus: ['Read'],
        cover: {
          asset: {
            url: 'https://cdn.sanity.io/images/vvmrkra8/production/dc2c976dd0ed6a048d6335980825bc88cee4f1fb-400x620.jpg',
            altText: null,
            metadata: {
              lqip: 'data:image/jpeg;base64,/9j/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAfABQDASIAAhEBAxEB/8QAGwAAAgIDAQAAAAAAAAAAAAAAAAYEBQECBwj/xAAmEAABAwQBBAEFAAAAAAAAAAABAgMEAAURIRIGBxNBIhQjMWFx/8QAFgEBAQEAAAAAAAAAAAAAAAAABAIB/8QAHhEAAgICAgMAAAAAAAAAAAAAAQIAAwQRIVISFBX/2gAMAwEAAhEDEQA/AOFMojBlAUUBWB8s7/eanhFqKOCnMqA2R7qPHs/1UtDB5J5nAIGd1fdV2hNpssWPHQHJLR4SHfH7Oxg1toKMFk4zLbUbONCJ01ptEpwM48efjvOqK2TGWRkg0UgVcQRyV3PS9t7dQm4rrkqWWpKR8C2N5qsunSklq0uR/KXoWeRCxvP9piuPdC2Rrc46024HUDIHjyDSbM7uMyo8tMpta2nB9hPAYSrHuivZZ5bIl0Y1ZrKo2ooP9JSy6otxl8fWqKzC7tTIbPhejofKScL/ABr0KKV7TdYL5h7T/9k=',
            },
          },
        },
      },
      {
        _id: '15fd87b6-03f5-46c0-ac93-4e10c080d7c2',
        title: 'Goldenhand',
        slug: {
          current: 'goldenhand',
        },
        readStatus: ['Read'],
        cover: {
          asset: {
            url: 'https://cdn.sanity.io/images/vvmrkra8/production/188a51e8684765837552b9e7acf7773f18c3b001-400x620.jpg',
            altText: null,
            metadata: {
              lqip: 'data:image/jpeg;base64,/9j/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAfABQDASIAAhEBAxEB/8QAGAAAAwEBAAAAAAAAAAAAAAAAAAUGBAL/xAAnEAACAQMDAwMFAAAAAAAAAAABAgMABAUREiEGBxMiMVEjQWFicv/EABcBAQEBAQAAAAAAAAAAAAAAAAIEAwX/xAAgEQACAgEDBQAAAAAAAAAAAAAAAQIRAxNRkRIUMVJh/9oADAMBAAIRAxEAPwBQ1nZzFVM+4jQEKK4u8dZWqDzSsnPBYVKYq9ma6RA/jBbXceeae5nKpCzW1kDcFh9WaYand+vxTxYcbhcm7N3J3SRmluMWjaIA/HJb5opOLdW5dQWPuTRUzivYVPYv7Ht3lGcOLf068n8Vvl7fTHTYgDn3OtMMhnMxDjpLlJGigQattfnSoy26rfy3DXDzzB+Qpc+muPHuJq7L+uMX4RX2/a64liDmaBNfsXFFQz9bSRsVQS7f7NFPSz/eQay3XB//2Q==',
            },
          },
        },
      },
    ],
  },
  {
    _id: '285f93fd-96ce-44ce-a2d1-f013f8c89056',
    title: 'The Fellowship of the Ring',
    author: 'J.R.R Tolkien',
    slug: {
      current: 'the-fellowship-of-the-ring',
    },
    series: 'The Lord of the Rings',
    bookNumber: 1,
    readStatus: ['Read'],
    cover: {
      asset: {
        url: 'https://cdn.sanity.io/images/vvmrkra8/production/11e01664c85f20cef3ff3856e7c87fc4796a4fa8-1531x2452.jpg',
        altText: null,
        metadata: {
          lqip: 'data:image/jpeg;base64,/9j/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAgABQDASIAAhEBAxEB/8QAGAAAAwEBAAAAAAAAAAAAAAAAAAQFAgj/xAAlEAABBAEDAwUBAAAAAAAAAAABAAIDBBEFEiETMVEVIjNSYXH/xAAVAQEBAAAAAAAAAAAAAAAAAAABA//EABkRAAMBAQEAAAAAAAAAAAAAAAABAgMREv/aAAwDAQACEQMRAD8A5lpaeLMBkMoZ7toBTrdBBc4Gw0FpU3Tqst2y2GJ23PJJPDQO5T1rTWitJPSuCwIvkAyCP3+KdaTL8seNkqdnTmewHO04yhYPPdCoA7pFwUrfUe3fG5pY9vkFOSW6NWnYj0/rPknG0ukGNrfCRp2mwxljo2Oyc5IymvUGMGBHG7j6BSrOarrFMlIWpHb3udgDJzwhVA//2Q==',
        },
      },
    },
    relatedBooks: [
      {
        _id: '285f93fd-96ce-44ce-a2d1-f013f8c89056',
        title: 'The Fellowship of the Ring',
        slug: {
          current: 'the-fellowship-of-the-ring',
        },
        readStatus: ['Read'],
        cover: {
          asset: {
            url: 'https://cdn.sanity.io/images/vvmrkra8/production/11e01664c85f20cef3ff3856e7c87fc4796a4fa8-1531x2452.jpg',
            altText: null,
            metadata: {
              lqip: 'data:image/jpeg;base64,/9j/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAgABQDASIAAhEBAxEB/8QAGAAAAwEBAAAAAAAAAAAAAAAAAAQFAgj/xAAlEAABBAEDAwUBAAAAAAAAAAABAAIDBBEFEiETMVEVIjNSYXH/xAAVAQEBAAAAAAAAAAAAAAAAAAABA//EABkRAAMBAQEAAAAAAAAAAAAAAAABAgMREv/aAAwDAQACEQMRAD8A5lpaeLMBkMoZ7toBTrdBBc4Gw0FpU3Tqst2y2GJ23PJJPDQO5T1rTWitJPSuCwIvkAyCP3+KdaTL8seNkqdnTmewHO04yhYPPdCoA7pFwUrfUe3fG5pY9vkFOSW6NWnYj0/rPknG0ukGNrfCRp2mwxljo2Oyc5IymvUGMGBHG7j6BSrOarrFMlIWpHb3udgDJzwhVA//2Q==',
            },
          },
        },
      },
      {
        _id: '4074669e-5a6e-43d1-967b-8910641c4233',
        title: 'The Two Towers',
        slug: {
          current: 'the-two-towers',
        },
        readStatus: ['Read'],
        cover: {
          asset: {
            url: 'https://cdn.sanity.io/images/vvmrkra8/production/2ae81839c07a9e86014740abfe0b293204b7512d-312x500.jpg',
            altText: null,
            metadata: {
              lqip: 'data:image/jpeg;base64,/9j/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAgABQDASIAAhEBAxEB/8QAGQAAAgMBAAAAAAAAAAAAAAAAAAIDBAUI/8QAJBAAAwACAgECBwAAAAAAAAAAAQIDABEEIRIFMRMUIjJBYXH/xAAWAQEBAQAAAAAAAAAAAAAAAAACAQP/xAAYEQEBAQEBAAAAAAAAAAAAAAABAAIRIf/aAAwDAQACEQMRAD8A5f43AvyZNSQBVffsDLbeicgojRKUBHf1AazP4yUrQJMkb9++snpBlkzx5HxAn3AE9ZOh5MxpOlVqjSoyONMp0cMUnZ2cMsKbh2EbeTDakEH+ZO1IRjRYF2ag1sjWhi8TlJGZVozbf5Yby0PUZoNfLwb9+OFOtpnaHLJwxqN50ZtAbO9DDFZ3/9k=',
            },
          },
        },
      },
      {
        _id: 'd6289443-52e6-48f2-969b-bef56413ccb0',
        title: 'The Return of the King',
        slug: {
          current: 'the-return-of-the-king',
        },
        readStatus: ['Read'],
        cover: {
          asset: {
            url: 'https://cdn.sanity.io/images/vvmrkra8/production/3d040583f045ae61b613a5ba135c05db58b0d43f-311x500.jpg',
            altText: null,
            metadata: {
              lqip: 'data:image/jpeg;base64,/9j/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAgABQDASIAAhEBAxEB/8QAGAABAQEBAQAAAAAAAAAAAAAABAADBQj/xAAkEAABBAEEAQUBAAAAAAAAAAABAAIDBBEFEiExEwYyUWFxgv/EABYBAQEBAAAAAAAAAAAAAAAAAAECA//EABcRAQEBAQAAAAAAAAAAAAAAAAABEQL/2gAMAwEAAhEDEQA/APNGnaZHbqulfP4yDgDHZTx6eiLy02uQMnhcahXltTCKJ20dkk8AfKXYpYrvmqWxOI/eBkEff4pvclyjQLUIgsPjDtwacZUsiSTk8lSomaXbbUsEyNLo3tLHgd4KS+xTq1ZmUzI+SYbS54xtCNTtshjLHxMdk9kZKWNRhjAAhhd/Cz65lujHHUtJpPJK54aG5PQCloX/2Q==',
            },
          },
        },
      },
    ],
  },
  {
    _id: '0e193710-7ae6-496e-ab5f-c7719e6da607',
    title: 'The Hobbit',
    author: 'J.R.R Tolkien',
    slug: {
      current: 'the-hobbit',
    },
    series: '',
    bookNumber: null,
    readStatus: ['read'],
    cover: {
      asset: {
        url: 'https://cdn.sanity.io/images/vvmrkra8/production/8b067fccb56e3491237da24d0a9a898b496d215c-741x1155.jpg',
        altText: null,
        metadata: {
          lqip: 'data:image/jpeg;base64,/9j/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAfABQDASIAAhEBAxEB/8QAGwAAAQQDAAAAAAAAAAAAAAAAAAEDBAcCBQj/xAAnEAABAwMDBAEFAAAAAAAAAAABAgMEAAUREiExBhMiQQcUIzJRgf/EABYBAQEBAAAAAAAAAAAAAAAAAAIDAf/EABsRAAIDAQEBAAAAAAAAAAAAAAABERIhAjFB/9oADAMBAAIRAxEAPwDYfHEXp+4tBU1S33snKBwKseDbuliwp1yBGbYR4Fax7rnmzT1WhWIjrsdbYOHOQc/oVg7fXhGXHeu7ojuOdwtEcqovnl6jVVrwuvqS02hq4BMVlgN9sHx/tFUxEnzZDZcU7JVk7KzjIoqTSTiSTekz6BuQEqbKAhY23plNgjqdLhcb1/lkpztUZEWSgp0PeKdgM7CnW2ZKVYU4kgpx72FCcixKfliYqCGDpMhxfvPFFKyhWj7iyVUUKsyrP//Z',
        },
      },
    },
    relatedBooks: [],
  },
  {
    _id: 'de734f03-ef4e-46ff-bb9e-04c0ca306753',
    title: 'Dawn of Wonder',
    author: 'Jonathan Renshaw',
    slug: {
      current: 'dawn-of-wonder',
    },
    series: '',
    bookNumber: null,
    readStatus: ['Read'],
    cover: {
      asset: {
        url: 'https://cdn.sanity.io/images/vvmrkra8/production/a257cc118a696c4cf5cbfb657e266e982a0e7096-333x500.jpg',
        altText: null,
        metadata: {
          lqip: 'data:image/jpeg;base64,/9j/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAeABQDASIAAhEBAxEB/8QAGQAAAgMBAAAAAAAAAAAAAAAAAAUDBgcE/8QAJhAAAgEDBAEDBQAAAAAAAAAAAQIDAAQRBRIhMQYTFFEVI0FCYf/EABYBAQEBAAAAAAAAAAAAAAAAAAMBBP/EAB0RAAICAgMBAAAAAAAAAAAAAAECAAMREwQUURL/2gAMAwEAAhEDEQA/AMP0yB/Tjb2YdJCMMeqZ6roy/bMVjHlhkjH4pX4m0xujHvLKqnCE8Cr1HFfToGuoGZVG1DGehQ9hEJDmJodxlRKH9PjtiY5CEYHlfiinl3psRuHMyNvJ/Y80UnYSTQ8WeDLs163mYHAJbBHDfytFsvPGt9CkhGno9yzOPU6CAnisz0hBHbhhJIDnIxTqK4RYVVU7PJI5I+KyXcdbGywzHr5DVrhTOa61W5aXLKpOOyaKiu5QJjgYGOsUUnwPIe1vZ//Z',
        },
      },
    },
    relatedBooks: [],
  },
  {
    _id: '5c76a102-d636-4c7a-a715-61fa4f661340',
    title: 'Such a Fun Age',
    author: 'Kiely Reid',
    slug: {
      current: 'such-a-fun-age',
    },
    series: '',
    bookNumber: null,
    readStatus: ['Read'],
    cover: {
      asset: {
        url: 'https://cdn.sanity.io/images/vvmrkra8/production/8178a0d8e3305778be59fcd9aa5f09c48068fef1-1592x2560.jpg',
        altText: null,
        metadata: {
          lqip: 'data:image/jpeg;base64,/9j/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAgABQDASIAAhEBAxEB/8QAGQAAAwADAAAAAAAAAAAAAAAAAAUGAgMH/8QAKBAAAQMDAgUEAwAAAAAAAAAAAQIDBAAFERJBEyExUXEGFCNSJTKh/8QAFgEBAQEAAAAAAAAAAAAAAAAABQMA/8QAHREAAgICAwEAAAAAAAAAAAAAAQIAEQMSBCFhMf/aAAwDAQACEQMRAD8A7RcpN1jzy26+0ourVo0j9U56msbq/Ohri/kYwSchwZ5kk8v5TO5WNmbd3A9KcSCg6UoGCNzzqdcgWs3+BASp5xbYLqj9fPesqqYjx8eLIoDMdqJIHksbEi5phKEx5tSyslJT9dqKY2xCfaJKTqB3xiiomrhwLH7El5mTFutxoSdL7jukrA6JHWpmLLuIvbfDtXDVrUhTxGcDufNWTC55uc1CmBwtPwrPepGJbPUsJbjzRDq3X1a0qO2ORFXxsCDFeFqEKPV0aJ9l/BdU7HCsAeKK0WGM5HtTCJJUX8ZXk70VBqvqGFNTrd1P/9k=',
        },
      },
    },
    relatedBooks: [],
  },
  {
    _id: 'befdc5d1-629e-4873-b6e3-df4088967ce9',
    title: 'The Fifth Season',
    author: 'N.K. Jemisin',
    slug: {
      current: 'the-fifth-season',
    },
    series: 'Broken Earth',
    bookNumber: 1,
    readStatus: ['Read'],
    cover: {
      asset: {
        url: 'https://cdn.sanity.io/images/vvmrkra8/production/5080de6e3ba09fa0bb4162e52ca18cc17640d657-500x756.jpg',
        altText: null,
        metadata: {
          lqip: 'data:image/jpeg;base64,/9j/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAeABQDASIAAhEBAxEB/8QAGQAAAgMBAAAAAAAAAAAAAAAAAAUCBAYH/8QAJhAAAgEEAQMDBQAAAAAAAAAAAQMCAAQFESESE0EUIjIGFTFhcf/EABgBAAIDAAAAAAAAAAAAAAAAAAIDAAEE/8QAGREBAQEBAQEAAAAAAAAAAAAAAQARIQIS/9oADAMBAAIRAxEAPwDj2DsostWOYsgke3VOhYsNslwmAeYRERyf7SzEZNfaC1z1ofHXmmvZlJS5LfuI50D5o92zvOWXztg37jPqIJ0KKaZx8vXy6en4jzRVO7CekKOA+no3MT275SpTHTEMGufNStkzxl8UNuFPhsg6pNhchdoagoaAYHYMhv8ANW87eXDEepnOJIlx7dEUs45ORYylwj1s+Nfqisu65mxhlIkk0UeU+L//2Q==',
        },
      },
    },
    relatedBooks: [
      {
        _id: 'befdc5d1-629e-4873-b6e3-df4088967ce9',
        title: 'The Fifth Season',
        slug: {
          current: 'the-fifth-season',
        },
        readStatus: ['Read'],
        cover: {
          asset: {
            url: 'https://cdn.sanity.io/images/vvmrkra8/production/5080de6e3ba09fa0bb4162e52ca18cc17640d657-500x756.jpg',
            altText: null,
            metadata: {
              lqip: 'data:image/jpeg;base64,/9j/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAeABQDASIAAhEBAxEB/8QAGQAAAgMBAAAAAAAAAAAAAAAAAAUCBAYH/8QAJhAAAgEEAQMDBQAAAAAAAAAAAQMCAAQFESESE0EUIjIGFTFhcf/EABgBAAIDAAAAAAAAAAAAAAAAAAIDAAEE/8QAGREBAQEBAQEAAAAAAAAAAAAAAQARIQIS/9oADAMBAAIRAxEAPwDj2DsostWOYsgke3VOhYsNslwmAeYRERyf7SzEZNfaC1z1ofHXmmvZlJS5LfuI50D5o92zvOWXztg37jPqIJ0KKaZx8vXy6en4jzRVO7CekKOA+no3MT275SpTHTEMGufNStkzxl8UNuFPhsg6pNhchdoagoaAYHYMhv8ANW87eXDEepnOJIlx7dEUs45ORYylwj1s+Nfqisu65mxhlIkk0UeU+L//2Q==',
            },
          },
        },
      },
      {
        _id: '5de52e67-5d9f-4761-81fc-fd10d6ed5760',
        title: 'The Obelisk Gate',
        slug: {
          current: 'the-obelisk-gate',
        },
        readStatus: ['Read'],
        cover: {
          asset: {
            url: 'https://cdn.sanity.io/images/vvmrkra8/production/a060eed50e7cd961369a3918a2ba174ef1b57093-183x275.jpg',
            altText: null,
            metadata: {
              lqip: 'data:image/jpeg;base64,/9j/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAeABQDASIAAhEBAxEB/8QAGQAAAgMBAAAAAAAAAAAAAAAAAAYDBAcF/8QAJhAAAgEDAwMEAwAAAAAAAAAAAQIDAAQRBRIhEyJBBjFRcRQVYf/EABcBAQEBAQAAAAAAAAAAAAAAAAIAAQP/xAAdEQACAQQDAAAAAAAAAAAAAAAAAQIDERIhE0FC/9oADAMBAAIRAxEAPwDDm043jh0iwgX2I9zVmP0+4cBrbGRnJXjHzT/p1vFFa7+kCu7arY7ePmund/jxRLGssbsy5cKcnB8U8V2duNvZnA0pUyDJsx4opleMQyPGkIdVPBYc/VFSFjbVg0y7kSPGd6Dkof7UcBgjuJpgXWRgTgnzSTpWs3DK6dRtxAwatpqG6f3kJIzknzVkzJTi3caBdzN3dfGee5eaKSP3F3khpm4OB9UUdiVWK8n/2Q==',
            },
          },
        },
      },
      {
        _id: '32b9182f-840d-4ff6-86cb-f4b9b9fe2764',
        title: 'The Stone Sky',
        slug: {
          current: 'the-stone-sky',
        },
        readStatus: ['Read'],
        cover: {
          asset: {
            url: 'https://cdn.sanity.io/images/vvmrkra8/production/c4640e39bcdd60f2c91bba3053c84e87f5a18535-1687x2560.jpg',
            altText: null,
            metadata: {
              lqip: 'data:image/jpeg;base64,/9j/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAeABQDASIAAhEBAxEB/8QAGAAAAwEBAAAAAAAAAAAAAAAAAAQFBgf/xAAjEAACAQQCAQUBAAAAAAAAAAABAgMABAUSESETIjFBUWEy/8QAGAEAAgMAAAAAAAAAAAAAAAAABAUBAgP/xAAhEQABBAEDBQAAAAAAAAAAAAABAAIDEQQhMbESFCJx8P/aAAwDAQACEQMRAD8AQx+NijtjNb3T6gbIPYA/oqTDlpoTcQiYS7t2FHYJ+KyNpl8lfeWC31S2YlVkJO2tM2eMu8O7XFmwkkYd7k9n7qInyse8zSdQJ0G1JXKyGmtqjX3patosdM27zzlz/W3vzRXPps7fpNIJXeNtj0vdFHCdwWXZXqqGDjVLFOTx8nkdir1vdutv4XIMZ7G3xUPHSqYUXl+B+DuqcqxeAOzy+r6ApVJjPcfIIs5ONseFHySQPdsdVPNFE1jHNIX8kg5+xRRrYpAAqDJxhpfK/9k=',
            },
          },
        },
      },
    ],
  },
  {
    _id: 'd986fc19-7d2e-42a9-bcab-74624eccaef2',
    title: 'The Story of a Goat',
    author: 'Perumal Murugan',
    slug: {
      current: 'the-story-of-a-goat',
    },
    series: '',
    bookNumber: null,
    readStatus: ['read'],
    cover: {
      asset: {
        url: 'https://cdn.sanity.io/images/vvmrkra8/production/da716095cd0cb89314e92120b06df69776790bb4-316x499.jpg',
        altText: null,
        metadata: {
          lqip: 'data:image/jpeg;base64,/9j/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAgABQDASIAAhEBAxEB/8QAFwABAQEBAAAAAAAAAAAAAAAABwAFBP/EACcQAAEDAwQCAQUBAAAAAAAAAAIBAwQABREGEjFBBxMiFCEyUZGx/8QAFwEAAwEAAAAAAAAAAAAAAAAAAwQFBv/EAB8RAAICAgMAAwAAAAAAAAAAAAECAAMEIQUREhNRYf/aAAwDAQACEQMRAD8AbmgbJPkq5z1WZqWe3ZbLMnmWQYBSx/lEVv8AMk0Ht8i3Mm0i4XYS5ri1/wCUU1DZTtsaCbDT2NzhrjisvXxdvoB11LDZa9EqYiaOmXu+WQLjKfFhXyUm20HgOqqxNGa/ssXTkOPIc9TrIbFHnjuql7sbI+RvNeu/qES2vyO23BCJuakCTY7yAsoPKLWnqF+c9EBZdu+lbPg/VhP7TwGnTiKRQbfAa2qqjhtFUk6SuTXNrudz0lNbfZjptb3iAJ8kVOqrry4ZwoGj+xM4hAJMGLN48vV0gBLYZNGj/FV+2U/dVOnjO6NTdGQCIsONj6jReUVOqqUu5a9LGXyNGHTErZQe5//Z',
        },
      },
    },
    relatedBooks: [],
  },
  {
    _id: 'f4e7685b-1119-411f-855b-6f77e4816f6b',
    title: 'The Eye of the World',
    author: 'Robert Jordan',
    slug: {
      current: 'the-eye-of-the-world',
    },
    series: 'The Wheel of Time',
    bookNumber: 1,
    readStatus: ['Read'],
    cover: {
      asset: {
        url: 'https://cdn.sanity.io/images/vvmrkra8/production/3a0831dc96a22f3ae304e80e44e76e05e0bcb5c8-319x500.jpg',
        altText: null,
        metadata: {
          lqip: 'data:image/jpeg;base64,/9j/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAfABQDASIAAhEBAxEB/8QAGgAAAgMBAQAAAAAAAAAAAAAAAAcEBQgBBv/EACYQAAEDAwQCAQUAAAAAAAAAAAIBAwQAERIFBiExFEEHExUzYXH/xAAXAQADAQAAAAAAAAAAAAAAAAABAgME/8QAHBEAAgEFAQAAAAAAAAAAAAAAAAESAgMTITFB/9oADAMBAAIRAxEAPwCTpmymHtEKdfBUvZpweVSuJpEViNl4pOH6EUpuyYKAZpgBMdpivdQwaFxt9kY6IpIluPdUk3sz40tCg+3OD+WCKEvNr+qKazmy4z5kbxviV7WQvVFHIhMFRS7H3NEnbShvyjwU7qqZ3UV/dWyT9OHJ/wAxwsUyxv1WVNuaq9DaRspKk0XKt2Xj+V69jcsEoRACyCI0UVEl4Sp8XRld8Y1dX+XtEYnG19fJR4VR6orNczSWDkuGkgkQlvbHqikkgyqP/9k=',
        },
      },
    },
    relatedBooks: [
      {
        _id: 'f4e7685b-1119-411f-855b-6f77e4816f6b',
        title: 'The Eye of the World',
        slug: {
          current: 'the-eye-of-the-world',
        },
        readStatus: ['Read'],
        cover: {
          asset: {
            url: 'https://cdn.sanity.io/images/vvmrkra8/production/3a0831dc96a22f3ae304e80e44e76e05e0bcb5c8-319x500.jpg',
            altText: null,
            metadata: {
              lqip: 'data:image/jpeg;base64,/9j/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAfABQDASIAAhEBAxEB/8QAGgAAAgMBAQAAAAAAAAAAAAAAAAcEBQgBBv/EACYQAAEDAwQCAQUAAAAAAAAAAAIBAwQAERIFBiExFEEHExUzYXH/xAAXAQADAQAAAAAAAAAAAAAAAAABAgME/8QAHBEAAgEFAQAAAAAAAAAAAAAAAAESAgMTITFB/9oADAMBAAIRAxEAPwCTpmymHtEKdfBUvZpweVSuJpEViNl4pOH6EUpuyYKAZpgBMdpivdQwaFxt9kY6IpIluPdUk3sz40tCg+3OD+WCKEvNr+qKazmy4z5kbxviV7WQvVFHIhMFRS7H3NEnbShvyjwU7qqZ3UV/dWyT9OHJ/wAxwsUyxv1WVNuaq9DaRspKk0XKt2Xj+V69jcsEoRACyCI0UVEl4Sp8XRld8Y1dX+XtEYnG19fJR4VR6orNczSWDkuGkgkQlvbHqikkgyqP/9k=',
            },
          },
        },
      },
      {
        _id: 'eb00b46d-45ef-456c-91c6-14d367cbe611',
        title: 'The Great Hunt',
        slug: {
          current: 'the-great-hunt',
        },
        readStatus: ['Read'],
        cover: {
          asset: {
            url: 'https://cdn.sanity.io/images/vvmrkra8/production/a1edf48182cb87b4216d07c05aac08b7ffa9e8d6-636x1000.jpg',
            altText: null,
            metadata: {
              lqip: 'data:image/jpeg;base64,/9j/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAfABQDASIAAhEBAxEB/8QAGAAAAwEBAAAAAAAAAAAAAAAAAAUGBAP/xAAkEAACAQQBBAIDAAAAAAAAAAABAgMABBEhEwUGEjFBUSJhkf/EABgBAAIDAAAAAAAAAAAAAAAAAAECAAQF/8QAGxEAAgMAAwAAAAAAAAAAAAAAAAECAxESIlH/2gAMAwEAAhEDEQA/AI/oHZCXXY0nXnu4cIWPAw3gfv7qUYCSZlijQgD69VR9kiCWxa3muJij7aEE+IP3imV70yy5A0cSogz5H0Rj0f7VmD6mPfLLcXhAP05i5yN0U/m4+VjkEnZ3RQ0VWGDtu7a0PmsqocjR+apLzrqzW5jV4kyNkbJqDtntyq+c7qcbAWtnJZiItyuD8fjSRliHvg5WajtJOnI2yd+6KWzXkaviM+Qx7K0VOTCqz//Z',
            },
          },
        },
      },
      {
        _id: 'f5b7f718-a1bb-4849-a4cd-e0fdf943ff60',
        title: 'The Dragon Reborn',
        slug: {
          current: 'the-dragon-reborn',
        },
        readStatus: ['Read'],
        cover: {
          asset: {
            url: 'https://cdn.sanity.io/images/vvmrkra8/production/d90837d11d107daddab976b675728cebe63c7241-429x675.webp',
            altText: null,
            metadata: {
              lqip: 'data:image/jpeg;base64,/9j/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAfABQDASIAAhEBAxEB/8QAGQAAAgMBAAAAAAAAAAAAAAAAAAgEBQcG/8QAKRAAAgEDAwIEBwAAAAAAAAAAAQIDAAQRBQYSITETMkJxBxUiQVFhgf/EABgBAAMBAQAAAAAAAAAAAAAAAAABBAID/8QAGxEAAgIDAQAAAAAAAAAAAAAAAAECEgMRMUH/2gAMAwEAAhEDEQA/AOQ278Mp5trfOYbyJT5liZcMR71V7l0m+ttNaTwI39P0jOK3+30nhDJblQIj5UBwD/KgT7dSAsEVXjPViTnBros7RNLEmxT20w8jzSTl+hRTKybPtpXZ0KxgnqOGaKLxNVmQbHeLPeETOef4bsfareLWrSTMk05jB78m6Cl/W58UK7XciMOvRaLi7e4Qq9/Kqn0he9T96NSfpuM+/wDSIZWjEjPxOMjtRS+TPGkhVZXYD7kUUaFeR//Z',
            },
          },
        },
      },
      {
        _id: '8d1f5d74-7ed0-414f-a200-0f36fe1f3827',
        title: 'The Shadow Rising',
        slug: {
          current: 'the-shadow-rising',
        },
        readStatus: ['Read'],
        cover: {
          asset: {
            url: 'https://cdn.sanity.io/images/vvmrkra8/production/0edb9786935bcc26ddd6c5488d90430b1b137c00-318x500.jpg',
            altText: null,
            metadata: {
              lqip: 'data:image/jpeg;base64,/9j/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAfABQDASIAAhEBAxEB/8QAGAAAAwEBAAAAAAAAAAAAAAAAAAQGBwX/xAAlEAABAwMEAgIDAAAAAAAAAAACAQMEAAURBhIhMVFhBxMUIkH/xAAXAQADAQAAAAAAAAAAAAAAAAABAwQA/8QAHBEAAgICAwAAAAAAAAAAAAAAAAEDERIxIlFS/9oADAMBAAIRAxEAPwCJtugZTui5F9WRHwGVRgk5VE91MiLSt4IQRxPVVtplMy4QxlmO7C5JncuM0TbTAbUCLbjK7i8J/KfQkgHILhmpCnC+KKo3vxVP9DTGPNFHEFmgM6Lhw5CuxJAuj1wuKckaXKUwrbAESr3WcxJM+Phwbi77TmnQ1TcRTi4PIvSd1BlI9Ms4LaO098aP/YuCJKKnndZ3kCwNwcJPK5ooXP6NcPR//9k=',
            },
          },
        },
      },
      {
        _id: 'be14aae5-f96f-448f-b491-2b4f3dc2432d',
        title: 'The Fires of Heaven',
        slug: {
          current: 'the-fires-of-heaven',
        },
        readStatus: ['read'],
        cover: {
          asset: {
            url: 'https://cdn.sanity.io/images/vvmrkra8/production/5144fb28ef028dc87d1ea697a55b31c6eb20d86a-318x500.jpg',
            altText: null,
            metadata: {
              lqip: 'data:image/jpeg;base64,/9j/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAfABQDASIAAhEBAxEB/8QAGAAAAwEBAAAAAAAAAAAAAAAAAAUGAwH/xAAnEAACAgIBAgQHAAAAAAAAAAABAgMEABESBTEGIWFxBxMiI0GBwf/EABcBAAMBAAAAAAAAAAAAAAAAAAIDBQH/xAAbEQEAAgMBAQAAAAAAAAAAAAABAAIDEROBUf/aAAwDAQACEQMRAD8Alq3w4ir+F5ury3IGii3yj/J/f8yJjgSuJHmr/MUrqMKO7HtlOHqy25436hO6ltmryPAH2zd0pz1+EoCwliGYHRUa8jky+ZqgeylTFVFt5JKPo7OoaSHTHzI32wxrShRI2FeyWj5HW22R6YYTZ+xegiw2TV8TTmJ1PJgNMO+NuodZ415IVgiRT3Y9/bJOV4rNxp5ZyshIPkpzsxhlLlrDen0nD5OybXJXTN6NsLE33OO3J1vDEkvBHIWQsO+9awxjiIjrP//Z',
            },
          },
        },
      },
      {
        _id: '3d19a1b4-5633-4f4b-bba9-d8359257197c',
        title: 'Lord of Chaos',
        slug: {
          current: 'lord-of-chaos',
        },
        readStatus: ['reading'],
        cover: {
          asset: {
            url: 'https://cdn.sanity.io/images/vvmrkra8/production/239bfc41551feb4ae8631f8dee7af1c3130daf31-318x499.jpg',
            altText: null,
            metadata: {
              lqip: 'data:image/jpeg;base64,/9j/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAfABQDASIAAhEBAxEB/8QAGgAAAQUBAAAAAAAAAAAAAAAAAAIDBQYHBP/EACcQAAEDAwQBAwUAAAAAAAAAAAECAxEABAUGEiExIgcTFCNBUWFx/8QAFwEBAQEBAAAAAAAAAAAAAAAABAYCBf/EACERAAEEAgEFAQAAAAAAAAAAAAEAAgMRBBITISIxcYHx/9oADAMBAAIRAxEAPwBfo/pxp/COZZ11qHCQlB7EVddRY6xRhHjsQpQTyr71mulsczZ4ou2uSeQOyyT47v5Vly7rSbJDvzZSU7HEz1xUfls5pN4fX1V0RdF2TH8WTZJwMXa0MqlHYMUU/lUNi7IbBiB3FFOa4ULW3NN9FC6c1Pee24lhtCoMeZ4NWfJamuE4htpxpoE8rUszz+qzzCXjFqxCVwonnxmnMhdi5bJeuVJTMABFLdinkpooLmtygY9nm3UuK9zbpuV/UJ57BoqHuW2kukIdKh+dsUU4Y8YHhBOXKTey/9k=',
            },
          },
        },
      },
    ],
  },
  {
    _id: '8b5ddc79-0d19-453c-967d-95dd17c6c301',
    title: 'How not to be a Boy',
    author: 'Robert Webb',
    slug: {
      current: 'how-not-to-be-a-boy',
    },
    series: '',
    bookNumber: null,
    readStatus: ['Read'],
    cover: {
      asset: {
        url: 'https://cdn.sanity.io/images/vvmrkra8/production/d92973a5650043959afc73f5510cb6d7f79b1944-1666x2560.jpg',
        altText: null,
        metadata: {
          lqip: 'data:image/jpeg;base64,/9j/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAfABQDASIAAhEBAxEB/8QAGgAAAQUBAAAAAAAAAAAAAAAAAAIDBAYHBf/EACgQAAICAQMCBQUBAAAAAAAAAAECAwQFAAYRITESE0FRcQcUIiUyYv/EABYBAQEBAAAAAAAAAAAAAAAAAAQFBv/EAB4RAAICAgIDAAAAAAAAAAAAAAECAAMEEQUhEhMx/9oADAMBAAIRAxEAPwC6LDSjg82cTKAOSQ3TTVKTH23KqlpD3VX5Uke/XUfMR/r/ABM5SNHVmbnsAdTLVlMhcpOs/ikiQkKOP5479NOuvNd61AdGSMfDW3Fe8nRWIs14klIiVwv+jydGnpAxbljydGnhZKP2Yzlc3u/cEy2aeMdMMPz8APHmJ7k/GjP3NwUqdGbCY2ShGCGMkkgJk57D41Xts72SDbFmllLdrzkASsI+wTjqDrqjem3ZsY1e19/K8bcwhieFHTjUJ2Lt5k9zWVqK09ajqWan9TGx9dK+5KMkGQA5YIOhHodGsQzWYt5a81m1KXfgIpPoo7DRpIy7ANQZ46knc//Z',
        },
      },
    },
    relatedBooks: [],
  },
  {
    _id: '5483de4a-44fb-4b1c-8f13-586b0aa0e91b',
    title: 'Salems Lot',
    author: 'Stephen King',
    slug: {
      current: 'salems-lot',
    },
    series: '',
    bookNumber: null,
    readStatus: ['read'],
    cover: {
      asset: {
        url: 'https://cdn.sanity.io/images/vvmrkra8/production/18338ea6302b1f48ab2e9895ed2b310bb7f86214-1524x2339.jpg',
        altText: null,
        metadata: {
          lqip: 'data:image/jpeg;base64,/9j/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAfABQDASIAAhEBAxEB/8QAGgAAAwADAQAAAAAAAAAAAAAAAAYHAwQFCP/EACcQAAICAgICAAUFAAAAAAAAAAECAwQABRESBiETMUFRYQcUIjJx/8QAFwEAAwEAAAAAAAAAAAAAAAAAAgQFA//EABwRAAICAwEBAAAAAAAAAAAAAAECABEDBEEhEv/aAAwDAQACEQMRAD8AUE8Jk22vgnq2EE7kkq6+uPtz980H/TXdvH2iNNx7LAH2v+5QtVUn7Ve7yCqjdjGh4BzpyeO1tm9yzFs7CzL6aFf4g5Mw7qsvnJR2tovnY32ef9z41c1l5q9xVWYAEqp+XOGU/b6aNbrCXl34HJY8nDGBsEi6hKxIuo46y4v7atBTEctmT5I7cAD84seYeR7vSRL1jhrdmJLIQ3b8ZN9Z5Q8UY7KwnUcCQHM1zfJcZTZiEir9CT7xLDonE9lbE0TXxglm9Jjnq/I49jTSxd4+OfTcYZPbdwTS9qsfwY+P6A/XDKS4VIuqjHyByf/Z',
        },
      },
    },
    relatedBooks: [],
  },
  {
    _id: 'eef26d03-5956-46b1-99e9-f2b6b87e7663',
    title: 'Under the Dome',
    author: 'Stephen King',
    slug: {
      current: 'under-the-dome',
    },
    series: '',
    bookNumber: null,
    readStatus: ['Read'],
    cover: {
      asset: {
        url: 'https://cdn.sanity.io/images/vvmrkra8/production/ff5e544efe01b71a442de18dbce75c40f7023895-652x1000.jpg',
        altText: null,
        metadata: {
          lqip: 'data:image/jpeg;base64,/9j/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAfABQDASIAAhEBAxEB/8QAGQAAAwEBAQAAAAAAAAAAAAAAAAUGBwME/8QAJRAAAgEEAgEEAwEAAAAAAAAAAQIDAAQFERIhBhMiQVEUFTFh/8QAGAEAAgMAAAAAAAAAAAAAAAAAAwUBBAb/xAAiEQACAQQBBAMAAAAAAAAAAAABAgMABBEhEhMUInFBYeH/2gAMAwEAAhEDEQA/APXifCb188kIgPoc+2A9vGrNIMFip3gnaPmh0STqu1r5XA11G1gQVffVQmXlkxmbZr6aIidiyya2SD8Gj3U0sS8g2iaNbvDeuFZQCoxrWfv3WlyWWLk4vFxKMoINFLsQlnLj4pLi9iR2GwGYKdfHVFEjmYqDVOWKNXK8qyLKX+Mw7R/rHmN5KNDb9Lul8mTea4t/ypfUVVZuZ723+VINlbMXqtL6plRfrYplFmsfO8fMSFFUlfYOzSRQ/TCsc1prBbdI8cdn5qiW9GSjSd4ZS2uJ71/KKQReQW0IKxoxXe/qioLTA4UapsO1I8kGfX5X/9k=',
        },
      },
    },
    relatedBooks: [],
  },
  {
    _id: '89a37127-e4ca-496e-9125-b9467dbe7158',
    title: 'A Darker Shade of Magic',
    author: 'V.E. Schwab',
    slug: {
      current: 'a-darker-shade-of-magic',
    },
    series: 'Shades of Magic',
    bookNumber: 1,
    readStatus: ['Read'],
    cover: {
      asset: {
        url: 'https://cdn.sanity.io/images/vvmrkra8/production/9723b2d39928e238b97f1e5ab90a29783829124b-326x499.jpg',
        altText: null,
        metadata: {
          lqip: 'data:image/jpeg;base64,/9j/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAfABQDASIAAhEBAxEB/8QAGQAAAwEBAQAAAAAAAAAAAAAAAAYHBAUI/8QAJhAAAQMEAQMEAwAAAAAAAAAAAQIDBAAFBhEHITFhEhMyUSJBcf/EABcBAQADAAAAAAAAAAAAAAAAAAMCBAX/xAAiEQACAQMDBQEAAAAAAAAAAAABAgAREiEDBBMUFTFBUaH/2gAMAwEAAhEDEQA/AKRluURccx+bKeSpTyUlCW09CVHt1pB4TztuUybLc5Co0krU4286sEOEn4008yxESMciMqaDpdkpBTvRNSyXjtsYWpwW55sFYIUFjfq8UdDHWy2hGfyekUsPa6v78iiozYOVJMG3iJLZQtbCi2FL2SUjtuih50+zQ7Ruzm2LXMeSS7pnjNvjJccZgrASyje1q/dYoM9d+nKtrdkfZmreDRSSo+35P1qua3yDEZyCZdnrMhct1ZWlQc+H8rXbLrIL865RX5LBkuB3aHOo2KRQV8yrrvpuQFwAJU8V4rit2xQnKdLpdUfz76opVt3It7hRvZVJW/o7C3NE6+qKjxr7ETrtwMK5pP/Z',
        },
      },
    },
    relatedBooks: [
      {
        _id: '89a37127-e4ca-496e-9125-b9467dbe7158',
        title: 'A Darker Shade of Magic',
        slug: {
          current: 'a-darker-shade-of-magic',
        },
        readStatus: ['Read'],
        cover: {
          asset: {
            url: 'https://cdn.sanity.io/images/vvmrkra8/production/9723b2d39928e238b97f1e5ab90a29783829124b-326x499.jpg',
            altText: null,
            metadata: {
              lqip: 'data:image/jpeg;base64,/9j/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAfABQDASIAAhEBAxEB/8QAGQAAAwEBAQAAAAAAAAAAAAAAAAYHBAUI/8QAJhAAAQMEAQMEAwAAAAAAAAAAAQIDBAAFBhEHITFhEhMyUSJBcf/EABcBAQADAAAAAAAAAAAAAAAAAAMCBAX/xAAiEQACAQMDBQEAAAAAAAAAAAABAgAREiEDBBMUFTFBUaH/2gAMAwEAAhEDEQA/AKRluURccx+bKeSpTyUlCW09CVHt1pB4TztuUybLc5Co0krU4286sEOEn4008yxESMciMqaDpdkpBTvRNSyXjtsYWpwW55sFYIUFjfq8UdDHWy2hGfyekUsPa6v78iiozYOVJMG3iJLZQtbCi2FL2SUjtuih50+zQ7Ruzm2LXMeSS7pnjNvjJccZgrASyje1q/dYoM9d+nKtrdkfZmreDRSSo+35P1qua3yDEZyCZdnrMhct1ZWlQc+H8rXbLrIL865RX5LBkuB3aHOo2KRQV8yrrvpuQFwAJU8V4rit2xQnKdLpdUfz76opVt3It7hRvZVJW/o7C3NE6+qKjxr7ETrtwMK5pP/Z',
            },
          },
        },
      },
      {
        _id: '5cb3aa7a-6f25-4445-bda3-a8c4e7583907',
        title: 'A Gather of Shadows',
        slug: {
          current: 'a-gather-of-shadows',
        },
        readStatus: ['Read'],
        cover: {
          asset: {
            url: 'https://cdn.sanity.io/images/vvmrkra8/production/2d6b0cd3126b7a7cceab698b4079c58894aab9a9-265x400.jpg',
            altText: null,
            metadata: {
              lqip: 'data:image/jpeg;base64,/9j/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAeABQDASIAAhEBAxEB/8QAGQAAAgMBAAAAAAAAAAAAAAAAAAQBBQYH/8QAJxAAAgIBAwQBBAMAAAAAAAAAAQIDBAAFERIGIjFRExQVIWFBccH/xAAWAQEBAQAAAAAAAAAAAAAAAAAEBgX/xAAlEQACAQMBCAMAAAAAAAAAAAABAgADBBESBQYTFCExUYEVYfD/2gAMAwEAAhEDEQA/AOV3rIiqS8WKSkEL/eL9JX5Yo2rzd0x3bd9m3H6zSijpNtBUvpM8wYMqx+SP3i1iHp19bKrWvQmsuwZB69e8ClFShyZW3e06qXSmmpOOg+/Ml5eZ5NtufQ2wyOULO5U7pyPHb1hgymD3lPTuyyg6D+9yzF37VcFxUjeSRdjzH8Yno/XVixNZBr01iXsXsAPnF9dWNJxWdPlIG/Jj4yk0fpBNRrmWScofm4ngTuRmlwmIIz3kL8lQV0YU86c+5ayOGkdgo7iT+PGGbLT+iNLrVUj+otsR5LbH/cMPyjeZtrvJb46qRP/Z',
            },
          },
        },
      },
      {
        _id: '3deaf95e-06b4-462b-8b7d-37b55c3f5709',
        title: 'A Conjuring of Light',
        slug: {
          current: 'a-conjuring-of-light',
        },
        readStatus: ['Read'],
        cover: {
          asset: {
            url: 'https://cdn.sanity.io/images/vvmrkra8/production/7a5c404d802815045c6f4044e3bd8ee3356c1a08-740x1127.webp',
            altText: null,
            metadata: {
              lqip: 'data:image/jpeg;base64,/9j/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAeABQDASIAAhEBAxEB/8QAGQAAAwEBAQAAAAAAAAAAAAAAAAcIBgQF/8QAKRAAAgIBAwMDAwUAAAAAAAAAAQIDBAUABhEHEiETIkExUYEIFTJhcf/EABcBAQEBAQAAAAAAAAAAAAAAAAMFAAH/xAAeEQEAAgEEAwAAAAAAAAAAAAABAAIRAwQSIQVBcf/aAAwDAQACEQMRAD8AVWNxmR3MmEerGtuWabumUfT2nz3fjW/637EX1Y83t2jXavHXUWoIkPKsB5IH210/phe1XwGZmhFdlX3J6w/iT4PB006e5MqAtCSLHEsDGA55Ln7fnR4WMWoeu5Ec8/fISI0X44A0aqbJdGdq37stvN2/2e9MS71YmAUf2P8AdGtxZzmRPdI99zbVsJElZ545HCsnHKsCfnVR7iuYPBxnM3qYVmZRCFXz3FeedS9C6Y6SCvBGojjI88cE+fvrc9VeqDTTUKVCvNGlWBQwkIIY8fXQ6e4LmQlTdeIvtrldSwZ+9TwN3dWdzzZ2wfUpOi+1GeIc9vxzo0tM5kmy+Qe3YRVkYAEKABo03bJaA4n/2Q==',
            },
          },
        },
      },
    ],
  },
  {
    _id: 'f2229155-c9d5-4af8-a48d-3bc714f4db05',
    title: 'Our Dark Duet',
    author: 'V.E. Schwab',
    slug: {
      current: 'our-dark-duet',
    },
    series: 'Monsters of Verity',
    bookNumber: 1,
    readStatus: ['Read'],
    cover: {
      asset: {
        url: 'https://cdn.sanity.io/images/vvmrkra8/production/a5adb1820a9a689f36c4fcb8bd16332e13a7e54f-1535x2339.jpg',
        altText: null,
        metadata: {
          lqip: 'data:image/jpeg;base64,/9j/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAeABQDASIAAhEBAxEB/8QAGgAAAgMBAQAAAAAAAAAAAAAAAAUDBAcCCP/EACYQAAEDBAAGAgMAAAAAAAAAAAECAwQABRESExQhIjFRBjJBYdH/xAAWAQEBAQAAAAAAAAAAAAAAAAADAgT/xAAZEQADAQEBAAAAAAAAAAAAAAAAAQIRAzH/2gAMAwEAAhEDEQA/APRTMOPGgqkOrWEAZynrXLBjSiEpdeVsM9RjFKrBfmrva5IgutgIXgpUfqn8CmrKpXMt7lnQeQk+RTTOzrM121eLwqSYaUOkIJI/dFVL9JktTylop11HmiiNBiXwGbfbPx0cmyWn1BaypRIHrGK1y0yrrOh8eLGjx3Uns4mTv/Kmslpj2qGmPAQENgddxsSfeTUr6ZrasomFIHgBIqlbSwN803rG7HGcYbVPS1zOO/UdKKTrnOk9yiSBgn3RUCn/2Q==',
        },
      },
    },
    relatedBooks: [
      {
        _id: 'f2229155-c9d5-4af8-a48d-3bc714f4db05',
        title: 'Our Dark Duet',
        slug: {
          current: 'our-dark-duet',
        },
        readStatus: ['Read'],
        cover: {
          asset: {
            url: 'https://cdn.sanity.io/images/vvmrkra8/production/a5adb1820a9a689f36c4fcb8bd16332e13a7e54f-1535x2339.jpg',
            altText: null,
            metadata: {
              lqip: 'data:image/jpeg;base64,/9j/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAeABQDASIAAhEBAxEB/8QAGgAAAgMBAQAAAAAAAAAAAAAAAAUDBAcCCP/EACYQAAEDBAAGAgMAAAAAAAAAAAECAwQABRESExQhIjFRBjJBYdH/xAAWAQEBAQAAAAAAAAAAAAAAAAADAgT/xAAZEQADAQEBAAAAAAAAAAAAAAAAAQIRAzH/2gAMAwEAAhEDEQA/APRTMOPGgqkOrWEAZynrXLBjSiEpdeVsM9RjFKrBfmrva5IgutgIXgpUfqn8CmrKpXMt7lnQeQk+RTTOzrM121eLwqSYaUOkIJI/dFVL9JktTylop11HmiiNBiXwGbfbPx0cmyWn1BaypRIHrGK1y0yrrOh8eLGjx3Uns4mTv/Kmslpj2qGmPAQENgddxsSfeTUr6ZrasomFIHgBIqlbSwN803rG7HGcYbVPS1zOO/UdKKTrnOk9yiSBgn3RUCn/2Q==',
            },
          },
        },
      },
      {
        _id: '7a835592-cc45-4bba-9f24-05fff32938af',
        title: 'This Savage Song',
        slug: {
          current: 'this-savage-song',
        },
        readStatus: ['Read'],
        cover: {
          asset: {
            url: 'https://cdn.sanity.io/images/vvmrkra8/production/b75ab85eb2b405765c71da6f12fadda4047b3074-1535x2339.jpg',
            altText: null,
            metadata: {
              lqip: 'data:image/jpeg;base64,/9j/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAeABQDASIAAhEBAxEB/8QAGwAAAgIDAQAAAAAAAAAAAAAAAAUDBAIGBwj/xAAmEAACAQQCAQQCAwAAAAAAAAABAgMABAUREiFBIjEyUQYUQmGB/8QAFgEBAQEAAAAAAAAAAAAAAAAAAgED/8QAGREAAwEBAQAAAAAAAAAAAAAAAAECEQNh/9oADAMBAAIRAxEAPwD0PaGGfHJem4eCPX8T1UUMEF7IFiy9wXI+IYUmxNpc2WNtlgikuw8Kgpz2itTH9p7K7iEeJjW4b4nlok+dUW8ZtHNVPoxlseDcdk6GtnzRTPt1VnXixAJH1RSMTlv49mMhfWiWtvbSISdhd8PV5/ysp5s/DkFd44gEfgjNISS/gCt2s5ER9rBFve9673Vm5mVk9UER75djz91MQ1dJYitgTkYMZGmZuFnvOyzquuj7DVFQyXDsxJ9/6oqgP//Z',
            },
          },
        },
      },
    ],
  },
  {
    _id: '7c8183d3-99ce-4227-93a9-c94f019b17b7',
    title: 'Vicious',
    author: 'V.E. Schwab',
    slug: {
      current: 'vicious',
    },
    series: 'Villains',
    bookNumber: 1,
    readStatus: ['Read'],
    cover: {
      asset: {
        url: 'https://cdn.sanity.io/images/vvmrkra8/production/cc76993042a25e11172a7c5afab91d25c62ec9f7-325x499.jpg',
        altText: null,
        metadata: {
          lqip: 'data:image/jpeg;base64,/9j/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAfABQDASIAAhEBAxEB/8QAGQAAAgMBAAAAAAAAAAAAAAAAAAUBBAYC/8QAKRAAAgICAAQDCQAAAAAAAAAAAQIDBAARBRIhMSJhcRMVI0FCUYGRsf/EABcBAAMBAAAAAAAAAAAAAAAAAAECAwT/xAAaEQACAwEBAAAAAAAAAAAAAAAAAQIRIQMi/9oADAMBAAIRAxEAPwDW8L9lFxALdrIyHpqTXL6nHXGW4bFUJq0qLMRpuVuoPliG3Wau6lrQc7+TE5xFKl4OsTSsK7GOTwfVr+ZlavSiZXEQA7Qn1UYZMohDkKx15g4YwC9W4dZnj563NIMYLVsQV/jV3QnfMI9+I67nWTw297mSJJYzKCSX5en6yxZ4/Vau0datNHK/QMzAj84jcrwtFc69PTNSMqOVKbI798MeKWI2xrk/cw73hjWSP//Z',
        },
      },
    },
    relatedBooks: [
      {
        _id: '7c8183d3-99ce-4227-93a9-c94f019b17b7',
        title: 'Vicious',
        slug: {
          current: 'vicious',
        },
        readStatus: ['Read'],
        cover: {
          asset: {
            url: 'https://cdn.sanity.io/images/vvmrkra8/production/cc76993042a25e11172a7c5afab91d25c62ec9f7-325x499.jpg',
            altText: null,
            metadata: {
              lqip: 'data:image/jpeg;base64,/9j/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAfABQDASIAAhEBAxEB/8QAGQAAAgMBAAAAAAAAAAAAAAAAAAUBBAYC/8QAKRAAAgICAAQDCQAAAAAAAAAAAQIDBAARBRIhMSJhcRMVI0FCUYGRsf/EABcBAAMBAAAAAAAAAAAAAAAAAAECAwT/xAAaEQACAwEBAAAAAAAAAAAAAAAAAQIRIQMi/9oADAMBAAIRAxEAPwDW8L9lFxALdrIyHpqTXL6nHXGW4bFUJq0qLMRpuVuoPliG3Wau6lrQc7+TE5xFKl4OsTSsK7GOTwfVr+ZlavSiZXEQA7Qn1UYZMohDkKx15g4YwC9W4dZnj563NIMYLVsQV/jV3QnfMI9+I67nWTw297mSJJYzKCSX5en6yxZ4/Vau0datNHK/QMzAj84jcrwtFc69PTNSMqOVKbI798MeKWI2xrk/cw73hjWSP//Z',
            },
          },
        },
      },
      {
        _id: 'b2ffe84c-d408-4b41-b168-9606b59b01bc',
        title: 'Vengeful',
        slug: {
          current: 'vengeful',
        },
        readStatus: ['Read'],
        cover: {
          asset: {
            url: 'https://cdn.sanity.io/images/vvmrkra8/production/1f638511e42a9cc76f97c93f49c4643ea541150a-326x499.jpg',
            altText: null,
            metadata: {
              lqip: 'data:image/jpeg;base64,/9j/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAfABQDASIAAhEBAxEB/8QAGAAAAgMAAAAAAAAAAAAAAAAAAAQFBgf/xAAkEAABBAICAgIDAQAAAAAAAAABAgMEBQARBiESMVFhExQywf/EABYBAQEBAAAAAAAAAAAAAAAAAAMEAv/EAB0RAAIBBAMAAAAAAAAAAAAAAAABEQIDEiETIjH/2gAMAwEAAhEDEQA/ALFSM/srTFRvbh9/Z1k1Z8UfrIiZj7h025tXXXZ6xekiOQuQVzShrbgBPzrWW/kty1dcbumW21tmJIDJKh/Wj7GTtudG1EbMctDIEtX41Hw11hk+zSz5rSXY0ZbreteQwxMkZg2OXTRFSWJBShK21+YIOji9hDiWlfJixyGitaS4T1vveQvEbhNx4szSpUhIPgfrLC9VRmGFqcSoJA70r3kzyTKaFadPZjVPDi1de1EbKQlA+ff3hmT8q5NPatlIhOJQyEAAEfGx/mGJxt7Ayjw//9k=',
            },
          },
        },
      },
    ],
  },
];

export default fakeData_formatted;
