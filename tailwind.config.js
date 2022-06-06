module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      sm: "375px",
      md: "768px",
      lg: "1024px",
      xl: "1440px",
    },
    container: {
      padding: {
        DEFAULT: "1rem",
        sm: "2rem",
        lg: "4rem",
        xl: "5rem",
        "2xl": "6rem",
      },
    },
    extend: {
      keyframes: {
        "fade-in-down": {
          "0%": {
            opacity: "0",
            transform: "translateY(-10px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
        up: {
          "0%": {
            transform: "rotate(0deg)",
          },
          "100%": {
            transform: "rotate(180deg)",
          },
        },
        down: {
          "0%": {
            transform: "rotate(180deg)",
          },
          "100%": {
            transform: "rotate(0deg)",
          },
        },
      },
      animation: {
        "fade-in-down": "fade-in-down 0.5s ease-out",
        up: "up 0.5s",
        down: "down 0.5s",
      },
      colors: {
        primary: "#7500CF",
        secondary: "#FFA759",
        dark: {
          100: "#151515",
        },
      },
    },
    backgroundImage: {
      noisy: 'url("../public/images/noisy-bg.png")',
      cta: "url('/images/cta-bg.png')",
      "faded-line":
        "radial-gradient(50.1% 8025.76% at 50.1% 0%, rgba(255, 255, 255, 0.8) 0%, rgba(255, 255, 255, 0) 100%)",
    },
  },

  plugins: [],
};
