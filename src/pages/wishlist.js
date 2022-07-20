import Head from 'next/head';
import Image from 'next/image';
import wishlistData from '@/lib/scraper/scrapeWishlist';
import pluralise from '@/lib/pluralise';

export default function Wishlist({ wishlist }) {
  return (
    <>
      <Head>
        <title>Wishlist - Bookshelf</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="My wishlist, scraped from Amazon." />

        <meta property="og:title" content="Wishlist - Bookshelf" />
        {/* <meta property="og:image" content={settings.socialImage.asset.url} /> */}
        <meta property="og:site_name" content="Bookshelf" />
        <meta
          property="og:description"
          content="My wishlist, scraped from Amazon."
        />

        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:description"
          content="My wishlist, scraped from Amazon."
        />
        <meta name="twitter:title" content="Wishlist - Bookshelf" />
        <meta name="twitter:site" content="@stevebister" />
        <meta
          name="twitter:domain"
          content="https://bookshelf.stevenbister.com/wishlist"
        />
        {/* <meta
          name="twitter:image:src"
          content={settings.socialImage.asset.url}
        /> */}
      </Head>

      <div className="stack">
        <h1>Wishlist</h1>

        <p className="fs-1">My wishlist, scraped from Amazon.</p>

        <p className="fs-1">
          {wishlist.length} {pluralise('book', wishlist.length)}
        </p>
        <hr />

        <ul role="list">
          {wishlist.map((book) => (
            <li key={book.id}>
              <div className="wide-card">
                <Image
                  src={book.cover}
                  alt=""
                  width="135"
                  height="135"
                  layout="intrinsic"
                  className="wide-card__img"
                />

                <a className="stack" href={book.link}>
                  <h2 className="fs-2">{book.title}</h2>
                  <p>{book.author}</p>
                </a>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export async function getStaticProps() {
  const wishlist = await wishlistData;

  return {
    props: {
      wishlist: wishlist.books,
    },
  };
}
