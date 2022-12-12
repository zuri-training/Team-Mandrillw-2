

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
