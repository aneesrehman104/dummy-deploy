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
    useState<GraphDataInterface<any>>(initialGraphData);

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
          text: graphData.dataset.title?.text,
      },
      xAxis: {
          categories: graphData.dataset.xAxis?.categories,
          title: {
              text: graphData.dataset.xAxis?.title.text
          },
      },
      yAxis: {
          opposite: true,
          title: {
              text: `${graphData.dataset.yAxis?.title.text}`,
          },
          //max: graphData.dataset.YAxis?.MaxValue,
      },

      credits: {
          enabled: false,
      },
      legend: {
          align: "start",
          verticalAlign: "bottom",
          layout: "horizontal",
      },
      series: graphData.dataset.series,
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
        const response = await getApiWithoutAuth(URLs.ipoOverviewChart);

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
      title="IPO & Merger YTD Summary"
      options={options}
    />
  );
};

export default HomeEventSummary;
