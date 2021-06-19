module.exports = (ctx) => ({
  map: false,
  parser: ctx.options.parser,
  plugins: {
    tailwindcss: {},
    autoprefixer: {}
  }
})