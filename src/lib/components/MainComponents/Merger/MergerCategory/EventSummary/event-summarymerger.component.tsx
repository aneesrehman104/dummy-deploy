import React, { useEffect, useState } from "react";
import styles from "./event-summary.module.css";
import dynamic from "next/dynamic";
import Image from "next/image";
import Skeleton from "@mui/material/Skeleton";
import { getApiWithoutAuth } from "@lib/ts/api";
import { URLs } from "@/lib/ts/apiUrl";
import { GraphDataInterface } from "@/lib/ts/interface";
import { initialGraphData } from "@/lib/ts/initialState";
const DynamicChart = dynamic(
  () => import("@/lib/components/CommonComponents/ListingTrackGraph"),
  {
    ssr: false,
    loading: () => <Skeleton variant="rounded" height={200} />,
  }
);
const EventSummary=()=>{ 
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [graphData, setGraphData] = useState<GraphDataInterface<any>>(initialGraphData);
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
  const getStatsData = async () => {
    const response = await getApiWithoutAuth(URLs.spacGraph);
    if (response.status === 200 && response.data !== null) {
      setGraphData(response.data);

      setIsLoading(false);
    } else {
      setIsLoading(false);
    }
  };
  useEffect(() => {
    getStatsData();
  }, []);

  return (
    <section className={styles.sectionsummarycontainer}>
      <div className={styles.sectiondatasummary}>
        <div className={styles.ytdSummary}>
          <div className={styles.ytdEventSummary}>2023 Merger Stats</div>
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
            <div className={styles.frameGroup}>
              <div className={styles.container}>
                <div>X</div>
                <div>Label</div>
              </div>
              <div className={styles.container}>
                <div>X</div>
                <div>Label</div>
              </div>
            </div>
            <div className={styles.indicator} />
            <div className={styles.eventsummaryinfo}>
              <div className={styles.text}>
                Lorem ipsum dolor sit amet consectetur. Turpis pretium ut
                elementum quisque parturie. Turpis pretium ut elementum quisque
                parturie.
              </div>
              <div className={styles.titlebottom}>COMPARISON</div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

export default EventSummary;
