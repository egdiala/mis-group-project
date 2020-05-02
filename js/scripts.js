let cha = document.getElementById('allchartsss')

cha.height = 100;

let allChartSchools = new Chart(cha, {
        type: 'bar',
        data : {
            labels :['First week', 'Second week ', 'Third Week', 'Fourth Week', 'Fifth Week', 'Sixth Week', 'Seventh week'],
            datasets : [
                {
                label : 'Seet',
                data : [20,21,5,6,19,2,9],
                backgroundColor: 'rgb(47,150,33)'
            },
            {
                label : 'SMAT',
                data : [2,23,6,19,15,21,3],
                backgroundColor :'rgb(20,167,108)'
            },
            {
                label : 'SAAT',
                data : [10,13,5,9,12,27,23],
                backgroundColor: 
                    'rgb(211,139,93)'
            
            },
            {
                label : 'SOBS',
                data : [1,13,30,21,15,3,7],
                backgroundColor: 'rgb(104,80,68)'

            },
            {
                label : 'SOES',
                data : [14,6,32,2,12,10,16],
                backgroundColor:
                    'rgb(152,36,40)'
            
            },
            {
                label : 'SOHT',
                data : [9,5,2,5,30,27,33],
                backgroundColor: 
                    'rgb(59,23,61)'
            },
            {
                label : 'SOPS',
                data : [5,16,17,20,1,22,5],
                backgroundColor: 'rgb(174,197,235)'
                    
            

            },
            {
                label : 'SCIT',
                data : [22,25,12,10,9,20,30],
                backgroundColor: 
                    'rgb(58,64,90)'
            

            }
        ]
    },
    options:{
        title:{
            display: true,
            text: 'Total Weekly Sales'
        },
        
    }
});




let seetChar = document.getElementById('seetChart').getContext('2d');

Chart.defaults.global.defaultFontFamily = 'Arial';
Chart.defaults.global.defaultFontColor = 'rgb(0,0,2)';

let seet = new Chart(seetChar, {
        type: 'horizontalBar',
        data : {
            labels :['First week', 'Second week ', 'Third Week', 'Fourth Week', 'Fifth Week', 'Sixth Week', 'Seventh week'],
            datasets : [
                {
                    label: 'Practical Manuals',
                data : [20,21,5,6,19,2,9],
                backgroundColor:
                    'rgb(47,150,33)',
                    /*'#14a76c',
                    '#d38b5d',
                    '#685044',
                    '#e9afa3',
                    '#f9dec9',
                    '#aec5eb'*/
                borderWidth: 1,
                borderColor: 'green'
            }
            
        ]
        
    },
    options:{
        title:{
            display: true,
            text: 'Weekly Sales in School of Engineering and Engineering Technology'
        },
        resposive: true,
        maintainAspectRatio: false,
    }
});

let smatChar = document.getElementById('smatChart').getContext('2d')

let smat = new Chart(smatChar, {
        type: 'horizontalBar',
        data : {
            labels :['First week', 'Second week ', 'Third Week', 'Fourth Week', 'Fifth Week', 'Sixth Week', 'Seventh week'],
            datasets : [
                {
                label : 'Practical Manuals',
                data : [2,23,6,19,15,21,3],
                backgroundColor:
                'rgb(20,167,108)',
                /*'#14a76c',
                '#d38b5d',
                '#685044',
                '#e9afa3',
                '#f9dec9',
                '#aec5eb'*/
                borderWidth: 1,
                borderColor: '#14a76c'
            }
            
        ]
    },
    options:{
        title:{
            display: true,
            text: 'Total Sales in School of Management Technology'
        },
        resposive: true,
        maintainAspectRatio: false,
    }
});

let saatChar = document.getElementById('saatChart').getContext('2d')

let saat = new Chart(saatChar, {
        type: 'horizontalBar',
        data : {
            labels :['First week', 'Second week ', 'Third Week', 'Fourth Week', 'Fifth Week', 'Sixth Week', 'Seventh week'],
            datasets : [
                {
                    label : 'Practical Manual',
                    data : [10,13,5,9,12,27,23],
                    backgroundColor:
                'rgb(211,139,93)',
                /*'#14a76c',
                '#d38b5d',
                '#685044',
                '#e9afa3',
                '#f9dec9',
                '#aec5eb'*/
                borderWidth: 1,
                borderColor: '#d38b5d'
            }
            
        ]
    },
    options:{
        title:{
            display: true,
            text: 'Total Sales in School of Agriculture aand Agricultural Technology'
        },
        resposive: true,
        maintainAspectRatio: false,
    }
});

let sobsChar = document.getElementById('sobsChart').getContext('2d')

let sobs = new Chart(sobsChar, {
        type: 'bar',
        data : {
            labels :['First week', 'Second week ', 'Third Week', 'Fourth Week', 'Fifth Week', 'Sixth Week', 'Seventh week'],
            datasets : [
                {
                    label : 'SOBS',
                    data : [1,13,30,21,15,3,7],
                    backgroundColor: 'rgb(104,80,68)',
                    borderWidth: 1,
                    borderColor: '#685044'
            }
            
        ]
    },
    options:{
        title:{
            display: true,
            text: 'Total Sales in School of Biological Sciences'
        }
    },
    options: {
        resposive: true,
        maintainAspectRatio: false,
    }
});

let soesChar = document.getElementById('soesChart').getContext('2d')
let soes = new Chart(soesChar, {
    type: 'horizontalBar',
    data : {
        labels :['First week', 'Second week ', 'Third Week', 'Fourth Week', 'Fifth Week', 'Sixth Week', 'Seventh week'],
        datasets : [
            {
                label : 'Practical Manuals',
                data : [14,6,32,2,12,10,16],
                backgroundColor : 'rgb(152,36,40)'
        }
        
    ]
},
options:{
    title:{
        display: true,
        text: 'Total Sales in School of Environmental Sciences'
    }
},
options: {
    resposive: true,
    maintainAspectRatio: false,
}
});

let sohtChar = document.getElementById('sohtChart').getContext('2d')

let soht = new Chart(sohtChar, {
        type: 'horizontalBar',
        data : {
            labels :['First week', 'Second week ', 'Third Week', 'Fourth Week', 'Fifth Week', 'Sixth Week', 'Seventh week'],
            datasets : [
                
                {
                    label : 'Practical Manuals',
                    data : [9,5,2,5,30,27,33],
                    backgroundColor: 'rgb(59,23,61)'
            }
        ]
    },
    options: {
        resposive: true,
        maintainAspectRatio: false,
        title:{
            display: true,
            text: 'Weekly Sales in School of Health Technology'
        }
    }
});

let sopsChar = document.getElementById('sopsChart').getContext('2d')

let sops = new Chart(sopsChar, {
        type: 'horizontalBar',
        data : {
            labels :['First week', 'Second week ', 'Third Week', 'Fourth Week', 'Fifth Week', 'Sixth Week', 'Seventh week'],
            datasets : [
                {
                    label : 'Practical Manuals',
                    data : [5,16,17,20,1,22,5],
                    backgroundColor: 'rgb(174,197,235)'
            }
        ]
    },
    options:{
        title: {
            display: true,
            text: 'Weekly Sales in School of Physical Sciences'
        },
        resposive: true,
        maintainAspectRatio: false,
    }
});

let scitChar = document.getElementById('scitChart').getContext('2d')

let scit = new Chart(scitChar, {
        type: 'horizontalBar',
        data : {
            labels :['First week', 'Second week ', 'Third Week', 'Fourth Week', 'Fifth Week', 'Sixth Week', 'Seventh week'],
            datasets : [
                {
                    label : 'Practical Manuals',
                    data : [22,25,12,10,9,20,30],
                    backgroundColor: 'rgb(58,64,90)'
            }
        ]
    },
    options:{
        title: {
            display: true,
            text:'Weekly Sales in School of Computing and Information Technology'
        },
        resposive: true,
        maintainAspectRatio: false,
    }
});

