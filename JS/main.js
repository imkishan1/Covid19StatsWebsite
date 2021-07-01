async function getcovidapiIn(){

    const jsondata = await fetch('https://api.covid19india.org/data.json');
    const jsdata = await jsondata.json();
    const vaccinedata = Object.keys(jsdata.tested).length;
    var vaccinedatafinal = jsdata.tested[vaccinedata-1];
    const onedaybeforevaccine = jsdata.tested[vaccinedata-2];

    const size = Object.keys(jsdata.cases_time_series).length;
    const yesterdayupdate = jsdata.cases_time_series[size-1];
    const finaldata = jsdata.statewise[0];

    let todayvac = parseInt(vaccinedatafinal.totaldosesadministered)
    let deltavac = parseInt(onedaybeforevaccine.totaldosesadministered);
    let deltavaccine = (todayvac-deltavac).toString();

    if(isNaN(deltavaccine))
    {
        deltavaccine='0';
    }
    let todaysvac = document.querySelector('#deltavac');
    todaysvac.innerText = `${deltavaccine.replace(/(\d)(?=(\d\d)+\d$)/g, "$1,")}`;

    if(deltavaccine=='0')
    {        
    let vaccinedose = document.querySelector('#vaccine-dose');
    vaccinedose.innerText = `${(jsdata.tested[vaccinedata-2].totaldosesadministered).replace(/(\d)(?=(\d\d)+\d$)/g, "$1,")}`;
    }
    else{
        let vaccinedose = document.querySelector('#vaccine-dose');
        vaccinedose.innerText = `${(vaccinedatafinal.totaldosesadministered).replace(/(\d)(?=(\d\d)+\d$)/g, "$1,")}`;
    }


    const lastupdate= document.querySelector('#date-time');
    lastupdate.innerText = `${finaldata.lastupdatedtime}`;
    // console.log(finaldata.lastupdatedtime);

    var  date  =  new Date();
    var datetoday = date.getDate();
    var hour  = date.getHours();
    var min = date.getMinutes();
    var timenow= hour;
    var updatedtimenew = finaldata.lastupdatedtime.split(' ');
    var updatemin = updatedtimenew[1].split(':')
    var dateupdatedon = updatedtimenew[0].split('/');
    // console.log(updatemin[1]);
    // console.log(min)
    var updatehour = updatemin[0];
    if(datetoday==dateupdatedon[0])
    {
        var finaltimeupdate = parseInt(timenow)-parseInt(updatehour);
    }
    else {

        if(hour==0)
        {
            timenow=24;
        }
        var finaltimeupdate = parseInt(timenow)-parseInt(updatehour);
    
        if(finaltimeupdate<0)
        {
            finaltimeupdate = -(finaltimeupdate);
        }
    }
    
    lastupdate.innerText = `Last Updated ${finaltimeupdate} hrs ago.`;
    if(finaltimeupdate==0)
    {
        finaltimeupdate = min-updatemin[1];
        lastupdate.innerText = `Last Updated ${finaltimeupdate} mins ago.`;
    }
    // console.log(finaltimeupdate);

}

getcovidapiIn();




// $(window).scroll(function(){
//     if($(window).scrollTop()){
//         $("nav").addClass("black");
//     }
//     else{
//         $("nav").removeClass("black");
//     }
// })

    // console.log(vaccinedatafinal);  
    // console.log(onedaybeforevaccine)
    // console.log(jsdata.tested)
    // console.log(yesterdayupdate)


    // yesterday's log

    // let yesterdaydate = document.querySelector('#yesterday-date');
    // yesterdaydate.innerText = `${yesterdayupdate.date}`;

    // let dailycnf = document.querySelector('#daily-conf');
    // dailycnf.innerText = `${yesterdayupdate.dailyconfirmed.replace(/(\d)(?=(\d\d)+\d$)/g, "$1,")}`;

    // let dailyrec = document.querySelector('#daily-rec');
    // dailyrec.innerText = `${yesterdayupdate.dailyrecovered.replace(/(\d)(?=(\d\d)+\d$)/g, "$1,")}`;

    // let dailydeath = document.querySelector('#daily-death');
    // dailydeath.innerText = `${yesterdayupdate.dailydeceased.replace(/(\d)(?=(\d\d)+\d$)/g, "$1,")}`;

    // let dailyupdatedon = document.querySelector('#date-time-last');
    // dailyupdatedon.innerText = `${yesterdayupdate.dateymd}`;


    
   // yesterday's log

    // let city = document.querySelector('#active-cases');
    // city.innerText = `${finaldata.active.replace(/(\d)(?=(\d\d)+\d$)/g, "$1,")}`;

    // const totalcase = document.querySelector('#total-cases');
    // totalcase.innerText = `${finaldata.confirmed.replace(/(\d)(?=(\d\d)+\d$)/g, "$1,")}`;

    // const totarecoverd = document.querySelector('#recovered');
    // totarecoverd.innerText = `${finaldata.recovered.replace(/(\d)(?=(\d\d)+\d$)/g, "$1,")}`;

    // const totaldeath = document.querySelector('#death');
    // totaldeath.innerText = `${finaldata.deaths.replace(/(\d)(?=(\d\d)+\d$)/g, "$1,")}`;

    // const newconfirm= document.querySelector('#new-confirm');
    // newconfirm.innerText = `+${finaldata.deltaconfirmed.replace(/(\d)(?=(\d\d)+\d$)/g, "$1,")}`;

    // const newrecovered= document.querySelector('#deltarec');
    // newrecovered.innerText = `+${finaldata.deltarecovered.replace(/(\d)(?=(\d\d)+\d$)/g, "$1,")}`;
    
    // const newdeath= document.querySelector('#delta-death');
    // newdeath.innerText = `+${finaldata.deltadeaths.replace(/(\d)(?=(\d\d)+\d$)/g, "$1,")}`;

        // if(vaccinedatafinal.totaldosesadministered=='')
    // {
    //      vaccinedatafinal = jsdata.tested[vaccinedata-2];
    //      onedaybeforevaccine = jsdata.tested[vaccinedata-3];
    // }