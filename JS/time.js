// function currentTime(){
//     var  date  =  new Date();
//     var hour  = date.getHours();
//     var min = date.getMinutes();
//     hour = updateTime(hour);
//     min = updateTime(min);
//     var time = document.getElementById('time');
//     var time1 = hour+":"+min;
//     time.innerText = time1;
//     var t = setTimeout(function(){ currentTime() }, 1000); 
// }


function currentTime(){
  var  date  =  new Date();
  var hour  = date.getHours();
  var min = date.getMinutes();
  // hour = updateTime(hour);
  // min = updateTime(min);
  var time = document.getElementById('time');
  var amom = 'AM'
  // var pm = 'pm'
  if(hour>12)
  {
    hour = hour-12;
    if(hour<10)
    {
      hour = "0"+hour;
      am = 'PM'
      if(min<10){
        min = "0"+min
      }
    }
    else{
      hour = hour-12;
      am = 'PM'
      if(min<10){
        min = "0"+min
      }
    }
  }
  var time1 = hour+":"+min+" "+am;
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
