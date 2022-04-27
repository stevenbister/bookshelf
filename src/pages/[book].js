import getSanityContent from '@lib/sanity';
import Image from 'next/image';
import Head from 'next/head';
import { PortableText } from '@portabletext/react';
import Reel from '@/components/Reel';
import Sidebar from '@/components/Sidebar';
import ReadStatus from '@/components/ReadStatus';

export default function Book({
  title,
  author,
  series,
  blurb,
  cover,
  readStatus,
  related,
}) {
  return (
    <>
      <Head>
        <title>{title} - Bookshelf</title>
        <link rel="icon" href="/favicon.ico" />
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
            >
              {series}
            </p>
          ) : null}
          {author ? (
            <p
              className="fs-2 fw-600 lh-1"
              style={{ '--stack-space': 'var(--space-2xs)' }}
            >
              {author}
            </p>
          ) : null}

          {readStatus ? <ReadStatus status={readStatus} /> : null}

          <div className="stack" style={{ marginTop: 'var(--space-l)' }}>
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
      slug: params.book,
    },
  });

  const [book] = BookBySlug.allBook;

  const { title, blurbRaw: blurb, readStatus } = book;
  const author = book.author ? book.author.name : null;
  const series = book.series ? book.series.name : null;
  const cover = book.cover ? book.cover.asset : null;

  // Get related books
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
