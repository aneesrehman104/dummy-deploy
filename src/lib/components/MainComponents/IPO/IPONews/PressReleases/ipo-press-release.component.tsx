import React, { useEffect, useState } from "react";
import styles from "./ipo-press-release.module.css";
import { getApiWithoutAuth } from "@/lib/ts/api";
import { URLs } from "@/lib/ts/apiUrl";
import { ListingTrackSECFiling } from "@/lib/components/CommonComponents";
import { getODataWithParams } from "@lib/ts/api";
import axios, { AxiosError } from "axios";
interface PROPS {}

const PressReleases: React.FC<PROPS> = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [releasesnewsData, setReleasesNewsData] = useState<any>({
    dataset: [
      {
        news: " Headline call out goes here, truncate at 54 charact..Headline call out goes here, truncate at 54 charact..",
        sitename: "Site name",
      },
      {
        news: " Headline call out goes here, truncate at 54 charact..",
        sitename: "Site name",
      },
      {
        news: " Headline call out goes here, truncate at 54 charact..",
        sitename: "Site name",
      },
      {
        news: " Headline call out goes here, truncate at 54 charact..",
        sitename: "Site name",
      },
      {
        news: " Headline call out goes here, truncate at 54 charact..",
        sitename: "Site name",
      },
    ],
  });
  const [isLoadingSec, setIsLoadingSec] = useState<boolean>(true);
  const [secnewsData, setSecNewsData] = useState<any>({
    dataset: [
      {
        heading: "Microsoft Corp. -- 8-K",
        date: "05/01/2023   8:05AM",
        sitename: "Site name",
      },
      {
        heading: "Microsoft Corp. -- 8-K",
        date: "05/01/2023   8:05AM",
        sitename: "Site name",
      },
      {
        heading: "Microsoft Corp. -- 8-K",
        date: "05/01/2023   8:05AM",
        sitename: "Site name",
      },
      {
        heading: "Microsoft Corp. -- 8-K",
        date: "05/01/2023   8:05AM",
        sitename: "Site name",
      },
      {
        heading: "Microsoft Corp. -- 8-K",
        date: "05/01/2023   8:05AM",
        sitename: "Site name",
      },
    ],
  });
  useEffect(() => {
    const source = axios.CancelToken.source();

    const getNews = async () => {
      setIsLoading(true);
      try {
        const response = await getODataWithParams(URLs.ipoOdata, {
          filter: "press",
          cancelToken: source.token,
        });

        if (response.status === 200 && response.data !== null) {
          setReleasesNewsData(response.data);
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

    const getNewsSEC = async () => {
      setIsLoading(true);
      try {
        const response = await getODataWithParams(URLs.ipoOdata, {
          filter: "sec",
          cancelToken: source.token,
        });

        if (response.status === 200 && response.data !== null) {
          setReleasesNewsData(response.data);
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
    getNewsSEC();

    return () => {
      source.cancel("Request cancelled due to component unmount");
    };
  }, []);

  return (
    <section className={styles.headlineslistcontainer}>
      <div className={styles.sectionlistnewscontainerParent}>
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
      </div>
    </section>
  );
};

export default PressReleases;
