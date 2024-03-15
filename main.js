var timer;
var seconds = 0;
var minutes = 0;
var hours = 0;
var min = 0;

function displayTime() {
  var display = document.querySelector('.display');
  display.textContent = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}:${min.toString().padStart(2, '0')}`;
}
function startTimer() {
    timer = setInterval(function() {
        min++;
        if (min / 100 === 1 ){
            min = 0;
            seconds++;

        }
      if (seconds === 60) {
        seconds = 0;
        minutes++;
      }
      if (minutes === 60) {
        minutes = 0;
        hours++;
      }

    displayTime();
  }, );
}

function stopTimer() {
  clearInterval(timer);
  seconds = 0;
  minutes = 0;
  hours = 0;
  min = 0;

}

function resetTimer() {
  clearInterval(timer);
  seconds = 0;
  minutes = 0;
  hours = 0;
  min = 0;
  displayTime();
}

document.querySelector('.start').addEventListener('click', startTimer);
document.querySelector('.stop').addEventListener('click', stopTimer);
document.querySelector('.reset').addEventListener('click', resetTimer);
