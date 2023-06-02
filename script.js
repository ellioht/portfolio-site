// Nav bar change
const element = document.getElementById("home-button");
const characters = ["home()", "elliotHallam()"];
let currentIndex = 0;
const interval = setInterval(() => {
  element.textContent = characters[currentIndex];
  currentIndex = (currentIndex + 1) % characters.length;
}, 3000);


// Move to Projects on click
function scrollToSection(sectionId) {
  const section = document.getElementById(sectionId);
  const offset = 40; 
  const sectionPosition = section.getBoundingClientRect().top;
  const scrollPosition = sectionPosition + window.pageYOffset - offset;
  window.scrollTo({ top: scrollPosition, behavior: 'smooth' });
}


// About sectio fades away when scroll down page
const elementToFade = document.getElementById('fade-section');
let opacity = 1;
const fadeStartOffset = 0;
// Function to fade out the element
function fadeOutElement() {
  const scrollPosition = window.pageYOffset || document.documentElement.scrollTop;
  opacity = 1 - Math.max(0, Math.min(1, (scrollPosition - fadeStartOffset) / window.innerHeight));
  elementToFade.style.opacity = opacity;
}
window.addEventListener('scroll', fadeOutElement);
