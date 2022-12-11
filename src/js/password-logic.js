// Auto Tabbing function

function autotab(current, to) {
  if (
    current.getAttribute &&
    current.value.length == current.getAttribute("maxlength")
  ) {
    to.focus();
  }
}

// ENd of Auto Tabbing function

// Function to enable and disable a button

// Select the element whose parent's parent you want to target
const element = document.querySelector(".input-field");

// Get a reference to the parent element
const parent = element.parentElement;

// Get a reference to the parent of the parent element
const grandparent = parent.parentElement;

// Select the input and button elements
const input = document.querySelector(".input-field");
const button = document.querySelector("#submit");

// Add an event listener to the input that will
// run a function when the input's value changes
input.addEventListener("input", function () {
  // If the input has text, add the "active-btn" class to the button
  if (this.value) {
    grandparent.classList.add("active-btn");
  } else {
    // Otherwise, remove the "active-btn" class from the grandparent
    grandparent.classList.remove("active-btn");
  }
});

// End of Function to enable and disable a button

// PAssword and text toggle
document
  .querySelector(".toggle-password-visibility__toggle")
  .addEventListener("click", (e) => {
    const input = e.target.previousElementSibling;
    const type = input.getAttribute("type");
    input.setAttribute("type", type === "text" ? "password" : "text");
  });

// ENd of PAssword and text toggle

// PAssword hiny

// // Select the pass_input and pass_hint elements
// const pass_input = document.querySelector('.sign-in-form__input--pasword');
// const pass_hint = document.querySelector('.password-hint');

// // Add event listeners to the pass_input that will run
// // a function when the pass_input receives or loses focus
// pass_input.addEventListener('focus', function() {
//   // When the pass_input receives focus, add the "show" class to the pass_hint
//   pass_hint.classList.add('pass_hint--show');
// });
// pass_input.addEventListener('blur', function() {
//   // When the pass_input loses focus, remove the "show" class from the pass_hint
//   pass_hint.classList.remove('pass_hint--show');
// });
// ENd of PAssword and text toggle
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

// function backtab(from, to) {
//   var length = from.value.length;
//   var minlength = from.getAttribute("minlength");
//   if (length == minlength) {
//     document.getElementById(to).focus();
//   }
// }

// const formInput = document.getElementById("input");
// const formButton = document.getElementById("submit");
// // the default state is 'disabled'
// formButton.disabled = true;

// alternative is to use "change" - explained below
// formInput.addEventListener("keyup", buttonState);

// function buttonState() {
//   if (document.querySelector(".sign-in-form__input-verif-num").value === "") {
//     formButton.disabled = true; // return disabled as true whenever the input field is empty
//   } else {
//     formButton.disabled = false; // enable the button once the input field has content
//   }
// }

// // just verifying that the button has been clicked
// formButton.addEventListener("click", () => {
//   console.log(
//     "You entered:",
//     document.querySelector(".sign-in-form__input-verif-num").value
//   );
// });
