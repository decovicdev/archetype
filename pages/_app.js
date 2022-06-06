import "@styles/globals.css";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { hotjar } from "react-hotjar";
import { ChakraProvider } from "@chakra-ui/provider";
import { LightMode } from "@chakra-ui/color-mode";

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

  return (
    <ChakraProvider>
      <LightMode />
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default Application;
