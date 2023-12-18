function displayTime(){
    var d = new Date();
    var hour = d.getHours();
    var min = d.getMinutes();
    var sec = d.getSeconds();

    if (sec < 10){
        sec = "0" + sec;
    }
    if (min < 10){
        min = "0" + min;
    }
    if (hour < 10){
        hour = "0" + hour;
    }


    document.getElementById('clock').innerHTML = hour + ":" + min + ":" + sec;
}

function displayDate(){
    var d = new Date();
    let monthDate= d.getMonth();
    let dayDate = d.getDay();
    let yearDate = d.getFullYear();
    let extenseDay = d.getDate();

    const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const months = ['January','February','March','April','May','June','July','August','September','October','November','December'];


    console.log(extenseDay);
    
    document.getElementById('dateDisplay').innerHTML = ', ' + extenseDay + ' ' + months[monthDate] + ' of ' + yearDate;
    document.getElementById('weekday').innerHTML = daysOfWeek[d.getDay()];
}



setInterval(displayTime, 500);
window.onload = displayDate();