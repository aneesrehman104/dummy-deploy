import React from "react";
import styles from "./press-release.module.css";
import Image from "next/image";
import Vector3 from "@public/vector3.svg";
import Vector4 from "@public/vector4.svg";


export const Title: React.FC<{ text: string }> = ({ text }) => {
  return <div className={styles.aggregatedMiniTables}>{text}</div>;
};

export const MinitableContainer: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return (
    <div className={styles.sectionlistnewscontainerParent}>{children}</div>
  );
};

const MinitableContent: React.FC<{ news: string; sitename: string }> = ({
  news,
  sitename,
}) => {
  return (
    <div className={styles.frameWrapper}>
      <div className={styles.headlineCallOut}>{news}</div>
      <div className={styles.siteName}>{sitename}</div>
    </div>
  );
};

export const PressReleaseCard: React.FC<{ item: any }> = ({ item }) => {
  return (
    <main className={styles.paper2}>
      <div className={styles.tablerow}>
        <section className={styles.frameWrapper}>
          <main className={styles.customTableCustomCell4}>
            <div className={styles.vectorWrapper}>
              <Image src={Vector3} alt="/vector3" width={17} height={17} />
            </div>
            <MinitableContent news={item.news} sitename={item.sitename} />
          </main>
        </section>
        <section className={styles.chevronRight}>
          <Image src={Vector4} alt="/vector4" width={7} height={11} />
        </section>
      </div>
    </main>
  );
};