async function getcovidapiInf(){

    const jsondata2 = await fetch('https://api.covid19india.org/data.json');
    const jsdata2 = await jsondata2.json();
    const dataforchart = jsdata2.statewise;
    const jsondata3 = await fetch('https://api.covid19india.org/v4/min/data.min.json');
    const dataj = await jsondata3.json();
    // const statedeltadata = Object.values(dataj);
    dataforchart.splice(31, 1);
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
            <td class="dataletterspacing"> <span class="delta-confirmed vaccinated">+${dataj[dataforchart[i].statecode].delta7.vaccinated.toLocaleString('en-IN')}</span><br>${dataj[dataforchart[i].statecode].total.vaccinated.toLocaleString('en-IN')}</td>
            <td class="dataletterspacing tests">${dataj[dataforchart[i].statecode].total.tested.toLocaleString('en-IN')}</td>
            <td class="dataletterspacing">${dataj[dataforchart[i].statecode].meta.population.toLocaleString('en-IN')}</td>

        </tr>`
            table2.innerHTML += row;
        }
    }
}
getcovidapiInf();

