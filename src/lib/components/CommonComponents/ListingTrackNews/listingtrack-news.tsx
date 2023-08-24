import React, { useEffect, useState } from "react";
import styles from "./news.module.css";
import Image from "next/image";
import NewsImage from "@public/newsImage.svg";

import Skeleton from "@mui/material/Skeleton";
const ListingTrackNews: React.FC<{ isLoading: boolean, dataArray: any }> = ({ isLoading, dataArray }) => {
  return (
    <main
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
      ) : dataArray?.length === 0 ? (
        <div className={styles.title}>Don&apos;t have any News</div>
      ) : (
        dataArray?.map((item: any, index: number) => {
          return (
            <main className={styles.cardStyle} key={index}>
              <div style={{ height: 180 }}>
                <div
                  style={{ width: "100%", height: 180, position: "relative" }}
                >
                  <Image
                    alt="Mountains"
                    src={ NewsImage }
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
            </main>
          );
        })
      )}
    </main>
  );
};

export default ListingTrackNews;
