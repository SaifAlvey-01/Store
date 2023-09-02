/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-line":
          "linear-gradient(89.99deg, rgba(75, 75, 75, 0.75) 0%, rgba(113, 113, 113, 0) 105.61%)",
        "gradient-line-270":
          "linear-gradient(270deg, rgba(75, 75, 75, 0.75) 0%, rgba(109, 109, 109, 0) 94.39%)",
      },
      colors: {
        white: "#fff",
        gainsboro: "#e5e7eb",
        "primary-300-main": "#4162ff",
        darkgray: "#9ca3af",
        dimgray: "#4b5563",
        darkslategray: "#374151",
        midnightblue: "#060c3c",
        slategray: "#5d6180",
        silver: "#b4b6c4",
        lightslategray: "#8896a6",
        whitesmoke: "#f5f5f5",
        "primary-100": "#b3c0ff",
        "neutral-500": "#8e8e8e",
        "neutral-600": "#4b4b4b",
        "grey-scale-body": "#3b4d60",
        mediumslateblue: "#585ce5",
        "neutral-300": "#e1e1e1",
      },

      borderColor: {
        "primary-300-main": "#4162FF",
      },

      fontFamily: {
        freesans: ["FreeSans", "sans-serif"],
        roboto: "Roboto",
        chivo: "Chivo",
        poppins: "Poppins",
      },
      borderRadius: {
        "8xs-5": "4.5px",
        "10xs": "3px",
        "5xs-5": "7.5px",
        "9xs-6": "3.6px",
        "5xs-1": "7.1px",
      },
    },
    fontSize: {
      base: "16px",
      sm: "14px",
      "11xl": "30px",
      "2xs-5": "10.5px",
      lg: "18px",
      "7xs": "6px",
      "4xs": "9px",
      "5xs-5": "7.5px",
      "5xs-1": "7.1px",
    },
    bgfooter: {
      'auto-120px': 'auto 120px',
    },
  },
  corePlugins: {
    preflight: false,
  },
};
