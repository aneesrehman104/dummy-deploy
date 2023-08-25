import React, { useState } from "react";
import Highcharts from "highcharts/highstock";
import HighchartsReact from "highcharts-react-official";
import { EvenetChart } from "@/lib/ts/interface";

interface IChartOptions {
  chart: {
    type: string;
    height: number;
    width: number;
    marginTop: number;
    marginBottom: number;
    plotBackgroundColor: string | null;
    renderTo: string;
    animation: boolean;
    zooming: {
      mouseWheel: {
        enabled: boolean;
      };
    };
  };
  title: {
    text: string;
  };
  xAxis: {
    visible: boolean;
  };
  yAxis: {
    visible: boolean;
  };

  credits: {
    enabled: boolean;
  };
  legend: {
    enabled: boolean;
  };
  tooltip: {
    enabled: boolean;
  };
  series: [
    {
      data: any[];
      color: string;
      marker: {
        enabled: boolean; // Set marker.enabled to false to remove the dots
        states: {
          hover: {
            enabled: boolean; // Disable hover state marker
          };
        };
      };
    }
  ];
}

const EventCharts = ({ data }: EvenetChart) => {
  const [options, setOptions] = useState<IChartOptions>({
    chart: {
      type: "line",
      height: 26,
      width: 93,
      marginTop: 0,
      marginBottom: 0,
      plotBackgroundColor: null,
      renderTo: "container",
      animation: false,
      zooming: {
        mouseWheel: {
          enabled: false,
        },
      },
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
  });

  return <HighchartsReact highcharts={Highcharts} options={options} />;
};

export default EventCharts;
