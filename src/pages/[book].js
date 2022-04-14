import getSanityContent from '@lib/sanity'
import Image from 'next/image'
import {PortableText} from '@portabletext/react'

export default function Book ({title, author, series, blurb, cover, readStatus}) {
  return (
    <>
      {title ? <h1>{title}</h1> : null}
      {series ? <p>{series}</p> : null}
      {author ? <p>{author}</p> : null}
      {readStatus ? <p>{readStatus}</p> : null}

      {cover ? <Image src={cover.url} alt={cover.altText} width="320" height="500" layout='intrinsic' /> : null}

      {blurb ? <PortableText value={blurb} /> : null}
    </>
  )
}

export async function getStaticProps({ params }) {
  const data = await getSanityContent({
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

  const [book] = data.allBook

  const {title, blurbRaw: blurb, readStatus} = book
  const author = book.author ? book.author.name : null
  const series = book.series ? book.series.name : null
  const cover = book.cover ? book.cover.asset : null

  return {
    props: {
      title,
      author,
      series,
      blurb,
      cover,
      readStatus,
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

