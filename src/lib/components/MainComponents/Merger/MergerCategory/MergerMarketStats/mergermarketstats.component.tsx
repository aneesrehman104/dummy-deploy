import React, { useEffect, useState } from "react";
import styles from "./MergerMarketStats.module.css";
import Switch from "@mui/material/Switch";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { getApiWithoutAuth } from "@lib/ts/api";
import { URLs } from "@/lib/ts/apiUrl";
  interface PROPS {}

  const MergerMarketStats: React.FC<PROPS> = () => {
  const theme = createTheme({
    palette: {
      primary: {
        main: "#0aac85",
      },
    },
  });
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [mergerStatsData, setMergerStatsData] = useState();
  const getMergerStatsData = async () => {
    const response = await getApiWithoutAuth(URLs.mergerStats);
    if (response.status === 200 && response.data !== null) {
      setMergerStatsData(response.data);

      setIsLoading(false);
    } else {
      setIsLoading(false);
    }
  };
  useEffect(() => {
    getMergerStatsData();
  }, []);
  const dataArray = [
    {
      heading: "Overview",
      showSpac: false,
      innerHadding: [
        {
          title: "Announced",

          data: [
            { value: "50", change: "YTD" },
            { value: "99", change: "prev year" },
            { value: "-50%", change: "yearly Chg % " },
          ],
        },
        {
          title: "Closed",
          data: [
            { value: "50", change: "YTD" },
            { value: "99", change: "prev year" },
            { value: "-50%", change: "yearly Chg % " },
          ],
        },
        {
          title: "Termiated",
          data: [
            { value: "50", change: "YTD" },
            { value: "99", change: "prev year" },
            { value: "-50%", change: "yearly Chg % " },
          ],
        },
      ],
    },
    {
      heading: "Live Mergers",
      showSpac: true,
      innerHadding: [
        {
          title: "Premiums",
          data: [
            { value: "200%", change: "At a premium Above 25%" },
            { value: "50%", change: "AVG. PREMIUM" },
            { value: "44%", change: "MEDIAN PREMIUM" },
          ],
        },
        {
          title: "Returns",
          data: [
            { value: "200%", change: "Above offer price" },
            { value: "50%", change: "AVG. Return" },
            { value: "44%", change: "MEDIAN Return" },
          ],
        },
        {
          title: "Valuations",
          data: [
            { value: "200%", change: "Above $1b" },
            { value: "50%", change: "AVG. MKT Cap" },
            { value: "44%", change: "MEDIAN MKT Cap" },
          ],
        },
      ],
    },
    {
      heading: "Closed Mergers",
      showSpac: true,
      innerHadding: [
        {
          title: "Premiums",
          data: [
            { value: "200%", change: "At a premium Above 25%" },
            { value: "50%", change: "AVG. PREMIUM" },
            { value: "44%", change: "MEDIAN PREMIUM" },
          ],
        },
        {
          title: "Returns",
          data: [
            { value: "200%", change: "Above offer price" },
            { value: "50%", change: "AVG. Return" },
            { value: "44%", change: "MEDIAN Return" },
          ],
        },
        {
          title: "Valuations",
          data: [
            { value: "200%", change: "Above $1b" },
            { value: "50%", change: "AVG. MKT Cap" },
            { value: "44%", change: "MEDIAN MKT Cap" },
          ],
        },
      ],
    },
  ];
  return (
    <section className={styles.minitables}>
      <div className={styles.aggregatedMiniTables}>Merger Market Stats</div>
      <div className={styles.cardscontainer}>
        {dataArray.map((item) => {
          return (
            <div className={styles.card} key={item.heading}>
              <div className={styles.cardheader}>
                <div>{item.heading} </div>
                {item.showSpac ? (
                  <div className={styles.showSpacsParent}>
                    <div className={styles.showSpacs}>Include SPACs</div>
                    <ThemeProvider theme={theme}>
                      <Switch defaultChecked color="primary" />
                    </ThemeProvider>
                  </div>
                ) : null}
              </div>
              {item.innerHadding?.map((innerData) => {
                return (
                  <div className={styles.cardrowinfo} key={innerData.title}>
                    <div className={styles.cardrowheader}>
                      <div className={styles.head}>{innerData.title}</div>
                    </div>
                    <div className={styles.frameParent}>
                      {innerData.data.map((value) => {
                        return (
                          <div key={value.change}>
                            <div className={styles.div}>{value.value}</div>
                            <div className={styles.ytdWithSpacsContainer}>
                              {value.change}
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                );
              })}
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default MergerMarketStats;
