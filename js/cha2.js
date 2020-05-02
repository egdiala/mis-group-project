Chart.defaults.global.defaultFontFamily = 'Arial';
Chart.defaults.global.defaultFontColor = 'white';


let chart = document.getElementById('chart1')

chart.height = 250;

let allChart = new Chart(chart, {
        type: 'bar',
        data : {
            labels :['SEET', 'SMAT ', 'SAAT', 'SOBS', 'SOES', 'SOHT', 'SOPS','SCIT'],
            datasets : [
                {
                label : 'Total Sales',
                data : [82,89,99,90,92,111,87,128],
                backgroundColor: [
                    'rgb(47,150,33)',
                    'rgb(20,167,108)',
                    'rgb(211,139,93)',
                    'rgb(104,80,68)',
                    'rgb(152,36,40)',
                    'rgb(59,23,61)',
                    'rgb(174,197,235)',
                    'rgb(58,64,90)'
            ]
            }
            
        ]
    },
    options: {
        resposive: true,
        maintainAspectRatio: false,
    },
    options:{
        title:{
            display: true,
            text: 'Total Sales in Schools'
        },
        legend:{
            display: false
        }
        
    }
});
let chart2 = document.getElementById('chart2')

chart2.height = 250;

let staffs = new Chart(chart2, {
        type: 'doughnut',
        data : {
            labels :['Mr. Diala', 'Mrs Onwuama'],
            datasets : [
                {
                label : 'Total Staff Sales',
                data : [401, 369],
                backgroundColor: [
                    'rgb(152,0,0)','#ffffff']
            }
            
        ]
        
    },
    options:{
        title:{
            display: true,
            text: 'Sales By Staff'
        },
        legend:{
            position: 'right'
        },
        resposive: true,
        maintainAspectRatio: false,
        segmentShowStroke: false,
        elements:{
            arc:{
                borderWidth: 0
            }
        }
        
    }
});
