

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Path to all JS and TypeScript files
    "./public/index.html" // Any other HTML or static files
  ],
  theme: {
    extend: {
      fontFamily: {
        'montserrat': ['Montserrat', 'sans-serif'],
      },
      fontWeight: {
        'body': 400,
        'caption': 500,
        'heading': 700,
      }
    }
  },
  plugins: [],
}

