import React from "react";
import Highcharts from 'highcharts/highstock';
import HighchartsReact from 'highcharts-react-official';
import { EventChartSpacs } from "@/lib/ts/interface";
function EventCharts({options}: EventChartSpacs) {
  return (
    <HighchartsReact highcharts={Highcharts} options={options} />    
  );
}

export default EventCharts;
