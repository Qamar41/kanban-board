let isBlack = false;

export function changeBackgroundColor() {
  const sidebar = document.querySelector(".fully-outer-sidebar");
  const cardouter = document.querySelectorAll(".cards-outer");
  const cardinner = document.querySelectorAll(".cards-inner");
  const cardinnertext = document.querySelectorAll(".cards-inner");

  if (sidebar) {
    if (isBlack) {
      sidebar.style.backgroundColor = "white";
      document.body.style.backgroundColor = "#E4EBFA";
      cardouter.forEach((card) => (card.style.backgroundColor = "#E4EBFA"));
      cardinner.forEach((card) => (card.style.backgroundColor = "white"));
      cardinnertext.forEach((card) => (card.style.color = "black")); // Change text color to white
    } else {
      sidebar.style.backgroundColor = "#20212C";
      document.body.style.backgroundColor = "#000112";
      cardouter.forEach((card) => (card.style.backgroundColor = "#000112"));
      cardinner.forEach((card) => (card.style.backgroundColor = "#20212C"));
      cardinnertext.forEach((card) => (card.style.color = "white")); // Reset text color
    }
    isBlack = !isBlack;
  } else {
    console.error('Element with class "fully-outer-sidebar" not found.');
  }

  const sidebarheading = document.getElementById("main-heading");
  sidebarheading.style.color = isBlack ? "white" : "black";

  const daynight = document.querySelector(".day-night-mode");
  daynight.style.backgroundColor = isBlack ? "#000112" : "#E4EBFA";

  const navbarmain = document.querySelector(".nav-bar-fullyouter");
  navbarmain.style.background = isBlack ? "#20212C" : "white";

  const navtopheading = document.getElementById("nav-bar-top-heading");
  navtopheading.style.color = isBlack ? "white" : "black";
}
