var click=0;
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
        
        const cardul = document.getElementById('ulid');
        var text = "Sorry, No Vaccination center is available for booking.";
        if(size!=0)
        {
        for(var i =0;i<size;i++)
        {
            var card = `  <li class="centerdetails">
            <div class="result-element">
              <div class="hospitalname">
                <h5 id="name">${getdata.centers[i].name}</h5>
                <div id="add" class="hospital-address">
                  ${getdata.centers[i].address}
                  <p>${getdata.centers[i].sessions[0].vaccine}</p>
                  <div class="free"><h6>${getdata.centers[i].fee_type}</h6> 
                  </div>
                </div>
              </div>
              <div class="slotsavail">
              <div class="circle">
              <h6>${getdata.centers[i].sessions[0].min_age_limit+'+'}</h6>
            </div>
                <h5>Slots Available</h5>
                <h6 id="slots">${getdata.centers[i].sessions[0].available_capacity}</h6>
              </div>
            </div>
          </li>
       `
          cardul.innerHTML +=card;

        }
      }
      else{
        var card = `<div class="notfound"><p class="notfoundtxt">${text}</p></div>`
        cardul.innerHTML+=card;
          }
    }
    getcowinapidata(pincode,date);
    if(pincode==false)
    {
      click=0;
    }
    else {
      var btn = document.getElementById('btn');
      btn.innerText = 'Refresh Page';
      click+=1;
      if(click>1)
      {
        window.location.reload();
      }
    }
}



function SetMinDate() {
    var now = new Date();
    var day = parseInt(("0" + now.getDate()).slice(-2));
    day = day;
    day = day.toString();
    var month = ("0" + (now.getMonth() + 1)).slice(-2);
    var year = now.getFullYear();
    var today = (day) + "-" + (month) + "-" + (year);
    $('#date').val(today);
    $('#date').attr('min', today);
}
SetMinDate();

var date = document.getElementById('date').value;
var pincode = document.getElementById("pin").value;




