
async function getcoviddata(){
    const url ='https://api.covid19india.org/data.json';
    const jsonyeardata = await fetch(url);
    const graphdata = await jsonyeardata.json();

    const xlen = Object.keys(graphdata.cases_time_series).length;
    var i=0;
 
    var xaxis=[];
    var yaxis=[];
    var dailyrecoverd=[];
    var deaths=[];
    var avg;
    var sum=0;
    var mort=0;
    var avgmort;
    var recov=0;
    var avgrecov;
    for(i=(xlen-365);i<(xlen);i++)
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
        deaths.push(graphdata.cases_time_series[i].dailydeceased);      
        
    
    }

    for(i=(xlen-7);i<(xlen);i++)
    {
        sum = sum+ parseInt(graphdata.cases_time_series[i].dailyconfirmed);
        mort = mort + parseInt(graphdata.cases_time_series[i].dailydeceased);
        recov = recov + parseInt(graphdata.cases_time_series[i].dailyrecovered);
    }
    avgrecov = (Math.round(recov/7)).toString();
    avgmort = Math.round(mort/7).toString();
    avg = Math.round((sum)/7).toString();
  
    let sevendayavg = document.getElementById('avg');
    sevendayavg.innerText = `${avg.replace(/(\d)(?=(\d\d)+\d$)/g, "$1,")}`;

    let sevendayavgmort = document.getElementById('mort');
    sevendayavgmort.innerText = `${avgmort.replace(/(\d)(?=(\d\d)+\d$)/g, "$1,")}`;

    let sevendayavgrecov = document.getElementById('recov');
    sevendayavgrecov.innerText = `${avgrecov.replace(/(\d)(?=(\d\d)+\d$)/g, "$1,")}`;
    // console.log(avg);

    var ctx = document.getElementById('myChart').getContext('2d');
    var myChart = new Chart(ctx, {
        type: 'bar',
        data: {
            
            labels: xaxis,
            datasets: [{
                label: 'Daily Confirmed Cases',
                data: yaxis,
                backgroundColor: [
                    // 'rgba(255, 99, 132, 0.2)',
                    'rgba(214, 49, 82, 0.2)',
                 
                   
                ],
                borderColor: [
                    // 'rgba(255, 99, 132, 1)',
                    'rgba(214, 49, 82, 1)',
                
                ],
                borderWidth: 1
            },
            // {
            //     label: 'Daily Recovered Cases',
            //     data: dailyrecoverd,
            //     backgroundColor: [
            //         // 'rgba(255, 99, 132, 0.2)',
            //         'rgba(114, 194, 23, 0.2)'
                   
            //     ],
            //     borderColor: [
            //         // 'rgba(75, 192, 192, 1)',
            //         'rgba(114, 194, 23, 1)',
                    
            //     ],
            //     borderWidth: 1
            // }
        
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

    var ctx = document.getElementById('myChart2').getContext('2d');
    var myChart = new Chart(ctx, {
        type: 'bar',
        data: {
            // labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
            labels: xaxis,
            datasets: [
            {
                label: 'Daily Deceased',
                data: deaths,
                backgroundColor: [
                    // 'rgba(255, 99, 132, 0.2)',

                    // 'rgba(255, 7, 58, 0.2)'

                    'rgba(108, 117, 125, 0.2)',
                   
                ],
                borderColor: [
                    // 'rgba(255, 99, 132, 1)',
                    // 'rgba(54, 162, 235, 1)',
                    // 'rgba(255, 206, 86, 1)',

                    // 'rgba(255, 7, 58,1)',

                    'rgba(108, 117, 125, 1)',
                    
                    // 'rgba(75, 192, 192, 1)',
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

    var ctx = document.getElementById('myChart3').getContext('2d');
    var myChart = new Chart(ctx, {
        type: 'bar',
        data: {
            // labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
            labels: xaxis,
            datasets: [
            {
                label: 'Daily Recovered Cases',
                data: dailyrecoverd,
                backgroundColor: [
                    // 'rgba(255, 99, 132, 0.2)',
                    'rgba(114, 194, 23, 0.2)'
                   
                ],
                borderColor: [
                    // 'rgba(255, 99, 132, 1)',
                    // 'rgba(54, 162, 235, 1)',
                    // 'rgba(255, 206, 86, 1)',
                    'rgba(114, 194, 23, 1)',
                    // 'rgba(75, 192, 192, 1)',
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

