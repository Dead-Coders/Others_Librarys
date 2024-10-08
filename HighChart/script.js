document.addEventListener('DOMContentLoaded',() =>{
    Highcharts.chart("con",{
        title:{
            text:"height chart"
        },
        xAxis:{
            categories:['2000','2001','2002','2003','2004','2005']
        },
        yAxis:{
            title:{
                text:"Height in cm"
            }
        },

        tooltip:{
            shadow:false,
            backgroundColor:"#3333",

            formatter:function(){
                return "my height is "+ this.y +"cm"
            },
        },
        series:[
            {
                name:"Abdullah",
                data:[160, 173, 145, 156, 190, 148]
            },
            {
                name:"Ahmad",
                data:[140, 170, 179, 185, 198, 138]
            }
        ]
    })
})


// document.addEventListener('DOMContentLoaded',() =>{
//     // Data retrieved from https://olympics.com/en/olympic-games/beijing-2022/medals
// Highcharts.chart('con', {
//     chart: {
//         type: 'pie',
//         options3d: {
//             enabled: true,
//             alpha: 45
//         }
//     },
//     title: {
//         text: 'Beijing 2022 gold medals by country',
//         align: 'left'
//     },
//     subtitle: {
//         text: '3D donut in Highcharts',
//         align: 'left'
//     },
//     plotOptions: {
//         pie: {
//             innerSize: 100,
//             depth: 45
//         }
//     },
//     series: [{
//         name: 'Medals',
//         data: [
//             ['Norway', 16],
//             ['Germany', 12],
//             ['USA', 8],
//             ['Sweden', 8],
//             ['Netherlands', 8],
//             ['ROC', 6],
//             ['Austria', 7],
//             ['Canada', 4],
//             ['Japan', 3]

//         ]
//     }]
// });

// })


