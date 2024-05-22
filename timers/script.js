const start = document.getElementById('start');
const stop = document.getElementById('stop');
const count = document.getElementById('count');

start.addEventListener('click', startTime);
stop.addEventListener('click', stopTime);

// not assigning to a value becuase there is no initial value
//let timerID;
let animationFrameID;

const date = new Date(2025, 0, 10, 9, 25, 10, 30);
console.log(date.getMonth());
console.log(date.getDay());

setTimeout(() => {
    console.log(performance.now());
},1000);
console.log(performance.now());
//

/*let timeoutID = setTimeout(() => {
    console.log('timeout');
}, 1000);
*/

//clearTimeout(timerID);

function startTime(timestamp) {
    console.log(timestamp);
   // count.textContent--;
   // animationFrameID = requestAnimationFrame(startTime);
    /*
    // stop the counter
   timerID = setInterval(() => {
         count.textContent++;
   }, 500);
   */
}

// worth noting that it only stops 1 instance of clicking start and will not work if clicked 'start' more than once.
function stopTime(){
    //clearInterval(timerID);
    cancelAnimationFrame(animationFrameID);
}