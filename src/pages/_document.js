import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html>
      <Head>
        <link
          rel="preload"
          href="/fonts/Source_Serif_Pro/subset-SourceSerifPro-Regular.woff2"
          as="font"
          type="font/woff2"
          crossOrigin
        />
        <link
          rel="preload"
          href="/fonts/Source_Serif_Pro/subset-SourceSerifPro-It.woff2"
          as="font"
          type="font/woff2"
          crossOrigin
        />
        <link
          rel="preload"
          href="/fonts/Source_Serif_Pro/subset-SourceSerifPro-Black.woff2"
          as="font"
          type="font/woff2"
          crossOrigin
        />
        <link
          rel="preload"
          href="/fonts/Source_Serif_Pro/subset-SourceSerifPro-BoldIt.woff2"
          as="font"
          type="font/woff2"
          crossOrigin
        />
        <link
          rel="preload"
          href="/fonts/Source_Serif_Pro/subset-SourceSerifPro-Bold.woff2"
          as="font"
          type="font/woff2"
          crossOrigin
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
