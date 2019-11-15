const body = document.body;
const daysEl = document.getElementById('days');
const hoursEl = document.getElementById('hours');
const minsEl = document.getElementById('mins');
const secsEl = document.getElementById('secs');

setInterval(calculateChristmasCountdown, 1000);
setInterval(createSnowFlake, 100);

function calculateChristmasCountdown() {
  const now = new Date();
  const currentMonth = (now.getMonth() + 1);
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

  daysEl.innerHTML = days < 10 ? '0' + days : days;
  hoursEl.innerHTML = hours < 10 ? '0' + hours : hours;;
  minsEl.innerHTML = mins < 10 ? '0' + mins : mins;;
  secsEl.innerHTML = secs < 10 ? '0' + secs : secs;
}

function createSnowFlake() {
  const snow_flake = document.createElement('i');
  snow_flake.classList.add('far');
  snow_flake.classList.add('fa-snowflake');
  snow_flake.style.left = Math.random() * window.innerWidth + 'px';
  snow_flake.style.animationDuration = Math.random() * 3 + 2 + 's';
  snow_flake.style.opacity = Math.random();

  body.appendChild(snow_flake);

  setTimeout(() => {
    snow_flake.remove();
  }, 5000);
}