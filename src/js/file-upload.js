const input = document.querySelector('input[type="file"]');

const pElements = document.querySelectorAll(".change_name");

// Change name to the name of the uploaded files

document.querySelectorAll(".change_name").forEach(function (element) {

  input.addEventListener("change", function () {
    let file1 = input.files[0];
    let file2 = input.files[1];

    element.textContent = file1.name + "and " + file2.name;
  });
});



// pElements.forEach(function(element) {
//    if (!element.closest('[data-uploader]')) {
//      element.addEventListener('change', function() {
//        let file1 = input.files[0];
//        let file2 = input.files[1];
//        element.textContent = file1.name + ', ' + file2.name;
//      });
//    }
//  });





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
