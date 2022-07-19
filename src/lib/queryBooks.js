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
 * Set the read status for series based on whether any of the books are being read or not yet read
 *
 * @param {Array} Array Book object
 * @return {String} String
 */
const seriesReadStatus = (relatedBooks) => {
  const statuses = relatedBooks
    .map((book) => book.readStatus)
    .join(',')
    .split(',');

  const isReading = statuses.includes('reading');
  const isRead = statuses.includes('read');
  const isNotRead = statuses.includes('not read');

  if ((isNotRead && isRead) || (isReading && isRead) || isReading) {
    return 'reading';
  }

  if (isNotRead) {
    return 'not read';
  }

  if (isRead) {
    return 'read';
  }

  return null;
};

/**
 * Build a new array filtering and mapping the books array so we can nest related books within
 * each item.
 *
 * @param {Array} allBooks
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
        // Handle the read status for series
        const readStatus = relatedBooks ? seriesReadStatus(relatedBooks) : null;

        // Ensuer author is always an array
        const author = Array.isArray(book.author) ? book.author : [book.author];

        return {
          _id: book._id,
          title: book.title,
          author,
          slug: book.slug,
          series,
          bookNumber: book.bookNumber,
          readStatus: readStatus || book.readStatus,
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

    const authorA = a.author[0]?.name ? a.author[0].name : a.author;
    const authorB = b.author[0]?.name ? b.author[0].name : b.author;

    const compareAuthor = authorA
      .toLowerCase()
      .localeCompare(authorB.toLowerCase());
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
    // Check whether we're sorting against and object (namely the author) or just a string
    const sortByA = a[sortBy][0]?.name ? a[sortBy][0].name : a[sortBy];
    const sortByB = b[sortBy][0]?.name ? b[sortBy][0].name : b[sortBy];

    const compareSortByVal = sortByA
      .toLowerCase()
      .localeCompare(sortByB.toLowerCase());
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
