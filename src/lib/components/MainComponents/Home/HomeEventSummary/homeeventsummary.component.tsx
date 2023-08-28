import React, { useEffect, useState } from "react";
import styles from "./event-summary.module.css";
import dynamic from "next/dynamic";
import Image from "next/image";
import Skeleton from "@mui/material/Skeleton";
import { getApiWithoutAuth, getODataWithParams } from "@lib/ts/api";
import { URLs } from "@/lib/ts/apiUrl";
import { GraphDataInterface } from "@/lib/ts/interface";
import { initialGraphData } from "@/lib/ts/initialState";
import axios, { AxiosError } from "axios";
import Vector2 from "@public/vector2.svg";

const jsonResponse = "application/json";
interface PROPS {}

const AggregationContainer: React.FC<{ value: string; name: string }> = ({
  value,
  name,
}) => {
  return (
    <div className={styles.container}>
      <div>{value}</div>
      <div>{name}</div>
    </div>
  );
};

const DynamicChart = dynamic(
  () => import("@/lib/components/CommonComponents/ListingTrackGraph"),
  {
    ssr: false,
    loading: () => <Skeleton variant="rounded" height={200} />,
  }
);
const HomeEventSummary: React.FC<PROPS> = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [graphData, setGraphData] = useState<GraphDataInterface>(initialGraphData);
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
          const point = series.DataPoints.find(
              (point) => point.X === index
          );
          return point ? point.Y : null;
      }),
      // add a color property for each series if you want
  })),
  };

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
    <section className={styles.sectionsummarycontainer}>
      <main className={styles.sectiondatasummary}>
        <div className={styles.ytdSummary}>
          <div className={styles.ytdEventSummary}>2023 Spacs Stats</div>
          <Image src={Vector2} alt="/vector2" width={12} height={12} />
        </div>
      </main>
      <main className={styles.chartcontainer}>
        <div style={{ width: "100%" }}>
          <DynamicChart options={options} />
        </div>
        {isLoading ? (
          <>
            <Skeleton variant="rounded" height={25} width={"100%"} />
            <Skeleton variant="rounded" height={25} width={"100%"} />
          </>
        ) : (
          <div className={styles.frameParent}>
            <AggregationContainer value="100" name="IPOS" />
            <AggregationContainer value="200" name="ANNOUNCED MERGERS" />
            <AggregationContainer value="300" name="CLOSED MERGERS" />
            <AggregationContainer value="400" name="LIQUIDATION" />
          </div>
        )}
      </main>
    </section>
  );
};

export default HomeEventSummary;