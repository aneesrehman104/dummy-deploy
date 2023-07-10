import React, { useEffect, useState } from "react";
import styles from "./news.module.css";
import { getApiWithoutAuth } from "@/lib/ts/api";
import { URLs } from "@/lib/ts/apiUrl";
import { ListingTrackNews } from "@/lib/components/CommonComponents";
function News() {
  const [isLoading, setIsLoading] = useState(true);
  const [newsData, setNewsData] = useState<any>({
    dataset: [
      {
        username: "abc",
        date: "27-5-2023",
        news_title: "This is True",
        newsDetail: "get from pakistan",
        newsTag: "facebook",
      },
    ],
  });

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
      <div className={styles.aggregatedMiniTables}>Ipos News </div>
      <ListingTrackNews isLoading={isLoading} dataArray={newsData?.dataset} />
    </section>
  );
}

export default News;
