import React from "react";
import Highcharts from "highcharts/highstock";
import HighchartsReact from "highcharts-react-official";

type Props = {
  data: any;
};

function EventCharts({ data }: Props) {
  const options = {
    chart: {
      type: "line",
      height: 26,
      width: 93,
      marginTop: 0,
      marginBottom: 0,
      plotBackgroundColor: null,
      renderTo: "container",
      animation: false,
    },
    title: {
      text: "",
    },
    xAxis: {
      visible: false,
    },
    yAxis: {
      visible: false,
    },

    credits: {
      enabled: false,
    },
    legend: {
      enabled: false,
    },
    tooltip: {
      enabled: false,
    },
    series: [
      {
        data: data,
        color: "#7F98F3",
        marker: {
          enabled: false, // Set marker.enabled to false to remove the dots
          states: {
            hover: {
              enabled: false, // Disable hover state marker
            },
          },
        },
      },
    ],
  };

  return <HighchartsReact highcharts={Highcharts} options={options} />;
}

export default EventCharts;
