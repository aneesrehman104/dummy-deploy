import React from "react";
import styles from "./CurrentUpdateFeed.module.css";
import Image from "next/image";

function CurrentUpdateFeed() {
  const renderArray = [
    {
      heading: " Headline call out goes here, truncate at 54 charact..Headline call out goes here, truncate at 54 charact..Headline call out goes here, truncate at 54 charact..",
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
        <div className={styles.aggregatedMiniTables}>ListingTrack Curated Updates Feed</div>
        <div className={styles.sectionlistnewscontainerParent}>
          <div className={styles.sectionlistnewscontainer}>
            {renderArray.map((item, index) => {
              return (
                <div className={styles.paper2} key={index}>
                  <div className={styles.tablerow}>
                    <div className={styles.frameWrapper}>
                      <div className={styles.customTableCustomCell4}>
                        <div className={styles.vectorWrapper}>
                          <Image
                            src="/vector3.svg"
                            alt="/vector3"
                            width={17}
                            height={17}
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
                      <Image
                        src="/vector4.svg"
                        alt="/vector4"
                        width={7}
                        height={11}
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

export default CurrentUpdateFeed;
