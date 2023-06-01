const element = document.getElementById("home-button");
const characters = ["home()", "elliotHallam()"];
let currentIndex = 0;

// Set the interval to change the character value
const interval = setInterval(() => {
  // Update the character value of the element
  element.textContent = characters[currentIndex];
  // Increment the index
  currentIndex = (currentIndex + 1) % characters.length;
}, 3000); // Delay in milliseconds (1 second in this example)



function scrollToSection(sectionId) {
  const section = document.getElementById(sectionId);
  const offset = 40; // Adjust this value as needed

  const sectionPosition = section.getBoundingClientRect().top;
  const scrollPosition = sectionPosition + window.pageYOffset - offset;

  window.scrollTo({ top: scrollPosition, behavior: 'smooth' });
}
