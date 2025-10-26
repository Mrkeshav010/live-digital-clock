const hourEl = document.getElementById("hours");
const minuteEl = document.getElementById("minutes");
const secondEl = document.getElementById("Seconds");
const ampmEl = document.getElementById("ampm");

function updateDigitalClock() {
  let h = new Date().getHours();
  let m = new Date().getMinutes();
  let s = new Date().getSeconds();
  let ampm = "AM";

  if (h >= 12) {
    ampm = "PM";
    if (h > 12) h -= 12;
  }
  if (h === 0) h = 12;

  h = h < 10 ? "0" + h : h;
  m = m < 10 ? "0" + m : m;
  s = s < 10 ? "0" + s : s;

  hourEl.innerText = h;
  minuteEl.innerText = m;
  secondEl.innerText = s;
  ampmEl.innerText = ampm;
}

setInterval(updateDigitalClock, 1000);
