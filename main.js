const text = document.querySelector('span.countdown-birthday');


function chrono(){
const now = new Date().getTime();
const countdownDate = new Date ('Dec 23, 2022').getTime();

const distanceDate = countdownDate - now;
const days = Math.floor(distanceDate / (1000 * 60 * 60 * 24))
// (1000 * 60 * 60 * 24) 
// 1 jour en milliseconde 
// 1000 * 60sec * 60min * 24h = 1 jours 

const hours = Math.floor((distanceDate % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
const minutes = Math.floor((distanceDate % (1000 * 60 * 60 )) / (1000 * 60));
const seconds = Math.floor((distanceDate % (1000 * 60 )) / 1000);

text.innerText = `${days} days ${hours}h ${minutes}m ${seconds}s`
};

const countdown = setInterval(() => {
    chrono()
}, 1000);