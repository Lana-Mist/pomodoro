const start = document.getElementById("start");
const stop = document.getElementById("stop");
const reset = document.getElementById("reset");
const timer = document.getElementById("timer");

let timeLeft = 1500;
let interval;

const udpateTimer = () => {
    const minutes = Math.floor(timeLeft/60);
    const seconds = timeLeft%60;
    timer.innerHTML = 
    `${minutes.toString().padStart(2,"0")}
    :
    ${seconds.toString().padStart(2,"0")}`
}

const startTimer = () => {
    interval = setInterval(() => {
        timeLeft--;
        udpateTimer();

        if (timeLeft === 0) {
            clearInterval(interval);
            playAlarmSound();
            timeLeft = 1500;
            udpateTimer();
        }
    }, 1000)
};

const stopTimer = () => clearInterval(interval);

const resetTimer = () => {
    clearInterval(interval);
    timeLeft = 1500;
    udpateTimer();
}
start.addEventListener("click", startTimer);
stop.addEventListener("click", stopTimer);
reset.addEventListener("click", resetTimer);

function playAlarmSound() {
  const sound = new Audio('electronic-alarm-signal.mp3'); 
  sound.play().catch(e => console.log(e));
}