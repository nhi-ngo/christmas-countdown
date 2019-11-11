const endDate = new Date("Dec 25, 2019 0:0:0").getTime();

const timer = setInterval(function () {

  const now = new Date().getTime();
  const timeLeft = endDate - now;

  if (timeLeft >= 0) {
    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const mins = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const secs = Math.floor((timeLeft % (1000 * 60)) / 1000);

    document.querySelector("#timer-days").innerHTML = `${days}<span class="label">Day(s)</span>`;
    document.querySelector("#timer-hours").innerHTML = `${hours}<span class="label">Hour(s)</span>`;
    document.querySelector("#timer-mins").innerHTML = `${mins}<span class="label">Minute(s)</span>`;
    document.querySelector("#timer-secs").innerHTML = `${secs}<span class="label">Second(s)</span>`;
  
  } else {
    document.querySelector('#timer').innerHTML = "The countdown is over";
  }
  
}, 1000);