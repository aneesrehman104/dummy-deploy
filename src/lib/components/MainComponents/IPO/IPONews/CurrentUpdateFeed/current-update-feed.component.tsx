import React, { useEffect, useState } from "react";
import styles from "./current-update-feed.module.css";
import Image from "next/image";
import { getApiWithoutAuth } from "@/lib/ts/api";
import { URLs } from "@/lib/ts/apiUrl";
import Skeleton from "@mui/material/Skeleton";
import { getODataWithParams } from "@lib/ts/api";
import axios, { AxiosError } from "axios";
interface PROPS {}

const CurrentUpdateFeed: React.FC<PROPS> = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
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
  useEffect(() => {
    const source = axios.CancelToken.source();
    const getNews = async () => {
      setIsLoading(true);
      try {
        const response = await getODataWithParams(URLs.ipoNews, {
          filter:'update',
          cancelToken: source.token,
        });
        if (response.status === 200 && response.data !== null) {
          setNewsData(response.data);
        }
      } catch (error) {
        if (axios.isCancel(error)) {
          console.log("Request cancelled:", (error as AxiosError).message);
        } else {
          console.error("An error occurred:", (error as AxiosError).message);
        }
      } finally {
        setIsLoading(false);
      }
    };
    getNews();

    return () => {
      source.cancel("Request cancelled due to component unmount");
    };
  }, []);
  return (
    <section className={styles.headlineslistcontainer}>
      <div className={styles.table}>
        <div className={styles.aggregatedMiniTables}>
          ListingTrack Curated Feed
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
};

export default CurrentUpdateFeed;
