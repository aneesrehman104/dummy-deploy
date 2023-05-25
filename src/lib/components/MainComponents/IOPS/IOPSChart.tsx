import React from "react";
import Highcharts from 'highcharts/highstock';
import HighchartsReact from 'highcharts-react-official';

type Props = {
  options: object | any
}

function IOPSChart({options}: Props) {
  return (
    <HighchartsReact highcharts={Highcharts} constructorType={'stockChart'} options={options.chartOptions} />
    
  );
}

export default IOPSChart;
