let hr = document.getElementById('hour');
let min = document.getElementById('min');
let sec = document.getElementById('sec');

function displayTime(){
    let date = new Date();

    // Getting hour, mins, secs from date
    let h = date.getHours();
    let m = date.getMinutes();
    let s = date.getSeconds();

    let hR = 30*h + m/2;
    let mR = 6*m;
    let sR = 6*s;

    hr.style.transform = `rotate(${hR}deg)`;
    min.style.transform = `rotate(${mR}deg)`;
    sec.style.transform = `rotate(${sR}deg)`;

}

setInterval(displayTime, 1000);