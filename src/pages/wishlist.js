import Head from 'next/head';
import wishlistData from '@/lib/scraper/scrapeWishlist';

export default function Wishlist({ wishlist }) {
  console.log(wishlist);
  return (
    <>
      <Head>
        <title>Wishlist - Bookshelf</title>
        <link rel="icon" href="/favicon.ico" />
        {/* <meta name="description" content={settings.description} />

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
        /> */}
      </Head>

      <div className="stack">
        <h1>Wishlist</h1>

        <pre>{JSON.stringify(wishlist, null, ' ')}</pre>
      </div>
    </>
  );
}

export async function getStaticProps() {
  const wishlist = await wishlistData;

  return {
    props: {
      wishlist,
    },
  };
}
