$(function () {
  /* ChartJS
   * -------
   * Data and config for chartjs
   */
  'use strict';
  var data = {
    labels: ["1993", "1998", "2003", "2008", "2013"],
    datasets: [{
      label: 'Income',
      data: [6000, 2300, 4200, 4800, 6000],
      backgroundColor: [
        'rgba(39, 23, 201, 1)',
        'rgba(39, 23, 201, 1)',
        'rgba(39, 23, 201, 1)',
        'rgba(39, 23, 201, 1)',
        'rgba(39, 23, 201, 1)',
      ],
      borderColor: [
        'rgba(39, 23, 201, 1)',
        'rgba(39, 23, 201, 1)',
        'rgba(39, 23, 201, 1)',
        'rgba(39, 23, 201, 1)',
        'rgba(39, 23, 201, 1)',
      ],
      borderWidth: 1,
      fill: false
    },
    {
      label: 'Expence',
      data: [4500, 3500, 4700, 3700, 4000],
      backgroundColor: [
        'rgba(92, 59, 196, 0.32)',
        'rgba(92, 59, 196, 0.32)',
        'rgba(92, 59, 196, 0.32)',
        'rgba(92, 59, 196, 0.32)',
        'rgba(92, 59, 196, 0.32)',
      ],
      borderColor: [
        'rgba(92, 59, 196, 0.32)',
        'rgba(92, 59, 196, 0.32)',
        'rgba(92, 59, 196, 0.32)',
        'rgba(92, 59, 196, 0.32)',
        'rgba(92, 59, 196, 0.32)',
      ],
      borderWidth: 1,
      fill: false
    }]
  };
  var options = {
    scales: {
      yAxes: [{
        ticks: {
          beginAtZero: true
        },
        gridLines: {
          drawBorder: false,
          display: true,
          color: "rgba(135, 150, 165, 0.15)",
        },
      }],
      xAxes: [{
        ticks: {
          beginAtZero: true
        },
        gridLines: {
          drawBorder: false,
          display: false,
        },
      }]
    },
    legend: {
      display: false
    },
    legendCallback: function(chart) {
      var text = [];
      text.push('<div class="row mt-2">');
      for (var i = 0; i < chart.data.datasets.length; i++) {
          text.push('<div class="col-sm-5 mr-3 ml-3 ml-sm-0 mr-sm-0 pr-md-0 mt-3"><div class="row align-items-center"><div class="col-2"><span class="legend-label" style="background-color:' + chart.data.datasets[i].backgroundColor[i] + '"></span></div><div class="col-9"><p class="text-dark m-0">' + chart.data.datasets[i].label + '</p></div></div>');
          text.push('</div>');
      }
      text.push('</div>');
      return text.join("");
    },
    elements: {
      point: {
        radius: 0
      }
    }

  };

  var overallChartData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "nov", "dec"],
    datasets: [{
      label: 'first label',
      data: [20, 30, 20, 35, 25, 30, 25, 30, 25, 20, 27, 22],
      backgroundColor: [
        'rgba(254, 181, 104, 1)',
      ],
      borderColor: [
        'rgba(254, 181, 104, 1)',
      ],
      borderWidth: 4,
      fill: true,
      pointBorderWidth: 0,
      pointRadius: [0, 0, 0, 0, 0],
      pointHoverRadius: [0, 0, 0, 0, 0],

    },
    {
      label: 'second label',
      data: [30, 40, 30, 40, 35, 40, 28, 40, 35, 37, 32, 39],
      backgroundColor: [
        'rgba(242,18,94, 1)',
      ],
      borderColor: [
        'rgba(242,18,94, 1)',
      ],
      borderWidth: 4,
      fill: true,
      pointBorderWidth: 0,
      pointRadius: [0, 0, 0, 0, 0],
      pointHoverRadius: [0, 0, 0, 0, 0],

    },
    {
      label: 'third label',
      data: [40, 45, 40, 45,37, 50, 45, 50, 40, 43, 38, 48],
      borderColor: [
        'rgba(39,23,201,1)',
      ],
      backgroundColor: [
        'rgba(39,23,201,1)',
      ],
      borderWidth: 4,
      fill: true,
      pointBorderWidth: 4,
      pointRadius: [0, 0, 0, 0, 0],
      pointHoverRadius: [0, 0, 0, 0, 0],
    }
    ],
  };

  var overallChartOptions = {
    scales: {
      yAxes: [{
        display: false
      }],
      xAxes: [{
        display: false,
        position: 'bottom',
        gridLines: {
          drawBorder: false,
          display: false,
        },
        ticks: {
          beginAtZero: false,
          stepSize: 0
        }
      }],


    },
    legend: {
      display: false,
    },
    elements: {
      point: {
        radius: 0
      },
      line: {
        tension: 0.000001
      }
    },
    tooltips: {
      backgroundColor: 'rgba(2, 171, 254, 1)',
    }
  };

  var detailedReportData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "sep"],
    datasets: [{
      label: 'first label',
      data: [30, 20, 25, 30, 31, 20, 25, 18, 28],
      backgroundColor: [
        'rgba(10,207,151, .2)',
      ],
      borderColor: [
        'rgba(10,207,151, 1)',
      ],
      borderWidth: 2,
      fill: true,
      pointBorderWidth: 0,
      pointRadius: [0, 0, 0, 0, 0],
      pointHoverRadius: [0, 0, 0, 0, 0],

    },
    ],
  };

  var detailedReportOptions = {
    scales: {
      yAxes: [{
        display: false
      }],
      xAxes: [{
        display: false,
        position: 'bottom',
        gridLines: {
          drawBorder: false,
          display: false,
        },
        ticks: {
          beginAtZero: false,
          stepSize: 0
        }
      }],
    },
    legend: {
      display: false,
    },
    elements: {
      point: {
        radius: 0
      },
    },
    tooltips: {
      backgroundColor: 'rgba(2, 171, 254, 1)',
    }
  };
  var barChartStackedData = {
    labels: ["jan", "feb", "mar", "apr", "may"],
    datasets: [{
      label: 'Safari',
      data: [10,20,15,30,20],
      backgroundColor: [
        'rgba(39, 23, 201, 1)',
        'rgba(39, 23, 201, 1)',
        'rgba(39, 23, 201, 1)',
        'rgba(39, 23, 201, 1)',
        'rgba(39, 23, 201, 1)',
      ],
      borderColor: [
        'rgba(39, 23, 201, 1)',
        'rgba(39, 23, 201, 1)',
        'rgba(39, 23, 201, 1)',
        'rgba(39, 23, 201, 1)',
        'rgba(39, 23, 201, 1)',
      ],
      borderWidth: 1,
      fill: false
    },
    {
      label: 'Chrome',
      data: [5,25,10,20,30],
      backgroundColor: [
        'rgba(235,235,235)',
        'rgba(235,235,235)',
        'rgba(235,235,235)',
        'rgba(235,235,235)',
        'rgba(235,235,235)',
      ],
      borderColor: [
        'rgba(235,235,235)',
        'rgba(235,235,235)',
        'rgba(235,235,235)',
        'rgba(235,235,235)',
        'rgba(235,235,235)',
      ],
      borderWidth: 1,
      fill: false
    }]
  };
  var barChartStackedOptions = {
    scales: {
      xAxes: [{
        stacked: true,
        gridLines: {
          display: false //this will remove only the label
      },
      }],
      yAxes: [{
        stacked: true,
        display: false,
      }]
    },
    legend: {
      display: false,
      position: "bottom"
    },
    legendCallback: function(chart) {
      var text = [];
      text.push('<div class="row">');
      for (var i = 0; i < chart.data.datasets.length; i++) {
        text.push('<div class="col-sm-5 mr-3 ml-3 ml-sm-0 mr-sm-0 pr-md-0 mt-3"><div class="row align-items-center"><div class="col-2"><span class="legend-label" style="background-color:' + chart.data.datasets[i].backgroundColor[i] + '"></span></div><div class="col-9"><p class="text-dark m-0">' + chart.data.datasets[i].label + '</p></div></div>');
        text.push('</div>');
      }
      text.push('</div>');
      return text.join("");
    },
    elements: {
      point: {
        radius: 0
      }
    }

  };
  var barChartStackedDarkData = {
    labels: ["jan", "feb", "mar", "apr", "may"],
    datasets: [{
      label: 'Safari',
      data: [10,20,15,30,20],
      backgroundColor: [
        'rgba(39, 23, 201, 1)',
        'rgba(39, 23, 201, 1)',
        'rgba(39, 23, 201, 1)',
        'rgba(39, 23, 201, 1)',
        'rgba(39, 23, 201, 1)',
      ],
      borderColor: [
        'rgba(39, 23, 201, 1)',
        'rgba(39, 23, 201, 1)',
        'rgba(39, 23, 201, 1)',
        'rgba(39, 23, 201, 1)',
        'rgba(39, 23, 201, 1)',
      ],
      borderWidth: 1,
      fill: false
    },
    {
      label: 'Chrome',
      data: [5,25,10,20,30],
      backgroundColor: [
        'rgba(135,140,158)',
        'rgba(135,140,158)',
        'rgba(135,140,158)',
        'rgba(135,140,158)',
        'rgba(135,140,158)',
      ],
      borderColor: [
        'rgba(135,140,158)',
        'rgba(135,140,158)',
        'rgba(135,140,158)',
        'rgba(135,140,158)',
        'rgba(135,140,158)',
      ],
      borderWidth: 1,
      fill: false
    }]
  };
  var barChartStackedDarkOptions = {
    scales: {
      xAxes: [{
        stacked: true,
        gridLines: {
          display: false //this will remove only the label
      },
      }],
      yAxes: [{
        stacked: true,
        display: false,
      }]
    },
    legend: {
      display: false,
      position: "bottom"
    },
    legendCallback: function(chart) {
      var text = [];
      text.push('<div class="row">');
      for (var i = 0; i < chart.data.datasets.length; i++) {
        text.push('<div class="col-sm-5 mr-3 ml-3 ml-sm-0 mr-sm-0 pr-md-0 mt-3"><div class="row align-items-center"><div class="col-2"><span class="legend-label" style="background-color:' + chart.data.datasets[i].backgroundColor[i] + '"></span></div><div class="col-9"><p class="text-dark m-0">' + chart.data.datasets[i].label + '</p></div></div>');
        text.push('</div>');
      }
      text.push('</div>');
      return text.join("");
    },
    elements: {
      point: {
        radius: 0
      }
    }

  };

  var doughnutPieData = {
    datasets: [{
      data: [30, 10,10,50],
      backgroundColor: [
        'rgb(39,23,201)',
        'rgb(23,201,100)',
        'rgb(242,18,94)',
        'rgb(255,131,0)',
          
      ],
      borderColor: [
        'rgb(39,23,201)',
        'rgb(23,201,100)',
        'rgb(242,18,94)',
        'rgb(255,131,0)',
      ],
    }],

    // These labels appear in the legend and in the tooltips when hovering different arcs
    labels: [
      'Orders',
      'Users',
      'Visitors',
      'Downloads',
    ]
  };
  var doughnutPieOptions = {
    responsive: true,
    animation: {
      animateScale: true,
      animateRotate: true
    },legend: {
      display: false,
      position: "bottom"
    },
    
  };
  // Get context with jQuery - using jQuery's .get() method.
  if ($("#barChart").length) {
    var barChartCanvas = $("#barChart").get(0).getContext("2d");
    // This will get the first returned node in the jQuery collection.
    var barChart = new Chart(barChartCanvas, {
      type: 'bar',
      data: data,
      options: options
    });
    document.getElementById('chart-legendsBar').innerHTML = barChart.generateLegend();
  }
  if ($("#overallChart").length) {
    var lineChartCanvas = $("#overallChart").get(0).getContext("2d");
    var saleschart = new Chart(lineChartCanvas, {
      type: 'line',
      data: overallChartData,
      options: overallChartOptions
    });
  }
  if ($("#detailedReport").length) {
    var lineChartCanvas = $("#detailedReport").get(0).getContext("2d");
    var saleschart = new Chart(lineChartCanvas, {
      type: 'line',
      data: detailedReportData,
      options: detailedReportOptions
    });
  }
  if ($('#circleProgress1').length) {
    var bar = new ProgressBar.Circle(circleProgress1, {
        color: '#5c3bc4',
        strokeWidth: 10,
        trailWidth: 10,
        easing: 'easeInOut',
        duration: 1400,
        width: 42,
        trailColor: '#f4f4f4',
    });
    bar.animate(.18); // Number from 0.0 to 1.0
}
if ($('#circleProgress2').length) {
    var bar = new ProgressBar.Circle(circleProgress2, {
        color: '#f2125e',
        strokeWidth: 10,
        trailWidth: 10,
        easing: 'easeInOut',
        duration: 1400,
        width: 42,

    });
    bar.animate(.36); // Number from 0.0 to 1.0
}
if ($('#circleProgressDark1').length) {
  var bar = new ProgressBar.Circle(circleProgressDark1, {
      color: '#5c3bc4',
      strokeWidth: 10,
      trailWidth: 10,
      easing: 'easeInOut',
      duration: 1400,
      width: 42,
      trailColor: '#878c9e',
  });
  bar.animate(.18); // Number from 0.0 to 1.0
}
if ($('#circleProgressDark2').length) {
  var bar = new ProgressBar.Circle(circleProgressDark2, {
      color: '#f2125e',
      strokeWidth: 10,
      trailWidth: 10,
      easing: 'easeInOut',
      duration: 1400,
      width: 42,
      trailColor: '#878c9e',

  });
  bar.animate(.36); // Number from 0.0 to 1.0
}
if ($("#barChartStacked").length) {
  var barChartCanvas = $("#barChartStacked").get(0).getContext("2d");
  // This will get the first returned node in the jQuery collection.
  var barChart = new Chart(barChartCanvas, {
    type: 'bar',
    data: barChartStackedData,
    options: barChartStackedOptions
  });
  document.getElementById('chart-legends').innerHTML = barChart.generateLegend();
}
if ($("#barChartStackedDark").length) {
  var barChartCanvas = $("#barChartStackedDark").get(0).getContext("2d");
  // This will get the first returned node in the jQuery collection.
  var barChart = new Chart(barChartCanvas, {
    type: 'bar',
    data: barChartStackedDarkData,
    options: barChartStackedDarkOptions
  });
  document.getElementById('chart-legends').innerHTML = barChart.generateLegend();
}
if ($("#productCategory").length) {
  var pieChartCanvas = $("#productCategory").get(0).getContext("2d");
  var pieChart = new Chart(pieChartCanvas, {
    type: 'pie',
    data: doughnutPieData,
    options: doughnutPieOptions
  });
  document.getElementById('chart-legendsproduct').innerHTML = pieChart.generateLegend();
}
});