const mobileMenuHandler = () => {
  const hamburger = document.querySelector(".main-nav-trigger");
  hamburger.addEventListener("click", function() {
    hamburger.classList.toggle("is-active");
    document.querySelector(".mobile-menu").classList.toggle("is-active");
    document.body.classList.toggle("is-fixed");
  });
};

const catalogViewHandler = () => {
  const catalogViews = document.querySelectorAll(".catalog-filters-views__item");
  const productsWrap = document.querySelector(".products");
  catalogViews.forEach(function (view) {
    view.addEventListener("click", function () {
      let inactiveCatalogView = document.querySelector(".catalog-filters-views__item:not(.is-active)");
      if (this === inactiveCatalogView) {
        document.querySelector(".catalog-filters-views__item.is-active").classList.remove("is-active");
        this.classList.add("is-active");
        productsWrap.classList.toggle("products--table");
        productsWrap.classList.toggle("products--list");
      }
    })
  })
};

const catalogFiltersHandler = () => {
  const filterButtons = document.querySelectorAll(".catalog-categories__filter-button");
  filterButtons.forEach(function (btn) {
    btn.addEventListener("click", function () {
      let inactiveFilterButton = document.querySelector(".catalog-categories__filter-button:not(.is-active)");
      inactiveFilterButton.classList.add("is-active");
      this.classList.remove("is-active");

      if (document.querySelector(".catalog-categories__filter-button--hide.is-active")) {
        document.querySelector(".catalog-categories__list").style.display = "block";
      } else {
        document.querySelector(".catalog-categories__list").style.display = "none";
      }
    })
  });
};

const dialogHandler = () => {
  const dialog = document.querySelector(".dialog");
  if (dialog !== null) {
    const loginBtn = document.querySelector(".header-services__login");
    const closePopup = document.querySelector(".dialog__close");

    loginBtn.addEventListener("click", function () {
      dialog.classList.add("dialog--is-opened");
    });

    closePopup.addEventListener("click", function () {
      dialog.classList.remove("dialog--is-opened");
    });

    window.addEventListener("click", function (e) {
      if (e.target === dialog) {
        dialog.classList.remove("dialog--is-opened");
      }
    });
  }
};

const switchLogin = () => {
  const checkbox = document.querySelector(".switch input");
  if (checkbox !== null) {
    checkbox.checked = false;

    checkbox.addEventListener( 'change', function() {
      document.body.classList.toggle('logged-in')
    });
  }
};

showSearch = () => {
  const searchInput = document.querySelector(".search-form__input");

  window.addEventListener('click', function(e) {
    if (e.target.classList.contains("icon-search")) {
      searchInput.style.visibility = "visible";
    } else{
      searchInput.style.visibility = "hidden";
    }
  });
};

openMessage = () => {
  const channels = document.querySelectorAll(".channel");

  channels.forEach(function (channel) {
    channel.addEventListener('click', function() {
      window.open('./messenger.html', '_self');
    });
  })
};

handleMessengerHeight = () => {
  if (document.body.classList.contains("messenger")) {
    setMessengerHeight();

    window.addEventListener('resize', function() {
      setMessengerHeight();
    });

    function setMessengerHeight() {
      const messenger = document.querySelector(".messages-container");
      messenger.setAttribute("style",`height: calc(100vh - ${messenger.offsetTop}px - 8px)`);
    }
  }
};

document.addEventListener("DOMContentLoaded", function () {
  showSearch();
  mobileMenuHandler();
  catalogViewHandler();
  catalogFiltersHandler();
  dialogHandler();
  switchLogin();
  openMessage();
});

window.addEventListener("load", function () {
  handleMessengerHeight();
});

