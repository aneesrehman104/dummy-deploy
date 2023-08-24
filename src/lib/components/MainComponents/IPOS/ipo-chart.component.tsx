import React from "react";
import Highcharts from "highcharts/highstock";
import HighchartsReact from "highcharts-react-official";
import { EventChartSpacs } from "@/lib/ts/interface";

const IOPSChart = ({ options }: EventChartSpacs) => {
  return (
    <HighchartsReact
      highcharts={Highcharts}
      constructorType={"stockChart"}
      options={options.chartOptions}
    />
  );
};

export default IOPSChart;
