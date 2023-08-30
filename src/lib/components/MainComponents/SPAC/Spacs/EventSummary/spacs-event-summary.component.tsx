import React, { useEffect, useState } from "react";
import styles from "./event-summary.module.css";
import dynamic from "next/dynamic";
import Image from "next/image";
import Skeleton from "@mui/material/Skeleton";
import { URLs } from "@/lib/ts/apiUrl";
import { GraphDataInterface, ChartOptions } from "@/lib/ts/interface";
import { getODataWithParams } from "@lib/ts/api";
import axios, { AxiosError } from "axios";
import { initialGraphData } from "@/lib/ts/initialState";
const DynamicChart = dynamic(
  () => import("@/lib/components/CommonComponents/ListingTrackGraph"),
  {
    ssr: false,
    loading: () => <Skeleton variant="rounded" height={200} />,
  }
);

interface PROPS {}

const SpacsEventSummary: React.FC<PROPS> = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [graphData, setGraphData] = useState<GraphDataInterface<any>>(initialGraphData);

  const options: ChartOptions = {
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
        data: null,
        color: "#F19529",
      },
      {
        name: "SPACS",
        data: null,
        color: "#7F98F3",
      },
      {
        name: "MERGERS",
        data: null,
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
      <div className={styles.sectiondatasummary}>
        <div className={styles.ytdSummary}>
          <header className={styles.SpacsytdEventSummary}>
            2023 SPACs Stats
          </header>
          <Image src="/vector2.svg" alt="/vector2" width={12} height={12} />
        </div>
      </div>
      <div className={styles.chartcontainer}>
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
            <>
              <div className={styles.container}>
                <div> {graphData?.additional_dataset?.IPO}</div>
                <div>IPOS</div>
              </div>
              <div className={styles.container}>
                <div> {graphData?.additional_dataset?.Announced_Mergers}</div>

                <div>ANNOUNCED MERGERS</div>
              </div>
              <div className={styles.container}>
                <div> {graphData?.additional_dataset?.Closed_Mergers}</div>

                <div>CLOSED MERGERS</div>
              </div>
              <div className={styles.container}>
                <div> {graphData?.additional_dataset?.Liquidations}</div>

                <div>LIQUIDATIONS</div>
              </div>
            </>
          </div>
        )}
      </div>
    </section>
  );
};

export default SpacsEventSummary;
