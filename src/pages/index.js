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

  const books = data.allBook
    .map((book) => {
      const cover = book.cover ? book.cover : null;
      const series = book.series ? book.series.name : null;

      return {
        _id: book._id,
        title: book.title,
        author: book.author.name,
        slug: book.slug,
        series,
        bookNumber: book.bookNumber,
        cover,
      };
    })
    .sort((a, b) => {
      // Sort author alphabetically
      // If the first item comes first in the alphabet, move it up
      // Otherwise move it down
      if (a.author > b.author) return 1;
      if (a.author < b.author) return -1;

      // The sort by the series
      if (a.series > b.series) return 1;
      if (a.series < b.series) return -1;

      // Finally order the series by book number
      if (a.bookNumber > b.bookNumber) return 1;
      if (a.bookNumber < b.bookNumber) return -1;
    });

  const total = books.length;

  return {
    props: { books, total },
  };
}
