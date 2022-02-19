import '@styles/globals.css'
import { useRouter } from 'next/router';
import { useEffect } from "react";
import { hotjar } from 'react-hotjar'

function Application({ Component, pageProps }) {
  const router = useRouter();

  const handleRouteChange = (url) => {
    window.gtag('config', 'G-8PE8JSX9VB', {
      page_path: url,
    });
  };

  useEffect(() => {
    router.events.on('routeChangeComplete', handleRouteChange);
    hotjar.initialize(2839791, 1)
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router.events]);

  return <Component {...pageProps} />
}

export default Application
