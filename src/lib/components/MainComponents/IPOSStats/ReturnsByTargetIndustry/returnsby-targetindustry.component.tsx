import React, { useEffect, useState } from "react";
import styles from "./returnsby-targetindustry.module.css";
import dynamic from "next/dynamic";
import Image from "next/image";
import Skeleton from "@mui/material/Skeleton";
import { getApiWithoutAuth, getODataWithParams } from "@lib/ts/api";
import { URLs } from "@/lib/ts/apiUrl";
import { GraphDataInterface, LineChart } from "@/lib/ts/interface";
import { initialGraphData } from "@/lib/ts/initialState";
import axios, { AxiosError } from "axios";

const DynamicChart = dynamic(() => import("@/lib/components/CommonComponents/ListingTrackGraph"), {
  ssr: false,
  loading: () => <Skeleton variant="rounded" height={200} />,
});
interface PROPS {}

const ReturnsByTargetIndustry: React.FC<PROPS> = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [graphData, setGraphData] = useState<GraphDataInterface<LineChart>>(initialGraphData);
  
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
        text: graphData.dataset.title?.text,
    },
    xAxis: {
        categories: graphData.dataset.xAxis?.categories,
        title: {
            text: graphData.dataset.xAxis?.title.text
        },
    },
    yAxis: {
        opposite: true,
        title: {
            text: `${graphData.dataset.yAxis?.title.text}`,
        },
        //max: graphData.dataset.YAxis?.MaxValue,
    },

    credits: {
        enabled: false,
    },
    legend: {
        align: "start",
        verticalAlign: "bottom",
        layout: "horizontal",
    },
    series: graphData.dataset.series,
};

  useEffect(() => {
    const source = axios.CancelToken.source();

    const getStatsData = async () => {
      setIsLoading(true);

      try {
        //TODO: getting IPO data just for development. We need to point to a home controller graph endpoint
        const response = await getApiWithoutAuth(URLs.ipoOverviewChart, {
          cancelToken: source.token,
        });

        if (response.status === 200 && response.data !== null) {
          setGraphData({
            dataset: response.data.source.dataset,
            additional_dataset: {},
        });
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
          <div className={styles.ytdEventSummary}>Average Returns by IPO type nd IPO year (2020-2023)</div>
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

export default ReturnsByTargetIndustry;
