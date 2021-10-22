import { doc } from "@firebase/firestore";

//burrons
const navBtn = document.querySelector(".burger");
//divs
const navburger = document.querySelector(".burger");
const navigation = document.querySelector(".nav__sidebar");
const navLinks = document.querySelectorAll(".sidebar__items--link");
const overlayMinor = document.querySelector(".overlay");
//toggles
const linksContainer = document.querySelector(".sidebar__items");
overlay = document.querySelector(".overlay");

let counter = false;

const navToggles = () => {
  //display navigation
  navigation.classList.toggle("hidden");

  //overlay
  overlayMinor.classList.toggle("hidden");

  //links color change
  navLinks.forEach((link) => {
    link.classList.toggle("toggle__links");
  });

  if (navigation.classList.contains("hidden")) {
    document.querySelector("body").style.overflow = "scroll";
  } else {
    navigation.style.overflowY = "scroll";
    document.querySelector("body").style.overflow = "hidden";
  }
};

navBtn.addEventListener("click", () => {
  navToggles();
});

//overlay
overlayMinor.addEventListener("click", () => {
  navToggles();
});

//animation
linksContainer.addEventListener("mouseover", (e) => {
  if (e.target.closest(".sidebar__items--link")) {
    navLinks.forEach((link) => {
      link.style.opacity = ".3";
    });
    e.target.closest(`.sidebar__items--link`).style.opacity = `1`;
  }
  e.target.addEventListener("mouseleave", () => {
    navLinks.forEach((link) => {
      link.style.opacity = "1";
    });
  });
});

//move to the sections
linksContainer.addEventListener("click", (e) => {
  e.preventDefault();
  if (e.target.closest(".sidebar__items--link")) {
    navToggles();
    const href = document.querySelector(e.target.getAttribute("href"));
    const sectionLocation = href.getBoundingClientRect();
    const pX = window.pageXOffset;
    const pY = window.pageYOffset;
    window.scrollTo({
      top: sectionLocation.top + pY,
      bottom: sectionLocation.bottom,
      behavior: "smooth",
    });
  }
});
