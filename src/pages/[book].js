import getSanityContent from '@/lib/sanity';
import Image from 'next/image';
import Head from 'next/head';
import { PortableText } from '@portabletext/react';
import Reel from '@/components/Reel';
import Sidebar from '@/components/Sidebar';
import ReadStatus from '@/components/ReadStatus';
import { querySingleBook, queryBooksBySeries } from '@/lib/queryBooks';

export default function Book({
  title,
  author,
  series,
  blurb,
  cover,
  readStatus,
  related,
}) {
  const authorNames = author.map(({ name }) => name).join(', ');

  return (
    <>
      <Head>
        <title>{title} - Bookshelf</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content={blurb[0].children[0].text} />

        <meta property="og:title" content={title} />
        <meta property="og:image" content={cover.url} />
        <meta property="og:site_name" content="Bookshelf" />
        <meta property="og:description" content={blurb[0].children[0].text} />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:description" content={blurb[0].children[0].text} />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:site" content="@stevebister" />
        <meta
          name="twitter:domain"
          content="https://bookshelf.stevenbister.com/"
        />
        <meta name="twitter:image:src" content={cover.url} />
      </Head>

      <Sidebar>
        {cover ? (
          <div className="shadow">
            <Image
              src={cover.url}
              alt={cover.altText}
              width="320"
              height="500"
              placeholder="blur"
              blurDataURL={cover.metadata.lqip}
              layout="responsive"
            />
          </div>
        ) : null}

        <div className="stack">
          {title ? <h1>{title}</h1> : null}
          {series ? (
            <p
              className="fs-3 fw-600 lh-1"
              style={{ '--stack-space': 'var(--space-s)' }}
              data-testid="series"
            >
              {series}
            </p>
          ) : null}
          <p
            className="fs-2 fw-600 lh-1"
            style={{ '--stack-space': 'var(--space-2xs)' }}
            data-testid="author"
          >
            {authorNames}
          </p>

          {readStatus ? <ReadStatus status={readStatus} /> : null}

          <div
            className="stack"
            style={{ marginTop: 'var(--space-l)' }}
            data-testid="blurb"
          >
            {blurb ? <PortableText value={blurb} /> : null}
          </div>
        </div>
      </Sidebar>

      {related ? (
        <div style={{ marginTop: 'var(--space-xl-2xl)' }}>
          <h2>More books in this collection</h2>
          <Reel array={related} />
        </div>
      ) : null}
    </>
  );
}

export async function getStaticProps({ params }) {
  // Get current page book
  const book = await querySingleBook(params.book);

  const { title, blurbRaw: blurb, readStatus } = book;
  const author = Array.isArray(book.author) ? book.author : [book.author];
  const series = book.series ? book.series.name : null;
  const cover = book.cover ? book.cover.asset : null;

  // Get related books
  const BooksBySeries = await queryBooksBySeries(series);

  const related = BooksBySeries ? BooksBySeries.allBook : null;

  return {
    props: {
      title,
      author,
      series,
      blurb,
      cover,
      readStatus,
      related,
    },
  };
}

export async function getStaticPaths() {
  const data = await getSanityContent({
    query: `
      query AllBooks {
        allBook {
          slug {
            current
          }
        }
      }
    `,
  });

  const books = data.allBook;

  return {
    paths: books.map((book) => `/${book.slug.current}`),
    fallback: false,
  };
}
