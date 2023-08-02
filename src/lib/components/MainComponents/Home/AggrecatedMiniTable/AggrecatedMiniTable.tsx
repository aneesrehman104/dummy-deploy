import React from "react";
import styles from "../dashboard-header.module.css";
import Switch from "@mui/material/Switch";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { homeConstants } from "@/lib/ts/constants";
function AggrecatedMiniTable() {
  const theme = createTheme({
    palette: {
      primary: {
        main: "#0aac85",
      },
    },
  });

  return (
    <section className={styles.minitables}>
      <div className={styles.aggregatedMiniTables}>
        {homeConstants.AggrecatedMiniTable.title}
      </div>
      <div className={styles.cardscontainer}>
        <div className={styles.card}>
          <div className={styles.cardheader}>
            <div className={styles.listingtrack}>
              {homeConstants.AggrecatedMiniTable.ListingTrack}
            </div>
          </div>
          <div className={styles.cardrowinfo}>
            <div className={styles.cardrowheader}>
              <div className={styles.head}>
                {homeConstants.AggrecatedMiniTable.IPOs}
              </div>
            </div>
            <div className={styles.frameParent}>
              <div>
                <div className={styles.div}>50</div>
                <div className={styles.ytdWithSpacsContainer}>
                  YTD with spacs
                </div>
              </div>
              <div>
                <div className={styles.div}>25</div>
                <div className={styles.ytdWithSpacsContainer}>
                  YTD SANS spacs
                </div>
              </div>
            </div>
          </div>
          <div className={styles.cardrowinfo}>
            <div className={styles.cardrowheader}>
              <div className={styles.head}>
                {homeConstants.AggrecatedMiniTable.MERGERs}
              </div>
            </div>
            <div className={styles.frameParent}>
              <div>
                <div className={styles.div}>350</div>
                <div className={styles.ytdWithSpacsContainer}>
                  Live mergers with spacs
                </div>
              </div>
              <div>
                <div className={styles.div}>100</div>
                <div className={styles.ytdWithSpacsContainer}>
                  Live mergers SANS spacs
                </div>
              </div>
              <div>
                <div className={styles.div}>25</div>
                <div className={styles.ytdWithSpacsContainer}>
                  completed mergers
                </div>
              </div>
            </div>
          </div>
          <div className={styles.cardrowinfo}>
            <div className={styles.cardrowheader}>
              <div className={styles.head}>
                {homeConstants.AggrecatedMiniTable.SPACs}
              </div>
            </div>
            <div className={styles.frameParent}>
              <div>
                <div className={styles.div}>651</div>
                <div className={styles.ytdWithSpacsContainer}>Total active</div>
              </div>
              <div>
                <div className={styles.div}>330</div>
                <div className={styles.ytdWithSpacsContainer}>Searching</div>
              </div>
              <div>
                <div className={styles.div}>185</div>
                <div className={styles.ytdWithSpacsContainer}>live mergers</div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.card}>
          <div className={styles.cardheader}>
            <div className={styles.listingtrack}>IPOs</div>
          </div>
          <div className={styles.cardrowinfo}>
            <div className={styles.cardrowheader}>
              <div className={styles.head}>
                {homeConstants.AggrecatedMiniTable.IPOSWITHSPACS}
              </div>
            </div>
            <div className={styles.frameParent}>
              <div>
                <div className={styles.div}>200</div>
                <div className={styles.ytdWithSpacsContainer}>YTD</div>
              </div>
              <div>
                <div className={styles.div}>50%</div>
                <div className={styles.ytdWithSpacsContainer}>AVG. RETURN</div>
              </div>
              <div>
                <div className={styles.div}>44%</div>
                <div className={styles.ytdWithSpacsContainer}>
                  MEDIAN RETURN
                </div>
              </div>
            </div>
          </div>
          <div className={styles.cardrowinfo}>
            <div className={styles.cardrowheader}>
              <div className={styles.head}>IPOS SANS SPACS</div>
            </div>
            <div className={styles.frameParent}>
              <div>
                <div className={styles.div}>350</div>
                <div className={styles.ytdWithSpacsContainer}>YTD</div>
              </div>
              <div>
                <div className={styles.div}>50%</div>
                <div className={styles.ytdWithSpacsContainer}>AVG. RETURN</div>
              </div>
              <div>
                <div className={styles.div}>44%</div>
                <div className={styles.ytdWithSpacsContainer}>
                  MEDIAN RETURN
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.card}>
          <div className={styles.cardheader}>
            <div className={styles.listingtrack}>Mergers</div>
          </div>
          <div className={styles.cardrowinfo}>
            <div className={styles.cardrowheader}>
              <div className={styles.head}>MERGERS WITH SPACS</div>
            </div>
            <div className={styles.frameParent}>
              <div>
                <div className={styles.div}>500</div>
                <div className={styles.ytdWithSpacsContainer}>
                  LIVE MERGERS YTD
                </div>
              </div>
              <div>
                <div className={styles.div}>50%</div>
                <div className={styles.ytdWithSpacsContainer}>AVG. PREMIUM</div>
              </div>
              <div>
                <div className={styles.div}>50%</div>
                <div className={styles.ytdWithSpacsContainer}>
                  MEDIAN PREMIUM
                </div>
              </div>
            </div>
          </div>
          <div className={styles.cardrowinfo}>
            <div className={styles.cardrowheader}>
              <div className={styles.head}>MERGERS SANS SPACS</div>
            </div>
            <div className={styles.frameParent}>
              <div>
                <div className={styles.div}>500</div>
                <div className={styles.ytdWithSpacsContainer}>
                  LIVE MERGERS YTD
                </div>
              </div>
              <div>
                <div className={styles.div}>50%</div>
                <div className={styles.ytdWithSpacsContainer}>AVG. PREMIUM</div>
              </div>
              <div>
                <div className={styles.div}>50%</div>
                <div className={styles.ytdWithSpacsContainer}>
                  MEDIAN PREMIUM
                </div>
              </div>
              <div>
                <div className={styles.div}>50%</div>
                <div className={styles.ytdWithSpacsContainer}>
                  MEDIAN PREMIUM
                </div>
              </div>
              <div>
                <div className={styles.div}>50%</div>
                <div className={styles.ytdWithSpacsContainer}>
                  MEDIAN PREMIUM
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AggrecatedMiniTable;
