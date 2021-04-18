
async function getcoviddata(){
    const url ='https://api.covid19india.org/data.json';
    const jsonyeardata = await fetch(url);
    const graphdata = await jsonyeardata.json();

    const xlen = Object.keys(graphdata.cases_time_series).length;
    var i=0;
 
    var xaxis=[];
    var yaxis=[];
    for(i=(xlen-31);i<(xlen);i++)
    {
         yaxis.push(graphdata.cases_time_series[i].dailyconfirmed);        
        xaxis.push(graphdata.cases_time_series[i].dateymd);
    
    }

    var ctx = document.getElementById('myChart').getContext('2d');
    var myChart = new Chart(ctx, {
        type: 'line',
        data: {
            
            labels: xaxis,
            datasets: [{
                label: 'Number of daily confirmed cases',
                data: yaxis,
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                   
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)'
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


getcoviddata();

