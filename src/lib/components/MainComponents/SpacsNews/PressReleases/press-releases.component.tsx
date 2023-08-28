import React, { useEffect, useState } from "react";
import styles from "./press-releases.module.css";
import Image from "next/image";
import { getApiWithoutAuth,getODataWithParams } from "@/lib/ts/api";
import { URLs } from "@/lib/ts/apiUrl";
import Skeleton from "@mui/material/Skeleton";
import { ListingTrackSECFiling } from "@/lib/components/CommonComponents";
import { DummyDataSecnews, DummyDataReleasesnews } from "./constants";
import axios, { AxiosError } from "axios";

interface PROPS {}

const PressReleases: React.FC<PROPS> = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [releasesnewsData, setReleasesNewsData] = useState<any>({
    dataset: DummyDataReleasesnews,
  });
  const [isLoadingSec, setIsLoadingSec] = useState<boolean>(true);
  const [secnewsData, setSecNewsData] = useState<any>({
    dataset: DummyDataSecnews,
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
          setReleasesNewsData(response.data);
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


  useEffect(() => {
    const source = axios.CancelToken.source();
    const getNewsSEC = async () => {
      setIsLoadingSec(true);
      try {
        const response = await getODataWithParams(URLs.spacNews, {
          cancelToken: source.token,
        });
        if (response.status === 200 && response.data !== null) {
          setSecNewsData(response.data);
          setIsLoadingSec(false);
        }
      } catch (error) {
        if (axios.isCancel(error)) {
          console.log("Request cancelled:", (error as AxiosError).message);
          setIsLoadingSec(false);
        } else {
          console.error("An error occurred:", (error as AxiosError).message);
          setIsLoadingSec(false);
        }
      } finally {
        setIsLoadingSec(false);
      }
    };
    getNewsSEC();
    return () => {
      source.cancel("Request cancelled due to component unmount");
    };
  }, []);

  

  return (
    <main className={styles.headlineslistcontainer}>
      <section className={styles.sectionlistnewscontainerParent}>
        <ListingTrackSECFiling
          isLoading={isLoading}
          dataArray={releasesnewsData?.dataset}
          title={"Press Releases"}
        />
        <ListingTrackSECFiling
          isFilling
          isLoading={isLoadingSec}
          dataArray={secnewsData?.dataset}
          title={"SEC Filings"}
        />
      </section>
    </main>
  );
};

export default PressReleases;
