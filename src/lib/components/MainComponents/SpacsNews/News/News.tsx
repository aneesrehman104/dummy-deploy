import React, { useEffect, useState } from "react";
import styles from "./news.module.css";
import { getApiWithoutAuth } from "@/lib/ts/api";
import { URLs } from "@/lib/ts/apiUrl";
import { ListingTrackNews } from "@/lib/components/CommonComponents";

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
      <ListingTrackNews isLoading={isLoading} dataArray={newsData?.dataset} />
    </section>
  );
}

export default News;
