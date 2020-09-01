
google.charts.load("current", {packages:["corechart"]});

google.charts.setOnLoadCallback(drawChart);
function drawChart() {
  var data = google.visualization.arrayToDataTable([
    ['Task', 'Hours per Day'],
    ['Confirmed',    285000],
    ['Recovered',      166000],
    ['Deaths',  3781]
  ]);

  var options = {
    title: ' ',
    pieHole: 0.4,
  };

  var chart = new google.visualization.PieChart(document.getElementById('donutchart'));
  chart.draw(data, options);
}
