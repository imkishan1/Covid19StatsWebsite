async function getcovidapiInf(){

    const jsondata2 = await fetch('https://api.covid19india.org/data.json');
    const jsdata2 = await jsondata2.json();
    const dataforchart = jsdata2.statewise;
    const jsondata3 = await fetch('https://api.covid19india.org/v4/min/data.min.json');
    const dataj = await jsondata3.json();
    // const statedeltadata = Object.values(dataj);
    // console.log(dataj)
    dataforchart.splice(31, 1);
    const lengthofdata = Object.keys(dataforchart).length;
    const table2 = document.getElementById('tableid');
    var i=0;
    for(i=0;i < lengthofdata; i++){
      // dataforchart[0].deltaconfirmed=='0'
        if(dataj[dataforchart[i].statecode].delta!=null)
        {
          if(dataj[dataforchart[i].statecode].delta.tested==null)
          {
           
            dataj[dataforchart[i].statecode].delta.tested="0";
          }
          if(dataj[dataforchart[i].statecode].delta.deceased==null)
          {
            
            dataj[dataforchart[i].statecode].delta.deceased="0";
          }
          if(dataj[dataforchart[i].statecode].delta.vaccinated==null)
          {
            
            dataj[dataforchart[i].statecode].delta.vaccinated="0";
          }
        
            var row = `<tr class="tablerow">
            <td class="fixedright color">${dataforchart[i].state}</td>
            <td class="dataletterspacing" > <span class="delta-confirmed"><i class="fas fa-arrow-up"></i>${dataj[dataforchart[i].statecode].delta.confirmed.toLocaleString('en-IN')}</span><br>${dataforchart[i].confirmed.replace(/(\d)(?=(\d\d)+\d$)/g, "$1,")}</td>
            <td class="dataletterspacing">${dataforchart[i].active.replace(/(\d)(?=(\d\d)+\d$)/g, "$1,")}</td>
            <td class="dataletterspacing"> <span class="delta-confirmed recovered"><i class="fas fa-arrow-up"></i>${dataj[dataforchart[i].statecode].delta.recovered.toLocaleString('en-IN')}</span><br>${dataforchart[i].recovered.replace(/(\d)(?=(\d\d)+\d$)/g, "$1,")}</td>
            <td class="dataletterspacing"> <span class="delta-confirmed deaths"><i class="fas fa-arrow-up"></i>${numDifferentiation(dataj[dataforchart[i].statecode].delta.deceased)}</span><br>${dataforchart[i].deaths.replace(/(\d)(?=(\d\d)+\d$)/g, "$1,")}</td>
            <td class="dataletterspacing"> <span class="delta-confirmed vaccinated"><i class="fas fa-arrow-up"></i>${numDifferentiation(dataj[dataforchart[i].statecode].delta.vaccinated)}</span><br>${numDifferentiation(dataj[dataforchart[i].statecode].total.vaccinated)}</td>
            <td class="dataletterspacing"> <span class="delta-confirmed tests"><i class="fas fa-arrow-up"></i>${numDifferentiation(dataj[dataforchart[i].statecode].delta.tested)}</span><br>${numDifferentiation(dataj[dataforchart[i].statecode].total.tested)}</td>
            <td class="dataletterspacing">${numDifferentiation(dataj[dataforchart[i].statecode].meta.population)}</td>
                    </tr>`
        
                    table2.innerHTML += row;
        }
        else{
    var row = `<tr class="tablerow">
            <td class="fixedright color">${dataforchart[i].state}</td>
            <td class="dataletterspacing" > <span class="delta-confirmed"><i class="fas fa-arrow-up"></i>${dataforchart[i].deltaconfirmed.replace(/(\d)(?=(\d\d)+\d$)/g, "$1,")}</span><br>${dataforchart[i].confirmed.replace(/(\d)(?=(\d\d)+\d$)/g, "$1,")}</td>
            <td class="dataletterspacing">${dataforchart[i].active.replace(/(\d)(?=(\d\d)+\d$)/g, "$1,")}</td>
            <td class="dataletterspacing"> <span class="delta-confirmed recovered"><i class="fas fa-arrow-up"></i>${dataforchart[i].deltarecovered.replace(/(\d)(?=(\d\d)+\d$)/g, "$1,")}</span><br>${dataforchart[i].recovered.replace(/(\d)(?=(\d\d)+\d$)/g, "$1,")}</td>
            <td class="dataletterspacing"> <span class="delta-confirmed deaths"><i class="fas fa-arrow-up"></i>${dataforchart[i].deltadeaths.replace(/(\d)(?=(\d\d)+\d$)/g, "$1,")}</span><br>${dataforchart[i].deaths.replace(/(\d)(?=(\d\d)+\d$)/g, "$1,")}</td>
            <td class="dataletterspacing">${numDifferentiation(dataj[dataforchart[i].statecode].total.vaccinated)}</td>
            <td class="dataletterspacing tests">${numDifferentiation(dataj[dataforchart[i].statecode].total.tested)}</td>
            <td class="dataletterspacing">${numDifferentiation(dataj[dataforchart[i].statecode].meta.population)}</td>
        </tr>`
            table2.innerHTML += row;
        }
    }
  }
getcovidapiInf();



function numDifferentiation (val) {
    if (val >= 10000000) {
      val = (val / 10000000).toFixed(1) + 'Cr';
    } else if (val >= 100000) {
      val = (val / 100000).toFixed(1) + 'L';
    }
    else if(val >= 1000) val = (val/1000).toFixed(1) + 'K';
    return val;
  }



