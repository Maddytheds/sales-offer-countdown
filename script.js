const daysEl = document.getElementById("days");
const hoursEl = document.getElementById("hours");
const minutesEl = document.getElementById("minutes");
const secondsEl = document.getElementById("seconds");
const setPrice = document.getElementById("price");
const setOffer = document.getElementById("offer");
const saleTime = "30 May 2024 19:33:00";
let interval = null;

function salesTime() {
  const newSaleTime = new Date(saleTime);
  const currentDate = new Date();

  const totalSeconds = Math.floor((newSaleTime - currentDate) / 1000); // Truncate decimal points

  const days = Math.floor(totalSeconds / 3600 / 24);
  const hours = Math.floor(totalSeconds / 3600) % 24;
  const mins = Math.floor(totalSeconds / 60) % 60;
  const seconds = Math.floor(totalSeconds) % 60;

  daysEl.innerHTML = days;
  hoursEl.innerHTML = hours;
  minutesEl.innerHTML = mins;
  secondsEl.innerHTML = seconds;

  if (totalSeconds <= 0) {
    clearInterval(interval);
    daysEl.innerHTML = 0;
    hoursEl.innerHTML = 0;
    minutesEl.innerHTML = 0;
    secondsEl.innerHTML = 0;
    setPrice.innerHTML = "$200";
    setOffer.innerHTML = "Offer Over";
  }
}

salesTime();
interval = setInterval(salesTime, 1000); // Assign the interval variable after its declaration
