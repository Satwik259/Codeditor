/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
     
    },
  },
  plugins: [ [
    "prismjs",
    {
      "languages": ["javascript", "css", "html"],
      "plugins": ["line-numbers", "show-language"],
      "theme": "okaidia",
      "css": true
    }
  ]],
}