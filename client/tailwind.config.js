module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/*.html"
  ],
  theme: {
    extend: {},
  },
  plugins: [
    (process.env.NODE_ENV === 'production' ? { cssnano: {} } : {})
  ],
}