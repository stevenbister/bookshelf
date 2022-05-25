import getSanityContent from './sanity';
// TODO: Write the tests

const querySingleBook = async (slug) => {
  try {
    const BookBySlug = await getSanityContent({
      query: `
        query BookBySlug($slug: String!) {
          allBook(where: { slug: { current: { eq: $slug } } }) {
            title
            author {
              name
            }
            series {
              name
            }
            blurbRaw
            cover {
              asset {
                url
                altText
                metadata {
                  lqip
                }
              }
            }
            readStatus
          }
        }
      `,
      variables: {
        slug,
      },
    });

    const [book] = BookBySlug ? BookBySlug.allBook : [];

    return book;
  } catch (error) {
    console.error(error);
  }
};

/**
 * Query all of the books from the CMS
 *
 * @returns {Promise} A Promise containing an object of our query result
 */
const queryAllBooks = async () => {
  try {
    const AllBooks = await getSanityContent({
      query: `
        query AllBooks {
          allBook {
            _id
            title
            author {
              name
              slug {
                current
              }
            }
            slug {
              current
            }
            series {
              name
            }
            bookNumber
            readStatus
            cover {
              asset {
                url
                altText
                metadata {
                  lqip
                }
              }
            }
          }
        }
      `,
    });

    return AllBooks;
  } catch (error) {
    console.error(error);
  }
};

/**
 * Query all of our books by the series
 *
 * @param {String} variable Title of the series we want to filter our query by
 * @returns {Promise} A Promise containing an object of our query result
 */
const queryBooksBySeries = async (series) => {
  try {
    const BooksBySeries = await getSanityContent({
      query: `
          query BooksBySeries($series: String!) {
            allBook(
              where: { series: { name: { eq: $series } } },
              sort: { bookNumber: ASC }
            ) {
              _id
              title
              slug {
                current
              }
              readStatus
              cover {
                asset {
                  url
                  altText
                  metadata {
                    lqip
                  }
                }
              }
            }
          }
        `,
      variables: {
        series,
      },
    });

    return BooksBySeries;
  } catch (error) {
    console.error(error);
  }
};

/**
 * Build a new array filtering and mapping the books array so we can nest related books within
 * each item.
 *
 * @param {Array} allBooks
 * @param {String} sortBy
 *
 * @returns {Array} New array of books
 */
const buildBooksArray = async (allBooks) => {
  const books = await Promise.all(
    allBooks
      .filter((book) => book.bookNumber === 1 || book.bookNumber === null)
      .map(async (book) => {
        const cover = book.cover ? book.cover : null;
        const series = book.series ? book.series.name : '';

        // Get books by series and pass them into each response
        const querySeries = await queryBooksBySeries(series);
        const relatedBooks = querySeries ? querySeries.allBook : null;

        return {
          _id: book._id,
          title: book.title,
          author: book.author.name,
          authorSlug: book.author.slug.current, //TODO: Move this into the author property
          slug: book.slug,
          series,
          bookNumber: book.bookNumber,
          readStatus: book.readStatus,
          cover,
          relatedBooks,
        };
      }),
  );

  books.sort((a, b) => {
    // Sort author alphabetically
    // If the first item comes first in the alphabet, move it up
    // Otherwise move it down
    // Then sort by title

    const compareAuthor = a.author
      .toLowerCase()
      .localeCompare(b.author.toLowerCase());
    const compareTitle = a.title
      .toLowerCase()
      .localeCompare(b.title.toLowerCase());

    return compareAuthor || compareTitle;
  });

  return books;
};

/**
 * Sort an array by a value and then order by the title
 *
 * @param {Array} books
 * @param {String} sortBy
 * @returns {Array}
 */
const sortBooks = (books, sortBy) => {
  // Sort sortBy value alphabetically
  books.sort((a, b) => {
    const compareSortByVal = a[sortBy]
      .toLowerCase()
      .localeCompare(b[sortBy].toLowerCase());
    const compareTitle = a.title
      .toLowerCase()
      .localeCompare(b.title.toLowerCase());

    // Check that the sortBy string isn't empty, and if so move the empty items to the end of the array
    // See: https://stackoverflow.com/questions/63823339/sort-array-of-objects-alphabetically-and-move-the-empty-values-to-the-end for details on how this works
    return !a[sortBy] - !b[sortBy] || compareSortByVal || compareTitle;
  });

  return books;
};

export {
  querySingleBook,
  queryAllBooks,
  queryBooksBySeries,
  buildBooksArray,
  sortBooks,
};
