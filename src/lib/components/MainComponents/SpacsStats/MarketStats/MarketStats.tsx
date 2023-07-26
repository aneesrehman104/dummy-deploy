import React, { useEffect, useState } from "react";
import styles from "./MarketStats.module.css";
import Switch from "@mui/material/Switch";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { getApiWithoutAuth } from "@/lib/ts/api";
import Skeleton from "@mui/material/Skeleton";

import { URLs } from "@/lib/ts/apiUrl";
function MarketStats() {
  const theme = createTheme({
    palette: {
      primary: {
        main: "#0aac85",
      },
    },
  });

  const [isLoading, setIsLoading] = useState(true);
  const [statsData, setStatsData] = useState<any>(null);

  const getStats = async () => {
    setIsLoading(true);
    const response = await getApiWithoutAuth(`${URLs.spacsStats}`);
    if (response.status === 200 && response.data !== null) {
      setStatsData(response.data);
      setIsLoading(false);
    } else {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getStats();
  }, []);

  const dataArray = [
    {
      heading: "Overview",
      showSpac: false,
      innerHadding: [
        {
          title: "IPOs",

          data: [{ value: "50", change: "YTD" }],
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
        },
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
      {isLoading ? (
        <Skeleton
          variant="rounded"
          height={200}
          width={"100%"}
          style={{ marginTop: 15 }}
        />
      ) : (
        <div className={styles.cardscontainer}>
          <div className={styles.card}>
            <div className={styles.cardheader}>
              <div>Overview </div>
            </div>
            <div className={styles.cardrowinfo}>
              <div className={styles.cardrowheader}>IPOS</div>
              <div className={styles.frameParent}>
                <div className={styles.parent}>
                  <div className={styles.div}>
                    {statsData?.dataset[0]?.overview[0]?.YTD}
                  </div>
                  <div className={styles.ytdWithSpacsContainer}>YTD</div>
                </div>
              </div>
            </div>
            <div className={styles.cardrowinfo}>
              <div className={styles.cardrowheader}>By Status</div>
              <div className={styles.frameParent}>
                <div className={styles.parent}>
                  <div className={styles.div}>
                    {statsData?.dataset[0]?.overview[1]?.Total_Active}
                  </div>
                  <div className={styles.ytdWithSpacsContainer}>
                    Total active
                  </div>
                </div>
                <div className={styles.parent}>
                  <div className={styles.div}>
                    {statsData?.dataset[0]?.overview[1]?.Searching}
                  </div>
                  <div className={styles.ytdWithSpacsContainer}>Searching</div>
                </div>
                <div className={styles.parent}>
                  <div className={styles.div}>
                    {statsData?.dataset[0]?.overview[1]?.Live_Mergers}
                  </div>
                  <div className={styles.ytdWithSpacsContainer}>
                    Live mergers
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className={styles.card}>
            <div className={styles.cardheader}>
              <div>Liquidations / Terminations </div>
            </div>
            <div className={styles.cardrowinfo}>
              <div className={styles.cardrowheader}>LIQUIDATIONS</div>
              <div className={styles.frameParent}>
                <div className={styles.parent}>
                  <div className={styles.div}>
                    {statsData?.dataset[0]?.Liquidations_Terminations[0]?.YTD}
                  </div>
                  <div className={styles.ytdWithSpacsContainer}>YTD</div>
                </div>
                <div className={styles.parent}>
                  <div className={styles.div}>
                    {
                      statsData?.dataset[0]?.Liquidations_Terminations[0]
                        ?.Prev_Year
                    }
                  </div>
                  <div className={styles.ytdWithSpacsContainer}>PREV. YEAR</div>
                </div>
                <div className={styles.parent}>
                  <div className={styles.div}>
                    {
                      statsData?.dataset[0]?.Liquidations_Terminations[0]
                        ?.CHG_Prev_Year
                    }
                  </div>
                  <div className={styles.ytdWithSpacsContainer}>
                    CHG % PREV YEAR
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.cardrowinfo}>
              <div className={styles.cardrowheader}>TERMINATIONS</div>
              <div className={styles.frameParent}>
                <div className={styles.parent}>
                  <div className={styles.div}>
                    {statsData?.dataset[0]?.Liquidations_Terminations[1]?.YTD}
                  </div>
                  <div className={styles.ytdWithSpacsContainer}>YTD</div>
                </div>
                <div className={styles.parent}>
                  <div className={styles.div}>
                    {
                      statsData?.dataset[0]?.Liquidations_Terminations[1]
                        ?.Prev_Year
                    }
                  </div>
                  <div className={styles.ytdWithSpacsContainer}>PREV. YEAR</div>
                </div>
                <div className={styles.parent}>
                  <div className={styles.div}>
                    {
                      statsData?.dataset[0]?.Liquidations_Terminations[1]
                        ?.CHG_Prev_Year
                    }
                  </div>
                  <div className={styles.ytdWithSpacsContainer}>
                    CHG % PREV YEAR
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className={styles.card}>
            <div className={styles.cardheader}>
              <div>De-SPACS </div>
            </div>
            <div className={styles.cardrowinfo}>
              <div className={styles.cardrowheader}>RETURNS</div>
              <div className={styles.frameParent}>
                <div className={styles.parent}>
                  <div className={styles.div}>
                    {statsData?.dataset[0]?.DeSPACS[0]?.Above_SPAC}
                  </div>
                  <div className={styles.ytdWithSpacsContainer}>
                    ABOVE SPAC IPO PRICE SINCE 2019
                  </div>
                </div>
                <div className={styles.parent}>
                  <div className={styles.div}>
                    {statsData?.dataset[0]?.DeSPACS[0]?.Avg_Return}
                  </div>
                  <div className={styles.ytdWithSpacsContainer}>
                    AVG. RETURN
                  </div>
                </div>
                <div className={styles.parent}>
                  <div className={styles.div}>
                    {statsData?.dataset[0]?.DeSPACS[0]?.Median_Return}
                  </div>
                  <div className={styles.ytdWithSpacsContainer}>
                    MEDIAN RETURNS
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.cardrowinfo}>
              <div className={styles.cardrowheader}>MORE RETURNS</div>
              <div className={styles.frameParent}>
                <div className={styles.parent}>
                  <div className={styles.div}>
                    {
                      statsData?.dataset[0]?.DeSPACS[1]
                        ?.perc_Above_SPMedian_ReturnAC
                    }
                  </div>
                  <div className={styles.ytdWithSpacsContainer}>
                    % ABOVE SPAC IPO PRICE SINCE 2019
                  </div>
                </div>
                <div className={styles.parent}>
                  <div className={styles.div}>
                    {statsData?.dataset[0]?.DeSPACS[1]?.Bankrupt}
                  </div>
                  <div className={styles.ytdWithSpacsContainer}>BANKRUPT</div>
                </div>
                <div className={styles.parent}>
                  <div className={styles.div}>
                    {statsData?.dataset[0]?.DeSPACS[1]?.Bankrupt2}
                  </div>
                  <div className={styles.ytdWithSpacsContainer}>BANKRUPT</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default MarketStats;
