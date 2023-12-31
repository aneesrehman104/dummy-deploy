import React, { useEffect, useState } from "react";
import styles from "./twitter-feed.module.css";
import Image from "next/image";
import { getApiWithoutAuth } from "@/lib/ts/api";
import { URLs } from "@/lib/ts/apiUrl";
import Skeleton from "@mui/material/Skeleton";
interface PROPS {}

const TwitterFeed: React.FC<PROPS> = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [newsData, setNewsData] = useState<any>({
    dataset: [
      {
        heading:
          " Headline call out goes here, truncate at 54 charact..Headline call out goes here, truncate at 54 charact..Headline call out goes here, truncate at 54 charact..",
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
    ],
  });

  const getNews = async () => {
    setIsLoading(true);
    const response = await getApiWithoutAuth(`${URLs.mergerNews}?type=twitter`);
    if (response.status === 200 && response.data !== null) {
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
                              {`${item.heading} ${index}`}
                            </div>
                            <div className={styles.siteName}>
                              {item.siteName}
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
