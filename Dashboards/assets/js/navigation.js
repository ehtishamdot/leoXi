import { doc } from "@firebase/firestore";

//burrons
const navBtn = document.querySelector(".burger");
const stat = document.querySelector(".stat-content");
//divs
const navburger = document.querySelector(".burger");
const navigation = document.querySelector(".nav__sidebar");
const navLinks = document.querySelectorAll(".sidebar__items--link");
const overlayMinor = document.querySelector(".overlay-minor");
const overlay = document.querySelector(".overlay");

//toggles
const linksContainer = document.querySelector(".sidebar__items");

let counter = false;

const navCharts = () => {
  //priceChart
  stat.classList.toggle("hidden");
  overlay.classList.toggle("hidden");
};

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
    document.querySelector("body").style.overflowY = "scroll";
  } else {
    navigation.style.overflowY = "scroll";
    document.querySelector("body").style.overflowY = "hidden";
  }
};

navBtn?.addEventListener("click", () => {
  navToggles();
});

overlay?.addEventListener("click", () => {
  navCharts();
});

stat?.addEventListener("click", () => {
  navCharts();
});

//overlay
overlayMinor?.addEventListener("click", () => {
  navToggles();
});

//animation
linksContainer?.addEventListener("mouseover", (e) => {
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

// //move to the sections
// linksContainer.addEventListener("click", (e) => {
//   e.preventDefault();
//   if (e.target.closest(".sidebar__items--link")) {
//     navToggles();
//     const href = document.querySelector(e.target.getAttribute("href"));
//     const sectionLocation = href.getBoundingClientRect();
//     const pX = window.pageXOffset;
//     const pY = window.pageYOffset;
//     window.scrollTo({
//       top: sectionLocation.top + pY,
//       bottom: sectionLocation.bottom,
//       behavior: "smooth",
//     });
//   }
// });

const questions = document.querySelectorAll(".questions-accordeon");
const answers = document.querySelectorAll(".answer-accordeon");
console.log(questions);
var flag = 0;

questions.forEach((question, i) => {
  questions[i].addEventListener("click", () => {
    flag = i;
    answers.forEach((answer, i) => {
      if (flag === i) {
        answers[i].classList.toggle("activa");
        questions[i].classList.toggle("activa");
      } else {
        answers[i].classList.remove("activa");
        questions[i].classList.remove("activa");
      }
    });
  });
});

document?.querySelector(".faqs-btn")?.addEventListener("click", () => {
  document.querySelector(".dashboard").classList.add("hidden");
  document.querySelector(".faqs").classList.remove("hidden");
});

document.querySelector(".dashboard-btn")?.addEventListener("click", () => {
  document.querySelector(".dashboard").classList.remove("hidden");
  document.querySelector(".faqs").classList.add("hidden");
});
