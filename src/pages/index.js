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

      return {
        _id: book._id,
        title: book.title,
        author: book.author.name,
        slug: book.slug,
        cover,
      };
    })
    .sort((a, b) => a.author.localeCompare(b.author));

  const total = books.length;

  return {
    props: { books, total },
  };
}
