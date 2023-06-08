import React from "react";
import styles from "./event-summary.module.css";
import dynamic from "next/dynamic";
import Image from "next/image";
import { homeConstants, weekName } from "@/lib/ts/constants";
import Skeleton from "@mui/material/Skeleton";
const DynamicChart = dynamic(() => import("./EventsChart"), {
  ssr: false,
  loading: () => <Skeleton variant="rounded" height={200} />,
});
function ChartTitle() {
  return (
    <div className={styles.ytdEventSummary}>{homeConstants.chartTitle}</div>
  );
}

function ChartBottomSide() {
  return (
    <div className={styles.chartBottomSide}>
      <div className={styles.chartBottomSideInnerDiv}>
        <div className={styles.titleText}>
          <div>52</div>
          <div>{homeConstants.IOPS}</div>
        </div>
        <div className={styles.titleText}>
          <div>30</div>
          <div>{homeConstants.SPACS}</div>
        </div>
        <div className={styles.titleText}>
          <div>30</div>
          <div>{homeConstants.MERGERS}</div>
        </div>
      </div>
      <div className={styles.indicator} />
      <div className={styles.eventsummaryinfo}>
        <div className={styles.text}>{homeConstants.details}</div>
        <div className={styles.titlebottom}>{homeConstants.COMPARISON}</div>
      </div>
    </div>
  );
}

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
      text: "2022 YTD Event Summary",
    },
    xAxis: {
      categories: weekName,
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
        name: homeConstants.IOPS,
        data: [10, 150, 20, 10, 133, 188, 500, 10, 150, 20, 10, 188],
        color: "#F19529",
      },
      {
        name: homeConstants.SPACS,
        data: [1, 50, 200, 150, 33, 88, 300, 1, 50, 200, 150, 300],
        color: "#7F98F3",
      },
      {
        name: homeConstants.MERGERS,
        data: [1, 550, 100, 130, 33, 88, 600, 1, 50, 200, 150, 88],
        color: "#9747FF",
      },
    ],
  };

  return (
    <section className={styles.sectionsummarycontainer}>
      <div className={styles.sectiondatasummary}>
        <div className={styles.ytdSummary}>
          <ChartTitle />
          <Image src="/vector2.svg" alt="/vector2" width={12} height={12} />
        </div>
      </div>
      <div className={styles.chartcontainer}>
        <div style={{ width: "100%" }}>
          <DynamicChart options={options} />
        </div>
        <ChartBottomSide />
      </div>
    </section>
  );
}

export default EventSummary;
