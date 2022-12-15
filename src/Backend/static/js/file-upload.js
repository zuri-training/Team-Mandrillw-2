const input = document.querySelector('input[type="file"]');

const pElements = document.querySelectorAll(".change_name");

// Change name to the name of the uploaded files

document.querySelectorAll(".change_name").forEach(function (element) {

  input.addEventListener("change", function () {
    let file1 = input.files[0];
    let file2 = input.files[1];

    element.textContent = file1.name + " and " + file2.name;
  });
});



// var iframe = document.createElement('iframe');
// iframe.src = file1;
// document.body.appendChild(iframe);







// const workbook1 = new ExcelJS.Workbook();
// const workbook2 = new ExcelJS.Workbook();

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
