import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html>
      <Head>
        <meta
          name="twitter:card"
          content="Updates, memes and all things APIs and programming from Archetype"
          key="twcard"
        />
        <meta name="twitter:creator" content="GetArchetype" key="twhandle" />
        <meta property="og:url" content="https://archetype.dev" key="ogurl" />
        <meta property="og:site_name" content="Archetype" key="ogsitename" />
        <meta
          property="og:title"
          content="Archetype - Billing Infrastructure for APIs"
          key="ogtitle"
        />
        <meta
          property="og:description"
          content="We help companies monetize APIs and experiment with pricing models  by managing their billing infrastructure. Never worry about managing users' quotas and privileges."
          key="ogdesc"
        />
        <link rel="icon" href="/favicon.ico" />
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
