import React, { Fragment, useEffect } from "react";
import styles from "./trading.module.css";
import { useState } from "react";
import Gainer from "../Gainer/gainer.component";
import Losers from "../Losers/losers.component";
import { getApiWithoutAuth } from "@/lib/ts/api";
import { URLs } from "@/lib/ts/apiUrl";
  interface PROPS {}

  const Trading: React.FC<PROPS> = () => {
  const tabValues: { [key: number]: string } = {
    0: "daily",
    1: "weekly",
    2: "merger_closing",
  };

  const [selectedTab, setSelectedTab] = useState<number>(0);
  const [isLoading, setIsLoading] = useState<boolean>(true);
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

  const getSpacsTradingGainerData = async () => {
    setIsLoading(true);
    const response = await getApiWithoutAuth(
      `${
        URLs.spacTrading
      }?page=${spacsTradingGainerDataCurrentPage}&offset=${itemsPerPage}&period=${
        tabValues[spacsTradingGainerDataSelectedTab]
      }&gainOrLoser=gain&activeOrDeSPAC=${
        selectedTab === 0 ? "active" : "deSPAC"
      }`
    );
   if (response.status === 200 && response.data !== null) {
      setSpacsTradingGainerData(response.data);
      setIsLoading(false);
    } else {
      setIsLoading(false);
    }
  };

  const getSpacsTradingLoserData = async () => {
    setIsLoadingLooser(true);
    const response = await getApiWithoutAuth(
      `${
        URLs.spacTrading
      }?page=${spacsTradingLoserDataCurrentPage}&offset=${itemsPerPage}&period=${
        tabValues[spacsTradingLoserDataSelectedTab]
      }&gainOrLoser=gain&activeOrDeSPAC=${
        selectedTab === 0 ? "active" : "deSPAC"
      }`
    );
   if (response.status === 200 && response.data !== null) {
      setSpacsTradingLoserData(response.data);
      setIsLoadingLooser(false);
    } else {
      setIsLoadingLooser(false);
    }
  };

  useEffect(() => {
    getSpacsTradingGainerData();
     // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [
    spacsTradingGainerDataSelectedTab,
    spacsTradingGainerDataCurrentPage,
    selectedTab,
  ]);

  useEffect(() => {
    getSpacsTradingLoserData();
     // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [
    spacsTradingLoserDataSelectedTab,
    spacsTradingLoserDataCurrentPage,
    selectedTab,
  ]);
  return (
    <section className={styles.stockstablesection}>
      <div className={styles.tableTitle}>Trading</div>
      <div className={styles.tableContainerInner}>
        <div style={{ borderBottom: "1px solid #d2ecf9", display: "flex" ,cursor:'pointer'}}>
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
            isLoading={isLoading}
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
}

export default Trading;
