import { extendTheme } from "@chakra-ui/react";

// const config = {
//   initialColorMode: "dark",
//   useSystemColorMode: false,
// };

// const theme = extendTheme({
//   config,
//   colors: {},
// });

const theme = extendTheme({
  styles: {
    global: () => ({
      body: {
        bg: "",
        color: "",
      },
    }),
  },
});

export default theme;
