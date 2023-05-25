import React from "react";
import Highcharts from 'highcharts/highstock';
import HighchartsReact from 'highcharts-react-official';

type Props = {
  options: object | any
}

function EventCharts({options}: Props) {
  return (
    <HighchartsReact highcharts={Highcharts} options={options} />    
  );
}

export default EventCharts;
