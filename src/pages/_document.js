import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html>
      <Head>
        <link rel="preload" href="/fonts/Inter/Inter-VariableFont_slnt,wght.ttf" as="font" type="font/woff2" crossOrigin />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
