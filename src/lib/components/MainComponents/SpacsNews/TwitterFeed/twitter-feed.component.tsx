import React, { useEffect, useState } from "react";
import { getODataWithParams } from "@/lib/ts/api";
import { URLs } from "@/lib/ts/apiUrl";
import axios, { AxiosError } from "axios";
import { DummyData } from "./constants";
import { ListingTrackFeed } from "@/lib/components/CommonComponents";

interface PROPS {}

const TwitterFeed: React.FC<PROPS> = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [newsData, setNewsData] = useState<any>({
    dataset: DummyData,
  });
  useEffect(() => {
    const source = axios.CancelToken.source();
    const getNews = async () => {
      setIsLoading(true);
      try {
        const response = await getODataWithParams(URLs.spacNews, {
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
    <ListingTrackFeed
      isLoading={isLoading}
      dataArray={newsData?.dataset}
      title={" ListingTrack Twitter Feed"}
    />
  );
};

export default TwitterFeed;
