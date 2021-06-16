function realtimeClock(){
    var rtime = new Date();

    var hours = rtime.getHours();
    var minutes = rtime.getMinutes();
    var seconds = rtime.getSeconds();

    // for 12 hour clock system AM and PM generation
    var apm =(hours < 12) ? "AM" :"PM";

    // Converting hours from 24 to 12 hour system
    hours = (hours > 12) ? hours - 12 : hours;

    // 
    hours  = ("0" + hours).slice(-2);
    minutes  = ("0" + minutes).slice(-2);
    seconds  = ("0" + seconds).slice(-2);

    //  Displaying clock on screen
    document.getElementById('clock').innerHTML = hours + " : " + minutes + " : " + seconds + " " + apm;

    var t = setTimeout(realtimeClock,500);
 


}