module.exports = {
  content: ["./src/*.{html,js,ts}"],
  theme: {
    extend: {
      colors: {
        pink: "#e31b6d",
        purple: "#936ED4",
        blue: "#0078F0",
        orange: "#ff7a00",
        mute: "#98989D",
        gray: "#D8D8DD",
        dark: "#1b242f",
        light: "#e9ecef",
        white: "#ffffff",
        black: "#000000",
        lightBlue: "#F0F8FF",
        lightGray: "#F5F5FA",
      },
      keyframes: {
        blink: {
          "50%": { borderColor: "transparent" },
        },
        type: {
          "0%": { width: 0, borderRight: "0.15em solid #0078f0" },
          // "1%": { opacity: 1 },
          // "99.9%": { borderRight: "0.15em solid #0078f0" },
          // "100%": { opacity: 1, border: "none" },
        },
      },
      animation: {
        type: "type 8s steps(40, end)",
      },
    },
  },
  plugins: [],
};
