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

// const formButton = document.getElementById("submit");
// const formInput = document.getElementById("input");

// formInput.addEventListener("keypress", (e) => {
//   console.log(e.currentTarget.value);
//   if (value === "") {
//     formButton.disabled = true;
//   } else {
//     formButton.disabled = false;
//   }
// });





// End of Function to enable and disable a button



document.querySelector('.toggle-password-visibility__toggle').addEventListener('click', (e) => {
   const input = e.target.previousElementSibling;
   const type = input.getAttribute('type');
   input.setAttribute('type', type === 'text' ? 'password' : 'text');
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
