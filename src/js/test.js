// const ExcelJS = require('exceljs');
// import FileSaver from 'file-saver';

// Import the sheetJS library
import * as ExcelJS from "exceljs";
import * as XLSX from "xlsx";

const input_1 = document.querySelector(".inputfile_1");
const input_2 = document.querySelector(".inputfile_2");

// Change name to the name of the uploaded files

// INput 1

document.querySelectorAll(".change_name_1").forEach(function (element) {
  input_1.addEventListener("change", function () {
    if (this.files && this.files.length > 0) {
      element.innerText = this.files[0].name;
    }
  });
});

// INput 2

document.querySelectorAll(".change_name_2").forEach(function (element) {
  input_2.addEventListener("change", function () {
    if (this.files && this.files.length > 0) {
      element.innerText = this.files[0].name;
    }
  });
});

// End of Change name to the name of the uploaded files

//
//
//
//
//
//
//
//

// ACTual excel COmparison function
// INput 1

input_1.addEventListener("change", function () {
  // Check if a file was selected
  if (this.files && this.files.length > 0) {
    // Get the first file in the list of files
    var file = this.files[0];

    const reader = new FileReader();
    reader.onload = function (event) {
      // Read the Excel file and extract the data

      // Create a new instance of the ExcelJS Workbook class

      var workbook = new ExcelJS.Workbook();
      workbook.xlsx.load(reader.result) .then(() => {
        // Use the getWorksheet method to access the worksheets in the workbook
        const worksheet = workbook.getWorksheet('Sheet1');
    
        // Use the eachRow method to iterate through the rows in the worksheet
        worksheet.eachRow(row => {
          // Use the values property to access the cell values in the row
          const values = row.values;
          console.log(values);
        });
      });
    };
    reader.readAsArrayBuffer(file);

    // Read the file data into the workbook
  }
});

// INput 2
input_2.addEventListener("change", function () {
  // Check if a file was selected
  if (this.files && this.files.length > 0) {
    // Get the first file in the list of files
    var file = this.files[0];

    const reader = new FileReader();
    reader.onload = function (event) {
      // Read the Excel file and extract the data

      // Create a new instance of the ExcelJS Workbook class

      var workbook = new ExcelJS.Workbook();
      workbook.xlsx.load(reader.result) .then(() => {
        // Use the getWorksheet method to access the worksheets in the workbook
        const worksheet = workbook.getWorksheet('Sheet1');
    
        // Use the eachRow method to iterate through the rows in the worksheet
        worksheet.eachRow(row => {
          // Use the values property to access the cell values in the row
          const values = row.values;
          console.log(values);
        });
      });
    };
    reader.readAsArrayBuffer(file);

    // Read the file data into the workbook
  }
});

// End of ACTual excel COmparison function













// input_1.addEventListener('change', function() {
//   // Check if a file was selected
//   if (this.files && this.files.length > 0) {
//     // Get the first file in the list of files
//     var file = this.files[0];

//     // Create a new instance of the ExcelJS Workbook class
//     var workbook = new ExcelJS.Workbook();

//     // Read the file data into the workbook
//     workbook.xlsx.readFile(file).then(function() {
//       // Get the first worksheet in the workbook
//       var worksheet = workbook.getWorksheet(1);

//       // Loop through all the rows in the worksheet
//       worksheet.eachRow(function(row, rowNumber) {
//         // Loop through all the cells in the row
//         row.eachCell(function(cell, colNumber) {
//           // Log the cell value to the console
//           console.log(cell.value);
//         });
//       });
//     });
//   }
// });

// // Handle the change event on the file input
// input.addEventListener('change', () => {
//   // Get the selected files
//   const files = input.files;

//   // Loop through the selected files
//   for (let i = 0; i < files.length; i++) {
//     // Read the Excel file using SheetJS
//    // Read the Excel file
// const workbook = XLSX.readFile(files[i]);

// // Get the first worksheet in the workbook
// const worksheet = workbook.Sheets[workbook.SheetNames[0]];

// // Get the data from the worksheet
// const data = XLSX.utils.sheet_to_json(worksheet);

//         // Access the data in the worksheet
//         console.log(data);
//         console.log(cellValue.value);
//   }
// });

// // Listen for changes to the file input
// input.addEventListener("change", () => {
//   // Get the selected files
//   const files = input.files;
//   let file_1 = input.files[0];
//   let file_2 = input.files[1];

//   // Loop through the files and read their data using ExcelJS
//   for (const file of files) {
//     if (file !== undefined && file !== null) {
//       // Read the Excel file
//       for (let i = 0; i < file.length; i++) {
//         // Read the Excel file using the File object
//         const workbook = XLSX.readFile(file[i]);

//         // Get the first worksheet in the workbook
//         const worksheet = workbook.Sheets[workbook.SheetNames[0]];

//         // Get the data from the worksheet
//         const data = XLSX.utils.sheet_to_json(worksheet);

//         // Access the data in the worksheet
//         console.log(data);
//         console.log(cellValue.value);
//       }
//     }
//   }
// });

// const form = document.getElementById('file-upload__form');
// form.addEventListener('btnUpload', handleSubmit);

// function handleSubmit(event) {
//   event.preventDefault();

//   // Get the selected files
//   const file = event.target.files;
//   const files = input.files;

//   // Read each file using SheetJS
//   for (let i = 0; i < files.length; i++) {
//     // Read the Excel file using the File object
//     const workbook = XLSX.readFile(files[i]);

//     // Get the first worksheet in the workbook
//     const worksheet = workbook.Sheets[workbook.SheetNames[0]];

//     // Get the data from the worksheet
//     const data = XLSX.utils.sheet_to_json(worksheet);

//       // Access the data in the worksheet
//       console.log(data);
//       console.log(cellValue.value);
//     }
//   };

// const workbook = new ExcelJS.Workbook();
// console.log(file);

//   workbook.xlsx.readFile(file)
//   .then(() => {
//     // Get the first worksheet in the workbook
//     const worksheet = workbook.getWorksheet(1);
// console.log(worksheet);
//   // Get the cell at the first row and first column
//   const cell = worksheet.getCell('B6');

//   // Use the cell object to access the cell's value, data type, and other properties
//   console.log(cell.value);
//   console.log(cell.type);
// });

// npm install xlsx

// const input1 = document.getElementById('input1');
// const input2 = document.getElementById('input2');

// input1.addEventListener('change', handleFileSelect);
// input2.addEventListener('change', handleFileSelect);

// function handleFileSelect(event) {
//   const files = event.target.files;

//   if (files.length) {
//     // Get the first file in the list
//     const file = files[0];

//     // Read the file using ExcelJS
//     const workbook = new ExcelJS.Workbook();
//     workbook.xlsx.readFile(file)
//       .then(() => {
//         // Use the workbook object to read data from the file
//       });
//   }
// }

// input.addEventListener('change', (event) => {
//   const file = event.target.files[0];
//   const workbook = new ExcelJS.Workbook();

//   // Read the file data
//   workbook.xlsx.readFile(file)
//       .then(() => {
//           console.log(workbook.xlsx.readFile(file));
//       });

// });

// document.getElementById('file-upload__form').addEventListener('submit', (event) => {
//   // Prevent the form from actually submitting
//   event.preventDefault();

//   // Get the file input element
//   const fileInput = document.querySelector('input[type="file"]');

//   // Read the file data from the input element
//   const fileinp = fileInput.files[0];

//   // Create a new workbook
//   const workbook = new ExcelJS.Workbook();

//   // Read the file data into the workbook object
//   workbook.xlsx.readFile(fileinp)
//     .then(() => {
//       // Use the workbook object to read data from the file
//       console.log(workbook.xlsx.readFile(fileinp));
//     });
// });

// function uploadFile() {
//   // Prompt the user to select a file
//   const fileInput = document.createElement('input');
//   fileInput.type = 'file';

//   // When a file is selected, read the data using the excelJS library

//   // Trigger the file selection prompt
//   fileInput.click();
// }

// Excel things

// // Create a new workbook and load the first file
// const workbook1 = new ExcelJS.Workbook();
// workbook1.xlsx.readFile(file1)
//   .then(() => {
//     // Create a new workbook and load the second file
//     const workbook2 = new ExcelJS.Workbook();
//     workbook2.xlsx.readFile(file2)
//       .then(() => {
//         // Compare the two files by looping through all of their sheets
//         // and comparing the values in each cell
//         workbook1.eachSheet((worksheet1, sheetId) => {
//           const worksheet2 = workbook2.getWorksheet(sheetId);
//           worksheet1.eachRow((row1, rowNumber) => {
//             const row2 = worksheet2.getRow(rowNumber);
//             row1.eachCell((cell1, colNumber) => {
//               const cell2 = row2.getCell(colNumber);
//               if (cell1.value !== cell2.value) {
//                 console.log(`Values do not match in cell ${colNumber} on row ${rowNumber}`);
//               }
//             });
//           });
//         });
//       });
//   });

// // Read the first Excel file
// const workbook1 = new ExcelJS.Workbook();
// workbook1.xlsx.readFile('file1.xlsx')
//   .then(() => {
//     // Read the second Excel file
//     const workbook2 = new ExcelJS.Workbook();
//     workbook2.xlsx.readFile('file2.xlsx')
//       .then(() => {
//         // Compare the data in the two files
//         const differences = [];

//         workbook1.eachSheet((sheet1, sheetId1) => {
//           const sheet2 = workbook2.getWorksheet(sheetId1);
//           sheet1.eachRow((row1, rowNumber) => {
//             const row2 = sheet2.getRow(rowNumber);
//             row1.eachCell((cell1, colNumber) => {
//               const cell2 = row2.getCell(colNumber);
//               if (cell1.value !== cell2.value) {
//                 differences.push({
//                   sheet: sheetId1,
//                   row: rowNumber,
//                   column: colNumber,
//                   value1: cell1.value,
//                   value2: cell2.value,
//                 });
//               }
//             });
//           });
//         });

//         // Create a new workbook with the comparison results
//         const resultWorkbook = new ExcelJS.Workbook();
//       //  resultWorkbook.

// const workbook1 = new ExcelJS.Workbook();
// const workbook2 = new ExcelJS.Workbook();

// workbook1.xlsx.load(file1);
// workbook2.xlsx.load(file2);

// workbook1.eachSheet(sheet1 => {
//   // Read the data from the sheet...
// });

// workbook2.eachSheet(sheet2 => {
//   // Read the data from the sheet...
// });

// var iframe = document.createElement('iframe');
// iframe.src = file1;
// document.body.appendChild(iframe);

// Website to upload two excel files compare them and download the result

// workbook1.readFile(file1);
// workbook2.readFile(file2);

// const worksheet1 = workbook1.getWorksheet(1);
// const worksheet2 = workbook2.getWorksheet(1);

// for (let row = 1; row <= worksheet1.rowCount; row++) {
//    for (let col = 1; col <= worksheet1.columnCount; col++) {
//      if (worksheet1.getCell(row, col).value !== worksheet2.getCell(row, col).value) {
//        console.log(`Cell ${row},${col} does not match`);
//      }
//    }
//  }

// //  workbook1.writeFile('file1.xlsx');
// //  workbook2.writeFile('file2.xlsx');

// const fileReader1 = new FileAPI.FileReader();
// const fileReader2 = new FileAPI.FileReader();

// fileReader1.onload = function() {
//    // load the excel file into a workbook object
//    const workbook1 = new ExcelJS.Workbook();
//    workbook1.xlsx.load(fileReader1.result).then(function() {
//      // get the worksheet object
//      const worksheet1 = workbook1.getWorksheet(1);
//      // compare the worksheet with the other worksheet
//      compareWorksheets(worksheet1, worksheet2);
//    });
//  }

//  fileReader2.onload = function() {
//    // load the excel file into a workbook object
//    const workbook2 = new ExcelJS.Workbook();
//    workbook2.xlsx.load(fileReader2.result).then(function() {
//      // get the worksheet object
//      const worksheet2 = workbook2.getWorksheet(1);
//      // compare the worksheet with the other worksheet
//      compareWorksheets(worksheet1, worksheet2);
//    });
//  }

// // await workbook1.xlsx.readFile(file1);
// await workbook2.xlsx.readFile(file2);

// workbook1.xlsx.load(data1).then(function() {
//   const worksheet1 = workbook1.getWorksheet(1);
//   // Do something with the data from worksheet1
// });

// workbook2.xlsx.load(data2).then(function() {
//   const worksheet2 = workbook2.getWorksheet(1);
//   // Do something with the data from worksheet2
// });

// // Create a FileReader object for each file
// const reader1 = new FileReader();
// const reader2 = new FileReader();

// // Set the onload event for each FileReader to call a compare function
// reader1.onload = compareFiles;
// reader2.onload = compareFiles;

// // Read the files
// reader1.readAsBinaryString(file1);
// reader2.readAsBinaryString(file2);

// // Compare the files
// function compareFiles() {
//   // Check if both files have been read
//   if (reader1.readyState === 2 && reader2.readyState === 2) {
//     // Get the binary data from the FileReader objects
//     const data1 = reader1.result;
//     const data2 = reader2.result;

//     // Compare the data here, using whatever methods you need

//     // Create a new file with the comparison results
//     const result = new Blob(/* comparison data */);

//     // Create a link to download the file
//     const link = document.createElement("a");
//     link.href = URL.createObjectURL(result);
//     link.download = "comparison-result.xlsx";

//     // Click the link to download the file
//     link.click();
//   }
// }

// pElements.forEach(function(element) {
//    if (!element.closest('[data-uploader]')) {
//      element.addEventListener('change', function() {
//        let file1 = input.files[0];
//        let file2 = input.files[1];
//        element.textContent = file1.name + ', ' + file2.name;
//      });
//    }
//  });

// // Get the file that was uploaded by the user
// const excelFile = document.getElementById('excelFileInput').files[0];

// // Create a new FileReader instance
// const reader = new FileReader();

// // // Set the 'onload' event handler for the FileReader
// // reader.onload = function(event) {
// //   // The 'event.target.result' property contains the data from the Excel file
//   const excelData = event.target.result;

//   // Process the Excel data as needed...
// };

// // Start reading the Excel file
// reader.readAsArrayBuffer(excelFile);

// // Get the input element for file upload

// // Listen for the change event on the input element
// input.addEventListener("change", () => {
//   // Get the name of the uploaded file
//   const fileName = input.files[0].name;

//   // Get all of the elements with the "change_namr" class on the page
//   const pElements = document.querySelectorAll(".change_name");

//   // Loop through each element and update the text to the file name
//   pElements.forEach((p) => {
//     p.textContent = fileName;
//   });
// });

// // Get the input element for file upload
// // const input = document.querySelector('input[type="file"]');

// // Set the "accept" and "max" attributes to limit the user's file selection
// input.setAttribute("accept", "*");
// input.setAttribute("max", 2);

// // Listen for the change event on the input element
// input.addEventListener("change", () => {
//   // Get the selected files
//   const files = input.files;

//   // Check if two files were selected
//   if (files.length === 2) {
//     // Do something with the two selected files
//     // ...
//     console.log(input.files[0].name);
//   }
// });

// // Get the file input element and the p element
// const fileInput = document.querySelector('input[type="file"]');
// const pElement = document.querySelector('p');

// // Add an event listener to the file input element that listens for when a file is selected
// fileInput.addEventListener('change', () => {
//   // Get the file that was selected
//   const file = fileInput.files[0];

//   // Use the innerHTML property to change the text of the p element to the name of the file
//   pElement.innerHTML = file.name;
// });
// You can also use this approach to change the text of any other element on the page, not just a p element.

//  Fucntion to upload 2 files
// const inpFile = document.getElementById("inpFile");
// const btnUpload = document.getElementById("btnUpload");

// btnUpload.addEventListener("click", function () {
//   const formData = new FormData();

//   console.log(inpFile.files);
// });

// End of Fucntion to  upload 2 files

// Fucntion to change names when files are uploaded

// Get a reference to the file input element
// const fileInput = document.querySelector('#fileInput');

// fileInput.addEventListener('change', function() {
//   const file = this.files[0];
//   const reader = new FileReader();

//   reader.addEventListener('load', function() {
//     const h1 = document.querySelector('h1');
//     h1.innerHTML = file.name;
//   });

//   reader.readAsDataURL(file);
// });

// End of Fucntion to change names when files are uploaded

// // Function to enable and disable a button

// // Select the element whose parent's parent you want to target
// const element = document.querySelector(".input-field");

// // Get a reference to the parent element
// const parent = element.parentElement;

// // Get a reference to the parent of the parent element
// const grandparent = parent.parentElement;

// // Get a reference to the parent of the parent of the parent element
// const greatgrandparent = grandparent.parentElement;

// // Select the input and button elements
// const input_field = document.querySelector(".input-field");
// const button = document.querySelector("#submit");

// // Add an event listener to the input that will
// // run a function when the input's value changes
// input_field.addEventListener("input", function () {
//   // If the input has text, add the "active-btn" class to the button
//   if (this.value) {
//     grandparent.classList.add("active-btn");
//   } else {
//     // Otherwise, remove the "active-btn" class from the grandparent
//     grandparent.classList.remove("active-btn");
//   }
// });

// document.querySelectorAll(".change_name_1").forEach(function (element) {
//   input_1.addEventListener("change", function () {
//     let file_1 = this.files[0];
//     // let file_2 = input.files[1];

//     element.textContent = file_1.name;
//     // element.textContent = file_1.name + " and " + file_2.name;
//   });
// });
