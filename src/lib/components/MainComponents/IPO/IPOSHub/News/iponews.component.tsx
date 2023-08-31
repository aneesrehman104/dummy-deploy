import React, { useEffect, useState } from "react";
import styles from "./news.module.css";
import { URLs } from "@/lib/ts/apiUrl";
import { ListingTrackNews } from "@/lib/components/CommonComponents";
import { getODataWithParams } from "@lib/ts/api";
import axios, { AxiosError } from "axios";
import { Newsfeed } from "@/lib/components/CommonComponents/News/news.component";
interface PROPS {}

const News: React.FC<PROPS> = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [newsData, setNewsData] = useState<any>({
    dataset: [
      {
        username: "@Nick",
        date: "27-5-2023",
        news_title: "TWTR changed its logo from a bird to an X",
        newsDetail: "TWTR changed its logo from a bird to an X. This is the biggest change in the company's design. hello",
        newsTag: "Twitter",
      },
    ],
  });

  useEffect(() => {
    const source = axios.CancelToken.source();
    const getNews = async () => {
      setIsLoading(true);
      try {
        const response = await getODataWithParams(URLs.ipoNews, {
          cancelToken: source.token,
        });

        if (response.status === 200 && response.data !== null) {
          setNewsData(response.data);
          setIsLoading(false);
        }
      } catch (error) {
        if (axios.isCancel(error)) {
          console.log("Request cancelled:", (error as AxiosError).message);
          setIsLoading(false);
        } else {
          console.error("An error occurred:", (error as AxiosError).message);
          setIsLoading(false);
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
    <Newsfeed
      isLoading={isLoading}
      newsData={newsData}
      title="Ipo News"
    />
  );
};

export default News;
