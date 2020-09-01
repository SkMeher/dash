google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(curvedraw);

function curvedraw() {
  var data = google.visualization.arrayToDataTable([
    ['Year', 'Death', 'Recovered'],
    ['April',  10,      400],
    ['May',  30,      460],
    ['June',  660,       11120],
    ['August',  1030,      12540]
  ]);

  var options = {
    title: ' ',
    curveType: 'function',
    legend: { position: 'bottom' }
  };

  var chart = new google.visualization.LineChart(document.getElementById('curve_chart'));

  chart.draw(data, options);
}