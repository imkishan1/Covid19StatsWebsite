async function getcovidapiInf(){

    const jsondata2 = await fetch('https://api.covid19india.org/data.json');
    const jsdata2 = await jsondata2.json();
    const dataforchart = jsdata2.statewise;
   
  
    const jsondata3 = await fetch('https://api.covid19india.org/v4/min/data.min.json');
    const dataj = await jsondata3.json();

    const statelength = Object.keys(dataj).length;

    const statedeltadata = Object.values(dataj);

  

    var result = statedeltadata.splice(33, 1);
    dataforchart.splice(31, 1);
   
   var second =  result.splice(0,1);
    // console.log(second);
    statedeltadata.unshift(second[0]);



//   Swapping the testing data for delhi and dadra nagra haveli
var temp = statedeltadata[9];
statedeltadata[9] = statedeltadata[8]
statedeltadata[8]=temp;

var temp1 = statedeltadata[13];
statedeltadata[13] = statedeltadata[12]
statedeltadata[12]=temp1;

var temp2 = statedeltadata[15];
statedeltadata[15] = statedeltadata[14]
statedeltadata[14]=temp2;

var temp3 = statedeltadata[21];
statedeltadata[21] = statedeltadata[20]
statedeltadata[20]=temp3;

var temp4 = statedeltadata[23];
statedeltadata[23] = statedeltadata[20]
statedeltadata[20]=temp4;

var temp5 = statedeltadata[28];
statedeltadata[28] = statedeltadata[27]
statedeltadata[27]=temp5;

var temp6 = statedeltadata[32];
statedeltadata[32] = statedeltadata[31]
statedeltadata[31]=temp6;


//   statedeltadata[8].delta7.tested= '0';

//   the json data file has some glitchh so

    const lengthofdata = Object.keys(dataforchart).length;
    const table2 = document.getElementById('tableid');
    var i=0;
    

    for(i = 0;i < lengthofdata; i++){
        if(dataforchart[i].state=='State Unassigned')
        {
            continue
        }
        else{
    var row = `<tr class="tablerow">
            <td class="fixedright color">${dataforchart[i].state}</td>
            <td class="dataletterspacing" > <span class="delta-confirmed">+${dataforchart[i].deltaconfirmed.replace(/(\d)(?=(\d\d)+\d$)/g, "$1,")}</span><br>${dataforchart[i].confirmed.replace(/(\d)(?=(\d\d)+\d$)/g, "$1,")}</td>
            <td class="dataletterspacing">${dataforchart[i].active.replace(/(\d)(?=(\d\d)+\d$)/g, "$1,")}</td>
            <td class="dataletterspacing"> <span class="delta-confirmed recovered">+${dataforchart[i].deltarecovered.replace(/(\d)(?=(\d\d)+\d$)/g, "$1,")}</span><br>${dataforchart[i].recovered.replace(/(\d)(?=(\d\d)+\d$)/g, "$1,")}</td>
            <td class="dataletterspacing"> <span class="delta-confirmed deaths">+${dataforchart[i].deltadeaths.replace(/(\d)(?=(\d\d)+\d$)/g, "$1,")}</span><br>${dataforchart[i].deaths.replace(/(\d)(?=(\d\d)+\d$)/g, "$1,")}</td>
            <td class="dataletterspacing"> <span class="delta-confirmed vaccinated">+${statedeltadata[i].delta7.vaccinated.toLocaleString('en-IN')}</span><br>${statedeltadata[i].total.vaccinated.toLocaleString('en-IN')}</td>
            <td class="dataletterspacing tests">${statedeltadata[i].total.tested.toLocaleString('en-IN')}</td>
            <td class="dataletterspacing">${statedeltadata[i].meta.population.toLocaleString('en-IN')}</td>
        </tr>`
            table2.innerHTML += row;
          
        }
    }

}
getcovidapiInf();