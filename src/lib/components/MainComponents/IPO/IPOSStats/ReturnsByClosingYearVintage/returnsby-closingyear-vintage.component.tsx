import React, { useEffect, useState } from "react";
import styles from "./returnsby-closingyear-vintage.module.css";
import dynamic from "next/dynamic";
import Image from "next/image";
import Skeleton from "@mui/material/Skeleton";
import { URLs } from "@/lib/ts/apiUrl";
import { GraphDataInterface, LineChart } from "@/lib/ts/interface";
import { initialGraphData } from "@/lib/ts/initialState";
import { getApiWithoutAuth, getODataWithParams } from "@lib/ts/api";
import axios, { AxiosError } from "axios";
import * as Highcharts from "highcharts";
import { EventsContainer } from "@/lib/components/CommonComponents/EventsContainer/events.component";
const DynamicChart = dynamic(
  () => import("@/lib/components/CommonComponents/ListingTrackGraph"),
  {
    ssr: false,
    loading: () => <Skeleton variant="rounded" height={200} />,
  }
);
interface PROPS {}

const ReturnsByClosingYearVintage: React.FC<PROPS> = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [graphData, setGraphData] =
    useState<GraphDataInterface<LineChart>>(initialGraphData);

  const options = {
    chart: {
      //type: "line",
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
      text: "This chart compares the performance of IPOs across Listing Type (Traditional IPOs, De-SPACs, & Direct Listings)",
      align: "left",
      style: {
        fontSize: "16px",
        fontWeight: "lighter",
        fontFamily: "Barlow Condensed",
      },
      //text: graphData.dataset.Title,
    },
    xAxis: {
      categories: ["2020", "2021", "2022", "2023"],
    },
    yAxis: {
      title: {
        text: "Current Average Return from IPO Price",
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

    // xAxis: {
    //   categories: graphData.dataset.XAxis?.Labels,
    //   title: {
    //       text: graphData.dataset.XAxis?.Title,
    //   },
    // },
    // yAxis: {
    //   opposite: true,
    //   title: {
    //       text: `${graphData.dataset.YAxis?.Title} (${graphData.dataset?.YAxis?.Unit})`,
    //   },
    //   max: graphData.dataset.YAxis?.MaxValue,
    // },
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
      // headerFormat: '<span style="font-size:11px">{series.name}</span><br>',
      // pointFormat:
      //   '<span style="color:{point.color}">{point.name}</span>: <b>{point.y:.2f}</b> of total<br/>',
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
    // legend: {
    //   align: "start",
    //   verticalAlign: "bottom",
    //   layout: "horizontal",
    // },
    series: [
      {
        name: "De-SPAC",
        data: [-0.05, 0.1, 0.25, -0.5],
      },
      {
        name: "Traditional IPO",
        data: [0.08, -0.06, -0.8, 0.25],
      },
      {
        name: "Direct Lisitng",
        data: [0.12, 0.13, 0.25, 0.05],
      },
    ],
    // series: graphData.dataset.SeriesData?.map((series) => ({
    //     name: series.Name,
    //     data: graphData.dataset.XAxis.Labels.map((month, index) => {
    //         const point = series.DataPoints.find(
    //             (point) => point.X === index
    //         );
    //         return point ? point.Y : null;
    //     }),
    //     // add a color property for each series if you want
    // })),
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
        const response = await getApiWithoutAuth(URLs.ipoOverviewChart, {
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
