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
