import React, { useEffect, useState } from "react";
import styles from "./returnsby-targetindustry.module.css";
import dynamic from "next/dynamic";
import Skeleton from "@mui/material/Skeleton";
import { getApiWithoutAuth, getODataWithParams } from "@lib/ts/api";
import { URLs } from "@/lib/ts/apiUrl";
import { GraphDataInterface, ChartOptions } from "@/lib/ts/interface";
import axios, { AxiosError } from "axios";
const DynamicChart = dynamic(
  () => import("@/lib/components/CommonComponents/ListingTrackGraph"),
  {
    ssr: false,
    loading: () => <Skeleton variant="rounded" height={200} />,
  }
);

interface PROPS {}
const ReturnsByTargetIndustry: React.FC<PROPS> = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [graphData, setGraphData] = useState<GraphDataInterface>({
    additional_dataset: {},
    dataset: [],
  });
  const options: ChartOptions = {
    chart: {
      type: "bar",
      height: 550,
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
      title: {
        text: null,
      },
    },
    yAxis: {
      opposite: true,
    },
    credits: {
      enabled: false,
    },
    legend: {
      align: "start",
      verticalAlign: "middle",
      layout: "vertical",
    },
    series: [
      {
        name: "IPOS",
        data:
          graphData?.dataset
            ?.filter((item) => item.event === "IPO")
            ?.map((item) => item.data) || null,
        color: "#F19529",
      },
      {
        name: "SPACS",
        data:
          graphData?.dataset
            ?.filter((item) => item.event === "SPAC")
            ?.map((item) => item.data) || null,
        color: "#7F98F3",
      },
      {
        name: "MERGERS",
        data:
          graphData?.dataset
            ?.filter((item) => item.event === "Merger")
            ?.map((item) => item.data) || null,
        color: "#9747FF",
      },
    ],
  };

  useEffect(() => {
    const source = axios.CancelToken.source();
    const getStatsData = async () => {
      setIsLoading(true);
      try {
        const response = await getODataWithParams(URLs.spacsReturns, {
          cancelToken: source.token,
        });
        if (response.status === 200 && response.data !== null) {
          setGraphData(response.data);
          setIsLoading(false);
        }
      } catch (error) {
        if (axios.isCancel(error)) {
          console.log("Request cancelled:", (error as AxiosError).message);
          setIsLoading(false);
        } else {
          console.error("An error occurred:", (error as AxiosError).message);
          setIsLoading(false);
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
    <main className={styles.sectionsummarycontainer}>
      <header className={styles.sectiondatasummary}>
        <div className={styles.ytdSummary}>
          <div className={styles.ytdEventSummary}>
            De-SPAC Returns by Target Industry (2022-2023 Closed Mergers)
          </div>
        </div>
      </header>
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
          <section className={styles.frameParent}>
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
          </section>
        )}
      </div>
    </main>
  );
};

export default ReturnsByTargetIndustry;
