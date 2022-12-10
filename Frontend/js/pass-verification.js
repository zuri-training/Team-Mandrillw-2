function autotab(current, to) {
  if (
    current.getAttribute &&
    current.value.length == current.getAttribute("maxlength")
  ) {
    to.focus();
  }
}

const formInput = document.querySelector(".sign-in-form__input-verif-num");
const formButton = document.querySelector(".sign-in-form__button");

// the default state is 'disabled'
formButton.disabled = true;

// alternative is to use "change" - explained below
formInput.addEventListener("keyup", buttonState);

function buttonState() {
  if (document.querySelector(".sign-in-form__input-verif-num").value === "") {
    formButton.disabled = true; // return disabled as true whenever the input field is empty
  } else {
    formButton.disabled = false; // enable the button once the input field has content
  }
}

// just verifying that the button has been clicked
formButton.addEventListener("click", () => {
  console.log(
    "You entered:",
    document.querySelector(".sign-in-form__input-verif-num").value
  );
});
