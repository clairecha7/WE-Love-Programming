const textE1 = document.getElementById('text');
const speedE1 = document.getElementById('speed');
const text = 'We Love Programming';

let index = 1;
let speed = 300 / speedE1.value;

speedE1.addEventListener("input", e => (speed = 300 / e.target.value));
function writeText() {
    textE1.innerText = text.slice(0, index)
    index++;

    if(index > text.length){
        index = 1;
    }
    setTimeout(writeText, speed);
}

writeText();


// setTimeout executes the callback function only once, after a set delay.
// setInterval executes the callback function repeatedly, at a set interval.

