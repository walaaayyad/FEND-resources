/************ navbar Variables **************/
let navbar = document.querySelector('.navbar-menu'),
  navList = document.getElementById('navbar-list');

/************ Page Global Variables **************/
const htmlForm = document.getElementById('htmlForm'),
  frontEndForm = document.getElementById('frontEndForm'),
  cssForm = document.getElementById('cssForm'),
  jsForm = document.getElementById('jsForm'),
  gitForm = document.getElementById('gitForm'),
  githubForm = document.getElementById('githubForm'),
  arabicProject = document.getElementById('arabicProject'),
  englishProject = document.getElementById('englishProject'),
  readForm = document.getElementById('readForm'),
  practiceForm = document.getElementById('practiceForm'),
  quizForm = document.getElementById('quizForm'),
  cheatSheetForm = document.getElementById('cheatSheetForm'),
  scrollUpBtn = document.getElementById('upBtn');

/**************************** 
       Global Functions 
 ****************************/

//1- Function to open form
const openForm = (id) => {
  id.classList.add('open');
  window.scrollTo(0, 0);
  return;
};

//2- Function to close form
const closeForm = (id) => {
  id.classList.remove('open');
  return;
};

//3- Function to change navbar color when scroll down [[[ok]]]
const changeBackgroud = () => {
  if (window.scrollY >= 90) {
    navbar.classList.add('scroll');
    scrollUpBtn.classList.add('show');
  } else {
    document.querySelector('.navbar-menu').classList.remove('scroll');
    scrollUpBtn.classList.remove('show');
  }
};

//4- Function to scroll top whith smooth effect comes from css
const scrollToTop = () => {
  scrollUpBtn.classList.add('hidden');
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: 'smooth',
  });
};

//5- Function to handle open & close side menu
const openIconHandler = () => {
  document.getElementById('1').classList.toggle('line1');
  document.getElementById('2').classList.toggle('line2');
  document.getElementById('3').classList.toggle('line3');
  document.getElementById('sideMenu').classList.toggle('open');
  document.getElementById('cover').classList.toggle('openCover');
};

/******************************
    Define EVENT LISTENERS  
******************************/

// Change Navbar color when scroll down
window.addEventListener('scroll', () => {
  changeBackgroud();
});

/******************************
    SCROLL SPY  
******************************/

window.onload = function () {
  scrollSpy('#navbar-list', {
    sectionSelector: '.subjects-section .section-container section',
    targetSelector: 'a',
    hrefAttribute: 'href',
    offset: 90,
    activeClass: 'active',
  });
};
