/*---------- main javascipt file where all the required functions are implemented ----------*/

const body =
  document.querySelector(
    "body"
  ); /*query selector is used to select html elements returns the first Element within the document that matches the specified selector, or group of selectors.*/
const toggle = document.getElementById("toggle");
let beat = new Audio("./tick.mp3"); /* importing the timer sound*/
let beep = new Audio("./beep.mp3"); /*  importing the beep sound*/

/*---------- toggle function used to switch ON/OFF the dark mode ----------*/

toggle.onclick = function () {
  toggle.classList.toggle("active");
  body.classList.toggle("active");
};
let isStop = true,
  s = 0,
  min = 0,
  hr = 0;
beat.loop = true;

/*---------- start function used to start the timer ----------*/

function start() {
  if (isStop == true) {
    isStop = false;
    timer();
  }
}

/*---------- lap function used to display laps ----------*/

function lap() {
  let lapClass = document.getElementById("lap_list");
  let entry = document.createElement("li");
  entry.setAttribute("id", "lapElement");
  entry.appendChild(document.createTextNode(` ${hr}:${min}:${s}`));
  lapClass.appendChild(entry);
}

/*---------- timer function used to display the timer, this function also starts the beat(every second) and beep(every minute) sounds ----------*/

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
      min = 0;
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

/*---------- stop function used to stop the timer, this function also stops the beat sound ----------*/

function stop() {
  isStop = true;
  beat.pause();
}

/*---------- reset function used to reset the timer, this function also resets the beat sound ----------*/

function reset() {
  isStop = true;
  beat.load();
  s = 0;
  min = 0;
  hr = 0;
  stopwatch.innerHTML = "00 : 00 : 00 ";
  document.getElementById("lap_list").innerHTML = "";
}
