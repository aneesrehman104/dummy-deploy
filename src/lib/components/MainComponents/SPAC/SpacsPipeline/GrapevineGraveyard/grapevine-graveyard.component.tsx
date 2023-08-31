import React, { useEffect, useState } from "react";
import styles from "./grapevine-graveyard.module.css";
import { getODataWithParams } from "@/lib/ts/api";
import { URLs } from "@/lib/ts/apiUrl";
import {
  SkeltonTable,
  ListingTrackTable,
} from "@/lib/components/CommonComponents";
import {
  headerArrayRumoredMergers,
  headerArrayTerminatedMergers,
  headerArrayTalksFailed,
} from "./constants";
import axios, { AxiosError } from "axios";

interface PROPS {}

const GrapevineGraveyard: React.FC<PROPS> = () => {
  const [selectedTab, setSelectedTab] = useState<number>(0);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [grapevineGraveyardData, setGrapevineGraveyardData] = useState<any>({
    dataset: [],
    additional_dataset: { totalLength: 20 },
  });
  const [itemsPerPage] = useState<number>(5);

  const tabData = [
    { label: "Rumored Mergers", index: 0 },
    { label: "Terminated Mergers", index: 1 },
    { label: "Talks Failed", index: 2 },
  ];
  const tabValues: { [key: number]: string } = {
    0: "rumor",
    1: "latest_failed",
    2: "other",
  };

  const paginate = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  const handleTabClick = (tabIndex: any) => {
    setSelectedTab(tabIndex);
    setCurrentPage(1);
  };

  useEffect(() => {
    const source = axios.CancelToken.source();
    const getLatestClosed = async () => {
      setIsLoading(true);
      try {
        const response = await getODataWithParams(URLs.spacPipeline, {
          cancelToken: source.token,
        });
        if (response.status === 200 && response.data !== null) {
          setGrapevineGraveyardData(response.data);
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
    getLatestClosed();
    return () => {
      source.cancel("Request cancelled due to component unmount");
    };
  }, [selectedTab, currentPage]);

  return (
    <main className={styles.stockstablesection}>
      <header className={styles.tableTitle}>
        SPAC Merger Grapevine & Graveyard
      </header>
      <div className={styles.tableContainerInner}>
        <section style={{ borderBottom: "1px solid #d2ecf9", display: "flex" }}>
          {tabData.map(({ label, index }) => (
            <div
              key={index}
              onClick={() => handleTabClick(index)}
              className={`${styles.headerCell} ${
                selectedTab === index && styles.selectedHeader
              }`}
            >
              {label}
            </div>
          ))}
        </section>
        <section style={{ overflow: "auto" }}>
          {isLoading ? (
            <SkeltonTable />
          ) : (
            <ListingTrackTable
              headerArray={
                selectedTab === 0
                  ? headerArrayRumoredMergers
                  : selectedTab === 1
                  ? headerArrayTerminatedMergers
                  : headerArrayTalksFailed
              }
              data={grapevineGraveyardData?.dataset}
              itemsPerPage={itemsPerPage}
              currentPage={currentPage}
              paginate={paginate}
              totalLength={grapevineGraveyardData?.additional_dataset}
              showPagination
            />
          )}
        </section>
      </div>
    </main>
  );
};

export default GrapevineGraveyard;
