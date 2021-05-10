module.exports = (ctx) => ({
  map: false,
  parser: ctx.options.parser,
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
    cssnano: ctx.env === 'production' ? {
      preset: ['default', {
        discardComments: {
          removeAll: true,
        },
      }],
    } : false,
  }
})