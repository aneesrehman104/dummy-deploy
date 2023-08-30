import React from "react";
import styles from "./closed.module.css";
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

const LatestClosed: React.FC<PROPS> = () => {
  const [latestClosed, setLatestClosed] = useState<any>({
    dataset: [],
    additional_dataset: { totalLength: 20 },
  });
  const [isLoadingClosed, setIsLoadingClosed] = useState<boolean>(true);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [itemsPerPage] = useState<number>(5);
  useEffect(() => {
    const source = axios.CancelToken.source();
    const getLatestClosed = async () => {
      setIsLoadingClosed(true);
      try {
        const response = await getODataWithParams(URLs.spacPipeline, {
          top: itemsPerPage,
          skip: (currentPage - 1) * itemsPerPage,
          cancelToken: source.token,
        });
        if (response.status === 200 && response.data !== null) {
          setLatestClosed({
            dataset: response.data,
            additional_dataset: { totalLength: 10 },
          });
          setIsLoadingClosed(false);
        }
      } catch (error) {
        if (axios.isCancel(error)) {
          console.log("Request cancelled:", (error as AxiosError).message);
          setIsLoadingClosed(false);
        } else {
          console.error("An error occurred:", (error as AxiosError).message);
          setIsLoadingClosed(false);
        }
      } finally {
        setIsLoadingClosed(false);
      }
    };
    getLatestClosed();
    return () => {
      source.cancel("Request cancelled due to component unmount");
    };
  }, [currentPage]);
  const paginate = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  return (
    <main className={styles.stockstablesection}>
      <header className={styles.tableTitle}>Latest Closed SPAC Mergers</header>
      <section className={styles.companiestable}>
        <div className={styles.tablecontent}>
          {isLoadingClosed ? (
            <SkeltonTable />
          ) : (
            <ListingTrackTable
              headerArray={headerArray}
              data={latestClosed?.dataset}
              totalLength={latestClosed?.additional_dataset}
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

export default LatestClosed;
