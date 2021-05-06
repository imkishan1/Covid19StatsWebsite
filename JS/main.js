
$(window).scroll(function(){
    if($(window).scrollTop()){
        $("nav").addClass("black");
    }
    else{
        $("nav").removeClass("black");
    }
})


async function getcovidapiIn(){

    const jsondata = await fetch('https://api.covid19india.org/data.json');
    const jsdata = await jsondata.json();
    const vaccinedata = Object.keys(jsdata.tested).length;
    const vaccinedatafinal = jsdata.tested[vaccinedata-1];
    const size = Object.keys(jsdata.cases_time_series).length;
    const yesterdayupdate = jsdata.cases_time_series[size-1];
    const onedaybeforevaccine = jsdata.tested[vaccinedata-2];
    const finaldata = jsdata.statewise[0];
    const statebihar = jsdata.statewise[15];

    const vaccinedatafinal = jsdata.tested
    const mh = jsdata.statewise[1];
    const kl = jsdata.statewise[2];
    const ka = jsdata.statewise[3];
    const ap = jsdata.statewise[4];
    const tn = jsdata.statewise[5];
    const dl = jsdata.statewise[6];
    const up = jsdata.statewise[7];
    const wb = jsdata.statewise[8];
    const cg = jsdata.statewise[9];
    const rj = jsdata.statewise[10];
    const gj = jsdata.statewise[11];
    const mp = jsdata.statewise[12];
    const od = jsdata.statewise[13];
    const tg = jsdata.statewise[14];
    const hr = jsdata.statewise[16];
    const pb = jsdata.statewise[17];
    const ass = jsdata.statewise[18];
    const jh = jsdata.statewise[20];
    const jnk = jsdata.statewise[19];
    const ut = jsdata.statewise[21];
    const hp = jsdata.statewise[22];
    const goa = jsdata.statewise[23];
    const py = jsdata.statewise[24];
    const tr = jsdata.statewise[25];
    const mani = jsdata.statewise[26];
    const cgh = jsdata.statewise[27];
    const ar = jsdata.statewise[28];
    const ml = jsdata.statewise[29];
    const nl = jsdata.statewise[30];
    const la = jsdata.statewise[31];
    const sk = jsdata.statewise[32];
    const an = jsdata.statewise[33];
    const mz = jsdata.statewise[34];
    const dn = jsdata.statewise[35];
    const ld = jsdata.statewise[36];



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

    const lastupdate2= document.querySelector('#date-time-2');
    lastupdate2.innerText = `${finaldata.lastupdatedtime}`;

    const lastupdate3= document.querySelector('#date-time-3');
    lastupdate3.innerText = `${finaldata.lastupdatedtime}`;

    const lastupdate4= document.querySelector('#date-time-4');
    lastupdate4.innerText = `${finaldata.lastupdatedtime}`;


// bihar

    let stbhname = document.querySelector('#st-name');
    stbhname.innerText = `${statebihar.state}`;

    const activebihar= document.querySelector('#bihar-conf');
    activebihar.innerText = `${statebihar.confirmed.replace(/(\d)(?=(\d\d)+\d$)/g, "$1,")}`;

    const recbihar= document.querySelector('#bihar-rec');
    recbihar.innerText = `${statebihar.recovered.replace(/(\d)(?=(\d\d)+\d$)/g, "$1,")}`;

    const actbihar= document.querySelector('#bihar-active');
    actbihar.innerText = `${statebihar.active.replace(/(\d)(?=(\d\d)+\d$)/g, "$1,")}`;

    const detbihar= document.querySelector('#bihar-death');
    detbihar.innerText = `${statebihar.deaths.replace(/(\d)(?=(\d\d)+\d$)/g, "$1,")}`;

    const nebihar= document.querySelector('#bihar-new');
    nebihar.innerText = `${statebihar.deltaconfirmed.replace(/(\d)(?=(\d\d)+\d$)/g, "$1,")}`;

// Maharastra
    let mhname = document.querySelector('#st-name-3');
    mhname.innerText = `${mh.state}`;
    const actmh= document.querySelector('#mh-case');
    actmh.innerText = `${mh.confirmed.replace(/(\d)(?=(\d\d)+\d$)/g, "$1,")}`;

    const mhrec= document.querySelector('#mh-rec');
    mhrec.innerText = `${mh.recovered.replace(/(\d)(?=(\d\d)+\d$)/g, "$1,")}`;
    const mhdeath= document.querySelector('#mh-death');
    mhdeath.innerText = `${mh.deaths.replace(/(\d)(?=(\d\d)+\d$)/g, "$1,")}`;

    const mhactive= document.querySelector('#mh-active');
    mhactive.innerText = `${mh.active.replace(/(\d)(?=(\d\d)+\d$)/g, "$1,")}`;

    const newmh= document.querySelector('#mh-new');
    newmh.innerText = `${mh.deltaconfirmed.replace(/(\d)(?=(\d\d)+\d$)/g, "$1,")}`;
 
// Kerala
    let klname = document.querySelector('#st-name-4');
    klname.innerText = `${kl.state}`;

    const actkl= document.querySelector('#kl-case');
    actkl.innerText = `${kl.confirmed.replace(/(\d)(?=(\d\d)+\d$)/g, "$1,")}`;

    const klrec= document.querySelector('#kl-rec');
    klrec.innerText = `${kl.recovered.replace(/(\d)(?=(\d\d)+\d$)/g, "$1,")}`;

    const atkl= document.querySelector('#kl-active');
    atkl.innerText = `${kl.active.replace(/(\d)(?=(\d\d)+\d$)/g, "$1,")}`;

    const detkl= document.querySelector('#kl-death');
    detkl.innerText = `${kl.deaths.replace(/(\d)(?=(\d\d)+\d$)/g, "$1,")}`;

    const nekl= document.querySelector('#kl-new');
    nekl.innerText = `${kl.deltaconfirmed.replace(/(\d)(?=(\d\d)+\d$)/g, "$1,")}`;

// karnatka
    let kaname = document.querySelector('#st-name-5');
     kaname.innerText = `${ka.state}`;

    let kaactive = document.querySelector('#ka-active');
    kaactive.innerText =`${ka.active.replace(/(\d)(?=(\d\d)+\d$)/g, "$1,")}`;

    let kacnf = document.querySelector('#ka-case');
    kacnf.innerText =`${ka.confirmed.replace(/(\d)(?=(\d\d)+\d$)/g, "$1,")}`;

    let karec= document.querySelector('#ka-rec');
    karec.innerText = `${ka.recovered.replace(/(\d)(?=(\d\d)+\d$)/g, "$1,")}`;

    let kadeath= document.querySelector('#ka-death');
    kadeath.innerText = `${ka.deaths.replace(/(\d)(?=(\d\d)+\d$)/g, "$1,")}`;

    let kanew= document.querySelector('#ka-new');
    kanew.innerText = `${ka.deltaconfirmed.replace(/(\d)(?=(\d\d)+\d$)/g, "$1,")}`;

    let lastupdate5= document.querySelector('#date-time-5');
    lastupdate5.innerText = `${ka.lastupdatedtime}`;

    // Ap
    let apname = document.querySelector('#st-name-6');
    apname.innerText = `${ap.state}`;

   let apactive = document.querySelector('#ap-active');
   apactive.innerText =`${ap.active.replace(/(\d)(?=(\d\d)+\d$)/g, "$1,")}`;

   let apcnf = document.querySelector('#ap-case');
   apcnf.innerText =`${ap.confirmed.replace(/(\d)(?=(\d\d)+\d$)/g, "$1,")}`;

   let aprec= document.querySelector('#ap-rec');
   aprec.innerText = `${ap.recovered.replace(/(\d)(?=(\d\d)+\d$)/g, "$1,")}`;

   let apdeath= document.querySelector('#ap-death');
   apdeath.innerText = `${ap.deaths.replace(/(\d)(?=(\d\d)+\d$)/g, "$1,")}`;

   let apnew= document.querySelector('#ap-new');
   apnew.innerText = `${ap.deltaconfirmed.replace(/(\d)(?=(\d\d)+\d$)/g, "$1,")}`;

   let lastupdate6= document.querySelector('#date-time-6');
   lastupdate6.innerText = `${ap.lastupdatedtime}`;

//    tn

let tnname = document.querySelector('#st-name-7');
tnname.innerText = `${tn.state}`;

let tnactive = document.querySelector('#tn-active');
tnactive.innerText =`${tn.active.replace(/(\d)(?=(\d\d)+\d$)/g, "$1,")}`;

let tncnf = document.querySelector('#tn-case');
tncnf.innerText =`${tn.confirmed.replace(/(\d)(?=(\d\d)+\d$)/g, "$1,")}`;

let tnrec= document.querySelector('#tn-rec');
tnrec.innerText = `${tn.recovered.replace(/(\d)(?=(\d\d)+\d$)/g, "$1,")}`;

let tndeath= document.querySelector('#tn-death');
tndeath.innerText = `${tn.deaths.replace(/(\d)(?=(\d\d)+\d$)/g, "$1,")}`;

let tnnew= document.querySelector('#tn-new');
tnnew.innerText = `${tn.deltaconfirmed.replace(/(\d)(?=(\d\d)+\d$)/g, "$1,")}`;

let lastupdate7= document.querySelector('#date-time-7');
lastupdate7.innerText = `${tn.lastupdatedtime}`;


// DL

    let dlname = document.querySelector('#st-name-8');
    dlname.innerText = `${dl.state}`;

    let dlactive = document.querySelector('#dl-active');
    dlactive.innerText =`${dl.active.replace(/(\d)(?=(\d\d)+\d$)/g, "$1,")}`;

    let dlcnf = document.querySelector('#dl-case');
    dlcnf.innerText =`${dl.confirmed.replace(/(\d)(?=(\d\d)+\d$)/g, "$1,")}`;

    let dlrec= document.querySelector('#dl-rec');
    dlrec.innerText = `${dl.recovered.replace(/(\d)(?=(\d\d)+\d$)/g, "$1,")}`;

    let dldeath= document.querySelector('#dl-death');
    dldeath.innerText = `${dl.deaths.replace(/(\d)(?=(\d\d)+\d$)/g, "$1,")}`;

    let dlnew= document.querySelector('#dl-new');
    dlnew.innerText = `${dl.deltaconfirmed.replace(/(\d)(?=(\d\d)+\d$)/g, "$1,")}`;

    let lastupdate8= document.querySelector('#date-time-8');
    lastupdate8.innerText = `${dl.lastupdatedtime}`;
// up

    let upname = document.querySelector('#st-name-9');
    upname.innerText = `${up.state}`;

    let upactive = document.querySelector('#up-active');
    upactive.innerText =`${up.active.replace(/(\d)(?=(\d\d)+\d$)/g, "$1,")}`;

    let upcnf = document.querySelector('#up-case');
    upcnf.innerText =`${up.confirmed.replace(/(\d)(?=(\d\d)+\d$)/g, "$1,")}`;

    let uprec= document.querySelector('#up-rec');
    uprec.innerText = `${up.recovered.replace(/(\d)(?=(\d\d)+\d$)/g, "$1,")}`;

    let updeath= document.querySelector('#up-death');
    updeath.innerText = `${up.deaths.replace(/(\d)(?=(\d\d)+\d$)/g, "$1,")}`;

    let upnew= document.querySelector('#up-new');
    upnew.innerText = `${up.deltaconfirmed.replace(/(\d)(?=(\d\d)+\d$)/g, "$1,")}`;

    let lastupdate9= document.querySelector('#date-time-9');
    lastupdate9.innerText = `${up.lastupdatedtime}`;


// wb


let wbname = document.querySelector('#st-name-10');
wbname.innerText = `${wb.state}`;

let wbactive = document.querySelector('#wb-active');
wbactive.innerText =`${wb.active.replace(/(\d)(?=(\d\d)+\d$)/g, "$1,")}`;

let wbcnf = document.querySelector('#wb-case');
wbcnf.innerText =`${wb.confirmed.replace(/(\d)(?=(\d\d)+\d$)/g, "$1,")}`;

let wbrec= document.querySelector('#wb-rec');
wbrec.innerText = `${wb.recovered.replace(/(\d)(?=(\d\d)+\d$)/g, "$1,")}`;

let wbdeath= document.querySelector('#wb-death');
wbdeath.innerText = `${wb.deaths.replace(/(\d)(?=(\d\d)+\d$)/g, "$1,")}`;

let wbnew= document.querySelector('#wb-new');
wbnew.innerText = `${wb.deltaconfirmed.replace(/(\d)(?=(\d\d)+\d$)/g, "$1,")}`;

let lastupdate10= document.querySelector('#date-time-10');
lastupdate10.innerText = `${wb.lastupdatedtime}`;

// cg

let cgname = document.querySelector('#st-name-12');
cgname.innerText = `${cg.state}`;

let cgactive = document.querySelector('#cg-active');
cgactive.innerText =`${cg.active.replace(/(\d)(?=(\d\d)+\d$)/g, "$1,")}`;

let cgcnf = document.querySelector('#cg-case');
cgcnf.innerText =`${cg.confirmed.replace(/(\d)(?=(\d\d)+\d$)/g, "$1,")}`;

let cgrec= document.querySelector('#cg-rec');
cgrec.innerText = `${cg.recovered.replace(/(\d)(?=(\d\d)+\d$)/g, "$1,")}`;

let cgdeath= document.querySelector('#cg-death');
cgdeath.innerText = `${cg.deaths.replace(/(\d)(?=(\d\d)+\d$)/g, "$1,")}`;

let cgnew= document.querySelector('#cg-new');
cgnew.innerText = `${cg.deltaconfirmed.replace(/(\d)(?=(\d\d)+\d$)/g, "$1,")}`;

let lastupdate11= document.querySelector('#date-time-11');
lastupdate11.innerText = `${cg.lastupdatedtime}`;

// rj
let rjname = document.querySelector('#st-name-13');
rjname.innerText = `${rj.state}`;

let rjactive = document.querySelector('#rj-active');
rjactive.innerText =`${rj.active.replace(/(\d)(?=(\d\d)+\d$)/g, "$1,")}`;

let rjcnf = document.querySelector('#rj-case');
rjcnf.innerText =`${rj.confirmed.replace(/(\d)(?=(\d\d)+\d$)/g, "$1,")}`;

let rjrec= document.querySelector('#rj-rec');
rjrec.innerText = `${rj.recovered.replace(/(\d)(?=(\d\d)+\d$)/g, "$1,")}`;

let rjdeath= document.querySelector('#rj-death');
cgdeath.innerText = `${rj.deaths.replace(/(\d)(?=(\d\d)+\d$)/g, "$1,")}`;

let rjnew= document.querySelector('#rj-new');
rjnew.innerText = `${rj.deltaconfirmed.replace(/(\d)(?=(\d\d)+\d$)/g, "$1,")}`;

let lastupdate12= document.querySelector('#date-time-13');
lastupdate12.innerText = `${rj.lastupdatedtime}`;

// gj

let gjname = document.querySelector('#st-name-gj');
gjname.innerText = `${gj.state}`;

let gjactive = document.querySelector('#gj-active');
gjactive.innerText =`${gj.active.replace(/(\d)(?=(\d\d)+\d$)/g, "$1,")}`;

let gjcnf = document.querySelector('#gj-case');
gjcnf.innerText =`${gj.confirmed.replace(/(\d)(?=(\d\d)+\d$)/g, "$1,")}`;

let gjrec= document.querySelector('#gj-rec');
gjrec.innerText = `${gj.recovered.replace(/(\d)(?=(\d\d)+\d$)/g, "$1,")}`;

let gjdeath= document.querySelector('#gj-death');
gjdeath.innerText = `${gj.deaths.replace(/(\d)(?=(\d\d)+\d$)/g, "$1,")}`;

let gjnew= document.querySelector('#gj-new');
gjnew.innerText = `${gj.deltaconfirmed.replace(/(\d)(?=(\d\d)+\d$)/g, "$1,")}`;

let lastupdategj= document.querySelector('#date-time-gj');
lastupdategj.innerText = `${gj.lastupdatedtime}`;

// mp

let mpname = document.querySelector('#st-name-mp');
mpname.innerText = `${mp.state}`;

let mpactive = document.querySelector('#mp-active');
mpactive.innerText =`${mp.active.replace(/(\d)(?=(\d\d)+\d$)/g, "$1,")}`;

let mpcnf = document.querySelector('#mp-case');
mpcnf.innerText =`${mp.confirmed.replace(/(\d)(?=(\d\d)+\d$)/g, "$1,")}`;

let mprec= document.querySelector('#mp-rec');
mprec.innerText = `${mp.recovered.replace(/(\d)(?=(\d\d)+\d$)/g, "$1,")}`;

let mpdeath= document.querySelector('#mp-death');
mpdeath.innerText = `${mp.deaths.replace(/(\d)(?=(\d\d)+\d$)/g, "$1,")}`;

let mpnew= document.querySelector('#mp-new');
mpnew.innerText = `${mp.deltaconfirmed.replace(/(\d)(?=(\d\d)+\d$)/g, "$1,")}`;

let lastupdatemp= document.querySelector('#date-time-mp');
lastupdatemp.innerText = `${mp.lastupdatedtime}`;



let odname = document.querySelector('#st-name-od');
odname.innerText = `${od.state}`;

let odactive = document.querySelector('#od-active');
odactive.innerText =`${od.active.replace(/(\d)(?=(\d\d)+\d$)/g, "$1,")}`;

let odcnf = document.querySelector('#od-case');
odcnf.innerText =`${od.confirmed.replace(/(\d)(?=(\d\d)+\d$)/g, "$1,")}`;

let odrec= document.querySelector('#od-rec');
odrec.innerText = `${od.recovered.replace(/(\d)(?=(\d\d)+\d$)/g, "$1,")}`;

let oddeath= document.querySelector('#od-death');
oddeath.innerText = `${od.deaths.replace(/(\d)(?=(\d\d)+\d$)/g, "$1,")}`;

let odnew= document.querySelector('#od-new');
odnew.innerText = `${od.deltaconfirmed.replace(/(\d)(?=(\d\d)+\d$)/g, "$1,")}`;

let lastupdateod= document.querySelector('#date-time-od');
lastupdateod.innerText = `${od.lastupdatedtime}`;

// tg

let tgname = document.querySelector('#st-name-tg');
tgname.innerText = `${tg.state}`;

let tgactive = document.querySelector('#tg-active');
tgactive.innerText =`${tg.active.replace(/(\d)(?=(\d\d)+\d$)/g, "$1,")}`;

let tgcnf = document.querySelector('#tg-case');
tgcnf.innerText =`${tg.confirmed.replace(/(\d)(?=(\d\d)+\d$)/g, "$1,")}`;

let tgrec= document.querySelector('#tg-rec');
tgrec.innerText = `${tg.recovered.replace(/(\d)(?=(\d\d)+\d$)/g, "$1,")}`;

let tgdeath= document.querySelector('#tg-death');
tgdeath.innerText = `${tg.deaths.replace(/(\d)(?=(\d\d)+\d$)/g, "$1,")}`;

let tgnew= document.querySelector('#tg-new');
tgnew.innerText = `${tg.deltaconfirmed.replace(/(\d)(?=(\d\d)+\d$)/g, "$1,")}`;

let lastupdatetg= document.querySelector('#date-time-tg');
lastupdatetg.innerText = `${tg.lastupdatedtime}`;

// hr

let hrname = document.querySelector('#st-name-hr');
hrname.innerText = `${hr.state}`;

let hractive = document.querySelector('#hr-active');
hractive.innerText =`${hr.active.replace(/(\d)(?=(\d\d)+\d$)/g, "$1,")}`;

let hrcnf = document.querySelector('#hr-case');
hrcnf.innerText =`${hr.confirmed.replace(/(\d)(?=(\d\d)+\d$)/g, "$1,")}`;

let hrrec= document.querySelector('#hr-rec');
hrrec.innerText = `${hr.recovered.replace(/(\d)(?=(\d\d)+\d$)/g, "$1,")}`;

let hrdeath= document.querySelector('#hr-death');
hrdeath.innerText = `${hr.deaths.replace(/(\d)(?=(\d\d)+\d$)/g, "$1,")}`;

let hrnew= document.querySelector('#hr-new');
hrnew.innerText = `${hr.deltaconfirmed.replace(/(\d)(?=(\d\d)+\d$)/g, "$1,")}`;

let lastupdatehr= document.querySelector('#date-time-hr');
lastupdatehr.innerText = `${hr.lastupdatedtime}`;

// pb
let pbname = document.querySelector('#st-name-pb');
pbname.innerText = `${pb.state}`;

let pbactive = document.querySelector('#pb-active');
pbactive.innerText =`${pb.active.replace(/(\d)(?=(\d\d)+\d$)/g, "$1,")}`;

let pbcnf = document.querySelector('#pb-case');
pbcnf.innerText =`${pb.confirmed.replace(/(\d)(?=(\d\d)+\d$)/g, "$1,")}`;

let pbrec= document.querySelector('#pb-rec');
pbrec.innerText = `${pb.recovered.replace(/(\d)(?=(\d\d)+\d$)/g, "$1,")}`;

let pbdeath= document.querySelector('#pb-death');
pbdeath.innerText = `${pb.deaths.replace(/(\d)(?=(\d\d)+\d$)/g, "$1,")}`;

let pbnew= document.querySelector('#pb-new');
pbnew.innerText = `${pb.deltaconfirmed.replace(/(\d)(?=(\d\d)+\d$)/g, "$1,")}`;

let lastupdatepb= document.querySelector('#date-time-pb');
lastupdatepb.innerText = `${pb.lastupdatedtime}`;

// ass
let assname = document.querySelector('#st-name-ass');
assname.innerText = `${ass.state}`;

let assactive = document.querySelector('#ass-active');
assactive.innerText =`${ass.active.replace(/(\d)(?=(\d\d)+\d$)/g, "$1,")}`;

let asscnf = document.querySelector('#ass-case');
asscnf.innerText =`${ass.confirmed.replace(/(\d)(?=(\d\d)+\d$)/g, "$1,")}`;

let assrec= document.querySelector('#ass-rec');
assrec.innerText = `${ass.recovered.replace(/(\d)(?=(\d\d)+\d$)/g, "$1,")}`;

let assdeath= document.querySelector('#ass-death');
assdeath.innerText = `${ass.deaths.replace(/(\d)(?=(\d\d)+\d$)/g, "$1,")}`;

let assnew= document.querySelector('#ass-new');
assnew.innerText = `${ass.deltaconfirmed.replace(/(\d)(?=(\d\d)+\d$)/g, "$1,")}`;

let lastupdateass= document.querySelector('#date-time-ass');
lastupdateass.innerText = `${ass.lastupdatedtime}`;


// JH

let jhname = document.querySelector('#st-name-jh');
jhname.innerText = `${jh.state}`;

let jhactive = document.querySelector('#jh-active');
jhactive.innerText =`${jh.active.replace(/(\d)(?=(\d\d)+\d$)/g, "$1,")}`;

let jhcnf = document.querySelector('#jh-case');
jhcnf.innerText =`${jh.confirmed.replace(/(\d)(?=(\d\d)+\d$)/g, "$1,")}`;

let jhrec= document.querySelector('#jh-rec');
jhrec.innerText = `${jh.recovered.replace(/(\d)(?=(\d\d)+\d$)/g, "$1,")}`;

let jhdeath= document.querySelector('#jh-death');
jhdeath.innerText = `${jh.deaths.replace(/(\d)(?=(\d\d)+\d$)/g, "$1,")}`;

let jhnew= document.querySelector('#jh-new');
jhnew.innerText = `${jh.deltaconfirmed.replace(/(\d)(?=(\d\d)+\d$)/g, "$1,")}`;

let lastupdatejh= document.querySelector('#date-time-jh');
lastupdatejh.innerText = `${jh.lastupdatedtime}`;

// jnk
let jnkname = document.querySelector('#st-name-jnk');
jnkname.innerText = `${jnk.state}`;

let jnkactive = document.querySelector('#jnk-active');
jnkactive.innerText =`${jnk.active.replace(/(\d)(?=(\d\d)+\d$)/g, "$1,")}`;

let jnkcnf = document.querySelector('#jnk-case');
jnkcnf.innerText =`${jnk.confirmed.replace(/(\d)(?=(\d\d)+\d$)/g, "$1,")}`;

let jnkrec= document.querySelector('#jnk-rec');
jnkrec.innerText = `${jnk.recovered.replace(/(\d)(?=(\d\d)+\d$)/g, "$1,")}`;

let jnkdeath= document.querySelector('#jnk-death');
jnkdeath.innerText = `${jnk.deaths.replace(/(\d)(?=(\d\d)+\d$)/g, "$1,")}`;

let jnknew= document.querySelector('#jnk-new');
jnknew.innerText = `${jnk.deltaconfirmed.replace(/(\d)(?=(\d\d)+\d$)/g, "$1,")}`;

// let lastupdatejnk= document.querySelector('#date-time-jnk');
// lastupdatejnk.innerText = `${jnk.lastupdatedtime}`;

// uk


let utname = document.querySelector('#st-name-ut');
utname.innerText = `${ut.state}`;

let utactive = document.querySelector('#ut-active');
utactive.innerText = `${ut.active.replace(/(\d)(?=(\d\d)+\d$)/g, "$1,")}`;

let utcnf = document.querySelector('#ut-case');
utcnf.innerText = `${ut.confirmed.replace(/(\d)(?=(\d\d)+\d$)/g, "$1,")}`;

let utrec = document.querySelector('#ut-rec');
utrec.innerText = `${ut.recovered.replace(/(\d)(?=(\d\d)+\d$)/g, "$1,")}`;

let utdeath = document.querySelector('#ut-death');
utdeath.innerText = `${ut.deaths.replace(/(\d)(?=(\d\d)+\d$)/g, "$1,")}`;

let lastupdateut= document.querySelector('#date-time-ut');
lastupdateut.innerText = `${ut.lastupdatedtime}`;

let utnew= document.querySelector('#ut-new');
utnew.innerText = `${ut.deltaconfirmed.replace(/(\d)(?=(\d\d)+\d$)/g, "$1,")}`;


// hp

let hpname = document.querySelector('#st-name-hp');
hpname.innerText = `${hp.state}`;

let hpactive = document.querySelector('#hp-active');
hpactive.innerText = `${hp.active.replace(/(\d)(?=(\d\d)+\d$)/g, "$1,")}`;

let hpcnf = document.querySelector('#hp-case');
hpcnf.innerText = `${hp.confirmed.replace(/(\d)(?=(\d\d)+\d$)/g, "$1,")}`;

let hprec = document.querySelector('#hp-rec');
hprec.innerText = `${hp.recovered.replace(/(\d)(?=(\d\d)+\d$)/g, "$1,")}`;

let hpdeath = document.querySelector('#hp-death');
hpdeath.innerText = `${hp.deaths.replace(/(\d)(?=(\d\d)+\d$)/g, "$1,")}`;

let hpnew= document.querySelector('#hp-new');
hpnew.innerText = `${hp.deltaconfirmed.replace(/(\d)(?=(\d\d)+\d$)/g, "$1,")}`;

let lastupdatehp= document.querySelector('#date-time-hp');
lastupdatehp.innerText = `${hp.lastupdatedtime}`;


// goa


let goaname = document.querySelector('#st-name-goa');
goaname.innerText = `${goa.state}`;

let goaactive = document.querySelector('#goa-active');
goaactive.innerText = `${goa.active.replace(/(\d)(?=(\d\d)+\d$)/g, "$1,")}`;

let goacnf = document.querySelector('#goa-case');
goacnf.innerText = `${goa.confirmed.replace(/(\d)(?=(\d\d)+\d$)/g, "$1,")}`;

let goarec = document.querySelector('#goa-rec');
goarec.innerText = `${goa.recovered.replace(/(\d)(?=(\d\d)+\d$)/g, "$1,")}`;

let goadeath = document.querySelector('#goa-death');
goadeath.innerText = `${goa.deaths.replace(/(\d)(?=(\d\d)+\d$)/g, "$1,")}`;

let goanew= document.querySelector('#goa-new');
goanew.innerText = `${goa.deltaconfirmed.replace(/(\d)(?=(\d\d)+\d$)/g, "$1,")}`;

let lastupdategoa= document.querySelector('#date-time-goa');
lastupdategoa.innerText = `${goa.lastupdatedtime}`;


// puducherry

let pyname = document.querySelector('#st-name-py');
pyname.innerText = `${py.state}`;

let pyactive = document.querySelector('#py-active');
pyactive.innerText = `${py.active.replace(/(\d)(?=(\d\d)+\d$)/g, "$1,")}`;

let pycnf = document.querySelector('#py-case');
pycnf.innerText = `${py.confirmed.replace(/(\d)(?=(\d\d)+\d$)/g, "$1,")}`;

let pyrec = document.querySelector('#py-rec');
pyrec.innerText = `${py.recovered.replace(/(\d)(?=(\d\d)+\d$)/g, "$1,")}`;

let pydeath = document.querySelector('#py-death');
pydeath.innerText = `${py.deaths.replace(/(\d)(?=(\d\d)+\d$)/g, "$1,")}`;

let pynew= document.querySelector('#py-new');
pynew.innerText = `${py.deltaconfirmed.replace(/(\d)(?=(\d\d)+\d$)/g, "$1,")}`;

let lastupdatepy= document.querySelector('#date-time-py');
lastupdatepy.innerText = `${py.lastupdatedtime}`;

// tripura

let triname = document.querySelector('#st-name-tri');
triname.innerText = `${tr.state}`;

let triactive = document.querySelector('#tri-active');
triactive.innerText = `${tr.active.replace(/(\d)(?=(\d\d)+\d$)/g, "$1,")}`;

let tricnf = document.querySelector('#tri-case');
tricnf.innerText = `${tr.confirmed.replace(/(\d)(?=(\d\d)+\d$)/g, "$1,")}`;

let trirec = document.querySelector('#tri-rec');
trirec.innerText = `${tr.recovered.replace(/(\d)(?=(\d\d)+\d$)/g, "$1,")}`;

let trideath = document.querySelector('#tri-death');
trideath.innerText = `${tr.deaths.replace(/(\d)(?=(\d\d)+\d$)/g, "$1,")}`;

let trinew= document.querySelector('#tri-new');
trinew.innerText = `${tr.deltaconfirmed.replace(/(\d)(?=(\d\d)+\d$)/g, "$1,")}`;

let lastupdatetri= document.querySelector('#date-time-tri');
lastupdatetri.innerText = `${tr.lastupdatedtime}`;


// manipur

let maniname = document.querySelector('#st-name-mani');
maniname.innerText = `${mani.state}`;

let maniactive = document.querySelector('#mani-active');
maniactive.innerText = `${mani.active.replace(/(\d)(?=(\d\d)+\d$)/g, "$1,")}`;

let manicnf = document.querySelector('#mani-case');
manicnf.innerText = `${mani.confirmed.replace(/(\d)(?=(\d\d)+\d$)/g, "$1,")}`;

let manirec = document.querySelector('#mani-rec');
manirec.innerText = `${mani.recovered.replace(/(\d)(?=(\d\d)+\d$)/g, "$1,")}`;

let manideath = document.querySelector('#mani-death');
manideath.innerText = `${mani.deaths.replace(/(\d)(?=(\d\d)+\d$)/g, "$1,")}`;

let maninew= document.querySelector('#mani-new');
maninew.innerText = `${mani.deltaconfirmed.replace(/(\d)(?=(\d\d)+\d$)/g, "$1,")}`;

let lastupdatemani= document.querySelector('#date-time-mani');
lastupdatemani.innerText = `${mani.lastupdatedtime}`;

// Chandigarh

let cghname = document.querySelector('#st-name-cgh');
cghname.innerText = `${cgh.state}`;

let cghactive = document.querySelector('#cgh-active');
cghactive.innerText = `${cgh.active.replace(/(\d)(?=(\d\d)+\d$)/g, "$1,")}`;

let cghcnf = document.querySelector('#cgh-case');
cghcnf.innerText = `${cgh.confirmed.replace(/(\d)(?=(\d\d)+\d$)/g, "$1,")}`;

let cghrec = document.querySelector('#cgh-rec');
cghrec.innerText = `${cgh.recovered.replace(/(\d)(?=(\d\d)+\d$)/g, "$1,")}`;

let cghdeath = document.querySelector('#cgh-death');
cghdeath.innerText = `${cgh.deaths.replace(/(\d)(?=(\d\d)+\d$)/g, "$1,")}`;

let cghnew= document.querySelector('#cgh-new');
cghnew.innerText = `${cgh.deltaconfirmed.replace(/(\d)(?=(\d\d)+\d$)/g, "$1,")}`;

let lastupdatecgh= document.querySelector('#date-time-cgh');
lastupdatecgh.innerText = `${cgh.lastupdatedtime}`;

// ar

let arname = document.querySelector('#st-name-ar');
arname.innerText = `${ar.state}`;

let aractive = document.querySelector('#ar-active');
aractive.innerText = `${ar.active.replace(/(\d)(?=(\d\d)+\d$)/g, "$1,")}`;

let arcnf = document.querySelector('#ar-case');
arcnf.innerText = `${ar.confirmed.replace(/(\d)(?=(\d\d)+\d$)/g, "$1,")}`;

let arrec = document.querySelector('#ar-rec');
arrec.innerText = `${ar.recovered.replace(/(\d)(?=(\d\d)+\d$)/g, "$1,")}`;

let ardeath = document.querySelector('#ar-death');
ardeath.innerText = `${ar.deaths.replace(/(\d)(?=(\d\d)+\d$)/g, "$1,")}`;

let arnew= document.querySelector('#ar-new');
arnew.innerText = `${ar.deltaconfirmed.replace(/(\d)(?=(\d\d)+\d$)/g, "$1,")}`;

let lastupdatear= document.querySelector('#date-time-ar');
lastupdatear.innerText = `${ar.lastupdatedtime}`;


// meghalaya ml

let mlname = document.querySelector('#st-name-ml');
mlname.innerText = `${ml.state}`;

let mlactive = document.querySelector('#ml-active');
mlactive.innerText = `${ml.active.replace(/(\d)(?=(\d\d)+\d$)/g, "$1,")}`;

let mlcnf = document.querySelector('#ml-case');
mlcnf.innerText = `${ml.confirmed.replace(/(\d)(?=(\d\d)+\d$)/g, "$1,")}`;

let mlrec = document.querySelector('#ml-rec');
mlrec.innerText = `${ml.recovered.replace(/(\d)(?=(\d\d)+\d$)/g, "$1,")}`;

let mldeath = document.querySelector('#ml-death');
mldeath.innerText = `${ml.deaths.replace(/(\d)(?=(\d\d)+\d$)/g, "$1,")}`;

let mlnew= document.querySelector('#ml-new');
mlnew.innerText = `${ml.deltaconfirmed.replace(/(\d)(?=(\d\d)+\d$)/g, "$1,")}`;

let lastupdateml= document.querySelector('#date-time-ml');
lastupdateml.innerText = `${ml.lastupdatedtime}`;


// meghalaya ml

let nlname = document.querySelector('#st-name-nl');
nlname.innerText = `${nl.state}`;

let nlactive = document.querySelector('#nl-active');
nlactive.innerText = `${nl.active.replace(/(\d)(?=(\d\d)+\d$)/g, "$1,")}`;

let nlcnf = document.querySelector('#nl-case');
nlcnf.innerText = `${nl.confirmed.replace(/(\d)(?=(\d\d)+\d$)/g, "$1,")}`;

let nlrec = document.querySelector('#nl-rec');
nlrec.innerText = `${nl.recovered.replace(/(\d)(?=(\d\d)+\d$)/g, "$1,")}`;

let nldeath = document.querySelector('#nl-death');
nldeath.innerText = `${nl.deaths.replace(/(\d)(?=(\d\d)+\d$)/g, "$1,")}`;

let nlnew= document.querySelector('#nl-new');
nlnew.innerText = `${nl.deltaconfirmed.replace(/(\d)(?=(\d\d)+\d$)/g, "$1,")}`;

let lastupdatenl= document.querySelector('#date-time-nl');
lastupdatenl.innerText = `${nl.lastupdatedtime}`;

// ladakh

let laname = document.querySelector('#st-name-la');
laname.innerText = `${la.state}`;

let laactive = document.querySelector('#la-active');
laactive.innerText = `${la.active.replace(/(\d)(?=(\d\d)+\d$)/g, "$1,")}`;

let lacnf = document.querySelector('#la-case');
lacnf.innerText = `${la.confirmed.replace(/(\d)(?=(\d\d)+\d$)/g, "$1,")}`;

let larec = document.querySelector('#la-rec');
larec.innerText = `${la.recovered.replace(/(\d)(?=(\d\d)+\d$)/g, "$1,")}`;

let ladeath = document.querySelector('#la-death');
ladeath.innerText = `${la.deaths.replace(/(\d)(?=(\d\d)+\d$)/g, "$1,")}`;

let lanew= document.querySelector('#la-new');
lanew.innerText = `${la.deltaconfirmed.replace(/(\d)(?=(\d\d)+\d$)/g, "$1,")}`;

let lastupdatela= document.querySelector('#date-time-la');
lastupdatela.innerText = `${la.lastupdatedtime}`;

// sikkim

let skname = document.querySelector('#st-name-sk');
skname.innerText = `${sk.state}`;

let skactive = document.querySelector('#sk-active');
skactive.innerText = `${sk.active.replace(/(\d)(?=(\d\d)+\d$)/g, "$1,")}`;

let skcnf = document.querySelector('#sk-case');
skcnf.innerText = `${sk.confirmed.replace(/(\d)(?=(\d\d)+\d$)/g, "$1,")}`;

let skrec = document.querySelector('#sk-rec');
skrec.innerText = `${sk.recovered.replace(/(\d)(?=(\d\d)+\d$)/g, "$1,")}`;

let skdeath = document.querySelector('#sk-death');
skdeath.innerText = `${sk.deaths.replace(/(\d)(?=(\d\d)+\d$)/g, "$1,")}`;

let sknew= document.querySelector('#sk-new');
sknew.innerText = `${sk.deltaconfirmed.replace(/(\d)(?=(\d\d)+\d$)/g, "$1,")}`;

let lastupdatesk= document.querySelector('#date-time-sk');
lastupdatesk.innerText = `${sk.lastupdatedtime}`;


// andamannicobar an

let anname = document.querySelector('#st-name-an');
anname.innerText = `${an.state}`;

let anactive = document.querySelector('#an-active');
anactive.innerText = `${an.active.replace(/(\d)(?=(\d\d)+\d$)/g, "$1,")}`;

let ancnf = document.querySelector('#an-case');
ancnf.innerText = `${an.confirmed.replace(/(\d)(?=(\d\d)+\d$)/g, "$1,")}`;

let anrec = document.querySelector('#an-rec');
anrec.innerText = `${an.recovered.replace(/(\d)(?=(\d\d)+\d$)/g, "$1,")}`;

let andeath = document.querySelector('#an-death');
andeath.innerText = `${an.deaths.replace(/(\d)(?=(\d\d)+\d$)/g, "$1,")}`;

let annew= document.querySelector('#an-new');
annew.innerText = `${an.deltaconfirmed.replace(/(\d)(?=(\d\d)+\d$)/g, "$1,")}`;


// mizo
let mzname = document.querySelector('#state-name-mz');
mzname.innerText =`${mz.state}`;

let mzactive = document.querySelector('#mz-active');
mzactive.innerText = `${mz.active.replace(/(\d)(?=(\d\d)+\d$)/g, "$1,")}`;

let mzcnf = document.querySelector('#mz-case');
mzcnf.innerText = `${mz.confirmed.replace(/(\d)(?=(\d\d)+\d$)/g, "$1,")}`;

let mzrec = document.querySelector('#mz-rec');
mzrec.innerText = `${mz.recovered.replace(/(\d)(?=(\d\d)+\d$)/g, "$1,")}`;

let mzdeath = document.querySelector('#mz-death');
mzdeath.innerText = `${mz.deaths.replace(/(\d)(?=(\d\d)+\d$)/g, "$1,")}`;

let mznew= document.querySelector('#mz-new');
mznew.innerText = `${mz.deltaconfirmed.replace(/(\d)(?=(\d\d)+\d$)/g, "$1,")}`;

let lastupdatemz= document.querySelector('#date-time-mz');
lastupdatemz.innerText = `${mz.lastupdatedtime}`;

// daman diu

let dnname = document.querySelector('#st-name-dn');
dnname.innerText =`${dn.state}`;

let dnactive = document.querySelector('#dn-active');
dnactive.innerText = `${dn.active.replace(/(\d)(?=(\d\d)+\d$)/g, "$1,")}`;

let dncnf = document.querySelector('#dn-case');
dncnf.innerText = `${dn.confirmed.replace(/(\d)(?=(\d\d)+\d$)/g, "$1,")}`;

let dnrec = document.querySelector('#dn-rec');
dnrec.innerText = `${dn.recovered.replace(/(\d)(?=(\d\d)+\d$)/g, "$1,")}`;

let dndeath = document.querySelector('#dn-death');
dndeath.innerText = `${dn.deaths.replace(/(\d)(?=(\d\d)+\d$)/g, "$1,")}`;

let dnnew= document.querySelector('#dn-new');
dnnew.innerText = `${dn.deltaconfirmed.replace(/(\d)(?=(\d\d)+\d$)/g, "$1,")}`;

// lakshwadeep

let ldname = document.querySelector('#st-name-ld');
ldname.innerText =`${ld.state}`;

let ldactive = document.querySelector('#ld-active');
ldactive.innerText = `${ld.active.replace(/(\d)(?=(\d\d)+\d$)/g, "$1,")}`;

let ldcnf = document.querySelector('#ld-case');
ldcnf.innerText = `${ld.confirmed.replace(/(\d)(?=(\d\d)+\d$)/g, "$1,")}`;

let ldrec = document.querySelector('#ld-rec');
ldrec.innerText = `${ld.recovered.replace(/(\d)(?=(\d\d)+\d$)/g, "$1,")}`;

let lddeath = document.querySelector('#ld-death');
lddeath.innerText = `${ld.deaths.replace(/(\d)(?=(\d\d)+\d$)/g, "$1,")}`;

let ldnew= document.querySelector('#ld-new');
ldnew.innerText = `${ld.deltaconfirmed.replace(/(\d)(?=(\d\d)+\d$)/g, "$1,")}`;

let lastupdateld= document.querySelector('#date-time-ld');
lastupdateld.innerText = `${ld.lastupdatedtime}`;

}
getcovidapiIn();



