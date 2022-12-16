// Show and close modal

const modal = document.querySelector('.edit-modal');
const modalOpenBtn = document.querySelector('.edit-modal-button');
const modalCloseBtn = document.querySelector('.edit-modal-close-button');

modalOpenBtn.addEventListener('click', () => {
modal.showModal();
});

modalCloseBtn.addEventListener('click', () => {
   modal.close();

});



// Password toggle

const input = document.querySelector(".input-field");

document
  .querySelector(".toggle-password-visibility__toggle")
  .addEventListener("click", (e) => {
    const input = e.target.previousElementSibling;
    const type = input.getAttribute("type");
    input.setAttribute("type", type === "text" ? "password" : "text");
  });
