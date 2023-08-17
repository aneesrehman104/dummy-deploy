import React, { useEffect, useState } from "react";
import styles from "./event-summary.module.css";
import dynamic from "next/dynamic";
import Image from "next/image";
import Skeleton from "@mui/material/Skeleton";
import { getApiWithoutAuth } from "@lib/ts/api";
import { URLs } from "@/lib/ts/apiUrl";
import { GraphDataInterface } from "@/lib/ts/interface";
interface PROPS {}

const DynamicChart = dynamic(() => import("@/lib/components/CommonComponents/ListingTrackGraph"), {
  ssr: false,
  loading: () => <Skeleton variant="rounded" height={200} />,
});

const IpoHubEventSummary: React.FC<PROPS> = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [graphData, setGraphData] = useState<GraphDataInterface>({
    additional_dataset: {},
    dataset: [],
  });
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
        name: "Total",
        data: graphData?.dataset
          ?.filter((item) => item.event === "IPO")
          ?.map((item) => item.data),
        color: "#F19529",
      },
      {
        name: "Traditional",
        data: graphData?.dataset
          ?.filter((item) => item.event === "SPAC")
          ?.map((item) => item.data),
        color: "#7F98F3",
      },
      {
        name: "SPAC",
        data: graphData?.dataset
          ?.filter((item) => item.event === "Merger")
          ?.map((item) => item.data),
        color: "#9747FF",
      },
    ],
  };

  useEffect(() => {
    const getStatsData = async () => {
      const response = await getApiWithoutAuth(URLs.ipoGraph);
      if (response.status === 200 && response.data !== null) {
        setGraphData(response.data);
  
        setIsLoading(false);
      } else {
        setIsLoading(false);
      }
    };
    getStatsData();
  }, []);

  return (
    <section className={styles.sectionsummarycontainer}>
      <div className={styles.sectiondatasummary}>
        <div className={styles.ytdSummary}>
          <div className={styles.ytdEventSummary}>2023 IPO Overview</div>
          <Image src="/vector2.svg" alt="/vector2" width={12} height={12} style={{cursor:'pointer'}} />
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
                <div>total ipos</div>
              </div>
              <div className={styles.container}>
                <div> {graphData?.additional_dataset?.Announced_Mergers}</div>

                <div>traditional ipo</div>
              </div>
              <div className={styles.container}>
                <div> {graphData?.additional_dataset?.Closed_Mergers}</div>

                <div>SPAC IPOS</div>
              </div>
              <div className={styles.container}>
                <div> {graphData?.additional_dataset?.Liquidations}</div>

                <div>direct listings</div>
              </div>
            </>
          </div>
        )}
      </div>
    </section>
  );
}

export default IpoHubEventSummary;
