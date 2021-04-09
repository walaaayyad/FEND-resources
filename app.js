
const htmlForm = document.getElementById('htmlForm'),
      frontEndForm = document.getElementById('frontEndForm'),
      cssForm = document.getElementById('cssForm'),
      jsForm = document.getElementById('jsForm'),
      gitForm = document.getElementById('gitForm'),
      githubForm = document.getElementById('githubForm'),
      arabicProject = document.getElementById('arabicProject'),
      englishProject = document.getElementById('englishProject'),
      scrollUpBtn = document.getElementById('upBtn');
/************ navbar **************/
let navbar = document.querySelector('.navbar-menu'),
    navList = document.getElementById('navbar-list');

// Function to open form [[[ok]]]
const openForm = (id)=> {
    id.classList.add("open");
    window.scrollTo(0,0);
    return;
}

// Function to close form  [[[ok]]]
const closeForm = (id)=> {
    id.classList.remove("open");
    return;
}

/****** Navbar Functions ******/
//1- Function to activate section & its URL on the navbar 
const addActiveClass= (id)=> {
    //Add active class for link on navbar
    document.querySelector('.link__active')?.classList.remove('link__active');
    document.querySelector(`[href="#section${id}"]`).classList.add('link__active');

    //Add active class to section
    document.querySelector(".your-active-class")?.classList.remove("your-active-class");
    document.querySelector(`#section${id}`).classList.add("your-active-class");
    
}

//2- Function to add class 'active' to section when near top of viewport
const activeCurrentSection = ()=> {
  //select all sections by attribute
  const newSections = document.querySelectorAll('[data-nav]');
    //loop the sections and add active style on current section
    newSections.forEach(section=> {
      let sectionRect= section.getBoundingClientRect();
        //add condition if the section appears on viewport by its ratio
        if(sectionRect.top/sectionRect.height < 0.5) {
          //Use a function [slice the id number from the sectionId to pass it to the function]    
          addActiveClass(section.id.slice(7));
        }
    })
} 

//3- Function to change navbar color when scroll down [[[ok]]]
const changeBackgroud = ()=> {
    if(window.scrollY >= 70) {
      navbar.classList.add('scroll');
      scrollUpBtn.classList.remove('hidden');
    }else{
      document.querySelector('.navbar-menu').classList.remove('scroll');
      scrollUpBtn.classList.add('hidden');
  
    }
  }

//4- Function to scroll top whith smooth effect comes from css
const scrollToTop = () => {
    scrollUpBtn.classList.add('hidden');
    window.scrollTo(0,0);
  }

//5- Function to handle open & close side menu
const openIconHandler = ()=> {
    document.getElementById('1').classList.toggle('line1');
    document.getElementById('2').classList.toggle('line2');
    document.getElementById('3').classList.toggle('line3');
    document.getElementById('sideMenu').classList.toggle('open');
    document.getElementById('cover').classList.toggle('openCover');
  }

/******************************/
//    Define EVENT LISTENERS  
//******************************/
 
// Scroll to targetElement
window.addEventListener('scroll', ()=> {
//   activeCurrentSection(); 
  changeBackgroud();
}
);

