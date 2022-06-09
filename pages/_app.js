import { useRouter } from "next/router";
import { useEffect } from "react";
// import { hotjar } from "react-hotjar";
import { ChakraProvider } from "@chakra-ui/provider";

import theme from "constants/theme";
import Layout from "@components/shared/layout";

import "../styles/globals.css";

function Application({ Component, pageProps }) {
  const router = useRouter();

  const handleRouteChange = (url) => {
    // window.gtag("config", "G-8PE8JSX9VB", {
    //   page_path: url,
    // });
  };

  useEffect(() => {
    router.events.on("routeChangeComplete", handleRouteChange);
    // hotjar.initialize(2839791, 6);
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);

  return (
    <ChakraProvider theme={theme}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ChakraProvider>
  );
}

export default Application;
