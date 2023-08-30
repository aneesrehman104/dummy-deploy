import React, { useEffect, useState } from "react";
import styles from "../dashboard-header.module.css";
import { getODataWithParams } from "@/lib/ts/api";
import { URLs } from "@/lib/ts/apiUrl";
import axios, { AxiosError } from "axios";
import Skeleton from "@mui/material/Skeleton";
import {
  MinitableContainer,
  PressReleaseCard,
} from "@/lib/components/CommonComponents/PressReleases/press-release.component";

const jsonResponse = "application/json";

const Title: React.FC<{ text: string }> = ({ text }) => {
  return <div className={styles.aggregatedMiniTables}>{text}</div>;
};

interface PROPS {}
const MiniTableList: React.FC<PROPS> = () => {
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
      <div className={styles.table}>
        <Title text="Mini Table list Title" />
        <MinitableContainer>
          <div className={styles.sectionlistnewscontainer}>
            {isLoading ? (
              <Skeleton
                variant="rounded"
                height={200}
                width={"100%"}
                style={{ marginTop: 15 }}
              />
            ) : (
              releasesnewsData.dataset?.map((item: any, index: any) => {
                return <PressReleaseCard key={index} item={item} />;
              })
            )}
          </div>
        </MinitableContainer>
      </div>
    </section>
  );
};

export default MiniTableList;
