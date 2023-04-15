import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  const Fonts = () => (
    <>
      <link
        rel="preconnect"
        href="https://fonts.googleapis.com"
      />
      <link
        rel="preconnect"
        href="https://fonts.gstatic.com"
      />
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap"
      />
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@300;400&display=swap"
      />
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@600;700&display=swap"
      />
    </>
  );
  
  return (
    <Html lang="en">
      <Head>
        <Fonts/>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
