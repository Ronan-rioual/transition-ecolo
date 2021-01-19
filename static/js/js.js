Highcharts.chart('container', {
    chart: {
      type: 'bar'
    },
    title: {
      text: 'Grand Débat National sur la transition écologique'
    },
    subtitle: {
      text: 'Source: gouv.fr'
    },
    xAxis: {
      categories: ["Diriez-vous que votre vie quotidienne est aujourd'hui touchée par le changement climatique ?", 
                "Par rapport à votre mode de chauffage actuel, pensez-vous qu'il existe des solutions alternatives plus écologiques ?", 
                "À titre personnel, pensez-vous pouvoir contribuer à protéger l'environnement ?"],
      title: {
        text: null
      }
    },
    yAxis: {
      min: 0,
      title: {
        text: 'nombre de votes',
        align: 'high'
      },
      labels: {
        overflow: 'justify'
      }
    },
    tooltip: {
      valueSuffix: ' votes'
    },
    plotOptions: {
      bar: {
        dataLabels: {
          enabled: true
        }
      }
    },
    legend: {
      layout: 'vertical',
      align: 'right',
      verticalAlign: 'top',
      x: -40,
      y: 80,
      floating: true,
      borderWidth: 1,
      backgroundColor:
        Highcharts.defaultOptions.legend.backgroundColor || '#FFFFFF',
      shadow: true
    },
    credits: {
      enabled: false
    },
    series: [{
      name: 'Oui',
      data: [52697, 45088, 74801]
    }, {
      name: 'Non',
      data: [26586, 30254, 4450]
    }]
  });