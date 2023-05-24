import React from "react";
import styles from "../dashboard-header.module.css";
function MiniTableList() {
  const renderArray = [
    {
      heading: " Headline call out goes here, truncate at 54 charact..",
      siteName: "Site name",
    },
    {
      heading: " Headline call out goes here, truncate at 54 charact..",
      siteName: "Site name",
    },
    {
      heading: " Headline call out goes here, truncate at 54 charact..",
      siteName: "Site name",
    },
    {
      heading: " Headline call out goes here, truncate at 54 charact..",
      siteName: "Site name",
    },
    {
      heading: " Headline call out goes here, truncate at 54 charact..",
      siteName: "Site name",
    },
  ];
  return (
    <div className={styles.headlineslistcontainer}>
      <div className={styles.table}>
        <div className={styles.aggregatedMiniTables}>Mini Table List Title</div>
        <div className={styles.sectionlistnewscontainerParent}>
          <div className={styles.sectionlistnewscontainer}>
            {renderArray.map((item, index) => {
              return (
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
                            {`${item.heading} ${index}`}
                          </div>
                          <div className={styles.siteName}>{item.siteName}</div>
                        </div>
                      </div>
                    </div>
                    <div className={styles.chevronRight}>
                      <img
                        className={styles.vectorIcon1}
                        alt=""
                        src="/vector4.svg"
                      />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default MiniTableList;
