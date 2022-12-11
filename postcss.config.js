const purgecss = require("@fullhuman/postcss-purgecss");

module.exports = {
  plugins: [
    // require("cssnano"),
    require("autoprefixer"),
    require("postcss-focus"),
    purgecss({
      content: ["./public/**/*.html"],
      css: ["./public/css/var.css"],
      variables: true
    }),
    // require("postcss-font-magician")({
    //   foundries: "bootstrap google",
    //   variants: {
    //     "Lato": {
    //       400: ["local, woff, eot, woff2"],
    //       700: ["local, woff, eot, woff2"],
    //     },
        
    //     // "Open Sans": {
    //     //   300: ["local, woff, eot, woff2"],
    //     //   400: ["local, woff, eot, woff2"],
    //     //   600: ["local, woff, eot, woff2"],
    //     //   700: ["local, woff, eot, woff2"],
    //     //   800: ["local, woff, eot, woff2"],
    //     // },
    //   },
    // }),
  ],
};