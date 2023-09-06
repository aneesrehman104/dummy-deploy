import React, { useEffect, useState } from "react";
import styles from "./ipo-sec-filling.module.css";
import { getApiWithoutAuth } from "@/lib/ts/api";
import { URLs } from "@/lib/ts/apiUrl";
import { ListingTrackSECFiling } from "@/lib/components/CommonComponents";
import { getODataWithParams } from "@lib/ts/api";
import axios, { AxiosError } from "axios";
interface PROPS {}

const SecFilling: React.FC<PROPS> = () => {

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


    const getNewsSEC = async () => {
      setIsLoadingSec(true);
      try {
        const response = await getODataWithParams(URLs.ipoOdata, {
          filter: "sec",
          cancelToken: source.token,
        });

        if (response.status === 200 && response.data !== null) {
          setSecNewsData(response.data);
        }
      } catch (error) {
        if (axios.isCancel(error)) {
          console.log("Request cancelled:", (error as AxiosError).message);
        } else {
          console.error("An error occurred:", (error as AxiosError).message);
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
    <section className={styles.headlineslistcontainer}>
      <div className={styles.sectionlistnewscontainerParent}>
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

export default SecFilling;
