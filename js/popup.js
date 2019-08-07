const popup = document.querySelector(".popup");
const loginBtn = document.querySelector(".header-services__login");
const closePopup = document.querySelector(".popup__close");

loginBtn.addEventListener("click", function () {
  popup.classList.add("popup--is-opened");
});

closePopup.addEventListener("click", function () {
  popup.classList.remove("popup--is-opened");
});

window.addEventListener("click", function (e) {
  if (e.target === popup) {
    popup.classList.remove("popup--is-opened");
  }
});