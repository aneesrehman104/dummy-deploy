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
import * as Highcharts from "highcharts";
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
  const [graphData, setGraphData] = useState<GraphDataInterface<LineChart>>(
    initialGraphData
  );

  const options = {
    chart: {
      //type: "line",
      type: "column",
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
      text: "Current Average Return from IPO Price (excludes SPACs)",
      align: "left",
      style: {
        fontSize: "16px",
        fontWeight: "lighter",
        fontFamily: "Barlow Condensed",
      },
      //text: graphData.dataset.Title,
    },
    xAxis: {
      type: "category",
    },
    yAxis: {
      title: {
        text: "Percentage",
      },
      labels: {
        formatter: function (): string {
          // Convert the label to a percentage format
          // @ts-ignore
          return Highcharts.numberFormat(this.value, 2) * 100 + "%";
        },
      },
      opposite: true,
    },
    // yAxis: {
    //   opposite: true,
    //   title: {
    //     text: `${graphData.dataset.YAxis?.Title} (${graphData.dataset?.YAxis?.Unit})`,
    //   },
    //   max: graphData.dataset.YAxis?.MaxValue,
    // },
    credits: {
      enabled: false,
    },
    plotOptions: {
      column: {
        borderRadius: "5%",
      },
      series: {
        borderWidth: 0,
        dataLabels: {
          enabled: true,
          formatter: function (): string {
            // Convert the label to a percentage format
            // @ts-ignore
            return Highcharts.numberFormat(this.y, 2) * 100 + "%";
          },
        },
      },
    },
    tooltip: {
      headerFormat: '<span style="font-size:11px">{series.name}</span><br>',
      pointFormat:
        '<span style="color:{point.color}">{point.name}</span>: <b>{point.y:.2f}</b> of total<br/>',
      formatter: function (): string {
        // @ts-ignore
        const point_color = this.point.color;
        // @ts-ignore
        const point_name = this.point.name;
        // @ts-ignore
        const point_series = this.series.name;
        // Convert the label to a percentage format
        // @ts-ignore
        const percentInfo = Highcharts.numberFormat(this.y, 2) * 100 + "%";
        const headerFormat = `<span style="font-size:11px">${point_series}</span><br>`;
        const pointFormat = `<span style="color:${point_color}">${point_name}</span>: <b>${percentInfo}</b> of total<br/>`;

        return headerFormat + pointFormat;
      },
    },
    legend: {
      enabled: false,
    },
    // legend: {
    //   align: "start",
    //   verticalAlign: "bottom",
    //   layout: "horizontal",
    // },
    series: [
      {
        name: "Industry",
        colorByPoint: true,
        data: [
          {
            name: "Tech",
            y: -0.5,
          },
          {
            name: "Energy",
            y: -0.06,
          },
          {
            name: "Consumer",
            y: 0.22,
          },
          {
            name: "Financials",
            y: 0.25,
          },
          {
            name: "Other",
            y: 0.05,
          },
        ],
      },
    ],
    // series: graphData.dataset.SeriesData?.map((series) => ({
    //   name: series.Name,
    //   data: graphData.dataset.XAxis.Labels.map((month, index) => {
    //     const point = series.DataPoints.find((point) => point.X === index);
    //     return point ? point.Y : null;
    //   }),
    //   // add a color property for each series if you want
    // })),
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
          <div className={styles.ytdEventSummary}>
            AVERAGE RETURN FROM IPO BY INDUSTRY (2023 IPOS)
          </div>
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
                <div> 23</div>
                <div>TECH</div>
              </div>
              <div className={styles.container}>
                <div> 10</div>
                <div>ENERGY</div>
              </div>
              <div className={styles.container}>
                <div> 5</div>
                <div>CONSUMER</div>
              </div>
              <div className={styles.container}>
                <div> 12</div>
                <div>FINANCIALS</div>
              </div>
              <div className={styles.container}>
                <div> 32</div>
                <div>OTHER</div>
              </div>
              {/* <div className={styles.container}>
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
              </div> */}
            </>
          </div>
        )}
      </div>
    </section>
  );
};

export default ReturnsByTargetIndustry;