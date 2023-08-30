import React from "react";
import ListingTrackNews from "../ListingTrackNews/listingtrack-news";
import styles from "./news.module.css";

export const Newsfeed: React.FC<{ isLoading: boolean; newsData: any; title: string }> = ({ isLoading, newsData, title }) => {
  return (
    <section className={styles.headlineslistcontainer}>
      <div className={styles.aggregatedMiniTables}> { title } </div>
      <ListingTrackNews isLoading={isLoading} dataArray={newsData?.dataset} />
    </section>
  );
};
