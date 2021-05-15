
// $(window).scroll(function(){
//     if($(window).scrollTop()){
//         $("nav").addClass("black");
//     }
//     else{
//         $("nav").removeClass("black");
//     }
// })

async function getcovidapiIn(){

    const jsondata = await fetch('https://api.covid19india.org/data.json');
    const jsdata = await jsondata.json();
    const vaccinedata = Object.keys(jsdata.tested).length;
    const vaccinedatafinal = jsdata.tested[vaccinedata-1];
    const size = Object.keys(jsdata.cases_time_series).length;
    const yesterdayupdate = jsdata.cases_time_series[size-1];
    const onedaybeforevaccine = jsdata.tested[vaccinedata-2];
    const finaldata = jsdata.statewise[0];
  
    // yesterday's log
    let yesterdaydate = document.querySelector('#yesterday-date');
    yesterdaydate.innerText = `${yesterdayupdate.date}`;

    let dailycnf = document.querySelector('#daily-conf');
    dailycnf.innerText = `${yesterdayupdate.dailyconfirmed.replace(/(\d)(?=(\d\d)+\d$)/g, "$1,")}`;

    let dailyrec = document.querySelector('#daily-rec');
    dailyrec.innerText = `${yesterdayupdate.dailyrecovered.replace(/(\d)(?=(\d\d)+\d$)/g, "$1,")}`;

    let dailydeath = document.querySelector('#daily-death');
    dailydeath.innerText = `${yesterdayupdate.dailydeceased.replace(/(\d)(?=(\d\d)+\d$)/g, "$1,")}`;

    let dailyupdatedon = document.querySelector('#date-time-last');
    dailyupdatedon.innerText = `${yesterdayupdate.dateymd}`;

    let todayvac = parseInt(vaccinedatafinal.totaldosesadministered)
    let deltavac = parseInt(onedaybeforevaccine.totaldosesadministered);
    let deltavaccine = (todayvac-deltavac).toString();
    // console.log(deltavaccine);

    let todaysvac = document.querySelector('#deltavac');
    todaysvac.innerText = `${deltavaccine.replace(/(\d)(?=(\d\d)+\d$)/g, "$1,")}`;

   // yesterday's log

//    vaccine 




    let vaccinedose = document.querySelector('#vaccine-dose');
    vaccinedose.innerText = `${(vaccinedatafinal.totaldosesadministered).replace(/(\d)(?=(\d\d)+\d$)/g, "$1,")}`;
//      vaccine
    let city = document.querySelector('#active-cases');
    city.innerText = `${finaldata.active.replace(/(\d)(?=(\d\d)+\d$)/g, "$1,")}`;

    const totalcase = document.querySelector('#total-cases');
    totalcase.innerText = `${finaldata.confirmed.replace(/(\d)(?=(\d\d)+\d$)/g, "$1,")}`;

    const totarecoverd = document.querySelector('#recovered');
    totarecoverd.innerText = `${finaldata.recovered.replace(/(\d)(?=(\d\d)+\d$)/g, "$1,")}`;

    const totaldeath = document.querySelector('#death');
    totaldeath.innerText = `${finaldata.deaths.replace(/(\d)(?=(\d\d)+\d$)/g, "$1,")}`;

    const newconfirm= document.querySelector('#new-confirm');
    newconfirm.innerText = `${finaldata.deltaconfirmed.replace(/(\d)(?=(\d\d)+\d$)/g, "$1,")}`;

    const newrecovered= document.querySelector('#deltarec');
    newrecovered.innerText = `+${finaldata.deltarecovered.replace(/(\d)(?=(\d\d)+\d$)/g, "$1,")}`;
    
    const newdeath= document.querySelector('#delta-death');
    newdeath.innerText = `+${finaldata.deltadeaths.replace(/(\d)(?=(\d\d)+\d$)/g, "$1,")}`;

    const lastupdate= document.querySelector('#date-time');
    lastupdate.innerText = `${finaldata.lastupdatedtime}`;

}

getcovidapiIn();



