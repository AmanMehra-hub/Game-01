// --- DOM refs ---
const btn = document.querySelector("button");
const targetColorBox = document.querySelector("#highlight-color");
const timeDisplay = document.querySelector("#time");
const scoreDisplay = document.querySelector("#scorer");
const highScoreDisplay = document.querySelector("#high-score"); // (optional, if exists)
const gridContent = document.getElementById("grid-box");

// --- state ---
let time = 0;
let score = 0;
let timerId = null;
const GRID_SIZE = 16;

// --- utils ---
const randNum = (val) => Math.floor(Math.random() * (val + 1));

const rndColor = () => {
  // correct template literal + commas
  return `rgb(${randNum(255)}, ${randNum(255)}, ${randNum(255)})`;
};

const colorArr = () => Array.from({ length: GRID_SIZE }, () => rndColor());

// --- game ---
function play() {
  // reset
  if (timerId) clearInterval(timerId);
  time = 30;
  score = 0;
  timeDisplay.innerText = time;
  scoreDisplay.innerText = score;
  scoreDisplay.style.color = "red";

  createGrid();

  timerId = setInterval(() => {
    time--;
    timeDisplay.innerText = time;
    if (time === 0) {
      clearInterval(timerId);
      alert("⌛ Time's up! 🏆 Your Score: " + score);
      // optional: persist high score if you want
      // location.reload(); // not required; we can just stop here
    }
  }, 1000);
}

function createGrid() {
  const colors = colorArr();
  gridContent.innerHTML = "";
  gridContent.style.border = "none";

  const targetColor = colors[randNum(GRID_SIZE - 1)];
  targetColorBox.style.backgroundColor = targetColor;
  targetColorBox.innerText = "";

  colors.forEach((c) => {
    const gridBox = document.createElement("div");
    gridBox.className = "box";
    gridBox.style.backgroundColor = c;
    gridBox.addEventListener("click", () => clickCheck(c, targetColor));
    gridContent.appendChild(gridBox);
  });
}

function clickCheck(clickedColor, targetClr) {
  if (clickedColor === targetClr) {
    score++;
  } else if (score > 0) {
    score--;
  }
  scoreDisplay.style.color = score > 0 ? "rgb(81, 234, 10)" : "red";
  scoreDisplay.innerText = score;
  createGrid();
}

// start button (zaroori)
btn?.addEventListener("click", play);

// optional: auto-start on load
// window.addEventListener("DOMContentLoaded", play);
