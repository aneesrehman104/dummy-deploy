import React from "react";
import styles from "./news.module.css";
import Image from "next/image";
  interface PROPS {}

  const News: React.FC<PROPS> = () => {
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
        <div className={styles.cardStyle}>
          <div style={{ height: 180 }}>
            <div style={{ width: "100%", height: 180, position: "relative" }}>
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
            <div className={styles.date}>John Doe • 4 Feb 2022</div>
            <div className={styles.title}>New feature available on Devias</div>
            <div className={styles.discreption}>
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout.
            </div>
            <div className={styles.backgroundTitle}>Twitter</div>
          </div>
        </div>{" "}
        <div className={styles.cardStyle}>
          <div style={{ height: 180 }}>
            <div style={{ width: "100%", height: 180, position: "relative" }}>
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
            <div className={styles.date}>John Doe • 4 Feb 2022</div>
            <div className={styles.title}>New feature available on Devias</div>
            <div className={styles.discreption}>
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout.
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout.
            </div>
            <div className={styles.backgroundTitle}>Bloomberg</div>
          </div>
        </div>
        <div className={styles.cardStyle}>
          <div style={{ height: 180 }}>
            <div style={{ width: "100%", height: 180, position: "relative" }}>
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
            <div className={styles.date}>John Doe • 4 Feb 2022</div>
            <div className={styles.title}>New feature available on Devias</div>
            <div className={styles.discreption}>
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout.
            </div>
            <div className={styles.backgroundTitle}>Twitter</div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default News;
