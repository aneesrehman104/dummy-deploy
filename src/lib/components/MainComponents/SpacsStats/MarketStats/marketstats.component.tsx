import React, { useEffect, useState } from "react";
import styles from "./marketstats.module.css";
import Switch from "@mui/material/Switch";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { getApiWithoutAuth,getODataWithParams } from "@/lib/ts/api";
import Skeleton from "@mui/material/Skeleton";
import axios, { AxiosError } from "axios";
import { URLs } from "@/lib/ts/apiUrl";
  interface PROPS {}

  const MarketStats: React.FC<PROPS> = () => {
  const theme = createTheme({
    palette: {
      primary: {
        main: "#0aac85",
      },
    },
  });

  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [statsData, setStatsData] = useState<any>(null);

  useEffect(() => {
    const source = axios.CancelToken.source();
    const getStats = async () => {
      setIsLoading(true);
      try {
        const response = await getODataWithParams(URLs.spacsStats, {
          cancelToken: source.token,
        });
        if (response.status === 200 && response.data !== null) {
          setStatsData(response.data);
          setIsLoading(false);
        }
      } catch (error) {
        if (axios.isCancel(error)) {
          console.log("Request cancelled:", (error as AxiosError).message);
          setIsLoading(false);
        } else {
          console.error("An error occurred:", (error as AxiosError).message);
          setIsLoading(false);
        }
      } finally {
        setIsLoading(false);
      }
    };
    getStats();
    return () => {
      source.cancel("Request cancelled due to component unmount");
    };
  }, []);
  return (
    <main className={styles.minitables}>
      <header className={styles.aggregatedMiniTables}>Spacs Market Stats</header>
      {isLoading ? (
        <Skeleton
          variant="rounded"
          height={200}
          width={"100%"}
          style={{ marginTop: 15 }}
        />
      ) : (
        <section className={styles.cardscontainer}>
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
        </section>
      )}
    </main>
  );
}

export default MarketStats;
