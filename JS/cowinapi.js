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
        console.log(getdata);
        const size = Object.keys(getdata.centers).length;
        console.log(size);
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
                </div>
              </div>
              <div class="slotsavail">
                <h5>Slots Available</h5>
                <h6 id="slots">${getdata.centers[i].sessions[0].available_capacity}</h6>
              </div>
            </div>
          </li>
          <div class="circle">
          <h6>${getdata.centers[i].sessions[0].min_age_limit+'+'}</h6>
        </div>`
          cardul.innerHTML +=card;

        }
      }
      else{
        var card = `<div class="notfound"><p class="notfoundtxt">${text}</p></div>`
        cardul.innerHTML+=card;
        console.log("Else");
      }
    
        
    }
    getcowinapidata(pincode,date);
}



function SetMinDate() {
    var now = new Date();
    var day = parseInt(("0" + now.getDate()).slice(-2));
    day = day;
    day = day.toString();
    var month = ("0" + (now.getMonth() + 1)).slice(-2);
    var today = now.getFullYear() + "-" + (month) + "-" + (day);
    $('#date').val(today);
    $('#date').attr('min', today);
}
SetMinDate();

var date = document.getElementById('date').value;
var pincode = document.getElementById("pin").value;


{/* <div class="vaccinename">
<p>${getdata.centers[i].sessions[0].vaccine}</p>
</div> */}