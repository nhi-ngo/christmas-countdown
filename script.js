// Countdown section
const body = document.body;
const daysEl = document.getElementById("days");
const hoursEl = document.getElementById("hours");
const minsEl = document.getElementById("mins");
const secsEl = document.getElementById("secs");

setInterval(calculateChristmasCountdown, 1000);
setInterval(createSnowFlake, 100);

function calculateChristmasCountdown() {
  const now = new Date();
  const currentMonth = now.getMonth() + 1;
  const currentDay = now.getDate();

  // Figure out the year that the next Christmas will occur on
  const nextChristmasYear = now.getFullYear();
  if (currentMonth === 12 && currentDay > 25) {
    nextChristmasYear += 1;
  }

  const nextChristmasDate = `Dec 25, ${nextChristmasYear} 0:0:0`;
  const christmasDate = new Date(nextChristmasDate);

  const timeLeft = christmasDate - now;

  let days = 0;
  let hours = 0;
  let mins = 0;
  let secs = 0;

  //Don't calculate the time left if it is Christmas day
  if (currentMonth !== 12 || (currentMonth === 12 && currentDay !== 25)) {
    days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    mins = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    secs = Math.floor((timeLeft % (1000 * 60)) / 1000);
  }

  daysEl.innerHTML = days < 10 ? "0" + days : days;
  hoursEl.innerHTML = hours < 10 ? "0" + hours : hours;
  minsEl.innerHTML = mins < 10 ? "0" + mins : mins;
  secsEl.innerHTML = secs < 10 ? "0" + secs : secs;
}

function createSnowFlake() {
  const snow_flake = document.createElement("i");
  snow_flake.classList.add("far");
  snow_flake.classList.add("fa-snowflake");
  snow_flake.style.left = Math.random() * window.innerWidth + "px";
  snow_flake.style.animationDuration = Math.random() * 3 + 2 + "s";
  snow_flake.style.opacity = Math.random();

  body.appendChild(snow_flake);

  setTimeout(() => {
    snow_flake.remove();
  }, 5000);
}

// Quiz section
let currentQuestion, correct, wrong, selected;
const startQuizBtn = document.querySelector(".start-quiz-btn");
const restartBtn = document.querySelector(".restart-btn");
const questionTotal = document.querySelector("#questionTotal");
const message = document.querySelector(".message");
const correctCount = document.querySelector("#correctCount");
const wrongCount = document.querySelector("#wrongCount");
const question = document.querySelector(".question");
const answer = document.querySelector(".answer");
const questionCount = document.querySelector(".questionCount");
const questionNumber = document.querySelector("#questionNumber");
const restartMessage = document.querySelector(".message-restart");
const messageBox = document.querySelector(".message-box");

const quest = [
  [
    ["What was Josephs job?"],
    ["Carpenter", "Dancer", "Priest", "Scholar"],
    [0]
  ],
  [
    ["How many red nosed reindeers pull Santa's sleigh?"],
    ["6", "8", "1", "2"],
    [2]
  ],
  [
    ["What country did Christmas Trees originate from?"],
    ["Switzerland", "Mexico", "Germany", "Portugal"],
    [2]
  ],
  [
    [
      "How does Santa Claus go back up the Chimney to continue his journey of delivering gifts?"
    ],
    [
      "He asks reindeers for help",
      "He levitates",
      "He calls fire-fighters",
      "He jumps up through the chimney"
    ],
    [3]
  ],
  [
    ["In the TV series Simpsons, what species is Santas little helper?"],
    ["Hamster", "Dog", "Frog", "Camel"],
    [1]
  ]
];

questionTotal.textContent = quest.length;

function displayQuiz() {
  const displayQuiz = document.querySelector("#quiz-container");
  displayQuiz.classList.toggle("reveal-visible");
}

restartBtn.addEventListener("click", function() {
  startGame();
  toggleDisplay();
  message.textContent = "Welcome back, hope this time you will play better!";
});

startGame();
processGame();

// Start Game and process game
function startGame() {
  currentQuestion = 0;
  correct = 0;
  wrong = 0;
  selected = 0;

  show();

  // display counter
  correctCount.textContent = 0;
  wrongCount.textContent = 0;
}

function processGame() {
  for (let i = 0; i < 4; i++) {
    document.querySelector("#a" + i).addEventListener("click", function() {
      selected = i;

      if (selected == quest[currentQuestion][2]) {
        correct++;
        correctCount.textContent = correct;
        message.textContent = "GOOD JOB!";
      } else {
        wrong++;
        wrongCount.textContent = wrong;
        message.textContent = "WRONG!!!";
      }
      nextQuestion();
    });
  }
}

function nextQuestion() {
  currentQuestion++;

  if (currentQuestion === quest.length) {
    toggleDisplay();
    message.textContent = `You've scored ${correct} out of ${quest.length} points.`;
  } else {
    show();
  }
}

function show() {
  // display questions
  question.textContent = quest[currentQuestion][0];

  // display answers
  for (let i = 0; i < 4; i++) {
    document.querySelector("#a" + i).textContent = quest[currentQuestion][1][i];
  }

  // display question number
  questionNumber.textContent = currentQuestion + 1;
}

function toggleDisplay() {
  restartMessage.classList.toggle("hidden");
  question.classList.toggle("hidden");
  answer.classList.toggle("hidden");
  questionCount.classList.toggle("hidden");
  messageBox.classList.toggle("final-message");
}

startQuizBtn.addEventListener("click", displayQuiz);
