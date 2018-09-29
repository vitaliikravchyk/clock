var day = document.getElementById('day');
var date = document.getElementById('date');
var time = document.getElementById('time');

var now = new Date();
var nowDate = now.getDate() + "." + getMonth(now.getMonth() + 1) + "." + now.getFullYear();
var nowDay = now.getDay();
//var nowTime = now.getHours() + ":" + getMonth(now.getMinutes()) + ":" + now.getSeconds();

function getMonth(month){
    if(String(month).length < 2){
        return "0" + month;
    } else return month;
    
}

function getDay(day){
    var days = ["Воскресенье","Понедельник","Вторник","Среда","Четверг","Пятница - кутёж","Суббота"];
    for(var i = 0; i < days.length; i++){
        if(day == i){
            return days[i];
        }
    }
}
date.innerHTML = nowDate;
day.innerHTML = getDay(nowDay);
setInterval(function (){
    var dateForClok = new Date();
    time.innerHTML = dateForClok.getHours() + ":" + getMonth(dateForClok.getMinutes()) + ":" + getMonth(dateForClok.getSeconds())
},1000);

console.log(now);
console.log(nowDay);
//document.day.appendChild(day);
//document.date.appendChild(date);
//document.time.appendChild(time);