import React, { Fragment, useEffect } from "react";
import styles from "./trading.module.css";
import { useState } from "react";
import Gainer from "../Gainer/gainer.component";
import Losers from "../Losers/losers.component";
import { getODataWithParams } from "@/lib/ts/api";
import { URLs } from "@/lib/ts/apiUrl";
import axios, { AxiosError } from "axios";

interface PROPS {}

const Trading: React.FC<PROPS> = () => {
  const tabValues: { [key: number]: string } = {
    0: "daily",
    1: "weekly",
    2: "merger_closing",
  };

  const [selectedTab, setSelectedTab] = useState<number>(0);
  const [isLoadingGainer, setIsLoadingGainer] = useState<boolean>(true);
  const [isLoadingLooser, setIsLoadingLooser] = useState<boolean>(true);

  const [spacsTradingGainerData, setSpacsTradingGainerData] = useState({
    dataset: [],
    additional_dataset: { totalLength: 20 },
  });
  const [
    spacsTradingGainerDataSelectedTab,
    setSpacsTradingGainerDataSelectedTab,
  ] = useState<number>(0);
  const [
    spacsTradingGainerDataCurrentPage,
    setSpacsTradingGainerDataCurrentPage,
  ] = useState<number>(1);

  const [spacsTradingLoserData, setSpacsTradingLoserData] = useState({
    dataset: [],
    additional_dataset: { totalLength: 20 },
  });
  const [
    spacsTradingLoserDataSelectedTab,
    setSpacsTradingLoserDataSelectedTab,
  ] = useState<number>(1);
  const [
    spacsTradingLoserDataCurrentPage,
    setSpacsTradingLoserDataCurrentPage,
  ] = useState<number>(1);

  const [itemsPerPage] = useState<number>(5);

  useEffect(() => {
    const source = axios.CancelToken.source();
    const getSpacsTradingLoserData = async () => {
      setIsLoadingLooser(true);
      try {
        const response = await getODataWithParams(URLs.spacNews, {
          cancelToken: source.token,
        });
        if (response.status === 200 && response.data !== null) {
          setSpacsTradingLoserData(response.data);
          setIsLoadingLooser(false);
        }
      } catch (error) {
        if (axios.isCancel(error)) {
          console.log("Request cancelled:", (error as AxiosError).message);
          setIsLoadingLooser(false);
        } else {
          console.error("An error occurred:", (error as AxiosError).message);
          setIsLoadingLooser(false);
        }
      } finally {
        setIsLoadingLooser(false);
      }
    };
    getSpacsTradingLoserData();
    return () => {
      source.cancel("Request cancelled due to component unmount");
    };
  }, [
    spacsTradingLoserDataSelectedTab,
    spacsTradingLoserDataCurrentPage,
    selectedTab,
  ]);

  useEffect(() => {
    const source = axios.CancelToken.source();
    const getSpacsTradingGainerData = async () => {
      setIsLoadingGainer(true);
      try {
        const response = await getODataWithParams(URLs.spacNews, {
          cancelToken: source.token,
        });
        if (response.status === 200 && response.data !== null) {
          setSpacsTradingGainerData(response.data);
          setIsLoadingGainer(false);
        }
      } catch (error) {
        if (axios.isCancel(error)) {
          console.log("Request cancelled:", (error as AxiosError).message);
          setIsLoadingGainer(false);
        } else {
          console.error("An error occurred:", (error as AxiosError).message);
          setIsLoadingGainer(false);
        }
      } finally {
        setIsLoadingGainer(false);
      }
    };
    getSpacsTradingGainerData();
    return () => {
      source.cancel("Request cancelled due to component unmount");
    };
  }, [
    spacsTradingGainerDataSelectedTab,
    spacsTradingGainerDataCurrentPage,
    selectedTab,
  ]);
  return (
    <section className={styles.stockstablesection}>
      <div className={styles.tableTitle}>Trading</div>
      <div className={styles.tableContainerInner}>
        <div
          style={{
            borderBottom: "1px solid #d2ecf9",
            display: "flex",
            cursor: "pointer",
          }}
        >
          <div
            onClick={() => setSelectedTab(0)}
            className={`${styles.headerCell} ${
              selectedTab === 0 && styles.selectedHeader
            }`}
          >
            All Active SPACs
          </div>
          <div
            onClick={() => setSelectedTab(1)}
            className={`${styles.headerCell} ${
              selectedTab === 1 && styles.selectedHeader
            }`}
          >
            De-SPACs
          </div>
        </div>
        <Fragment>
          <Gainer
            title={
              selectedTab === 0 ? "Gainers: Active SPACs" : "Gainers: De-SPACs"
            }
            data={spacsTradingGainerData}
            itemsPerPage={itemsPerPage}
            spacsTradingGainerDataSelectedTab={
              spacsTradingGainerDataSelectedTab
            }
            setSpacsTradingGainerDataSelectedTab={
              setSpacsTradingGainerDataSelectedTab
            }
            spacsTradingGainerDataCurrentPage={
              spacsTradingGainerDataCurrentPage
            }
            setSpacsTradingGainerDataCurrentPage={
              setSpacsTradingGainerDataCurrentPage
            }
            isLoading={isLoadingGainer}
          />
          <Losers
            title={
              selectedTab === 0 ? "Losers:  Active SPACs" : "Losers: De-SPACs"
            }
            data={spacsTradingLoserData}
            itemsPerPage={itemsPerPage}
            spacsTradingLoserDataSelectedTab={spacsTradingLoserDataSelectedTab}
            setSpacsTradingLoserDataSelectedTab={
              setSpacsTradingLoserDataSelectedTab
            }
            spacsTradingLoserDataCurrentPage={spacsTradingLoserDataCurrentPage}
            setSpacsTradingLoserDataCurrentPage={
              setSpacsTradingLoserDataCurrentPage
            }
            isLoadingLooser={isLoadingLooser}
          />
        </Fragment>
      </div>
    </section>
  );
};

export default Trading;
