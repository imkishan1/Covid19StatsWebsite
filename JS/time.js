function currentTime(){
    var  date  =  new Date();
    var hour  = date.getHours();
    var min = date.getMinutes();
    // var sec = date.getSeconds();
    hour = updateTime(hour);
    min = updateTime(min);
    // sec= updateTime(sec);
    // console.log(hour);
    var time = document.getElementById('time');
    var time1 = hour+":"+min;
    time.innerText = time1;
    var t = setTimeout(function(){ currentTime() }, 1000); 
}
function updateTime(k) {
    if (k < 10) {
      return "0" + k;
    }
    else {
      return k;
    }
  }
  currentTime();
