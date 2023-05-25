import React from "react";
import styles from "./event-summary.module.css";
import dynamic from "next/dynamic";
const DynamicChart = dynamic(() => import("./EventsChart"), {
  ssr: false,
  loading: () => <p>Loading...</p>,
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
      text: "2022 YTD Event Summary",
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
        name: "IOPS",
        data: [10, 150, 20, 10, 133, 188, 500, 10, 150, 20, 10, 188],
        color: "#F19529",
      },
      {
        name: "SPACS",
        data: [1, 50, 200, 150, 33, 88, 300, 1, 50, 200, 150, 300],
        color: "#7F98F3",
      },
      {
        name: "MERGERS",
        data: [1, 550, 100, 130, 33, 88, 600, 1, 50, 200, 150, 88],
        color: "#9747FF",
      },
    ],
  };

  return (
    <div className={styles.sectionsummarycontainer}>
      <div className={styles.sectiondatasummary}>
        <div className={styles.ytdSummary}>
          <div className={styles.ytdEventSummary}>2022 YTD Event Summary</div>
          <img className={styles.vectorIcon} alt="" src="/vector2.svg" />
        </div>
      </div>
      <div className={styles.chartcontainer}>
        <div style={{ width: "100%" }}>
          <DynamicChart options={options} />
        </div>
        <div className={styles.frameParent}>
          <div className={styles.frameGroup}>
            <div className={styles.parent}>
              <div className={styles.div}>52</div>
              <div className={styles.title2}>
                <div className={styles.titleTwo}>IPOs</div>
              </div>
            </div>
            <div className={styles.group}>
              <div className={styles.div1}>30</div>
              <div className={styles.title21}>
                <div className={styles.titleTwo}>spacs</div>
              </div>
            </div>
            <div className={styles.container}>
              <div className={styles.div2}>30</div>
              <div className={styles.title22}>
                <div className={styles.titleTwo}>mergers</div>
              </div>
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
      </div>
    </div>
  );
}

export default EventSummary;
