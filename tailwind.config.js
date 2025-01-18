/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      // sans: ['Poppins', 'sans-serif'], 
    },
    fontSize: {
      "ed-h1": [
        "24px",
        {
          fontWeight: "600",
          lineHeight: "34px",
        },
      ],
      "ed-h2" : [
        "20px", {
          fontWeight : "600",
          lineHeight : "32px"
        }
      ],
      "ed-h3" : [
        "16px", {
          fontWeight : "600",
          lineHeight : "18px"
        }
      ],
      "ed-subh1" : [
        "14px", {
          fontWeight : "400",
          lineHeight : "16px"
        }
      ],
      "ed-subh2" : [
        "16px", {
          fontWeight : "400",
          lineHeight : "24px"
        }
      ],
      "ed-subh3" : [
        "18px", {
          fontWeight : "400",
          lineHeight : "28px"
        }
      ]
    },
    colors: {
      ed_primary: "#1787E0",
      ed_secondary: "#E8F3FC",
      ed_black : "#0D0F11",
      ed_red : "#E11900",
      ed_grey : "#64748B",
      ed_grey_v2 : "#4B5768",
      ed_grey_v3 : "#E7EAEE",
      ed_white : "#ffffff"
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["light"],
  },
}

