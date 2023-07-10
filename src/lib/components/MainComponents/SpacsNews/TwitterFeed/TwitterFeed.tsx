import React, { useEffect, useState } from "react";
import styles from "./TwitterFeed.module.css";
import Image from "next/image";
import { getApiWithoutAuth } from "@/lib/ts/api";
import { URLs } from "@/lib/ts/apiUrl";
import Skeleton from "@mui/material/Skeleton";
function TwitterFeed() {
  const [isLoading, setIsLoading] = useState(true);
  const [newsData, setNewsData] = useState<any>({
    dataset: [
      {
        news: " Headline call out goes here, truncate at 54 charact..Headline call out goes here, truncate at 54 charact..",
        sitename: "Site name",
      },
      {
        news: " Headline call out goes here, truncate at 54 charact..",
        sitename: "Site name",
      },
      {
        news: " Headline call out goes here, truncate at 54 charact..",
        sitename: "Site name",
      },
      {
        news: " Headline call out goes here, truncate at 54 charact..",
        sitename: "Site name",
      },
      {
        news: " Headline call out goes here, truncate at 54 charact..",
        sitename: "Site name",
      },
    ],
  });

  const getNews = async () => {
    setIsLoading(true);
    const response = await getApiWithoutAuth(`${URLs.spacNews}?type=twitter`);
    if (response.status === 200) {
      setNewsData(response.data);
      setIsLoading(false);
    } else {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getNews();
  }, []);

  return (
    <section className={styles.headlineslistcontainer}>
      <div className={styles.table}>
        <div className={styles.aggregatedMiniTables}>
          ListingTrack Twitter Feed
        </div>
        <div className={styles.sectionlistnewscontainerParent}>
          <div className={styles.sectionlistnewscontainer}>
            {isLoading ? (
              <Skeleton
                variant="rounded"
                height={200}
                width={"100%"}
                style={{ marginTop: 15 }}
              />
            ) : (
              newsData?.dataset?.map((item: any, index: number) => {
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
                              {item.news}
                            </div>
                            <div className={styles.siteName}>
                              {item.sitename}
                            </div>
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
              })
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default TwitterFeed;
