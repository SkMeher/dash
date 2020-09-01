google.charts.load('current', {
    'packages':['geochart'],
    // Note: you will need to get a mapsApiKey for your project.
    // See: https://developers.google.com/chart/interactive/docs/basic_load_libs#load-settings
    'mapsApiKey': 'AIzaSyD-9tSrke72PouQMnMX-a7eZSW0jkFMBWY'
  });
  google.charts.setOnLoadCallback(drawRegionsMap);

  function drawRegionsMap() {
    var data = google.visualization.arrayToDataTable([
      ['Country', 'Popularity'],
      ['Bangladesh', 285000],
      ['India', 2770000],
      ['Brazil', 3410000],
      ['Canada', 123000],
      ['France', 221000],
      ['RU', 937000],
      ['Spain', 364000],
      ['Italy', 255000],
      ['US', 5510000],
      ['South Africa', 592000],
      ['China', 84888]
      
    ]);

    var options = {};

    var chart = new google.visualization.GeoChart(document.getElementById('regions_div'));

    chart.draw(data, options);
  }