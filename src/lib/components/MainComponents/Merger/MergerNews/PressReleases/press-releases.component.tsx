import React, { useEffect, useState } from "react";
import styles from "./press-releases.module.css";
import { getApiWithoutAuth } from "@/lib/ts/api";
import { URLs } from "@/lib/ts/apiUrl";
import { ListingTrackSECFiling } from "@/lib/components/CommonComponents";
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
        date:"05/01/2023   8:05AM",
        sitename: "Site name",
      },
      {
        heading: "Microsoft Corp. -- 8-K",
        date:"05/01/2023   8:05AM",
        sitename: "Site name",
      },
      {
        heading: "Microsoft Corp. -- 8-K",
        date:"05/01/2023   8:05AM",
        sitename: "Site name",
      },
      {
        heading: "Microsoft Corp. -- 8-K",
        date:"05/01/2023   8:05AM",
        sitename: "Site name",
      },
      {
        heading: "Microsoft Corp. -- 8-K",
        date:"05/01/2023   8:05AM",
        sitename: "Site name",
      },
    ],
  });
  const getNews = async () => {
    setIsLoading(true);
    const response = await getApiWithoutAuth(`${URLs.mergerNews}?type=press`);
    if (response.status === 200 && response.data !== null) {
      setReleasesNewsData(response.data);
      setIsLoading(false);
    } else {
      setIsLoading(false);
    }
  };

  const getNewsSEC = async () => {
    setIsLoadingSec(true);
    const response = await getApiWithoutAuth(`${URLs.mergerNews}?type=sec`);
    if (response.status === 200 && response.data !== null) {
      setSecNewsData(response.data);
      setIsLoadingSec(false);
    } else {
      setIsLoadingSec(false);
    }
  };

  useEffect(() => {
    getNews();
    getNewsSEC();
  }, []);

  return (
    <section className={styles.headlineslistcontainer}>
      <div className={styles.sectionlistnewscontainerParent}>
      <ListingTrackSECFiling
          isLoading={isLoading}
          dataArray={releasesnewsData?.dataset}
          title={"Press Releases & ListingTrack Updates"}
        />
        <ListingTrackSECFiling
        isFilling
          isLoading={isLoadingSec}
          dataArray={secnewsData?.dataset}
          title={"Merger SEC Feed"}
        />
      </div>
    </section>
  );
}

export default PressReleases;
