const path = require('path');
const ExcelJS = require('exceljs');

// const dependencies = [
//    // other dependencies
//    'exceljs'
//  ];


module.exports = {
  entry: './src/js/test.js',
  dependencies: ["ExcelJS"],
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
};