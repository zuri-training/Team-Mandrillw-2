const path = require("path");
// const ExcelJS = require("exceljs");
// // const fs = require("fs");
// const fs = require('fs-extra');

// const dependencies = [
//    // other dependencies
//    'exceljs'
//  ];

module.exports = {
  entry: "./src/js/test.js",
  dependencies: ["ExcelJS", "fs"],
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist"),
  },
  externals: {
    "fs": "commonjs fs",
    'fs-extra': 'commonjs fs-extra',

  },
  
};
