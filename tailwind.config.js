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
    },
    backgroundImage: {
      "hero-background": "url('../public/hero-background.png')",
      "unusual-card-lg": "url('../public/blockleft.svg')",
      "unusual-card-sm": "url('../public/blockright.svg')",
      fullscreencover: "url('../public/fullpagecover.png')",
      heroimg: "url('../public/hero graphic (11).svg')",
      "icon-arrow-down": "url('../public/icon-arrow-down.png')",
    },
  },

  plugins: [],
};
