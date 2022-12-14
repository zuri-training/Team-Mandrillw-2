const purgecss = require("@fullhuman/postcss-purgecss");
const pxtorem = require("postcss-pixels-to-rem");

module.exports = {
  plugins: [
    // require("cssnano"),
    require("autoprefixer"),
    require("postcss-focus"),
    pxtorem({
      unit: "rem",
      // css: ["./src/css/landingpage.css"],
      // variables: true
    }),
    purgecss({
      content: ["./src/brief.html"],
      css: ["./src/css/brief.css"],
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
