import React, { useEffect, useState } from "react";
import styles from "./PressReleases.module.css";
import Image from "next/image";
import { getApiWithoutAuth } from "@/lib/ts/api";
import { URLs } from "@/lib/ts/apiUrl";
import Skeleton from "@mui/material/Skeleton";
function PressReleases() {
  const [isLoading, setIsLoading] = useState(true);
  const [releasesnewsData, setReleasesNewsData] = useState<any>(null);
  const [isLoadingSec, setIsLoadingSec] = useState(true);
  const [secnewsData, setSecNewsData] = useState<any>(null);
  const getNews = async () => {
    setIsLoading(true);
    const response = await getApiWithoutAuth(`${URLs.spacNews}?type=press`);
    if (response.status === 200) {
      setReleasesNewsData(response.data);
      setIsLoading(false);
    } else {
      setIsLoading(false);
    }
  };

  const getNewsSEC = async () => {
    setIsLoadingSec(true);
    const response = await getApiWithoutAuth(`${URLs.spacNews}?type=sec`);
    if (response.status === 200) {
      setSecNewsData(response.data);
      setIsLoadingSec(false);
    } else {
      setIsLoadingSec(false);
    }
  };

  useEffect(() => {
    getNews();
    getNewsSEC();
  }, []);

  return (
    <section className={styles.headlineslistcontainer}>
      <div className={styles.sectionlistnewscontainerParent}>
        <div className={styles.sectionlistnewscontainer}>
          <div className={styles.aggregatedMiniTables}>Press Releases</div>
          {isLoading ? (
            <Skeleton
              variant="rounded"
              height={200}
              width={"100%"}
              style={{ marginTop: 15 }}
            />
          ) : (
            releasesnewsData?.dataset?.map((item: any, index: number) => {
              return (
                <div className={styles.paper2} key={index}>
                  <div className={styles.tablerow}>
                    <div className={styles.frameWrapper}>
                      <div className={styles.customTableCustomCell4}>
                        <div className={styles.vectorWrapper}>
                          <Image
                            src="/vector3.svg"
                            alt="vector3"
                            width={18}
                            height={18}
                          />
                        </div>
                        <div className={styles.frameWrapper}>
                          <div className={styles.headlineCallOut}>
                            {item.news}
                          </div>
                          <div className={styles.siteName}>{item.sitename}</div>
                        </div>
                      </div>
                    </div>
                    <div className={styles.chevronRight}>
                      <Image
                        src="/vector4.svg"
                        alt="vector4"
                        width={6}
                        height={11}
                      />
                    </div>
                  </div>
                </div>
              );
            })
          )}
        </div>
        <div className={styles.sectionlistnewscontainer}>
          <div className={styles.aggregatedMiniTables}>SEC Filings</div>
          {isLoadingSec ? (
            <Skeleton
              variant="rounded"
              height={200}
              width={"100%"}
              style={{ marginTop: 15 }}
            />
          ) : (
            secnewsData?.dataset?.map((item: any, index: number) => {
              return (
                <div className={styles.paper2} key={index}>
                  <div className={styles.tablerow}>
                    <div className={styles.frameWrapper}>
                      <div className={styles.customTableCustomCell4}>
                        <div className={styles.vectorWrapper}>
                          <Image
                            src="/vector3.svg"
                            alt="vector3"
                            width={18}
                            height={18}
                          />
                        </div>
                        <div className={styles.frameWrapper}>
                          <div className={styles.headlineCallOut}>
                            {item.news}
                          </div>
                          <div className={styles.siteName}>{item.sitename}</div>
                        </div>
                      </div>
                    </div>
                    <div className={styles.chevronRight}>
                      <Image
                        src="/vector4.svg"
                        alt="vector4"
                        width={6}
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
    </section>
  );
}

export default PressReleases;
