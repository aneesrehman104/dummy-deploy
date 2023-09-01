import React, { useEffect, useState } from "react";
import styles from "./returnsby-closingyear-vintage.module.css";
import dynamic from "next/dynamic";
import Image from "next/image";
import Skeleton from "@mui/material/Skeleton";
import { URLs } from "@/lib/ts/apiUrl";
import { GraphDataInterface, ColumnChart } from "@/lib/ts/interface";
import { initialGraphData } from "@/lib/ts/initialState";
import { getApiWithoutAuth, getODataWithParams } from "@lib/ts/api";
import axios, { AxiosError } from "axios";
import * as Highcharts from "highcharts";
import { EventsContainer } from "@/lib/components/CommonComponents/EventsContainer/events.component";

interface PROPS {}

const ReturnsByClosingYearVintage: React.FC<PROPS> = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [graphData, setGraphData] = useState<GraphDataInterface<ColumnChart>>(
    initialGraphData
  );

  const options = {
    chart: {
      type: "column",
      height: null,
      width: null,
      marginTop: 50,
      marginBottom: 90,
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
      text: graphData.dataset.title?.text,
      align: "left",
      style: {
        fontSize: "16px",
        fontWeight: "lighter",
        fontFamily: "Barlow Condensed",
      },
      //text: graphData.dataset.Title,
    },
    xAxis: {
      categories: graphData.dataset.xAxis?.categories,
    },
    yAxis: {
      title: {
        text: graphData.dataset.yAxis?.title.text,
      },
      labels: {
        formatter: function (): string {
          // Convert the label to a percentage format
          // @ts-ignore
          return Highcharts.numberFormat(this.value, 2) * 100 + "%";
        },
      },
      opposite: true,
    },
    credits: {
      enabled: false,
    },
    plotOptions: {
      column: {
        borderRadius: "5%",
      },
      series: {
        borderWidth: 0,
        dataLabels: {
          enabled: true,
          formatter: function (): string {
            // Convert the label to a percentage format
            // @ts-ignore
            return Highcharts.numberFormat(this.y, 2) * 100 + "%";
          },
        },
      },
    },
    tooltip: {
      pointFormat:
        '<span style="color:{point.color}">{point.name}</span>: <b>{point.y:.2f}</b> of total<br/>',
      formatter: function (): string {
        // @ts-ignore
        const point_color = this.point.color;
        // @ts-ignore
        const point_name = this.point.name;
        // @ts-ignore
        const point_series = this.series.name;
        // Convert the label to a percentage format
        // @ts-ignore
        const percentInfo = Highcharts.numberFormat(this.y, 2) * 100 + "%";
        const headerFormat = `<span style="font-size:11px">${point_series} Performance</span><br>`;
        const pointFormat = `<span style="color:${point_color}">${point_series}</span>: <b>${percentInfo}</b> of total<br/>`;

        return headerFormat + pointFormat;
      },
    },
    legend: {
      enabled: true,
    },
    series: graphData.dataset.series,
  };

  const events = [
    {
      name: "2020",
      value: "23",
      id: "ps22Wdq1",
    },
    {
      name: "2021",
      value: "100",
      id: "ps22Wdq2",
    },
    {
      name: "2022",
      value: "55",
      id: "ps22Wdq3",
    },
    {
      name: "2023",
      value: "14",
      id: "ps22Wdq4",
    },
  ];

  useEffect(() => {
    const source = axios.CancelToken.source();

    const getStatsData = async () => {
      setIsLoading(true);

      try {
        const response = await getApiWithoutAuth(URLs.ipoReturnsChart, {
          cancelToken: source.token,
        });
        if (response.status === 200 && response.data !== null) {
          setGraphData({
            dataset: response.data.source.dataset,
            additional_dataset: {},
          });
        }
      } catch (error) {
        if (axios.isCancel(error)) {
          console.log("Request cancelled:", (error as AxiosError).message);
        } else {
          console.error("An error occurred:", (error as AxiosError).message);
        }
      } finally {
        setIsLoading(false);
      }
    };

    getStatsData();

    return () => {
      source.cancel("Request cancelled due to component unmount");
    };
  }, []);

  return (
    <EventsContainer
      title="AVERAGE RETURNS FROM IPO PRICE BY LISTING TYPE AND LAUNCHED YEAR"
      options={options}
      events={events}
      isLoading={isLoading}
    />
  );
};

export default ReturnsByClosingYearVintage;
