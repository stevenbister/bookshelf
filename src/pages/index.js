import Grid from '@/components/Grid';
import Head from 'next/head';
import getSanityContent from 'src/lib/sanity';

export default function Home({ books, total }) {
  return (
    <>
      <Head>
        <title>Bookshelf</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <p>{total} books on the shelf</p>

      <Grid array={books} />
    </>
  );
}

export async function getStaticProps() {
  const data = await getSanityContent({
    query: `
      query AllBooks {
        allBook {
          _id
          title
          author {
            name
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
            }
          }
        }
      }
    `,
  });

  /**
   * Query all of our books by the series
   *
   * @param {String} variable Title of the series we want to filter our query by
   * @returns {Promise} A Promise containing an object of our query result
   */
  const queryBooksBySeries = async (variable) => {
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
                }
              }
            }
          }
        `,
      variables: {
        series: variable,
      },
    });

    return BooksBySeries;
  };

  const books = await Promise.all(
    data.allBook
      .filter((book) => book.bookNumber === 1 || book.bookNumber === null)
      .map(async (book) => {
        const cover = book.cover ? book.cover : null;
        const series = book.series ? book.series.name : null;

        // Get books by series and pass them into each response
        const querySeries = await queryBooksBySeries(series);
        const relatedBooks = querySeries ? querySeries.allBook : null;

        return {
          _id: book._id,
          title: book.title,
          author: book.author.name,
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
    if (a.author > b.author) return 1;
    if (a.author < b.author) return -1;

    // Then sort by title
    if (a.title > b.title) return 1;
    if (a.title < b.title) return -1;
  });

  const total = data.allBook.length;

  return {
    props: { books, total },
  };
}
