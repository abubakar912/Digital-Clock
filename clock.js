function digitalClock() {
  const divClock = document.getElementById("time");
  let nowTime = new Date();

  let hours = nowTime.getHours();
  let minutes = nowTime.getMinutes();
  let seconds = nowTime.getSeconds();
  let ampm = hours >= 12 ? "PM" : "AM"; // Determine AM or PM

  hours = hours % 12 || 12;

  hours = (hours < 10) ? "0" + hours : hours;
  minutes = (minutes < 10) ? "0" + minutes : minutes;
  seconds = (seconds < 10) ? "0" + seconds : seconds;

  let outputTime = `${hours}:${minutes}:${seconds}`;

  divClock.innerText = outputTime;
}

setInterval(digitalClock, 1000);

digitalClock();
