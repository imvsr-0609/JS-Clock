


function clock(){
var d = new Date();
var hours =d.getHours()

var minutes =d.getMinutes()
 
var seconds =d.getSeconds()

var weekday =d.getDay()

var month = d.getMonth()

var date= d.getDate()

 
var weekdays = ["SU","MO","TU","WE","TH","FR","SA"]
var years =["JAN","FEB","MAR","APR","MAY","JUN","JUL","AUG","SEP","OCT","NOV","DEC"]
if(hours<10){
    hours = "0"+ hours
}
if(minutes<10){
    minutes = "0"+ minutes
}
if(seconds<10){
    seconds = "0"+ seconds
}
if(date<10){
    date = "0"+ date
}
document.querySelector(".hours").innerHTML = hours
document.querySelector(".minutes").innerHTML=minutes
document.querySelector(".seconds").innerHTML=seconds
document.querySelector(".day-name").innerHTML= weekdays[weekday]
document.querySelector(".month").innerHTML=years[month]
document.querySelector(".date").innerHTML= date



}

clock()
setInterval(clock,1000)




