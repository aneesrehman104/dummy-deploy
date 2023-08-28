import React, { useEffect, useState } from "react";
import styles from "./event-summary.module.css";
import dynamic from "next/dynamic";
import Image from "next/image";
import Skeleton from "@mui/material/Skeleton";
import { getODataWithParams } from "@lib/ts/api";
import { URLs } from "@/lib/ts/apiUrl";
import { GraphDataInterface } from "@/lib/ts/interface";
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
  const [graphData, setGraphData] = useState<GraphDataInterface>({
    additional_dataset: {},
    dataset: [],
  });
  // chart options
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
      text: "",
    },
    xAxis: {
      categories: [
        "JAN",
        "FEB",
        "MAR",
        "APR",
        "MAY",
        "JUN",
        "JUL",
        "AUG",
        "SEP",
        "OCT",
        "NOV",
        "DEC",
      ],
    },
    yAxis: {
      opposite: true,
      title: {
        text: null, // or text: ''
      },
    },

    credits: {
      enabled: false,
    },
    legend: {
      align: "start",
      verticalAlign: "bottom",
      layout: "horizontal",
    },
    series: [
      {
        name: "IPOS",
        data: graphData?.dataset
          ?.filter((item) => item.event === "IPO")
          ?.map((item) => item.data),
        color: "#F19529",
      },
      {
        name: "SPACS",
        data: graphData?.dataset
          ?.filter((item) => item.event === "SPAC")
          ?.map((item) => item.data),
        color: "#7F98F3",
      },
      {
        name: "MERGERS",
        data: graphData?.dataset
          ?.filter((item) => item.event === "Merger")
          ?.map((item) => item.data),
        color: "#9747FF",
      },
    ],
  };

  useEffect(() => {
    const source = axios.CancelToken.source();

    const getStatsData = async () => {
      setIsLoading(true);

      try {
        const response = await getODataWithParams(URLs.ipoOdata, {
          cancelToken: source.token,
        });

        if (response.status === 200 && response.data !== null) {
          setGraphData(response.data);
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
