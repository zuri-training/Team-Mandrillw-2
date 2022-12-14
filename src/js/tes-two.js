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