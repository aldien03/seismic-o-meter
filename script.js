// Set all variables

const days = document.getElementById("days");
const hours = document.getElementById("hours");
const minutes = document.getElementById("minutes");
const seconds = document.getElementById("seconds");
const countdown = document.getElementById("countdown");

// Function Set Date on Click

// Set crew change dates //Hard-code test
// var cxDate = new Date("August 01 2020 00:00:00");
let cxDate = new Date();
let today = new Date();

document.getElementById("btnDepartureDate").onclick = function () {
  let setTargetDate = document.getElementById("departureDate").value;
  cxDate = new Date(setTargetDate);
};

// Function to check the remaining days etc

function remainingCX() {
  if (today === cxDate) {
    days.innerHTML = 00;
    hours.innerHTML = 00;
    minutes.innerHTML = 00;
    seconds.innerHTML = 00;
  } else {
    let timeToCX = cxDate - today;
    //   console.log(remainingDay); => Harus convert dari seconds
    let remainingDay = Math.floor(timeToCX / 1000 / 60 / 60 / 24);
    //   console.log(remainingDay);
    let remainingHour = Math.floor(timeToCX / 1000 / 60 / 60) % 24;
    //   console.log(remainingHour);
    let remainingMinute = Math.floor(timeToCX / 1000 / 60) % 60;
    //   console.log(remainingMinute);
    let remainingSecond = Math.floor(timeToCX / 1000) % 60;
    //   console.log(remainingSecond);

    days.innerHTML = remainingDay;
    hours.innerHTML = addZero(remainingHour);
    minutes.innerHTML = addZero(remainingMinute);
    seconds.innerHTML = addZero(remainingSecond);
  }
}

// Set interval every 1000ms / 1 second
setInterval(remainingCX, 1000);

// Function add time with Zero, if less than 10 h/m/s
function addZero(time) {
  let result = 0;

  if (time < 10) {
    result = "0" + time;
  } else {
    result = time;
  }

  return result;
}
