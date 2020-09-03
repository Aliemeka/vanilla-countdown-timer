const targetDay = "5 Oct 2020"


const daysVal = document.getElementById('days')
const hoursVal = document.getElementById('hours')
const minutesVal = document.getElementById('minutes')
const secondsVal = document.getElementById('seconds')


const countDown = () =>{
    const dDay = new Date(targetDay);
    const currentDate = new Date();


    const diffSeconds = (dDay - currentDate) / 1000;
    
    const seconds = Math.floor(diffSeconds) % 60;
    const minutes = Math.floor(diffSeconds/60) % 60;
    const hours = Math.floor(diffSeconds/3600) % 24;
    const days = Math.floor(diffSeconds/ 3600/ 24);


    daysVal.innerHTML = days;
    hoursVal.innerHTML = formatTime(hours);
    minutesVal.innerHTML = formatTime(minutes);
    secondsVal.innerHTML =formatTime(seconds);

}


function formatTime(time){
    return time < 10 ? `0${time}` : time;
}


setInterval(countDown, 1000);