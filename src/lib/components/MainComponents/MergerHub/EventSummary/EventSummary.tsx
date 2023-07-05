import React from "react";
import styles from "./event-summary.module.css";
import dynamic from "next/dynamic";
import Image from "next/image";
import Skeleton from "@mui/material/Skeleton";

const DynamicChart = dynamic(() => import("@/lib/components/CommonComponents/ListingTrackGraph"), {
  ssr: false,
  loading: () => <Skeleton variant="rounded" height={200} />,
});

function EventSummary() {
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
        name: "Announced",
        data: [10, 150, 20, 10, 133, 188, 500, 10, 150, 20, 10, 188],
        color: "#F19529",
      },
      {
        name: "Closed",
        data: [1, 50, 200, 150, 33, 88, 300, 1, 50, 200, 150, 300],
        color: "#7F98F3",
      },
      {
        name: "Terminated",
        data: [1, 550, 100, 130, 33, 88, 600, 1, 50, 200, 150, 88],
        color: "#9747FF",
      },
    ],
  };

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
        <div className={styles.frameParent}>
          <div className={styles.container}>
            <div>52</div>
            <div>ANNOUNCED MERGERS</div>
          </div>
          <div className={styles.container}>
            <div>30</div>
            <div>CLOSED MERGERS</div>
          </div>
          <div className={styles.container}>
            <div>5</div>
            <div>TERMINATED MERGERS</div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default EventSummary;
