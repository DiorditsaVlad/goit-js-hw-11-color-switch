const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];


refs ={
  start: document.querySelector('.start'),
  stop: document.querySelector('.stop'),
  background: document.querySelector('.body')
}

refs.start.addEventListener('click', turnOnSwitch);
refs.stop.addEventListener('click', turnOSwitch);



const randomIntegerFromInterval  = (min, max) => {
return Math.floor(Math.random() * (max - min + 1) + min);
};

const maxN = colors.length -1;

let watchId = null;
let currentTime = null;

function turnOnSwitch(){
watchId = setInterval(() => {
  refs.background.style.backgroundColor =
  colors[randomIntegerFromInterval (0, maxN)];      
  }, 1000);
  refs.start.disabled = true;
}


function turnOSwitch(){
refs.start.disabled = false;
clearInterval(watchId)
clearInterval(currentTime)  
}