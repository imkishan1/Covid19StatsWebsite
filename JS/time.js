function currenttime(){
    var  date  =  new Date();
    var hour  = date.getHours();
    var min = date.getMinutes();
    var time = hour+":"+min;
    // console.log(time);
    return time;
}
currenttime();
a = currenttime();
var time = document.getElementById('time');
time.innerText = a;