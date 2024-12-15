let timerId = 0;
let current = 0;
let speed = 2;
let duration = 1000;
let pathChosen = 0;
let pause_cont = "Pick Path & Speed"

let path_speed = document.getElementsByName("current");
let marbles = document.getElementsByName("marble");

Setup();
showPath();
showSpeed();
showState();

function showPath() {
  path_speed[0].innerHTML = `<h2>Current Path : ${pathChosen}</h2>`;
}
function showSpeed() {
  path_speed[1].innerHTML = `<h2>Current Speed = ${1000 / duration} hops / second</h2>`;
}
function showState()
{
  path_speed[2].innerHTML = `<h2 style="color:red">Current State : ${pause_cont}</h2>`;
}
function Setup() {
  for (let marble of marbles) {
    marble.src = "marble1.jpg";
    marble.addEventListener("mouseover", stopTimer);
    marble.addEventListener("mouseout", startTimer);
  }
}
function path1() {
  stopTimer();
  pathChosen = 1;
  showPath();
  let left_add = 10;
  let current_left = 20;
  for (let marble of marbles) {
    marble.style.position = "absolute";
    marble.style.top = "85%";
    current_left += left_add;
    marble.style.left = current_left.toString() + `%`;
  }
  Setup();
  startTimer();
}
function path2() {
  stopTimer();
  pathChosen = 2;
  showPath();
  let left_add = 10;
  let current_left = 20;
  for (let index = 0; index < marbles.length; index++) {
    let marble = marbles[index];
    marble.style.position = "absolute";
    if (index % 2 === 0) marble.style.top = "75%";
    else marble.style.top = "105%";
    current_left += left_add;
    marble.style.left = current_left.toString() + `%`;
  }
  Setup();
  startTimer();
}
function path3() {
  stopTimer();
  pathChosen = 3;
  showPath();
  for (let marble of marbles) marble.style.position = "absolute";

  marbles[0].style.top = "75%";
  marbles[0].style.left = "45%";

  marbles[1].style.top = "75%";
  marbles[1].style.left = "60%";

  marbles[2].style.top = "105%";
  marbles[2].style.left = "70%";

  marbles[3].style.top = "135%";
  marbles[3].style.left = "60%";

  marbles[4].style.top = "135%";
  marbles[4].style.left = "45%";

  marbles[5].style.top = "105%";
  marbles[5].style.left = "35%";

  Setup();
  startTimer();
}
function traverse() {
  Setup();
  marbles[current++].src = "marble3.jpg";
  if (current === 6) current = 0;
}

function getDuration() {
  if (speed === 0) duration = 4000;
  else if (speed === 1) duration = 2000;
  else if (speed === 2) duration = 1000;
  else if (speed === 3) duration = 500;
  else if (speed === 4) duration = 250;
}
function startTimer() {
  pause_cont = "Active";
  showState();
  getDuration();
  timerId = setInterval(function () {
    traverse();
  }, duration);
}

function stopTimer() {
  clearInterval(timerId);
  pause_cont = "Paused";
  showState();
}
function inc() {
  if (speed < 4 && pathChosen) {
    speed++;
    stopTimer();
    startTimer();
  }
  showSpeed();
}
function dec() {
  if (speed > 0 && pathChosen) {
    speed--;
    stopTimer();
    startTimer();
  }
  showSpeed();
}
