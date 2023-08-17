import React, { useEffect, useState } from "react";
import styles from "./news.module.css";
import { getApiWithoutAuth } from "@/lib/ts/api";
import { URLs } from "@/lib/ts/apiUrl";
import { ListingTrackNews } from "@/lib/components/CommonComponents";
interface PROPS {}

const News: React.FC<PROPS> = () => {
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

  useEffect(() => {
    const getNews = async () => {
      setIsLoading(true);
      const response = await getApiWithoutAuth(`${URLs.ipoNews}?type=all`);
      console.log("==================res", response);
      if (response.status === 200 && response.data !== null) {
        setNewsData(response.data);
        setIsLoading(false);
      } else {
        setIsLoading(false);
      }
    };
    getNews();
  }, []);
  return (
    <section className={styles.headlineslistcontainer}>
      <div className={styles.aggregatedMiniTables}>Ipos News </div>
      <ListingTrackNews isLoading={isLoading} dataArray={newsData?.dataset} />
    </section>
  );
};

export default News;
