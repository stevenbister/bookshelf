import getSanityContent from '@lib/sanity'
import Link from 'next/link'
import Image from 'next/image'
import {PortableText} from '@portabletext/react'

export default function Book ({title, author, series, blurb, cover, readStatus, related}) {
  return (
    <>
      {title ? <h1>{title}</h1> : null}
      {series ? <p>{series}</p> : null}
      {author ? <p>{author}</p> : null}
      {readStatus ? <p>{readStatus}</p> : null}

      {cover ? <Image src={cover.url} alt={cover.altText} width="320" height="500" /> : null}

      {blurb ? <PortableText value={blurb} /> : null}

      {related ?
        <>
          <h2>More books in this series...</h2>
          <ul>
            {related.map(({_id, title, slug, cover}) => (
              <li key={_id}>
                <Link href={`/${slug.current}`}>
                  <a>
                    <Image src={cover.asset.url} alt={cover.asset.altText} width="160" height="250" />
                    <h3>{title}</h3>
                  </a>
                </Link>
              </li>
            ))}
          </ul>
        </>
      : null}
    </>
  )
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
            }
          }
          readStatus
        }
      }
    `,
    variables: {
      slug: params.book
    },
  })

  const [book] = BookBySlug.allBook

  const {title, blurbRaw: blurb, readStatus} = book
  const author = book.author ? book.author.name : null
  const series = book.series ? book.series.name : null
  const cover = book.cover ? book.cover.asset : null

  // Get related books
  const BooksBySeries = await getSanityContent({
    query: `
      query BooksBySeries($series: String!) {
        allBook(where: { series: { name: { eq: $series } } }) {
          _id
          title
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
    variables: {
      series
    }
  })

  const related = BooksBySeries ? BooksBySeries.allBook : null

  return {
    props: {
      title,
      author,
      series,
      blurb,
      cover,
      readStatus,
      related
    }
  }
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
    `
  })

  const books = data.allBook

  return {
    paths: books.map((book) => `/${book.slug.current}`),
    fallback: false,
  };
}

