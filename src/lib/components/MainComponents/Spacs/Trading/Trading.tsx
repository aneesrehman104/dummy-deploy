import React, { Fragment, useEffect } from "react";
import styles from "./trading.module.css";
import { useState } from "react";
import Gainer from "../Gainer/Gainer";
import Losers from "../Losers/Losers";
import { getApiWithoutAuth } from "@/lib/ts/api";
import { URLs } from "@/lib/ts/apiUrl";
function Trading() {
  const [selectedTab, setSelectedTab] = useState(1);
  const [isLoading, setIsLoading] = useState(true);
  const [isLoadingLooser, setIsLoadingLooser] = useState(true);

  const [spacsTradingGainerData, setSpacsTradingGainerData] = useState();
  const [
    spacsTradingGainerDataSelectedTab,
    setSpacsTradingGainerDataSelectedTab,
  ] = useState(0);
  const [
    spacsTradingGainerDataCurrentPage,
    setSpacsTradingGainerDataCurrentPage,
  ] = useState(1);

  const [spacsTradingLoserData, setSpacsTradingLoserData] = useState();
  const [
    spacsTradingLoserDataSelectedTab,
    setSpacsTradingLoserDataSelectedTab,
  ] = useState(1);
  const [
    spacsTradingLoserDataCurrentPage,
    setSpacsTradingLoserDataCurrentPage,
  ] = useState(1);

  const [itemsPerPage] = useState(4);

  const getSpacsTradingGainerData = async () => {
    setIsLoading(true);
    const response = await getApiWithoutAuth(
      `${
        URLs.spacTrading
      }?page=${spacsTradingGainerDataCurrentPage}&offset=${itemsPerPage}&period=${
        spacsTradingGainerDataSelectedTab == 0
          ? "daily"
          : spacsTradingGainerDataSelectedTab == 1
          ? "weekly"
          : "merger_closing"
      }&gainOrLoser=gain&activeOrDeSPAC=${
        selectedTab === 0 ? "active" : "DeSPAC"
      }`
    );
    if (response.status === 200) {
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
        spacsTradingLoserDataSelectedTab == 0
          ? "daily"
          : spacsTradingLoserDataSelectedTab == 1
          ? "weekly"
          : "merger_closing"
      }&gainOrLoser=gain&activeOrDeSPAC=${
        selectedTab === 0 ? "active" : "DeSPAC"
      }`
    );
    if (response.status === 200) {
      setSpacsTradingLoserData(response.data);
      setIsLoadingLooser(false);
    } else {
      setIsLoadingLooser(false);
    }
  };

  useEffect(() => {
    getSpacsTradingGainerData();
  }, [spacsTradingGainerDataSelectedTab, spacsTradingGainerDataCurrentPage]);

  useEffect(() => {
    getSpacsTradingLoserData();
  }, [spacsTradingLoserDataSelectedTab, spacsTradingLoserDataCurrentPage]);
  return (
    <section className={styles.stockstablesection}>
      <div className={styles.tableTitle}>Trading</div>
      <div className={styles.tableContainerInner}>
        <div style={{ borderBottom: "1px solid #d2ecf9", display: "flex" }}>
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
