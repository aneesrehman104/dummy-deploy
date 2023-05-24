import React from "react";
import styles from "./event-summary.module.css";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

function EventSummary() {
  const options = {
    responsive: true,
    elements: {
      point: {
        radius: 0,
      },
    },
    layout: {
      padding: {
        left: 30,
        right: 30,
        top: 20,
        bottom: 20,
      },
    },
    plugins: {
      title: {
        display: false,
      },
      legend: {
        position: "bottom" as "bottom",
        align: "start" as "start",
        labels: {
          boxWidth: 12,
          boxHeight: 2,
        },
      },
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
        ticks: {
          padding: 10, 
        },
      },
      y: {
        position: "right" as "right",
        ticks: {
          padding: 15,
        },
      },
    },
  };
  const labels = [
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
  ];

  const data = {
    labels,
    datasets: [
      {
        label: "IOPS",
        type: "line" as const,
        data: [10, 150, 20, 10, 133, 188, 500, 10, 150, 20, 10, 133, 188],
        borderColor: "#F19529",
        backgroundColor: "#F19529",
        borderWidth: 2,
      },
      {
        label: "SPACS",
        type: "line" as const,
        data: [1, 50, 200, 150, 33, 88, 300, 1, 50, 200, 150, 33, 300],
        borderColor: "#7F98F3",
        backgroundColor: "#7F98F3",
        borderWidth: 2,
      },
      {
        type: "line" as const,
        label: "MERGERS",
        borderColor: "#9747FF",
        backgroundColor: "#9747FF",
        borderWidth: 2,
        fill: false,
        data: [1, 550, 100, 130, 33, 88, 600, 1, 50, 200, 150, 88],
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
        <Line data={data} options={options} />
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
