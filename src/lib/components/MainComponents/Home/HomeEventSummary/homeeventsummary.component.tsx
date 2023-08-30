import React, { useEffect, useState } from "react";
import { getApiWithoutAuth } from "@lib/ts/api";
import { URLs } from "@/lib/ts/apiUrl";
import { GraphDataInterface } from "@/lib/ts/interface";
import { initialGraphData } from "@/lib/ts/initialState";
import axios, { AxiosError } from "axios";
import { EventsContainer } from "@CommonComponents/EventsContainer/events.component";

const jsonResponse = "application/json";
interface PROPS {}

const HomeEventSummary: React.FC<PROPS> = () => {
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
      value: "100",
      name: "IPOS",
      id: "e2ccaqpw10",
    },
    {
      value: "200",
      name: "ANNOUNCED MERGERS",
      id: "e2ccaqpw11",
    },
    {
      value: "300",
      name: "CLOSED MERGERS",
      id: "e2ccaqpw12",
    },
    {
      value: "400",
      name: "LIQUIDATION",
      id: "e2ccaqpw13",
    },
  ];

  useEffect(() => {
    const source = axios.CancelToken.source();

    const getStatsData = async () => {
      setIsLoading(true);

      try {
        //TODO: getting IPO data just for development. We need to point to a home controller graph endpoint
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
      isLoading={isLoading}
      events={events}
      title="2023 SPACS STATS"
      options={options}
    />
  );
};

export default HomeEventSummary;
