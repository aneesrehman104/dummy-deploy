import React from "react";
import styles from "./announced.module.css";
import { useState, useEffect } from "react";
import { getApiWithoutAuth, getODataWithParams } from "@/lib/ts/api";
import { URLs } from "@/lib/ts/apiUrl";
import {
  SkeltonTable,
  ListingTrackTable,
} from "@/lib/components/CommonComponents";
import axios, { AxiosError } from "axios";
import { headerArray } from "./constants";
interface PROPS {}

const Announced: React.FC<PROPS> = () => {
  const [latestAnnounced, setLatestAnnounced] = useState<any>({
    dataset: [],
    additional_dataset: { totalLength: 20 },
  });
  const [isLoadingAnnounced, setIsLoadingAnnounced] = useState<boolean>(true);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [itemsPerPage] = useState<number>(5);

  useEffect(() => {
    const source = axios.CancelToken.source();
    const getLatestAnnounced = async () => {
      setIsLoadingAnnounced(true);
      try {
        const response = await getODataWithParams(URLs.spacPipeline, {
          top: itemsPerPage,
          skip: (currentPage - 1) * itemsPerPage,
          cancelToken: source.token,
        });
        if (response.status === 200 && response.data !== null) {
          setLatestAnnounced({
            dataset: response.data,
            additional_dataset: { totalLength: 10 },
          });
          setIsLoadingAnnounced(false);
        }
      } catch (error) {
        if (axios.isCancel(error)) {
          console.log("Request cancelled:", (error as AxiosError).message);
          setIsLoadingAnnounced(false);
        } else {
          console.error("An error occurred:", (error as AxiosError).message);
          setIsLoadingAnnounced(false);
        }
      } finally {
        setIsLoadingAnnounced(false);
      }
    };
    getLatestAnnounced();
    return () => {
      source.cancel("Request cancelled due to component unmount");
    };
  }, [currentPage]);
  const paginate = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  return (
    <main className={styles.stockstablesection}>
      <header className={styles.tableTitle}>
        Latest Announced SPAC Mergers
      </header>
      <section className={styles.companiestable}>
        <div className={styles.tablecontent}>
          {isLoadingAnnounced ? (
            <SkeltonTable />
          ) : (
            <ListingTrackTable
              headerArray={headerArray}
              data={latestAnnounced?.dataset}
              totalLength={latestAnnounced?.additional_dataset?.totalLength}
              itemsPerPage={itemsPerPage}
              currentPage={currentPage}
              paginate={paginate}
              showPagination
            />
          )}
        </div>
      </section>
    </main>
  );
};

export default Announced;
