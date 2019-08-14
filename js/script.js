const mobileMenu = () => {
  const hamburger = document.querySelector('.main-nav__trigger');
  hamburger.addEventListener('click', function() {
    hamburger.classList.toggle('is-active');
  });
};

const catalogViewHandler = () => {
  const catalogViews = document.querySelectorAll(".catalog-filters-views__item");
  const productsWrap = document.querySelector(".products__wrap");
  catalogViews.forEach(function (view) {
    view.addEventListener("click", function () {
      let inactiveCatalogView = document.querySelector(".catalog-filters-views__item:not(.is-active)");
      if (this === inactiveCatalogView) {
        document.querySelector(".catalog-filters-views__item.is-active").classList.remove("is-active");
        this.classList.add("is-active");
        productsWrap.classList.toggle("products__wrap--table");
        productsWrap.classList.toggle("products__wrap--list");
      }
    })
  })
};

const catalogFiltersHandler = () => {
  const filterButtons = document.querySelectorAll(".catalog-sidebar__filter-button");
  filterButtons.forEach(function (btn) {
    btn.addEventListener("click", function () {
      let inactiveFilterButton = document.querySelector(".catalog-sidebar__filter-button:not(.is-active)");
      inactiveFilterButton.classList.add("is-active");
      this.classList.remove("is-active");

      if (document.querySelector(".catalog-sidebar__filter-button--hide.is-active")) {
        document.querySelector(".catalog-nav").style.display = "block";
      } else {
        document.querySelector(".catalog-nav").style.display = "none";
      }
    })
  });
};

const popupHandler = () => {
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
};

mobileMenu();
catalogViewHandler();
catalogFiltersHandler();
popupHandler();
