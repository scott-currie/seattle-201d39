'use strict';

var allOfTheData = [
  {
    name: 'John',
    clicks: 17,
    views: 100,
  },
  {
    name: 'Cathy',
    clicks: 21,
    views: 33,
  },
  {
    name: 'Zach',
    clicks: 16,
    views: 60,
  },
  {
    name: 'Allie',
    clicks: 40,
    views: 44,
  },
];

function showChart() {
  // These will be separately fed to chart.js to draw the magic
  var labels = [];
  var voteData = [];
  var colors = [];

  // Calculate the pct totals (this could have been done as we click ...)
  for (var i = 0; i < allOfTheData.length; i++) {
    allOfTheData[i].pct = Math.round(
      (allOfTheData[i].clicks / allOfTheData[i].views) * 100
    );
  }

  // Sort based on the pct we just figured out
  allOfTheData.sort(function(a, b) {
    return b.pct - a.pct;
  });

  // Now, augment the vote data with labels and colors for the chart
  for (var i = 0; i < allOfTheData.length; i++) {
    labels.push(allOfTheData[i].name);
    voteData.push(allOfTheData[i].pct);

    // Colors could have just been part of the original object
    var randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
    colors.push(randomColor);
  }

  var context = document.getElementById('chart').getContext('2d');
  var myChart = new Chart(context, {
    type: 'horizontalBar',
    data: {
      labels: labels,
      datasets: [
        {
          label: 'Popularity (% of clicks)',
          data: voteData,
          backgroundColor: colors,
        },
      ],
    },
    options: {
      responsive: false,
      maintainAspectRatio: true,
      scales: {
        yAxes: [
          {
            ticks: {
              beginAtZero: true,
            },
          },
        ],
      },
    },
  });
}

showChart();
