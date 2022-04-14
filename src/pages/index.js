import Head from 'next/head'
import Link from 'next/link'
import getSanityContent from 'src/lib/sanity'

export default function Home({books, total}) {
  return (
    <>
      <Head>
        <title>Bookshelf</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <p>{total} books on the shelf</p>

      <ul>
        {books.map(({ title, slug }) => (
          <li key={slug}>
            <Link href={`/${slug}`}>
              <a>{title}</a>
            </Link>
          </li>
        ))}
      </ul>
    </>
  )
}

export async function getStaticProps() {
  const data = await getSanityContent({
    query: `
      query AllBooks {
        allBook {
          title
          slug {
            current
          }
        }
      }
    `
  })

  const books = data.allBook.map((book) => ({
    title: book.title,
    slug: book.slug.current,
  }))

  const total = data.allBook.length

  return {
    props: { books, total }
  }
}