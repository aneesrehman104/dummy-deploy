import React from "react";
import styles from "./SpacsMarketStats.module.css";
import Switch from "@mui/material/Switch";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { homeConstants } from "@/lib/ts/constants";
function SpacsMarketStats() {
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
          title: "IPOs",

          data: [
            { value: "50", change: "YTD" },
          ],
        },
        {
          title: "By Status",
          data: [
            { value: "651", change: "Total active" },
            { value: "330", change: "Searching" },
            { value: "185", change: "Live mergers" },
            { value: "22", change: "liquidating" },
          ],
        },
      ],
    },
    {
      heading: "Liquidations / Terminations",
      showSpac: false,
      innerHadding: [
        {
          title: "LIQUIDATIONS",
          data: [
            { value: "200", change: "YTD" },
            { value: "100", change: "PREV. YEAR" },
            { value: "44%", change: "CHG % PREV YEAR" },
          ],
        },
        {
          title: "TERMINATIONS",
          data: [
            { value: "200", change: "YTD" },
            { value: "100", change: "PREV. YEAR" },
            { value: "44%", change: "CHG % PREV YEAR" },
          ],
        }
      ],
    },
    {
      heading: "De-SPACS",
      showSpac: false,
      innerHadding: [
        {
          title: "RETURNS",
          data: [
            { value: "5", change: "ABOVE SPAC IPO PRICE SINCE 2019" },
            { value: "50%", change: "AVG. PREMIUM" },
            { value: "44%", change: "MEDIAN PREMIUM" },
          ],
        },
        {
          title: "MORE RETURNS",
          data: [
            { value: "10%", change: "% ABOVE SPAC IPO PRICE SINCE 2019" },
            { value: "5%", change: "BANKRUPT" },
            { value: "XX%", change: "BANKRUPT" },
          ],
        },
      ],
    },
  ];
  return (
    <section className={styles.minitables}>
      <div className={styles.aggregatedMiniTables}>Spacs Market Stats</div>
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

export default SpacsMarketStats;
