import React, { useEffect, useState } from "react";
import styles from "./ReturnsByClosingYearVintage.module.css";
import dynamic from "next/dynamic";
import Image from "next/image";
import Skeleton from "@mui/material/Skeleton";
import { getApiWithoutAuth } from "@lib/ts/api";
import { URLs } from "@/lib/ts/apiUrl";
import { GraphDataInterface } from "@/lib/ts/interface";
const DynamicChart = dynamic(() => import("@/lib/components/CommonComponents/ListingTrackGraph"), {
  ssr: false,
  loading: () => <Skeleton variant="rounded" height={200} />,
});

  interface PROPS {}

  const ReturnsByClosingYearVintage: React.FC<PROPS> = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [graphData, setGraphData] = useState<GraphDataInterface>({
    additional_dataset: {},
    dataset: [],
  });
  const options = {
    chart: {
      type: "bar", // Change the chart type to "bar"
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
        text: null, // or text: ''
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
      verticalAlign: "bottom", // Change verticalAlign to "middle"
      layout: "horizontal", // Change layout to "vertical"
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
  const getStatsData = async () => {
    const response = await getApiWithoutAuth(URLs.spacsReturns);
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
          <div className={styles.ytdEventSummary}>YTD De-SPAC Returns by Closing Year Vintage</div>
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
}

export default ReturnsByClosingYearVintage;
