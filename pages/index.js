import Head from "next/head";
import Script from "next/script";

import HomePage from "@components/containers/home-page";
import { getArticles } from "utils/articles";

export default function Home({ articles }) {
  return (
    <>
      <Head>
        <title>Archetype | Home</title>
        <meta
          name="twitter:card"
          content="Updates, memes and all things APIs and programming from Archetype"
          key="twcard"
        />
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
        <link rel="preload" as="image" href="/images/hero.png" />

        <noscript>
          <img
            height="1"
            width="1"
            src={`https://www.facebook.com/tr?id=517709336394629&ev=PageView&noscript=1`}
          />
        </noscript>
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-8PE8JSX9VB"
        />
        <Script
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
            (function (d, u, h, s) {
              h = d.getElementsByTagName('head')[0];
              s = d.createElement('script');
              s.async = 1;
              s.src = u + new Date().getTime();
              h.appendChild(s);
            })(document, 'https://grow.clearbitjs.com/api/pixel.js?k=pk_07b44a2a83c0b1b5bfdaba9623a8756c&v=');
            `,
          }}
        />

        <Script
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-8PE8JSX9VB', { page_path: window.location.pathname });
            `,
          }}
        />
        <Script
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              !function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window,document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', '517709336394629'); 
              fbq('track', 'PageView');
              `,
          }}
        />
        <Script
          strategy="afterInteractive"
          type="text/javascript"
          id="hs-script-loader"
          async
          src="//js.hs-scripts.com/21918475.js"
        />
      </Head>
      <HomePage articles={articles} />
    </>
  );
}

export const getStaticProps = async () => {
  const articles = (await getArticles()).slice(0, 4);

  return {
    props: {
      articles,
    },
  };
};
