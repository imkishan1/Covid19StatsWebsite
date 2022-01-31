console.log("connected...")
async function getchartcovid(){
    const url = 'https://data.covid19bharat.org/v4/min/timeseries.min.json';
    const urljson = await fetch(url);
    const charturl = await urljson.json();
    for(let key in charturl)
    {
        console.log(charturl[key]);
    }
    console.log(charturl);
    const keys  =  Object.keys(charturl);
    console.log(keys)
    let datanew=getchartcovid()
    console.log(datanew[keys[12]])
    return charturl;
   
}




chartform(datanew);