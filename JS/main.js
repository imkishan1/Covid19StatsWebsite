
$(window).scroll(function(){
    if($(window).scrollTop()>10){
        $("nav").addClass("black");
    }
    else{
        $("nav").removeClass("black");
    }
})

// https://api.covid19api.com/summary

async function getcovidapiIn(){
    // const jsondata = await fetch('https://api.covid19api.com/summary');
    const jsondata = await fetch('https://api.covid19india.org/data.json');
    // const jsondata = await fetch('https://api.rootnet.in/covid19-in/stats/latest');
    // const jsondata = await fetch('https://api.rootnet.in/covid19-in/unofficial/sources');
    const jsdata = await jsondata.json();
    const vaccinedata = jsdata.tested[399];
    console.log(jsdata.statewise);

    // console.log(jsdata.statewise);
    // console.log(jsdata.Countries[76]);

    const finaldata = jsdata.statewise[0];
    const statebihar = jsdata.statewise[15];
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
    // const br = jsdata.statewise[15];
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

    let vaccinedose = document.querySelector('#vaccine-dose');
    vaccinedose.innerText = `${vaccinedata.totaldosesadministered}`;

    let city = document.querySelector('#active-cases');
    city.innerText = `${finaldata.active}`;

    const totalcase = document.querySelector('#total-cases');
    totalcase.innerText = `${finaldata.confirmed}`;

    const totarecoverd = document.querySelector('#recovered');
    totarecoverd.innerText = `${finaldata.recovered}`;

    const totaldeath = document.querySelector('#death');
    totaldeath.innerText = `${finaldata.deaths}`;

    const newconfirm= document.querySelector('#new-confirm');
    newconfirm.innerText = `${finaldata.deltaconfirmed}`;

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
    activebihar.innerText = `${statebihar.confirmed}`;

    const recbihar= document.querySelector('#bihar-rec');
    recbihar.innerText = `${statebihar.recovered}`;

    const actbihar= document.querySelector('#bihar-active');
    actbihar.innerText = `${statebihar.active}`;

    const detbihar= document.querySelector('#bihar-death');
    detbihar.innerText = `${statebihar.deaths}`;

    const nebihar= document.querySelector('#bihar-new');
    nebihar.innerText = `${statebihar.deltaconfirmed}`;

// Maharastra
    let mhname = document.querySelector('#st-name-3');
    mhname.innerText = `${mh.state}`;
    const actmh= document.querySelector('#mh-case');
    actmh.innerText = `${mh.confirmed}`;

    const mhrec= document.querySelector('#mh-rec');
    mhrec.innerText = `${mh.recovered}`;
    const mhdeath= document.querySelector('#mh-death');
    mhdeath.innerText = `${mh.deaths}`;

    const mhactive= document.querySelector('#mh-active');
    mhactive.innerText = `${mh.active}`;

    const newmh= document.querySelector('#mh-new');
    newmh.innerText = `${mh.deltaconfirmed}`;
 
// Kerala
    let klname = document.querySelector('#st-name-4');
    klname.innerText = `${kl.state}`;

    const actkl= document.querySelector('#kl-case');
    actkl.innerText = `${kl.confirmed}`;

    const klrec= document.querySelector('#kl-rec');
    klrec.innerText = `${kl.recovered}`;

    const atkl= document.querySelector('#kl-active');
    atkl.innerText = `${kl.active}`;

    const detkl= document.querySelector('#kl-death');
    detkl.innerText = `${kl.deaths}`;

    const nekl= document.querySelector('#kl-new');
    nekl.innerText = `${kl.deltaconfirmed}`;

// karnatka
    let kaname = document.querySelector('#st-name-5');
     kaname.innerText = `${ka.state}`;

    let kaactive = document.querySelector('#ka-active');
    kaactive.innerText =`${ka.active}`;

    let kacnf = document.querySelector('#ka-case');
    kacnf.innerText =`${ka.confirmed}`;

    let karec= document.querySelector('#ka-rec');
    karec.innerText = `${ka.recovered}`;

    let kadeath= document.querySelector('#ka-death');
    kadeath.innerText = `${ka.deaths}`;

    let kanew= document.querySelector('#ka-new');
    kanew.innerText = `${ka.deltaconfirmed}`;

    let lastupdate5= document.querySelector('#date-time-5');
    lastupdate5.innerText = `${ka.lastupdatedtime}`;

    // Ap
    let apname = document.querySelector('#st-name-6');
    apname.innerText = `${ap.state}`;

   let apactive = document.querySelector('#ap-active');
   apactive.innerText =`${ap.active}`;

   let apcnf = document.querySelector('#ap-case');
   apcnf.innerText =`${ap.confirmed}`;

   let aprec= document.querySelector('#ap-rec');
   aprec.innerText = `${ap.recovered}`;

   let apdeath= document.querySelector('#ap-death');
   apdeath.innerText = `${ap.deaths}`;

   let apnew= document.querySelector('#ap-new');
   apnew.innerText = `${ap.deltaconfirmed}`;

   let lastupdate6= document.querySelector('#date-time-6');
   lastupdate6.innerText = `${ap.lastupdatedtime}`;

//    tn

let tnname = document.querySelector('#st-name-7');
tnname.innerText = `${tn.state}`;

let tnactive = document.querySelector('#tn-active');
tnactive.innerText =`${tn.active}`;

let tncnf = document.querySelector('#tn-case');
tncnf.innerText =`${tn.confirmed}`;

let tnrec= document.querySelector('#tn-rec');
tnrec.innerText = `${tn.recovered}`;

let tndeath= document.querySelector('#tn-death');
tndeath.innerText = `${tn.deaths}`;

let tnnew= document.querySelector('#tn-new');
tnnew.innerText = `${tn.deltaconfirmed}`;

let lastupdate7= document.querySelector('#date-time-7');
lastupdate7.innerText = `${tn.lastupdatedtime}`;


// DL

    let dlname = document.querySelector('#st-name-8');
    dlname.innerText = `${dl.state}`;

    let dlactive = document.querySelector('#dl-active');
    dlactive.innerText =`${dl.active}`;

    let dlcnf = document.querySelector('#dl-case');
    dlcnf.innerText =`${dl.confirmed}`;

    let dlrec= document.querySelector('#dl-rec');
    dlrec.innerText = `${dl.recovered}`;

    let dldeath= document.querySelector('#dl-death');
    dldeath.innerText = `${dl.deaths}`;

    let dlnew= document.querySelector('#dl-new');
    dlnew.innerText = `${dl.deltaconfirmed}`;

    let lastupdate8= document.querySelector('#date-time-8');
    lastupdate8.innerText = `${dl.lastupdatedtime}`;
// up

    let upname = document.querySelector('#st-name-9');
    upname.innerText = `${up.state}`;

    let upactive = document.querySelector('#up-active');
    upactive.innerText =`${up.active}`;

    let upcnf = document.querySelector('#up-case');
    upcnf.innerText =`${up.confirmed}`;

    let uprec= document.querySelector('#up-rec');
    uprec.innerText = `${up.recovered}`;

    let updeath= document.querySelector('#up-death');
    updeath.innerText = `${up.deaths}`;

    let upnew= document.querySelector('#up-new');
    upnew.innerText = `${up.deltaconfirmed}`;

    let lastupdate9= document.querySelector('#date-time-9');
    lastupdate9.innerText = `${up.lastupdatedtime}`;


// wb


let wbname = document.querySelector('#st-name-10');
wbname.innerText = `${wb.state}`;

let wbactive = document.querySelector('#wb-active');
wbactive.innerText =`${wb.active}`;

let wbcnf = document.querySelector('#wb-case');
wbcnf.innerText =`${wb.confirmed}`;

let wbrec= document.querySelector('#wb-rec');
wbrec.innerText = `${wb.recovered}`;

let wbdeath= document.querySelector('#wb-death');
wbdeath.innerText = `${wb.deaths}`;

let wbnew= document.querySelector('#wb-new');
wbnew.innerText = `${wb.deltaconfirmed}`;

let lastupdate10= document.querySelector('#date-time-10');
lastupdate10.innerText = `${wb.lastupdatedtime}`;

// cg

let cgname = document.querySelector('#st-name-12');
cgname.innerText = `${cg.state}`;

let cgactive = document.querySelector('#cg-active');
cgactive.innerText =`${cg.active}`;

let cgcnf = document.querySelector('#cg-case');
cgcnf.innerText =`${cg.confirmed}`;

let cgrec= document.querySelector('#cg-rec');
cgrec.innerText = `${cg.recovered}`;

let cgdeath= document.querySelector('#cg-death');
cgdeath.innerText = `${cg.deaths}`;

let cgnew= document.querySelector('#cg-new');
cgnew.innerText = `${cg.deltaconfirmed}`;

let lastupdate11= document.querySelector('#date-time-11');
lastupdate11.innerText = `${cg.lastupdatedtime}`;

// rj
let rjname = document.querySelector('#st-name-13');
rjname.innerText = `${rj.state}`;

let rjactive = document.querySelector('#rj-active');
rjactive.innerText =`${rj.active}`;

let rjcnf = document.querySelector('#rj-case');
rjcnf.innerText =`${rj.confirmed}`;

let rjrec= document.querySelector('#rj-rec');
rjrec.innerText = `${rj.recovered}`;

let rjdeath= document.querySelector('#rj-death');
cgdeath.innerText = `${rj.deaths}`;

let rjnew= document.querySelector('#rj-new');
rjnew.innerText = `${rj.deltaconfirmed}`;

let lastupdate12= document.querySelector('#date-time-13');
lastupdate12.innerText = `${rj.lastupdatedtime}`;

// gj

let gjname = document.querySelector('#st-name-gj');
gjname.innerText = `${gj.state}`;

let gjactive = document.querySelector('#gj-active');
gjactive.innerText =`${gj.active}`;

let gjcnf = document.querySelector('#gj-case');
gjcnf.innerText =`${gj.confirmed}`;

let gjrec= document.querySelector('#gj-rec');
gjrec.innerText = `${gj.recovered}`;

let gjdeath= document.querySelector('#gj-death');
gjdeath.innerText = `${gj.deaths}`;

let gjnew= document.querySelector('#gj-new');
gjnew.innerText = `${gj.deltaconfirmed}`;

let lastupdategj= document.querySelector('#date-time-gj');
lastupdategj.innerText = `${gj.lastupdatedtime}`;

// mp

let mpname = document.querySelector('#st-name-mp');
mpname.innerText = `${mp.state}`;

let mpactive = document.querySelector('#mp-active');
mpactive.innerText =`${mp.active}`;

let mpcnf = document.querySelector('#mp-case');
mpcnf.innerText =`${mp.confirmed}`;

let mprec= document.querySelector('#mp-rec');
mprec.innerText = `${mp.recovered}`;

let mpdeath= document.querySelector('#mp-death');
mpdeath.innerText = `${mp.deaths}`;

let mpnew= document.querySelector('#mp-new');
mpnew.innerText = `${mp.deltaconfirmed}`;

let lastupdatemp= document.querySelector('#date-time-mp');
lastupdatemp.innerText = `${mp.lastupdatedtime}`;



let odname = document.querySelector('#st-name-od');
odname.innerText = `${od.state}`;

let odactive = document.querySelector('#od-active');
odactive.innerText =`${od.active}`;

let odcnf = document.querySelector('#od-case');
odcnf.innerText =`${od.confirmed}`;

let odrec= document.querySelector('#od-rec');
odrec.innerText = `${od.recovered}`;

let oddeath= document.querySelector('#od-death');
oddeath.innerText = `${od.deaths}`;

let odnew= document.querySelector('#od-new');
odnew.innerText = `${od.deltaconfirmed}`;

let lastupdateod= document.querySelector('#date-time-od');
lastupdateod.innerText = `${od.lastupdatedtime}`;

// tg

let tgname = document.querySelector('#st-name-tg');
tgname.innerText = `${tg.state}`;

let tgactive = document.querySelector('#tg-active');
tgactive.innerText =`${tg.active}`;

let tgcnf = document.querySelector('#tg-case');
tgcnf.innerText =`${tg.confirmed}`;

let tgrec= document.querySelector('#tg-rec');
tgrec.innerText = `${tg.recovered}`;

let tgdeath= document.querySelector('#tg-death');
tgdeath.innerText = `${tg.deaths}`;

let tgnew= document.querySelector('#tg-new');
tgnew.innerText = `${tg.deltaconfirmed}`;

let lastupdatetg= document.querySelector('#date-time-tg');
lastupdatetg.innerText = `${tg.lastupdatedtime}`;

// hr

let hrname = document.querySelector('#st-name-hr');
hrname.innerText = `${hr.state}`;

let hractive = document.querySelector('#hr-active');
hractive.innerText =`${hr.active}`;

let hrcnf = document.querySelector('#hr-case');
hrcnf.innerText =`${hr.confirmed}`;

let hrrec= document.querySelector('#hr-rec');
hrrec.innerText = `${hr.recovered}`;

let hrdeath= document.querySelector('#hr-death');
hrdeath.innerText = `${hr.deaths}`;

let hrnew= document.querySelector('#hr-new');
hrnew.innerText = `${hr.deltaconfirmed}`;

let lastupdatehr= document.querySelector('#date-time-hr');
lastupdatehr.innerText = `${hr.lastupdatedtime}`;

// pb
let pbname = document.querySelector('#st-name-pb');
pbname.innerText = `${pb.state}`;

let pbactive = document.querySelector('#pb-active');
pbactive.innerText =`${pb.active}`;

let pbcnf = document.querySelector('#pb-case');
pbcnf.innerText =`${pb.confirmed}`;

let pbrec= document.querySelector('#pb-rec');
pbrec.innerText = `${pb.recovered}`;

let pbdeath= document.querySelector('#pb-death');
pbdeath.innerText = `${pb.deaths}`;

let pbnew= document.querySelector('#pb-new');
pbnew.innerText = `${pb.deltaconfirmed}`;

let lastupdatepb= document.querySelector('#date-time-pb');
lastupdatepb.innerText = `${pb.lastupdatedtime}`;

// ass
let assname = document.querySelector('#st-name-ass');
assname.innerText = `${ass.state}`;

let assactive = document.querySelector('#ass-active');
assactive.innerText =`${ass.active}`;

let asscnf = document.querySelector('#ass-case');
asscnf.innerText =`${ass.confirmed}`;

let assrec= document.querySelector('#ass-rec');
assrec.innerText = `${ass.recovered}`;

let assdeath= document.querySelector('#ass-death');
assdeath.innerText = `${ass.deaths}`;

let assnew= document.querySelector('#ass-new');
assnew.innerText = `${ass.deltaconfirmed}`;

let lastupdateass= document.querySelector('#date-time-ass');
lastupdateass.innerText = `${ass.lastupdatedtime}`;


// JH

let jhname = document.querySelector('#st-name-jh');
jhname.innerText = `${jh.state}`;

let jhactive = document.querySelector('#jh-active');
jhactive.innerText =`${jh.active}`;

let jhcnf = document.querySelector('#jh-case');
jhcnf.innerText =`${jh.confirmed}`;

let jhrec= document.querySelector('#jh-rec');
jhrec.innerText = `${jh.recovered}`;

let jhdeath= document.querySelector('#jh-death');
jhdeath.innerText = `${jh.deaths}`;

let jhnew= document.querySelector('#jh-new');
jhnew.innerText = `${jh.deltaconfirmed}`;

let lastupdatejh= document.querySelector('#date-time-jh');
lastupdatejh.innerText = `${jh.lastupdatedtime}`;

// jnk
let jnkname = document.querySelector('#st-name-jnk');
jnkname.innerText = `${jnk.state}`;

let jnkactive = document.querySelector('#jnk-active');
jnkactive.innerText =`${jnk.active}`;

let jnkcnf = document.querySelector('#jnk-case');
jnkcnf.innerText =`${jnk.confirmed}`;

let jnkrec= document.querySelector('#jnk-rec');
jnkrec.innerText = `${jnk.recovered}`;

let jnkdeath= document.querySelector('#jnk-death');
jnkdeath.innerText = `${jnk.deaths}`;

let jnknew= document.querySelector('#jnk-new');
jnknew.innerText = `${jnk.deltaconfirmed}`;

// let lastupdatejnk= document.querySelector('#date-time-jnk');
// lastupdatejnk.innerText = `${jnk.lastupdatedtime}`;

// uk


let utname = document.querySelector('#st-name-ut');
utname.innerText = `${ut.state}`;

let utactive = document.querySelector('#ut-active');
utactive.innerText = `${ut.active}`;

let utcnf = document.querySelector('#ut-case');
utcnf.innerText = `${ut.confirmed}`;

let utrec = document.querySelector('#ut-rec');
utrec.innerText = `${ut.recovered}`;

let utdeath = document.querySelector('#ut-death');
utdeath.innerText = `${ut.deaths}`;

let lastupdateut= document.querySelector('#date-time-ut');
lastupdateut.innerText = `${ut.lastupdatedtime}`;

let utnew= document.querySelector('#ut-new');
utnew.innerText = `${ut.deltaconfirmed}`;


// hp

let hpname = document.querySelector('#st-name-hp');
hpname.innerText = `${hp.state}`;

let hpactive = document.querySelector('#hp-active');
hpactive.innerText = `${hp.active}`;

let hpcnf = document.querySelector('#hp-case');
hpcnf.innerText = `${hp.confirmed}`;

let hprec = document.querySelector('#hp-rec');
hprec.innerText = `${hp.recovered}`;

let hpdeath = document.querySelector('#hp-death');
hpdeath.innerText = `${hp.deaths}`;

let hpnew= document.querySelector('#hp-new');
hpnew.innerText = `${hp.deltaconfirmed}`;

let lastupdatehp= document.querySelector('#date-time-hp');
lastupdatehp.innerText = `${hp.lastupdatedtime}`;


// goa


let goaname = document.querySelector('#st-name-goa');
goaname.innerText = `${goa.state}`;

let goaactive = document.querySelector('#goa-active');
goaactive.innerText = `${goa.active}`;

let goacnf = document.querySelector('#goa-case');
goacnf.innerText = `${goa.confirmed}`;

let goarec = document.querySelector('#goa-rec');
goarec.innerText = `${goa.recovered}`;

let goadeath = document.querySelector('#goa-death');
goadeath.innerText = `${goa.deaths}`;

let goanew= document.querySelector('#goa-new');
goanew.innerText = `${goa.deltaconfirmed}`;

let lastupdategoa= document.querySelector('#date-time-goa');
lastupdategoa.innerText = `${goa.lastupdatedtime}`;


// puducherry

let pyname = document.querySelector('#st-name-py');
pyname.innerText = `${py.state}`;

let pyactive = document.querySelector('#py-active');
pyactive.innerText = `${py.active}`;

let pycnf = document.querySelector('#py-case');
pycnf.innerText = `${py.confirmed}`;

let pyrec = document.querySelector('#py-rec');
pyrec.innerText = `${py.recovered}`;

let pydeath = document.querySelector('#py-death');
pydeath.innerText = `${py.deaths}`;

let pynew= document.querySelector('#py-new');
pynew.innerText = `${py.deltaconfirmed}`;

let lastupdatepy= document.querySelector('#date-time-py');
lastupdatepy.innerText = `${py.lastupdatedtime}`;

// tripura

let triname = document.querySelector('#st-name-tri');
triname.innerText = `${tr.state}`;

let triactive = document.querySelector('#tri-active');
triactive.innerText = `${tr.active}`;

let tricnf = document.querySelector('#tri-case');
tricnf.innerText = `${tr.confirmed}`;

let trirec = document.querySelector('#tri-rec');
trirec.innerText = `${tr.recovered}`;

let trideath = document.querySelector('#tri-death');
trideath.innerText = `${tr.deaths}`;

let trinew= document.querySelector('#tri-new');
trinew.innerText = `${tr.deltaconfirmed}`;

let lastupdatetri= document.querySelector('#date-time-tri');
lastupdatetri.innerText = `${tr.lastupdatedtime}`;


// manipur

let maniname = document.querySelector('#st-name-mani');
maniname.innerText = `${mani.state}`;

let maniactive = document.querySelector('#mani-active');
maniactive.innerText = `${mani.active}`;

let manicnf = document.querySelector('#mani-case');
manicnf.innerText = `${mani.confirmed}`;

let manirec = document.querySelector('#mani-rec');
manirec.innerText = `${mani.recovered}`;

let manideath = document.querySelector('#mani-death');
manideath.innerText = `${mani.deaths}`;

let maninew= document.querySelector('#mani-new');
maninew.innerText = `${mani.deltaconfirmed}`;

let lastupdatemani= document.querySelector('#date-time-mani');
lastupdatemani.innerText = `${mani.lastupdatedtime}`;

// Chandigarh

let cghname = document.querySelector('#st-name-cgh');
cghname.innerText = `${cgh.state}`;

let cghactive = document.querySelector('#cgh-active');
cghactive.innerText = `${cgh.active}`;

let cghcnf = document.querySelector('#cgh-case');
cghcnf.innerText = `${cgh.confirmed}`;

let cghrec = document.querySelector('#cgh-rec');
cghrec.innerText = `${cgh.recovered}`;

let cghdeath = document.querySelector('#cgh-death');
cghdeath.innerText = `${cgh.deaths}`;

let cghnew= document.querySelector('#cgh-new');
cghnew.innerText = `${cgh.deltaconfirmed}`;

let lastupdatecgh= document.querySelector('#date-time-cgh');
lastupdatecgh.innerText = `${cgh.lastupdatedtime}`;

// ar

let arname = document.querySelector('#st-name-ar');
arname.innerText = `${ar.state}`;

let aractive = document.querySelector('#ar-active');
aractive.innerText = `${ar.active}`;

let arcnf = document.querySelector('#ar-case');
arcnf.innerText = `${ar.confirmed}`;

let arrec = document.querySelector('#ar-rec');
arrec.innerText = `${ar.recovered}`;

let ardeath = document.querySelector('#ar-death');
ardeath.innerText = `${ar.deaths}`;

let arnew= document.querySelector('#ar-new');
arnew.innerText = `${ar.deltaconfirmed}`;

let lastupdatear= document.querySelector('#date-time-ar');
lastupdatear.innerText = `${ar.lastupdatedtime}`;


// meghalaya ml

let mlname = document.querySelector('#st-name-ml');
mlname.innerText = `${ml.state}`;

let mlactive = document.querySelector('#ml-active');
mlactive.innerText = `${ml.active}`;

let mlcnf = document.querySelector('#ml-case');
mlcnf.innerText = `${ml.confirmed}`;

let mlrec = document.querySelector('#ml-rec');
mlrec.innerText = `${ml.recovered}`;

let mldeath = document.querySelector('#ml-death');
mldeath.innerText = `${ml.deaths}`;

let mlnew= document.querySelector('#ml-new');
mlnew.innerText = `${ml.deltaconfirmed}`;

let lastupdateml= document.querySelector('#date-time-ml');
lastupdateml.innerText = `${ml.lastupdatedtime}`;


// meghalaya ml

let nlname = document.querySelector('#st-name-nl');
nlname.innerText = `${nl.state}`;

let nlactive = document.querySelector('#nl-active');
nlactive.innerText = `${nl.active}`;

let nlcnf = document.querySelector('#nl-case');
nlcnf.innerText = `${nl.confirmed}`;

let nlrec = document.querySelector('#nl-rec');
nlrec.innerText = `${nl.recovered}`;

let nldeath = document.querySelector('#nl-death');
nldeath.innerText = `${nl.deaths}`;

let nlnew= document.querySelector('#nl-new');
nlnew.innerText = `${nl.deltaconfirmed}`;

let lastupdatenl= document.querySelector('#date-time-nl');
lastupdatenl.innerText = `${nl.lastupdatedtime}`;

// ladakh

let laname = document.querySelector('#st-name-la');
laname.innerText = `${la.state}`;

let laactive = document.querySelector('#la-active');
laactive.innerText = `${la.active}`;

let lacnf = document.querySelector('#la-case');
lacnf.innerText = `${la.confirmed}`;

let larec = document.querySelector('#la-rec');
larec.innerText = `${la.recovered}`;

let ladeath = document.querySelector('#la-death');
ladeath.innerText = `${la.deaths}`;

let lanew= document.querySelector('#la-new');
lanew.innerText = `${la.deltaconfirmed}`;

let lastupdatela= document.querySelector('#date-time-la');
lastupdatela.innerText = `${la.lastupdatedtime}`;

// sikkim

let skname = document.querySelector('#st-name-sk');
skname.innerText = `${sk.state}`;

let skactive = document.querySelector('#sk-active');
skactive.innerText = `${sk.active}`;

let skcnf = document.querySelector('#sk-case');
skcnf.innerText = `${sk.confirmed}`;

let skrec = document.querySelector('#sk-rec');
skrec.innerText = `${sk.recovered}`;

let skdeath = document.querySelector('#sk-death');
skdeath.innerText = `${sk.deaths}`;

let sknew= document.querySelector('#sk-new');
sknew.innerText = `${sk.deltaconfirmed}`;

let lastupdatesk= document.querySelector('#date-time-sk');
lastupdatesk.innerText = `${sk.lastupdatedtime}`;


// andamannicobar an

let anname = document.querySelector('#st-name-an');
anname.innerText = `${an.state}`;

let anactive = document.querySelector('#an-active');
anactive.innerText = `${an.active}`;

let ancnf = document.querySelector('#an-case');
ancnf.innerText = `${an.confirmed}`;

let anrec = document.querySelector('#an-rec');
anrec.innerText = `${an.recovered}`;

let andeath = document.querySelector('#an-death');
andeath.innerText = `${an.deaths}`;

let annew= document.querySelector('#an-new');
annew.innerText = `${an.deltaconfirmed}`;


// mizo
let mzname = document.querySelector('#state-name-mz');
mzname.innerText =`${mz.state}`;

let mzactive = document.querySelector('#mz-active');
mzactive.innerText = `${mz.active}`;

let mzcnf = document.querySelector('#mz-case');
mzcnf.innerText = `${mz.confirmed}`;

let mzrec = document.querySelector('#mz-rec');
mzrec.innerText = `${mz.recovered}`;

let mzdeath = document.querySelector('#mz-death');
mzdeath.innerText = `${mz.deaths}`;

let mznew= document.querySelector('#mz-new');
mznew.innerText = `${mz.deltaconfirmed}`;

let lastupdatemz= document.querySelector('#date-time-mz');
lastupdatemz.innerText = `${mz.lastupdatedtime}`;

// daman diu

let dnname = document.querySelector('#st-name-dn');
dnname.innerText =`${dn.state}`;

let dnactive = document.querySelector('#dn-active');
dnactive.innerText = `${dn.active}`;

let dncnf = document.querySelector('#dn-case');
dncnf.innerText = `${dn.confirmed}`;

let dnrec = document.querySelector('#dn-rec');
dnrec.innerText = `${dn.recovered}`;

let dndeath = document.querySelector('#dn-death');
dndeath.innerText = `${dn.deaths}`;

let dnnew= document.querySelector('#dn-new');
dnnew.innerText = `${dn.deltaconfirmed}`;

// lakshwadeep

let ldname = document.querySelector('#st-name-ld');
ldname.innerText =`${ld.state}`;

let ldactive = document.querySelector('#ld-active');
ldactive.innerText = `${ld.active}`;

let ldcnf = document.querySelector('#ld-case');
ldcnf.innerText = `${ld.confirmed}`;

let ldrec = document.querySelector('#ld-rec');
ldrec.innerText = `${ld.recovered}`;

let lddeath = document.querySelector('#ld-death');
lddeath.innerText = `${ld.deaths}`;

let ldnew= document.querySelector('#ld-new');
ldnew.innerText = `${ld.deltaconfirmed}`;

let lastupdateld= document.querySelector('#date-time-ld');
lastupdateld.innerText = `${ld.lastupdatedtime}`;

}

// async function getcovidapiState()
// {
//     const statedata = await fetch('https://api.covid19india.org/data.json');
//     const statejsdata = await statedata.json();
//     console.log(statejsdata);
// }
getcovidapiIn();
// getcovidapiState();

// function getResults(jsdata)
// {
//     let country-name = document.querySelector('#country-name');
//     country-name.innerText = `${jsdata.Countries[76].Country}`;
// }



