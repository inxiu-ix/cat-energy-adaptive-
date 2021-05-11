const nav = document.querySelector('.main-nav');
const toggle = nav.querySelector('.main-nav__toggle');
const navList = nav.querySelector('.nav-list');


toggle.addEventListener('click', () => {
  nav.classList.toggle("main-nav--closed");
  nav.classList.toggle("main-nav--oppened");

  if (nav.classList.contains("main-nav--oppened")) {
    navList.style.display = "none";
  } else {
    navList.style.display = "block";
  }
})
