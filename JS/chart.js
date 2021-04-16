

async function getcoviddata(){
    const url ='https://api.covid19india.org/data.json';
    const jsonyeardata = await fetch(url);
    const graphdata = await jsonyeardata.json();
    console.log("this is graph data");
    console.log(graphdata);
    const xlen = Object.keys(graphdata.cases_time_series).length;
    var i=0;
 
    var xaxis;
    var yaxis;
    for(i=(xlen-31);i<(xlen);i++)
    {
         yaxis = graphdata.cases_time_series[i].dailyconfirmed;
        
        // console.log(yaxis);
        xaxis = graphdata.cases_time_series[i].dateymd;
        // console.log(xaxis);
        
        xlables.push(xaxis);
        ylables.push(yaxis);
        // console.log(yaxis,xaxis);
    }
   
    console.log(xlables);
    console.log(ylables);

}
const xlables =[];
const ylables =[];
getcoviddata();
chartIt();

async function chartIt(){
const ctx = document.getElementById('myChart').getContext('2d');
const myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: xlables,
        datasets: [{
            label: 'Covid Cases last 30days',
            data: ylables ,
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
               
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
              
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});
}