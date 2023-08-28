import React from "react";
import styles from "./feed.module.css";
import Skeleton from "@mui/material/Skeleton";
import Image from "next/image";
import feedImage from "@public/vector3.svg";
import rightIcon from "@public/vector4.svg";

const ListingTrackFeed = ({ isLoading, title, dataArray }: any) => {
  return (
    <main className={styles.headlineslistcontainer}>
      <div className={styles.table}>
        <header className={styles.aggregatedMiniTables}>{title}</header>

        <section className={styles.sectionlistnewscontainerParent}>
          <div className={styles.sectionlistnewscontainer}>
            {isLoading ? (
              <Skeleton
                variant="rounded"
                height={200}
                width={"100%"}
                style={{ marginTop: 15 }}
              />
            ) : (
              dataArray?.map((item: any, index: number) => {
                return (
                  <section className={styles.paper2} key={index}>
                    <div className={styles.tablerow}>
                      <div className={styles.frameWrapper}>
                        <div className={styles.customTableCustomCell4}>
                          <div className={styles.vectorWrapper}>
                            <Image
                              src={feedImage}
                              alt="feedImage"
                              width={17}
                              height={17}
                            />
                          </div>
                          <div className={styles.frameWrapper}>
                            <div className={styles.headlineCallOut}>
                              {item.news}
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className={styles.chevronRight}>
                        <Image
                          src={rightIcon}
                          alt="rightIcon"
                          width={7}
                          height={11}
                        />
                      </div>
                    </div>
                  </section>
                );
              })
            )}
          </div>
        </section>
      </div>
    </main>
  );
};

export default ListingTrackFeed;
