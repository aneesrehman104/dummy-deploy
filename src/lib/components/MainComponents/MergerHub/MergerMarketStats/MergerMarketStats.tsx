import React from "react";
import styles from "./MergerMarketStats.module.css";
import Switch from "@mui/material/Switch";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { homeConstants } from "@/lib/ts/constants";
function MergerMarketStats() {
  const theme = createTheme({
    palette: {
      primary: {
        main: "#0aac85",
      },
    },
  });
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
          title: "Terminated",
          data: [
            { value: "50", change: "YTD" },
            { value: "99", change: "prev year" },
            { value: "-50%", change: "yearly Chg % " },
          ],
        },
      ],
    },
    {
      heading: "Live Merger",
      showSpac: true,
      innerHadding: [
        {
          title: "Premiums",
          data: [
            { value: "200%", change: "at a premium Above 25%" },
            { value: "50%", change: "AVG. PREMIUM" },
            { value: "44%", change: "MEDIAN PREMIUM" },
          ],
        },
        {
          title: "Returns",
          data: [
            { value: "50%", change: "above offer price" },
            { value: "99%", change: "AVG. RETURN" },
            { value: "50%", change: "MEDIAN PREMIUM" },
          ],
        },
        {
          title: "Valuations",
          data: [
            { value: "50%", change: "above '$1B'" },
            { value: "$50M", change: "AVG. Mkt Cap" },
            { value: "50%", change: "MEDIAN PREMIUM" },
          ],
        },
      ],
    },
    {
      heading: "Closed Merger",
      showSpac: true,
      innerHadding: [
        {
          title: "Premiums",
          data: [
            { value: "200%", change: "at a premium Above 25%" },
            { value: "50%", change: "AVG. PREMIUM" },
            { value: "44%", change: "MEDIAN PREMIUM" },
          ],
        },
        {
          title: "Returns",
          data: [
            { value: "50%", change: "above offer price" },
            { value: "99%", change: "AVG. RETURN" },
            { value: "50%", change: "MEDIAN PREMIUM" },
          ],
        },
        {
          title: "Valuations",
          data: [
            { value: "50%", change: "above '$1B'" },
            { value: "$50M", change: "AVG. Mkt Cap" },
            { value: "50%", change: "MEDIAN PREMIUM" },
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
                      {innerData.title}
                    </div>
                    <div className={styles.frameParent}>
                      {innerData.data.map((value) => {
                        return (
                          <div className={styles.parent} key={value.change}>
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
