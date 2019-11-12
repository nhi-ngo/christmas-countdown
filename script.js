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

  let timeLeft = christmasDate.getTime() - now.getTime();

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

  document.getElementById('days').innerHTML = `${days < 10 ? '0' : '' }${days}`;
  document.getElementById('hours').innerHTML = `${hours < 10 ? '0' : '' }${hours}`;
  document.getElementById('mins').innerHTML = `${mins < 10 ? '0' : '' }${mins}`;
  document.getElementById('secs').innerHTML = `${secs < 10 ? '0' : '' }${secs}`;

  setInterval(calculateChristmasCountdown, 1000);
}

calculateChristmasCountdown();