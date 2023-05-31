import React from "react";
import styles from "./news.module.css";

function News() {
  return (
    <div className={styles.headlineslistcontainer}>
      <div className={styles.sectionlistnewscontainerParent}>
        <div className={styles.sectionlistnewscontainer}>
          <div className={styles.aggregatedMiniTables}>In the News</div>

          <div className={styles.paper2}>
            <div className={styles.tablerow}>
              <div className={styles.frameWrapper}>
                <div className={styles.customTableCustomCell4}>
                  <div className={styles.vectorWrapper}>
                    <img
                      className={styles.vectorIcon}
                      alt=""
                      src="/vector3.svg"
                    />
                  </div>
                  <div className={styles.frameWrapper}>
                    <div className={styles.headlineCallOut}>
                      Headline call out goes here, truncate at 54 charact..
                    </div>
                    <div className={styles.siteName}>Site name</div>
                  </div>
                </div>
              </div>
              <div className={styles.chevronRight}>
                <img className={styles.vectorIcon1} alt="" src="/vector4.svg" />
              </div>
            </div>
          </div>
          <div className={styles.paper2}>
            <div className={styles.tablerow}>
              <div className={styles.frameWrapper}>
                <div className={styles.customTableCustomCell4}>
                  <div className={styles.vectorWrapper}>
                    <img
                      className={styles.vectorIcon}
                      alt=""
                      src="/vector3.svg"
                    />
                  </div>
                  <div className={styles.frameWrapper}>
                    <div className={styles.headlineCallOut}>
                      Headline call out goes here, truncate at 54 charact..
                    </div>
                    <div className={styles.siteName}>Site name</div>
                  </div>
                </div>
              </div>
              <div className={styles.chevronRight}>
                <img className={styles.vectorIcon1} alt="" src="/vector4.svg" />
              </div>
            </div>
          </div>
        </div>
        <div className={styles.sectionlistnewscontainer}>
          <div className={styles.aggregatedMiniTables}>Upcoming Mini Table</div>

          <div className={styles.paper2}>
            <div className={styles.tablerow}>
              <div className={styles.frameWrapper}>
                <div className={styles.customTableCustomCell4}>
                  <div className={styles.vectorWrapper}>
                    <img
                      className={styles.vectorIcon}
                      alt=""
                      src="/vector3.svg"
                    />
                  </div>
                  <div className={styles.frameWrapper}>
                    <div className={styles.headlineCallOut}>
                      Headline call out goes here, truncate at 54 charact..
                    </div>
                    <div className={styles.siteName}>Site name</div>
                  </div>
                </div>
              </div>
              <div className={styles.chevronRight}>
                <img className={styles.vectorIcon1} alt="" src="/vector4.svg" />
              </div>
            </div>
          </div>
          <div className={styles.paper2}>
            <div className={styles.tablerow}>
              <div className={styles.frameWrapper}>
                <div className={styles.customTableCustomCell4}>
                  <div className={styles.vectorWrapper}>
                    <img
                      className={styles.vectorIcon}
                      alt=""
                      src="/vector3.svg"
                    />
                  </div>
                  <div className={styles.frameWrapper}>
                    <div className={styles.headlineCallOut}>
                      Headline call out goes here, truncate at 54 charact..
                    </div>
                    <div className={styles.siteName}>Site name</div>
                  </div>
                </div>
              </div>
              <div className={styles.chevronRight}>
                <img className={styles.vectorIcon1} alt="" src="/vector4.svg" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default News;
