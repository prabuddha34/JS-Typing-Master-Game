const words = [
  "program", "javascript", "coding", "speed", "keyboard",
  "function", "async", "react", "node", "variable",
  "object", "array", "developer", "github", "frontend",
  "backend", "performance", "optimize", "loop", "browser"
];

let currentWord = "";
let score = 0;
let timeLeft = 60;
let timer;
let gameStarted = false;

const wordDisplay = document.getElementById("word");
const input = document.getElementById("input");
const timeDisplay = document.getElementById("time");
const wpmDisplay = document.getElementById("wpm");

function getRandomWord() {
  return words[Math.floor(Math.random() * words.length)];
}

function startGame() {
  if (!gameStarted) {
    timer = setInterval(updateTime, 1000);
    gameStarted = true;
  }

  currentWord = getRandomWord();
  wordDisplay.textContent = currentWord;
}

function updateTime() {
  timeLeft--;
  timeDisplay.textContent = timeLeft;

  if (timeLeft <= 0) {
    clearInterval(timer);
    input.disabled = true;
    wordDisplay.textContent = "⏳ Time's Up!";
  }
}

input.addEventListener("input", () => {
  if (!gameStarted) startGame();

  if (input.value.trim() === currentWord) {
    score++;
    input.value = "";
    startGame();
  }

  wpmDisplay.textContent = score;
});

function restartGame() {
  score = 0;
  timeLeft = 60;
  input.value = "";
  input.disabled = false;
  wpmDisplay.textContent = "0";
  gameStarted = false;
  wordDisplay.textContent = "Loading...";
  timeDisplay.textContent = timeLeft;
  clearInterval(timer);
}
