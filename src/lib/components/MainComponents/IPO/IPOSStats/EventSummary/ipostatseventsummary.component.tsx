import React, { useEffect, useState } from "react";
import styles from "./event-summary.module.css";
import dynamic from "next/dynamic";
import Image from "next/image";
import Skeleton from "@mui/material/Skeleton";
import { getApiWithoutAuth } from "@lib/ts/api";
import { URLs } from "@/lib/ts/apiUrl";
import { GraphDataInterface } from "@/lib/ts/interface";
import { initialGraphData } from "@/lib/ts/initialState";
import { getODataWithParams } from "@lib/ts/api";
import axios, { AxiosError } from "axios";
import { EventsContainer } from "@/lib/components/CommonComponents/EventsContainer/events.component";
const DynamicChart = dynamic(
  () => import("@/lib/components/CommonComponents/ListingTrackGraph"),
  {
    ssr: false,
    loading: () => <Skeleton variant="rounded" height={200} />,
  }
);
interface PROPS {}

const IpoStatsEventSummary: React.FC<PROPS> = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [graphData, setGraphData] =
    useState<GraphDataInterface>(initialGraphData);
  const options = {
    chart: {
      type: "line",
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
      text: graphData.dataset.Title,
    },
    xAxis: {
      categories: graphData.dataset.XAxis?.Labels,
      title: {
        text: graphData.dataset.XAxis?.Title,
      },
    },
    yAxis: {
      opposite: true,
      title: {
        text: `${graphData.dataset.YAxis?.Title} (${graphData.dataset?.YAxis?.Unit})`,
      },
      max: graphData.dataset.YAxis?.MaxValue,
    },

    credits: {
      enabled: false,
    },
    legend: {
      align: "start",
      verticalAlign: "bottom",
      layout: "horizontal",
    },
    series: graphData.dataset.SeriesData?.map((series) => ({
      name: series.Name,
      data: graphData.dataset.XAxis.Labels.map((month, index) => {
        const point = series.DataPoints.find((point) => point.X === index);
        return point ? point.Y : null;
      }),
      // add a color property for each series if you want
    })),
  };

  const events = [
    {
      name: "IPOS",
      value: "200",
      id: "ps22Wdq1",
    },
    {
      name: "Announced Mergers",
      value: "100",
      id: "ps22Wdq2",
    },
    {
      name: "Closed Mergers",
      value: "100",
      id: "ps22Wdq3",
    },
    {
      name: "Liquidations",
      value: "100",
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
      title="2023 SPACs Stats"
      options={options}
      isLoading={isLoading}
      events={events}
    />
  );
};

export default IpoStatsEventSummary;
