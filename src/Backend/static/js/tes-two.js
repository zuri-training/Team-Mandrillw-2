// input_1.addEventListener("change", function () {
//   // Check if a file was selected
//   if (this.files && this.files.length > 0) {
//     // Get the first file in the list of files
//     var file = this.files[0];

//     const reader = new FileReader();
//     reader.onload = function (event) {
//       // Read the Excel file and extract the data

//       // Create a new instance of the ExcelJS Workbook class

//       var workbook = new ExcelJS.Workbook();
//       workbook.xlsx.load(reader.result) .then(() => {
//         // Use the getWorksheet method to access the worksheets in the workbook
//         const worksheet = workbook.getWorksheet('Sheet1');
    
//         // Use the eachRow method to iterate through the rows in the worksheet
//         worksheet.eachRow(row => {
//           // Use the values property to access the cell values in the row
//           const values = row.values;
//           console.log(values);
//         });
//       });
//     };
//     reader.readAsArrayBuffer(file);

//     // Read the file data into the workbook
//   }
// });

// // INput 2
// input_2.addEventListener("change", function () {
//   // Check if a file was selected
//   if (this.files && this.files.length > 0) {
//     // Get the first file in the list of files
//     var file = this.files[0];

//     const reader = new FileReader();
//     reader.onload = function (event) {
//       // Read the Excel file and extract the data

//       // Create a new instance of the ExcelJS Workbook class

//       var workbook = new ExcelJS.Workbook();
//       workbook.xlsx.load(reader.result) .then(() => {
//         // Use the getWorksheet method to access the worksheets in the workbook
//         const worksheet = workbook.getWorksheet('Sheet1');
    
//         // Use the eachRow method to iterate through the rows in the worksheet
//         worksheet.eachRow(row => {
//           // Use the values property to access the cell values in the row
//           const values = row.values;
//           console.log(values);
//         });
//       });
//     };
//     reader.readAsArrayBuffer(file);

//     // Read the file data into the workbook
//   }
// });



// const form = document.getElementById('file-upload__form');
// form.addEventListener('submit', handleSubmit);


// function handleSubmit(e) {
//   e.preventDefault();

//   // Get the selected files
//   const file = e.target.files;
//   // const files = input.files;





//   for (let i = 0; i < file.length; i++) {
//    console.log(file[i].name);
//     }
//   };


// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
//   




// // INput 1

// input_1.addEventListener("change", function () {
//   // Check if a file was selected
//   if (this.files && this.files.length > 0) {
//     // Get the first file in the list of files
//     var file1 = this.files[0];

//     const reader = new FileReader();
//     reader.onload = function (event) {
//       // Read the Excel file and extract the data
//       const data = event.target.result;
//       // Create a new instance of the ExcelJS Workbook class


//       // Store the contents of the first Excel file in a variable
//   const firstExcelFile = data;


//       // var workbook = new ExcelJS.Workbook();
//       // workbook.xlsx.load(reader.result) .then(() => {
//       //   // Use the getWorksheet method to access the worksheets in the workbook
//       //   const worksheet = workbook.getWorksheet('Sheet1');
    
//       //   // Use the eachRow method to iterate through the rows in the worksheet
//       //   worksheet.eachRow(row => {
//       //     // Use the values property to access the cell values in the row
//       //     const values = row.values;
//       //     console.log(values);
//       //   });
//       // });
//     };
//     reader.readAsBinaryString(file1);

//     // Read the file data into the workbook
//   }
// });










// // INput 2
// input_2.addEventListener("change", function () {
//   // Check if a file was selected
//   if (this.files && this.files.length > 0) {
//     // Get the first file in the list of files
//     var file2 = this.files[0];

//     const reader = new FileReader();
//     reader.onload = function (event) {
//       // Read the Excel file and extract the data
//       const data = event.target.result;
//       // Store the contents of the second Excel file in a variable
//       const secondExcelFile = data;

//       // var workbook = new ExcelJS.Workbook();
//       // workbook.xlsx.load(reader.result) .then(() => {
//       //   // Use the getWorksheet method to access the worksheets in the workbook
//       //   const worksheet = workbook.getWorksheet('Sheet1');
    
//       //   // Use the eachRow method to iterate through the rows in the worksheet
//       //   worksheet.eachRow(row => {
//       //     // Use the values property to access the cell values in the row
//       //     const values = row.values;
//       //     console.log(values);
//       //   });
//       // });
//     };
//     reader.readAsBinaryString(file2);

//     // Read the file data into the workbook
//   }
// });

// // Use ExcelJS to parse the contents of the two Excel files

// const workbook1 = new ExcelJS.Workbook();
// const workbook2 = new ExcelJS.Workbook();


// workbook1.xlsx.load(firstExcelFile).then(function() {
//   workbook2.xlsx.load(secondExcelFile).then(function() {
//     //     // Compare the two workbooks using the 'compare' method
//     const comparison = workbook1.compare(workbook2);

//     // Output the comparison results
//     console.log(comparison);
//   });
// });



// Read the two Excel files using the 'Workbook' class from the exceljs library
// const workbook1 = new exceljs.Workbook();
// workbook1.xlsx.readFile('file1.xlsx').then(() => {
//   const workbook2 = new exceljs.Workbook();
//   workbook2.xlsx.readFile('file2.xlsx').then(() => {
//     // Compare the two workbooks using the 'compare' method
//     const comparison = workbook1.compare(workbook2);

//     // Output the comparison results
//     console.log(comparison);
//   });
// });






 // Get the input element that contains the uploaded files
   
  
    // Get the list of uploaded files
    const input_files_1 = input_1.files;
    const input_files_2 = input_2.files;

    if (input_files_1 && input_files_1.length > 0) {
      // Get the first file in the list of files
      var file1 = input_files_1[0];
  
      const reader = new FileReader();
      reader.onload = function (event) {
        // Read the Excel file and extract the data
        const data = event.target.result;
        // Create a new instance of the ExcelJS Workbook class
        const workbook1 = new ExcelJS.Workbook();
        // Store the contents of the first Excel file in a variable
    const firstExcelFile = data;

    reader.readAsBinaryString(file1);


        workbook1.xlsx.load(firstExcelFile).then(function() {

            // Check if a file was selected
    if (input_files_2 && input_files_2.length > 0) {
      // Get the first file in the list of files
      var file2 = input_files_2[0];
  
      const reader = new FileReader();
      reader.onload = function (event) {

        // Read the Excel file and extract the data
        const data = event.target.result;
        // Store the contents of the second Excel file in a variable
        const secondExcelFile = data;
        
        reader.readAsBinaryString(file2);
  
      // Read the file data into the workbook

    const workbook2 = new ExcelJS.Workbook();



    workbook2.xlsx.load(secondExcelFile).then(function() {
      // Compare the two workbooks using the 'compare' method
      const comparison = workbook1.compare(workbook2);
  
      // Output the comparison results
      console.log(comparison);

    });

      };

      


    }



  });
      };
    }



  


    
     
  
    


    // // Create a FileReader object
    // // const reader = new FileReader();
    
    // // Read the first Excel file using the 'readAsArrayBuffer' method
    // reader.readAsArrayBuffer('file1.xlsx');
    // reader.onload = () => {
    //   // Create a 'Workbook' object from the array buffer
    //   const workbook1 = new exceljs.Workbook();
    //   workbook1.xlsx.load(reader.result).then(() => {
    //     // Parse the data from the first workbook and store it in variables or arrays
    //     const data1 = [];
    //     workbook1.eachSheet((worksheet) => {
    //       worksheet.eachRow((row) => {
    //         data1.push(row.values);
    //       });
    //     });
    
    //     // Read the second Excel file using the 'readAsArrayBuffer' method
    //     reader.readAsArrayBuffer('file2.xlsx');
    //     reader.onload = () => {
    //       // Create a 'Workbook' object from the array buffer
    //       const workbook2 = new exceljs.Workbook
    
    










    
  //         const exceljs = require('exceljs');
    
  //   // Read the contents of the first Excel file using the FileReader API
  //   const fileReader1 = new FileReader();
  //   fileReader1.readAsArrayBuffer('file1.xlsx');
  //   fileReader1.onload = function() {
  //     // Parse the array buffer and load it into a Workbook object
  //     const workbook1 = new exceljs.Workbook();
  //     workbook1.xlsx.load(fileReader1.result).then(() => {
  //       // Read the contents of the second Excel file using the FileReader API
  //       const fileReader2 = new FileReader();
  //       fileReader2.readAsArrayBuffer('file2.xlsx');
  //       fileReader2.onload = function() {
  //         // Parse the array buffer and load it into a Workbook object
  //         const workbook2 = new exceljs.Workbook();
  //         workbook2.xlsx
    
    
          
  //         workbook1.xlsx.load(firstExcelFile).then(function() {
  //     workbook2.xlsx.load(secondExcelFile).then(function() {
  //       //     // Compare the two workbooks using the 'compare' method
  //       const comparison = workbook1.compare(workbook2);
    
  //       // Output the comparison results
  //       console.log(comparison);
  //     });
  //     });
  //   }



  // })}}})}





   // create a new Excel workbook object
   const result_workbook = new ExcelJS.Workbook();

   // Compare the two worksheets cell by cell and store the results in a new worksheet:
   const resultsWorksheet =
     result_workbook.addWorksheet("Results");

   worksheet1.eachRow((row1, rowNumber) => {
     const row2 = worksheet2.getRow(rowNumber);

     row1.eachCell((cell1, cellNumber) => {
       const cell2 = row2.getCell(cellNumber);

       if (cell1.value !== cell2.value) {
         resultsWorksheet.getCell(rowNumber, cellNumber).value =
           "Different";
       }
     });
   });
   // Save the new workbook with the comparison results using the xlsx.writeFile() method:
   result_workbook.xlsx.writeFile("comparisonResults.xlsx");









//    // Create an instance of the Excel object
// const excel = new ExcelJS.Workbook();

// // // Load the two files and assign them to separate variables
// // const file1 = excel.load('./file1.xlsx');
// // const file2 = excel.load('./file2.xlsx');

// // Create an empty results object
// const results = {};

// // Iterate over the rows and columns of the two files and compare their values
// worksheet1.forEach((row, rowIndex) => {
//   row.forEach((cell, columnIndex) => {
// const comparisonResult = cell.equals(worksheet2[rowIndex][columnIndex]);
// results[${rowIndex},${colIndex}] = comparisonResult;

//   });
// });

// // worksheet1.forEach((row, rowIndex) => {
// // row.forEach((cell, colIndex) => {
// // const comparisonResult = cell.equals(worksheet2[rowIndex][colIndex]);
// // results[${rowIndex},${colIndex}] = comparisonResult;
// // });
// // });

// // Output the results object to a new file



// workbook.getWorksheet('file1.xlsx')
//                     .eachRow(function(row, rowNumber) {
//                         workbook.getWorksheet('file2.xlsx')
//                             .eachRow(function(row2, rowNumber2) {
//                                 if (rowNumber === rowNumber2) {
//                                     row.eachCell(function(cell, colNumber) {
//                                         if (cell.value !== row2.getCell(colNumber).value) {
//                                             result[`Row ${rowNumber}, Column 


const worksheet2 = workbook2.getWorksheet(1);

    for (let i = 1; i <= worksheet1.rowCount; i++) {
      for (let j = 1; j <= worksheet1.columnCount; j++) {
       if (worksheet1.getCell(i, j).value !== worksheet2.getCell(i, j).value) {
        const cellAddress = `${i}${j}`;

        comparisonResults[cellAddress] = {
          firstFile: `${worksheet1.getCell(i, j).value}`,
          secondFile: `${worksheet2.getCell(i, j).value}`
        };

        

           console.log(comparisonResults[cellAddress] );



                    }
                  }
                }



// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 



workbook.eachSheet((worksheet, sheetId) => {
  worksheet.eachRow((row, rowNumber) => {
    row.eachCell((cell, colNumber) => {
      if (cell.value !== worksheet.getCell(rowNumber, colNumber).value) {
        const cellAddress = `${colNumber}${rowNumber}`;
        comparisonResults[cellAddress] = {
          firstFile: cell.value,
          secondFile: worksheet.getCell(rowNumber, colNumber).value
        };
      }
    });
  });
});

// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 

const data = comparisonResults[cellAddress];

// const data = {
//   name: "John Doe",
//   email: "johndoe@example.com",
//   phone: "123-456-7890"
// };

const workbook = new ExcelJS.Workbook();
const worksheet = workbook.addWorksheet("Sheet1");

worksheet.addRow([
  data.firstFileName,
    data.firstFile,
    data.secondFileName,
    data.secondFile
]);

workbook.xlsx.writeFile("comparison-results.xlsx").then(function() {
  console.log("Excel file saved!");
});




// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 

const workbookWriter = new ExcelJS.stream.xlsx.WorkbookWriter({
  filename: 'comparison-results.xlsx'
});
const worksheet1 = workbookWriter.addWorksheet('Sheet1');

Object.keys(comparisonResults).forEach(function (cellAddress) {
  const data = comparisonResults[cellAddress];

  worksheet1.addRow([
    data.firstFileName,
    data.firstFile,
    data.secondFileName,
    data.secondFile
  ]);
});

workbookWriter.commit();

// 
// 
// 
// 
// 
// 
// 
// 
// 


// const comparisonResults = {};

                
                
                
                    
                    
                      

// for (let i = 1; i <= worksheet1.rowCount; i++) {
//   for (let j = 1; j <= worksheet2.columnCount; j++) {
//     const cellAddress = `${i}${j}`;

//     if (
//       worksheet1.getCell(i, j).value !==
//       worksheet2.getCell(i, j).value
//     ) {
//       comparisonResults[cellAddress] = {
//         firstFileName: input_files_1[0].name,
//         firstFile: `${worksheet1.getCell(i, j).value}`,
//         secondFileName: input_files_2[0].name,
//         secondFile: `${worksheet2.getCell(i, j).value}`,
//       };

//       console.log(comparisonResults[cellAddress]);
// } else if (
// worksheet1.getCell(i, j).value ===
// worksheet2.getCell(i, j).value
// ) {

//   const equalFileInfoElement = document.querySelector(".equal-file-info");
//   if (equalFileInfoElement) {
//     equalFileInfoElement.textContent = "These files are equal!";
//   }

// }
// }
// }
// const data_file = comparisonResults[cellAddress];

// const cellAddress = `${i}${j}`;


// // const data = comparisonResults[cellAddress];

// const workbook = new ExcelJS.Workbook();
// const worksheet = workbook.addWorksheet("Sheet1");

// for (const cellAddress in comparisonResults) {
// const data_file = comparisonResults[cellAddress];
// worksheet.addRow([
// data_file.firstFileName,
// data_file.firstFile,
// data_file.secondFileName,
// data_file.secondFile,
// ]);

// workbook.xlsx
// .writeFile("comparison-results.xlsx")
// .then(function () {
// console.log("Excel file saved!");
// });


// });