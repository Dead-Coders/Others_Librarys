const ctx = document.getElementById('myChart')
      
new Chart(ctx, {
  type: 'line',
  data: {
    labels: ['Python', 'React', 'Vue', 'C', 'C++', 'Flutter', 'Nodejs', 'Express js' , 'Angular', 'Javascript', 'Java' , 'ReactNative', 'Dart'],
    datasets: [{
      label: 'Programming languages',
      data: [12, 19, 7, 15, 13, 9, 11, 5, 16, 8, 14,10, 20],
      fill: false,
      borderColor: 'rgb(75, 192, 192)',
      borderWidth: 3,
      backgroundColor:["red", "blue" , "green", "yellow", 'gray','orange','aqua']
    }]
  },
  options: {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: 'Chart.js Line Chart - Cubic interpolation mode'
      }
    },
}
});