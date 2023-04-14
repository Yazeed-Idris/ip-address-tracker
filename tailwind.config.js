/** @type {import('tailwindcss').Config} */
export default {
  content: [
      "./index.html",
        "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
        colors: {
          'Dark-Gray': "hsl(0, 0%, 59%)",
            'Very-Dark-Gray': "hsl(0, 0%, 17%)",
        },
        fontFamily: {
            "Rubik": "Rubik, sans-serif",
        },
        backgroundImage: {
            "Mobile-Background": "url(/pattern-bg-mobile.png)",
            "Desktop-Background": "url(/pattern-bg-desktop.png)",
        }
    },
  },
  plugins: [],
}

