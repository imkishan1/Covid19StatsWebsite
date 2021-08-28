function getstatus()
{   
    var date = document.querySelector('#date').value;
    var pincode = document.querySelector("#pin").value;
       async function getcowinapidata(a,b){
        // const url ='https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/findByPin?pincode='+a+'&date='+b;
        // https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/calendarByPin?pincode=110001&date=31-03-2021
        const url ='https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/calendarByPin?pincode='+a+'&date='+b;
        const jsonurl = await fetch(url);
        const getdata = await jsonurl.json();
        const size = Object.keys(getdata.centers).length;
        console.log(getdata);
        const cardul = document.getElementById('ulid');
        var text = "Sorry, No Vaccination center is available for booking.";
        if(size!=0)
        {
          $('#ulid .centerdetails').empty().append();
        for(var i =0;i<size;i++)
        {
          var sessions_size = Object.keys(getdata.centers[i].sessions).length;
          for(var j=0;j<sessions_size;j++){
            var card = `  <li class="centerdetails">
            <div class="result-element">
              <div class="hospitalname">
                <h5 id="name">${getdata.centers[i].name}</h5>
                <div id="add" class="hospital-address">
                  ${getdata.centers[i].address},  ${getdata.centers[i].district_name}
                  <p>${getdata.centers[i].sessions[j].vaccine}</p>
                  <div class="free"><h6><i class="fas fa-rupee-sign"></i> ${getdata.centers[i].fee_type}</h6> 
                  </div>
                </div>
              </div>
              <div class="slotsavail">
              <div class="circle">
              <h6><i class="bi bi-people-fill"></i> ${getdata.centers[i].sessions[j].min_age_limit+'+'}</h6>
            </div>
                <h5>Slots Available</h5>
                <h6 id="slots"><i class="fas fa-syringe"></i> ${getdata.centers[i].sessions[j].available_capacity}</h6>
                </div>
                </div>
                <div class="flex-row-dose">
                <h6 id="slots">Dose 1: ${getdata.centers[i].sessions[j].available_capacity_dose1}</h6>
                <h6 id="slots">Dose 2: ${getdata.centers[i].sessions[j].available_capacity_dose2}</h6>
                </div>
          </li>
       `
          cardul.innerHTML +=card;

        }
      }
      }
      else{
        $('#ulid .centerdetails').empty().append();
        var card =  `<li class="centerdetails"><div class="notfound"><p class="notfoundtxt"><svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 warning-svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
      </svg>${text}</p></div></li>`;
        cardul.innerHTML+=card;
          }
    }
  
    getcowinapidata(pincode,date);
}



function SetMinDate() {
    var now = new Date();
    var day = parseInt(("0" + now.getDate()).slice(-2));
    var month = parseInt(("0" + (now.getMonth() + 1)).slice(-2));
    if(day==30 && ( month==2 || month==4 || month==6 ||month==9 || month==11))
    {
      day="01";
      month+=1;
    }
    else if(day==31){
      day="01";
      month+=1;
    }
    else{
      day = day;
    }
    month = month.toString();
    day = day.toString();
    var year = now.getFullYear();
    var today = (day) + "-" + (month) + "-" + (year);
    $('#date').val(today);
    $('#date').attr('min', today);
}
SetMinDate();

var date = document.getElementById('date').value;
var pincode = document.getElementById("pin").value;




