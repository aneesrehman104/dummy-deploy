import React, { useEffect, useState } from "react";
import styles from "./news.module.css";
import Image from "next/image";
import { getApiWithoutAuth } from "@/lib/ts/api";
import { URLs } from "@/lib/ts/apiUrl";
import Skeleton from "@mui/material/Skeleton";

function News() {
  const [isLoading, setIsLoading] = useState(true);
  const [newsData, setNewsData] = useState<any>(null);

  const getNews = async () => {
    setIsLoading(true);
    const response = await getApiWithoutAuth(`${URLs.spacNews}?type=all`);
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
      <div className={styles.aggregatedMiniTables}>SPAC News </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          flexWrap: "wrap",
          width: "100%",
        }}
      >
        {isLoading ? (
          <Skeleton
            variant="rounded"
            height={200}
            width={"100%"}
            style={{ marginTop: 15 }}
          />
        ) : (
          newsData?.dataset.map((item: any, index: number) => {
            return (
              <div className={styles.cardStyle} key={index}>
                <div style={{ height: 180 }}>
                  <div
                    style={{ width: "100%", height: 180, position: "relative" }}
                  >
                    <Image
                      alt="Mountains"
                      src="/newsImage.svg"
                      layout="fill"
                      objectFit="contain"
                    />
                  </div>
                </div>
                <div
                  style={{
                    height: 200,
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-evenly",
                    paddingLeft: 15,
                    paddingRight: 15,
                  }}
                >
                  <div className={styles.date}>
                    {item.username}&nbsp;&#x2022;&nbsp;{item.date}
                  </div>
                  <div className={styles.title}>{item.news_title}</div>
                  <div className={styles.discreption}>{item.newsDetail}</div>
                  <div className={styles.backgroundTitle}>{item.newsTag}</div>
                </div>
              </div>
            );
          })
        )}
      </div>
    </section>
  );
}

export default News;
