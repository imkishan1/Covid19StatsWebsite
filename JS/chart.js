
async function getcoviddata(){
    const url ='https://api.covid19india.org/data.json';
    const jsonyeardata = await fetch(url);
    const graphdata = await jsonyeardata.json();

    const xlen = Object.keys(graphdata.cases_time_series).length;
    var i=0;
 
    var xaxis=[];
    var yaxis=[];
    var dailyrecoverd=[];
    for(i=(xlen-31);i<(xlen);i++)
    {

         yaxis.push(graphdata.cases_time_series[i].dailyconfirmed); 
        date = graphdata.cases_time_series[i].dateymd;
        var vals = date.split('-');
        var year = vals[0];
        var month = vals[1];
        var day = vals[2];
        var newdate = vals[2]+'-'+vals[1];
        xaxis.push(newdate);
        dailyrecoverd.push(graphdata.cases_time_series[i].dailyrecovered);       
        // xaxis.push(graphdata.cases_time_series[i].dateymd);
    
    }

    var ctx = document.getElementById('myChart').getContext('2d');
    var myChart = new Chart(ctx, {
        type: 'line',
        data: {
            
            labels: xaxis,
            datasets: [{
                label: 'No. of confirmed cases [Daily]',
                data: yaxis,
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)'
                   
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    // 'rgba(54, 162, 235, 1)',
                    // 'rgba(255, 206, 86, 1)',
                    // 'rgba(75, 192, 192, 1)',
                    // 'rgba(153, 102, 255, 1)',
                    // 'rgba(255, 159, 64, 1)'
                ],
                borderWidth: 1
            },
            {
                label: 'Daily recovered cases',
                data: dailyrecoverd,
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                   
                ],
                borderColor: [
                    // 'rgba(255, 99, 132, 1)',
                    // 'rgba(54, 162, 235, 1)',
                    // 'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    // 'rgba(153, 102, 255, 1)',
                    // 'rgba(255, 159, 64, 1)'
                ],
                borderWidth: 1
            }
        
        ]
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
