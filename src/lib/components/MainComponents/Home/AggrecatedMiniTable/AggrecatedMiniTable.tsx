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
            <div className={styles.listingtrack}>{homeConstants.AggrecatedMiniTable.ListingTrack}</div>
          </div>
          <div className={styles.cardrowinfo}>
            <div className={styles.cardrowheader}>
              <div className={styles.head}>{homeConstants.AggrecatedMiniTable.IPOs}</div>
            </div>
            <div className={styles.frameParent}>
              <div className={styles.parent}>
                <div className={styles.div}>50</div>
                <div className={styles.ytdWithSpacsContainer}>
                  <span className={styles.ytdWithSpacs}>YTD with spacs</span>
                </div>
              </div>
              <div className={styles.frameWrapper}>
                <div className={styles.group}>
                  <div className={styles.div}>25</div>
                  <div className={styles.ytdWithSpacsContainer}>
                    <span className={styles.ytdWithSpacs}>YTD SANS spacs</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.cardrowinfo}>
            <div className={styles.cardrowheader}>
              <div className={styles.head}>{homeConstants.AggrecatedMiniTable.MERGERs}</div>
            </div>
            <div className={styles.frameParent}>
              <div className={styles.parent}>
                <div className={styles.div}>350</div>
                <div className={styles.ytdWithSpacsContainer}>
                  <p className={styles.liveMergers}>
                    <span className={styles.ytdWithSpacs}>Live mergers</span>
                  </p>
                  <p className={styles.liveMergers}>
                    <span className={styles.ytdWithSpacs}>
                      <span className={styles.withSpacs2}>with spacs</span>
                    </span>
                  </p>
                </div>
              </div>
              <div className={styles.avgReturnParent}>
                <div className={styles.div}>100</div>
                <div className={styles.ytdWithSpacsContainer}>
                  <p className={styles.liveMergers}>
                    <span className={styles.ytdWithSpacs}>Live mergers</span>
                  </p>
                  <p className={styles.liveMergers}>
                    <span className={styles.ytdWithSpacs}>
                      <span className={styles.withSpacs2}>SANS spacs</span>
                    </span>
                  </p>
                </div>
              </div>
              <div className={styles.avgReturnParent}>
                <div className={styles.div}>25</div>
                <div className={styles.completedMergers}>
                  <p className={styles.liveMergers}>completed</p>
                  <p className={styles.liveMergers}>mergers</p>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.cardrowinfo2}>
            <div className={styles.cardrowheader}>
              <div className={styles.head8}>{homeConstants.AggrecatedMiniTable.SPACs}</div>
            </div>
            <div className={styles.frameParent}>
              <div className={styles.parent}>
                <div className={styles.div}>651</div>
                <div className={styles.completedMergers}>Total active</div>
              </div>
              <div className={styles.parent}>
                <div className={styles.div}>330</div>
                <div className={styles.completedMergers}>Searching</div>
              </div>
              <div className={styles.parent}>
                <div className={styles.div}>185</div>
                <div className={styles.completedMergers}>
                  <p className={styles.liveMergers}>Live</p>
                  <p className={styles.liveMergers}>mergers</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.card}>
            <div className={styles.cardElements}>
              <div className={styles.ipos}>{`IPOs `}</div>
              <div className={styles.showSpacsParent}>
                <div className={styles.showSpacs}>{homeConstants.AggrecatedMiniTable.ShowSPACs}</div>
                <ThemeProvider theme={theme}>
                  <Switch defaultChecked color="primary" />
                </ThemeProvider>
              </div>
            </div>
            <div className={styles.cardrowinfo}>
              <div className={styles.cardrowheader}>
                <div className={styles.head}>{homeConstants.AggrecatedMiniTable.IPOSWITHSPACS}</div>
              </div>
              <div className={styles.frameParent1}>
                <div className={styles.parent6}>
                  <div className={styles.div}>200</div>
                  <div className={styles.completedMergers}>YTD</div>
                </div>
                <div className={styles.avgReturnParent}>
                  <div className={styles.avgReturn}>AVG. RETURN</div>
                  <div className={styles.div9}>50%</div>
                </div>
                <div className={styles.medianReturnParent}>
                  <div className={styles.avgReturn}>MEDIAN RETURN</div>
                  <div className={styles.div9}>44%</div>
                </div>
              </div>
            </div>
            <div className={styles.cardrowinfo}>
              <div className={styles.cardrowheader}>
                <div className={styles.head}>{homeConstants.AggrecatedMiniTable.IPOSSANSSPACS}</div>
              </div>
              <div className={styles.frameParent}>
                <div className={styles.parent}>
                  <div className={styles.div}>XXX</div>
                  <div className={styles.completedMergers}>YTD</div>
                </div>
                <div className={styles.parent}>
                  <div className={styles.div}>XX%</div>
                  <div className={styles.completedMergers}>AVG. RETURN</div>
                </div>
                <div className={styles.parent}>
                  <div className={styles.div}>XX%</div>
                  <div className={styles.completedMergers}>MEDIAN RETURN</div>
                </div>
              </div>
            </div>
        </div>
        <div className={styles.card}>
            <div className={styles.cardcontent}>
              <div className={styles.ipos}>{`Mergers `}</div>
              <div className={styles.showSpacsParent}>
                <div className={styles.showSpacs}>{homeConstants.AggrecatedMiniTable.ShowSPACs}</div>
                <ThemeProvider theme={theme}>
                  <Switch defaultChecked color="primary" />
                </ThemeProvider>
              </div>
            </div>
            <div className={styles.cardrowinfo}>
              <div className={styles.cardrowheader}>
                <div className={styles.head8}>{homeConstants.AggrecatedMiniTable.MERGERSWITHSPACS}</div>
              </div>
              <div className={styles.frameParent}>
                <div className={styles.parent}>
                  <div className={styles.div}>200</div>
                  <div className={styles.completedMergers}>
                    <p className={styles.liveMergers}>LIVE MERGERS</p>
                    <p className={styles.liveMergers}>YTD</p>
                  </div>
                </div>
                <div className={styles.parent}>
                  <div className={styles.div}>50%</div>
                  <div className={styles.completedMergers}>
                    <p className={styles.liveMergers}>AVG.</p>
                    <p className={styles.liveMergers}>PREMIUM</p>
                  </div>
                </div>
                <div className={styles.parent}>
                  <div className={styles.div}>44%</div>
                  <div className={styles.completedMergers}>
                    <p className={styles.liveMergers}>MEDIAN</p>
                    <p className={styles.liveMergers}>PREMIUM</p>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.cardrowinfo}>
              <div className={styles.cardrowheader}>
                <div className={styles.head8}>{homeConstants.AggrecatedMiniTable.MERGERSSANSSPACS} </div>
              </div>
              <div className={styles.frameParent}>
                <div className={styles.parent}>
                  <div className={styles.div}>XXX</div>
                  <div className={styles.completedMergers}>
                    <p className={styles.liveMergers}>LIVE MERGERS</p>
                    <p className={styles.liveMergers}>YTD</p>
                  </div>
                </div>
                <div className={styles.parent}>
                  <div className={styles.div}>XX%</div>
                  <div className={styles.completedMergers}>
                    <p className={styles.liveMergers}>AVG.</p>
                    <p className={styles.liveMergers}>PREMIUM</p>
                  </div>
                </div>
                <div className={styles.parent}>
                  <div className={styles.div}>XX%</div>
                  <div className={styles.completedMergers}>
                    <p className={styles.liveMergers}>MEDIAN</p>
                    <p className={styles.liveMergers}>PREMIUM</p>
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
