import React, { useEffect, useState } from "react";
import styles from "./news.module.css";
import { URLs } from "@/lib/ts/apiUrl";
import { ListingTrackNews } from "@/lib/components/CommonComponents";
import { getODataWithParams } from "@lib/ts/api";
import axios, { AxiosError } from "axios";
interface PROPS {}

const News: React.FC<PROPS> = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
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
    const source = axios.CancelToken.source();
    const getNews = async () => {
      setIsLoading(true);
      try {
        const response = await getODataWithParams(URLs.ipoOdata, {
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
      <div className={styles.aggregatedMiniTables}>In The News</div>
      <ListingTrackNews isLoading={isLoading} dataArray={newsData?.dataset} />
    </section>
  );
};

export default News;
