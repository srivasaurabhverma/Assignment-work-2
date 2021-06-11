new Chart(document.getElementById("dougnt-1"), {
  type: "doughnut",
  data: {
    labels: ["HTML", "CSS", "JS"],
    datasets: [
      {
        backgroundColor: [
          "rgb(255,0,0)",
          "rgb(229,229,229)",
          "rgb(255,255,255)",
        ],
        data: [70, 20, 10],
      },
    ],
  },
  options: {
    responsive: false,
    plugins: {
      legend: {
        display: false,
        labels: {
          color: "rgb(255, 99, 132)",
        },
      },
    },
    rotation: 188,
  },
});

new Chart(document.getElementById("dougnt-2"), {
  type: "doughnut",
  data: {
    labels: ["HTML", "CSS", "JS"],
    datasets: [
      {
        backgroundColor: [
          "rgb(255,0,0)",
          "rgb(229,229,229)",
          "rgb(255,255,255)",
        ],
        data: [60, 30, 10],
      },
    ],
  },
  options: {
    responsive: false,
    plugins: {
      legend: {
        display: false,
        labels: {
          color: "rgb(255, 99, 132)",
        },
      },
    },
    rotation: 180,
  },
});

new Chart(document.getElementById("line-chart1"), {
  type: "line",
  data: {
    labels: ["9am", "1am", "5am", "9pm", "1am", "5am"],
    datasets: [
      {
        data: [65, 59, 80, 81, 56, 55],
        borderColor: "rgb(73,152,194)",
        fill: false,
        tension: 0.2,
      },
    ],
  },
  options: {
    responsive: false,
    title: {
      display: true,
      text: "World population per region (in millions)",
    },

    plugins: {
      legend: {
        display: false,
        labels: {
          color: "rgb(255, 99, 132)",
        },
      },
    },
    scales: {
      y: {
        grid: {
          display: false,
        },
        ticks: {
          callback: function (value, index, values) {
            return value + " A";
          },
        },
      },
      x: {
        grid: {
          display: false,
        },
      },
    },
  },
});

new Chart(document.getElementById("line-2-1st"), {
  type: "line",
  data: {
    labels: ["9am", "1am", "5am", "9pm", "1am", "5am"],
    datasets: [
      {
        data: [50, 45, 80, 60, 90, 40],
        borderColor: "rgb(73,152,194)",
        fill: false,
        tension: 0.5,
      },
    ],
  },
  options: {
    responsive: false,
    title: {
      display: true,
      text: "World population per region (in millions)",
    },

    plugins: {
      legend: {
        display: false,
        labels: {
          color: "rgb(255, 99, 132)",
        },
      },
    },
    scales: {
      y: {
        grid: {
          display: false,
        },
        ticks: {
          callback: function (value, index, values) {
            return value + " C";
          },
        },
      },
      x: {
        grid: {
          display: false,
        },
      },
    },
  },
});

new Chart(document.getElementById("bar"), {
  type: "bar",
  data: {
    labels: ["9am", "1am", "5am", "9pm", "1am", "5am"],
    datasets: [
      {
        label: "Avg Current",
        backgroundColor: "#4F98C3",
        data: [50, 45, 80, 60, 90, 40],
      },
      {
        label: "Temprature",
        backgroundColor: "rgb(255,0,0)",
        data: [50, 45, 80, 60, 90, 40],
      },
    ],
  },
  options: {
    title: {
      display: true,
      text: "Population growth (millions)",
    },

    responsive: false,
  },
});
