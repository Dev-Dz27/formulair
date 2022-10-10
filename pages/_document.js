import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="icon" href="/logo.ico" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap"
          rel="stylesheet"
        />
        <meta name="title" content="Dzign Store " key="title" />
        <meta name="description" content="Advertising Agency " />
        <meta property="og:title" content="Dzign Store | Formulair" />
        <meta itemprop="image" content="https://i.ibb.co/23tqQz7/preview.png"/>
        <meta
          property="og:description"
          content="Formulair built with Next.js and Tailwindcss. Take a look!"
        />
        <meta
          property="og:url"
          content="https://dzign-store-formation.vercel.app"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
