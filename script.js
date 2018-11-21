//****************Navigation****************

//All navigation links in nodeList
const navLinks = document.querySelectorAll('.nav__link a');


//Event listeners for Link Display Settings
//Link text shows on mouse enter
navLinks.forEach(link => link.addEventListener('mouseenter', function(event) {
  return event.target.classList.add('active_hover');
}));

//Link text hidden on mouse leave
navLinks.forEach(link => link.addEventListener('mouseleave', function(event) {
  return event.target.classList.remove('active_hover');
}));

//Navigation changes active link on click
navLinks.forEach(link => link.addEventListener('click', function(event) {
  navLinks.forEach(link => link.classList.remove('active'));

  event.target.classList.add('active');
}));

//Down arrow Scrolling
const arrow = document.querySelector('i');
//Number of Page Sections
let count = 0;

arrow.addEventListener('click', function() {
  const sections = document.querySelectorAll('section');
  //Starting from top, scroll down one section
  if(count < sections.length-1) {
    //Update count to new section
    count++;

    //Scroll to new section
    sections[count].scrollIntoView(true, {
      behavior: "smooth",
      block: "nearest",
      inline: "nearest"
    });

    //Update navigation.
    navLinks.forEach(link => link.classList.remove('active'));
    navLinks[count].classList.add('active');

  } else {
    //Reset Count
    count = 0;

    //Scroll to top
    sections[count].scrollIntoView(true, {
      behavior: "smooth",
      block: "nearest",
      inline: "nearest"
    });

    //Update navigation.
    navLinks.forEach(link => link.classList.remove('active'));
    navLinks[count].classList.add('active');
  }
})

//****************Skills****************
//Array of skill descriptions
const skills = {
  html: ["HTML5", "Semantic HTML", "Presentational HTML"],
  css: ["CSS3", "Animations", "Specificity", "BEM Methodology"],
  js: ["ES5", "ES6", "Closures", "Callbacks", "AJAX", "DOM"],
  less: ["Preprocessor", "Nested Styles", "Mixins", "Variables"],
  bootstrap: ["Bootstrap4 library", "Components"],
  gsap: ["GSAP Library", "JS Animations"],
  react: ["ReactJS", "Front-end library", "Functional Components"]
}

class SkillBox {
  constructor(element) {

    this.element = element;
    this.title = this.element.dataset.tab;
    this.img = this.element.dataset.path;
    this.description = skills[this.title];

    this.element.addEventListener('mouseenter', () => { this.displayText() });
    this.element.addEventListener('mouseleave', () => { this.hideText() });
  }

  displayText() {

    if(this.element.children.length < 2) {

      this.element.removeChild(this.element.children[0]);

      this.description.forEach(content => {

        const element = document.createElement('p');
        element.innerText = content;
        element.style.color = '#FE3301';

        this.element.appendChild(element);

      });
    }

    TweenMax.fromTo(this.element, 1.5, {css: {opacity: 0}}, {css:{opacity: 1}});
  }

  hideText() {

    for(let i = 0; i < this.element.children.length; i++) {
      this.element.removeChild(this.element.children[i]);
      i--;
    }

    const img = document.createElement('img');
    img.src = this.img;
    img.id = this.title;
    this.element.appendChild(img)

    TweenMax.fromTo(this.element, 2.25, {css: {opacity: 0}}, {css:{opacity: 1}});
  }
}

skillIcons = document.querySelectorAll('.skills__row__items.front-end div')
                  .forEach(elem => new SkillBox(elem))
