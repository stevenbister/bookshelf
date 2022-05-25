import Head from 'next/head';
import getSanityContent from 'src/lib/sanity';
import Bookshelf from '@/components/Bookshelf';
import { queryAllBooks, buildBooksArray } from '@/lib/queryBooks';

export default function Home({ books, total, settings }) {
  return (
    <>
      <Head>
        <title>{settings.title}</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content={settings.description} />

        <meta property="og:title" content={settings.title} />
        <meta property="og:image" content={settings.socialImage.asset.url} />
        <meta property="og:site_name" content="Bookshelf" />
        <meta property="og:description" content={settings.description} />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:description" content={settings.description} />
        <meta name="twitter:title" content={settings.title} />
        <meta name="twitter:site" content="@stevebister" />
        <meta
          name="twitter:domain"
          content="https://bookshelf.stevenbister.com/"
        />
        <meta
          name="twitter:image:src"
          content={settings.socialImage.asset.url}
        />
      </Head>

      <Bookshelf books={books} total={total} />
    </>
  );
}

export async function getStaticProps() {
  const settings = await getSanityContent({
    query: `
      query SiteSettings($id: ID!) {
        SiteSettings(id: $id) {
          title,
          description,
          socialImage {
            asset {
              url
              altText
            }
          }
        }
      }
    `,
    variables: {
      id: 'siteSettings',
    },
  });

  const allBooks = await queryAllBooks();
  const books = await buildBooksArray(allBooks.allBook);

  const total = allBooks.allBook.length;

  return {
    props: { books, total, settings: settings.SiteSettings },
  };
}
