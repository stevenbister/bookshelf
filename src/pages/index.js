import Link from 'next/link'
import getSanityContent from 'src/lib/sanity'

export default function Home({books}) {
  return (
    <>
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

  return {
    props: { books }
  }
}