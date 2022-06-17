import { useRouter } from "next/router";
import { useEffect } from "react";
import Script from "next/script";
import Head from "next/head";
import { hotjar } from "react-hotjar";
import { ChakraProvider } from "@chakra-ui/provider";

import theme from "constants/theme";
import Layout from "@components/shared/layout";

import "../styles/globals.css";
function Application({ Component, pageProps }) {
  const router = useRouter();

  const handleRouteChange = (url) => {
    window.gtag("config", "G-8PE8JSX9VB", {
      page_path: url,
    });
  };

  useEffect(() => {
    router.events.on("routeChangeComplete", handleRouteChange);
    hotjar.initialize(2839791, 6);
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);

  useEffect(() => {
    // disable scroll animation on firefox

    if (!navigator.userAgent.includes("Firefox")) {
      document.querySelector("html").style.scrollBehavior = "smooth";
    }
  }, []);

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <noscript>
          <img
            height="1"
            width="1"
            src={`https://www.facebook.com/tr?id=517709336394629&ev=PageView&noscript=1`}
          />
        </noscript>
        <Script
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=G-8PE8JSX9VB"
        />
        <Script
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
          id="google-analytics"
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
          type="text/javascript"
          id="hs-script-loader"
          async
          defer
          src="//js.hs-scripts.com/21918475.js"
        />
      </Head>
      <ChakraProvider theme={theme}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ChakraProvider>
    </>
  );
}

export default Application;
