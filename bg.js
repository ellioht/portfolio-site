
const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

let canvasWidth = (canvas.width = window.innerWidth);
let canvasHeight = (canvas.height = window.innerHeight);

function getCavasSize() {
  canvasWidth = (canvas.width = window.innerWidth);
  canvasHeight = (canvas.height = window.innerHeight);  
}

// Function to generate a random number within a range
function rnd(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

// Function to render the background
function render(skipPositions) {
  const heightScale = 1;
  ctx.fillStyle = "rgb(240, 240, 240)";
  ctx.fillRect(0, 0, canvasWidth, canvasHeight);
  ctx.lineWidth = 0;
  const hueStart = rnd(0, 0);
  const squareSize = 40;
  const rowHeight = Math.floor(squareSize * heightScale);
  const columns = Math.ceil(canvasWidth / squareSize) + 1;
  const rows = Math.ceil(canvasHeight / rowHeight);

  // Define the range for fading
  const minLightness = 90;
  const maxLightness = 100;

  // Loop through each row
  for (let row = 0; row < rows; row++) {
    // Calculate the hue for the current row
    const hue = hueStart + row * 30;

    // Loop through each column in the row
    for (let col = 0; col < columns; col++) {
      // Check if the current position should be skipped
      const shouldSkip = skipPositions[row].includes(col);

      if (shouldSkip) {
        continue; // Skip drawing the square at this position
      }

      // Rest of the code to draw the square
      let x = col * squareSize;
      let y = row * rowHeight;

      // Adjust the x-coordinate for odd rows to create a staggered pattern
      if (row % 2 != 0) {
        x -= squareSize / 2;
      }

      // Calculate the lightness value based on time for the fading effect
      const time = Date.now() * 0.001;
      const lightness = (Math.sin(time + (row * 2 + col) * 0.1) + 1) / 2;
      const range = maxLightness - minLightness;
      const adjustedLightness = minLightness + lightness * range;
      const clr = `hsl(${hue}, 60%, ${adjustedLightness}%)`;
      ctx.fillStyle = clr;
      ctx.strokeStyle = clr;
      ctx.fillRect(x, y, squareSize, squareSize);
    }
  }

  requestAnimationFrame(() => render(skipPositions));
}

// Append the canvas to the body of the document
document.body.appendChild(canvas);

// Generate skip positions once
const rows = Math.ceil(canvasHeight / (40 * 1));
const columns = Math.ceil(canvasWidth / 40) + 1;
const skipPositions = generateSkipPositions(rows, columns);

render(skipPositions);

// Function to generate skip positions for each row and column
function generateSkipPositions(rows, columns) {
  const skipPositions = [];
  const skipCount = rnd(columns / 1.5, Math.floor(columns * 2)); // Random number of squares to skip (up to half of the total columns)

  for (let row = 0; row < rows; row++) {
    const rowSkipIndices = [];
    for (let j = 0; j < skipCount; j++) {
      const skipIndex = rnd(0, columns - 1);
      rowSkipIndices.push(skipIndex);
    }
    skipPositions.push(rowSkipIndices);
  }

  return skipPositions;
}

window.addEventListener("resize", getCavasSize);