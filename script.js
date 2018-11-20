//****************Navigation****************

//All navigation links in nodeList
const navLinks = document.querySelectorAll('.nav__link a');


//Event listeners for Link Display Settings
navLinks.forEach(link => link.addEventListener('mouseenter', function(event) {
  return event.target.classList.add('active_hover');
}));


navLinks.forEach(link => link.addEventListener('mouseleave', function(event) {
  return event.target.classList.remove('active_hover');
}));

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
console.log(arrow)
