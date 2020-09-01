google.charts.load('current', {'packages':['corechart']});
    google.charts.setOnLoadCallback(drawVisualization);

    function drawVisualization() {
      // Some raw data (not necessarily accurate)
      var data = google.visualization.arrayToDataTable([
        ['Month', 'Bolivia', 'Brazil', 'USA',  'Average'],
        ['27 Apr',  84,      4613,         22042,           614.6],
        ['24 May',  348,      15813,        20253,           682],
        ['20 Jun',  977,      34666,        31963,           623],
        ['17 Jul',  1946,      34177,        7581,            609.4],
        ['13 aug',  1388,      60091,         51355,           569.6]
      ]);

      var options = {
        title : ' ',
        vAxis: {title: 'confirms'},
        hAxis: {title: 'Month'},
        seriesType: 'bars',
        series: {5: {type: 'line'}}        };

      var chart = new google.visualization.ComboChart(document.getElementById('chart_div'));
      chart.draw(data, options);
    }