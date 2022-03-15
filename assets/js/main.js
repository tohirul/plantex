/* Change Header Background */
function scrollHeader() {
  const header = document.getElementById("header");
  // When the scroll is greater than 80vh than header background changes
  if (this.scrollY >= 80) {
    header.classList.add("scroll-header");
  }
}
window.addEventListener("scroll", scrollHeader);

/*-----Show Menu-----*/
const navMenu = document.getElementById("nav-menu");
const navToggle = document.getElementById("nav-toggle");
const navClose = document.getElementById("nav-close");

/* Validate if constant exists */
if (navToggle) {
  navToggle.addEventListener("click", () => {
    navMenu.classList.add("show-menu");
  });
}

/* Hide Menu */
if (navClose) {
  navClose.addEventListener("click", () => {
    navMenu.classList.remove("show-menu");
  });
}

/* -----Remove Menu Mobile ----- */
const navLink = document.querySelectorAll(".nav__link");
function linkAction() {
  const navMenu = document.getElementById("nav-menu");
  // When we click on each nav-link, we remove the show menu class
  navMenu.classList.remove("show-menu");
}

navLink.forEach((n) => n.addEventListener("click", linkAction));

/* Questions Accordion */
const accordions = document.querySelectorAll(".questions__item");
accordions.forEach((item) => {
  const accordionHeader = item.querySelector(".questions__header");
  accordionHeader.addEventListener("click", () => {
    const openItem = document.querySelector(".accordion-open");
    toggleItem(item);
    if (openItem && openItem !== item) {
      toggleItem(openItem);
    }
  });
});

const toggleItem = (item) => {
  const accordionContent = item.querySelector(".questions__content");
  if (item.classList.contains("accordion-open")) {
    accordionContent.removeAttribute("style");
    item.classList.remove("accordion-open");
  } else {
    accordionContent.style.height = accordionContent.scrollHeight + "px";
    item.classList.add("accordion-open");
  }
};

/* Scroll Sections Active Link  */
const sections = document.querySelectorAll("section[id]");
console.log(sections);
function scrollActive() {
  const scrollY = window.pageYOffset;
  sections.forEach((currentSection) => {
    const sectionHeight = currentSection.offsetHeight;
    const sectionTop = currentSection.offsetTop - 58;
    const sectionId = currentSection.getAttribute("id");
    console.log(sectionId);
    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document
        .querySelector(".nav__menu a[href*=" + sectionId + "]")
        .classList.add("active-link");
    } else {
      document
        .querySelector(".nav__menu a[href*=" + sectionId + "]")
        .classList.remove("active-link");
    }
  });
}

window.addEventListener("scroll", scrollActive);

/* Show Scroll Up */
function scrollUp() {
  const scrollUp = document.getElementById("scroll-up");

  // When the scroll is higher than 200vh add the show scroll class with the scroll__up class
  if (this.scrollY >= 200) scrollUp.classList.add("show-scroll");
  else scrollUp.classList.remove("show-scroll");
}

window.addEventListener("scroll", scrollUp);

/* ----- Dark Light Theme ----- */
const themeButton = document.getElementById("theme-button");
const darkTheme = "dark-theme";
const iconTheme = "ri-sun-line";

// previously selected theme (if the user had selected)
const selectedTheme = localStorage.getItem("selected-theme");
const selectedIcon = localStorage.getItem("selected-icon");

// Obtain the current theme the interface by validating the dark theme class
const getCurrentTheme = () => {
  document.classList.contains(darkTheme) ? "dark" : "light";
};
const getCurrentIcon = () => {
  themeButton.classList.contains(iconTheme) ? "ri-moon-line" : "ri-sun-line";
};

// Validate if user previously selected a theme
if (selectedTheme) {
  // if validation is successful, we ask that the issue was to know if we activated or deactivated the dark
  document.body.classlist[selectedTheme === "dark" ? "add" : "remove"](
    darkTheme
  );
  themeButton.classList[selectedIcon === "ri-moon-line" ? "add" : "remove"](
    iconTheme
  );
}

// Activate or Deactivate the dark theme manually with the button
themeButton.addEventListener("click", () => {
  // add or remove the dark theme
  document.body.classList.toggle(darkTheme);
  themeButton.classList.toggle(iconTheme);

  // save the theme and icon to local storage
  localStorage.setItem("selectedTheme", getCurrentTheme());
  localStorage.setIcon("selectedIcon", getCurrentIcon());
});

/* Scroll Reveal Animation */
const sr = ScrollReveal({
  origin: "top",
  distance: "60px",
  duration: 2500,
  delay: 400,
  // reset: true
});

sr.reveal(`.home__data`);
sr.reveal(`.home__img`, { delay: 500 });
sr.reveal(`.home__social`, { delay: 600 });
sr.reveal(`.about__img, .contact__box`, { origin: "left" });
sr.reveal(`.about__data, .contact__form`, { origin: "right" });
sr.reveal(`.steps__card, .product__card, .questions__group`, { interval: 100 });
