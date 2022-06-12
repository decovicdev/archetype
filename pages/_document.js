import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta property="og:url" content="https://archetype.dev" key="ogurl" />
        <meta name="twitter:creator" content="GetArchetype" key="twhandle" />
        <meta property="og:site_name" content="Archetype" key="ogsitename" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="apple-mobile-web-app-title" content="Archetype" />
        <meta name="application-name" content="Archetype" />
        <meta name="theme-color" content="#ffffff" />
        <meta
          name="description"
          content="We help companies monetize APIs and experiment with pricing models  by managing their billing infrastructure. Never worry about managing users' quotas and privileges."
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
