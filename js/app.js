let targetDay = ""


const daysVal = document.getElementById('days')
const hoursVal = document.getElementById('hours')
const minutesVal = document.getElementById('minutes')
const secondsVal = document.getElementById('seconds')

const message = document.getElementById('message')
const error = document.getElementById('error')


const countDown = tDay =>{
    try{
        const dDay = new Date(tDay);
        const currentDate = new Date();
    
    
        const diffSeconds = (dDay - currentDate) / 1000;

        if (diffSeconds < 0){
            error.innerHTML = "You have to enter a future date" 

            daysVal.innerHTML = "-";
            hoursVal.innerHTML = "--";
            minutesVal.innerHTML = "--";
            secondsVal.innerHTML = "--";
        } 


        else{
            const seconds = Math.floor(diffSeconds) % 60;
            const minutes = Math.floor(diffSeconds/60) % 60;
            const hours = Math.floor(diffSeconds/3600) % 24;
            const days = Math.floor(diffSeconds/ 3600/ 24);

            message.innerHTML = `You have ${days} days until ${targetDay}`
            error.innerHTML = ""
        
        
            daysVal.innerHTML = days;
            hoursVal.innerHTML = formatTime(hours);
            minutesVal.innerHTML = formatTime(minutes);
            secondsVal.innerHTML = formatTime(seconds);
        }
    }

    catch{
        error.innerHTML = "Please enter time like 1 Jan 2021 not 1st Jan  2021";
    }

}


function formatTime(time){
    return time < 10 ? `0${time}` : time;
}


// 

const captureTime = () =>{
    const date = document.getElementById("date").value;
    // console.log(date);
    return date;
}


document.getElementById('form-time').addEventListener('submit', 
    (e)=>{
        e.preventDefault();
        targetDay = captureTime();
        setInterval(()=>countDown(targetDay), 1000);
    }
)