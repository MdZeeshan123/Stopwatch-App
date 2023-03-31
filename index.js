const body = document.querySelector('body');
const toggle = document.getElementById('toggle');
let beat = new Audio('./tick.mp3');
let beep = new Audio('./beep.mp3');
toggle.onclick = function () {
  toggle.classList.toggle('active');
  body.classList.toggle('active');
}
let isStop = true,
  s = 0,
  min = 0,
  hr = 0;
beat.loop = true;

function start() {
  if (isStop == true) {
    isStop = false;
    timer();
  }
}


function lap() {
  let lapClass = document.getElementById("lap_list");
  let entry = document.createElement('li');
  entry.setAttribute('id', 'lapElement');
  entry.appendChild(document.createTextNode(` ${hr}:${min}:${s}`));
  lapClass.appendChild(entry);
}


function timer() {
  if (isStop == false) {
    s = parseInt(s);
    min = parseInt(min);
    hr = parseInt(hr);
    s++;
    if (s >= 1) {
      beat.play();
    }

    if (s == 60) {
      beep.play();
      s = 0;
      min++;
    }
    if (min == 60) {
      min = 0
      hr++;
    }
    if (s < 10) {
      s = "0" + s;
    }

    if (min < 10) {
      min = "0" + min;
    }
    if (hr < 10) {
      hr = "0" + hr;
    }
    stopwatch.innerHTML = hr + " : " + min + " : " + s;
    setTimeout("timer()", 1000);
  }
}

function stop() {
  isStop = true;
  beat.pause();
}
function reset() {
  isStop = true;
  beat.load();
  s = 0;
  min = 0;
  hr = 0;
  stopwatch.innerHTML = "00 : 00 : 00 ";
  document.getElementById("lap_list").innerHTML = "";
}