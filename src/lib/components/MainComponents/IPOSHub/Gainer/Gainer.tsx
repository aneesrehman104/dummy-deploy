import React, { Fragment, useEffect } from "react";
import styles from "./gainer.module.css";
import { useState } from "react";
import { getApiWithoutAuth } from "@/lib/ts/api";
import { URLs } from "@/lib/ts/apiUrl";
import {
  SkeltonTable,
  ListingTrackTable,
} from "@/lib/components/CommonComponents";

function Gainer() {
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedTab, setSelectedTab] = useState(1);
  const [isLoading, setIsLoading] = useState(true);
  const [iPOSTradingGainerData, setIPOSTradingGainerData] = useState<any>();
  const [itemsPerPage] = useState(5);

  const getIPOSTradingGainerData = async () => {
    setIsLoading(true);
    const response = await getApiWithoutAuth(
      `${URLs.iposGainer}?page=${currentPage}&offset=${itemsPerPage}&period=${
        selectedTab === 0 ? "daily" : selectedTab === 1 ? "weekly" : "sinceIPO"
      }&gainOrLoser=gain`
    );
    console.log("==============data", response);
    if (response.status === 200) {
      setIPOSTradingGainerData(response.data);
      setIsLoading(false);
    } else {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getIPOSTradingGainerData();
  }, [selectedTab, currentPage]);

  const paginate = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  const tabData = [
    { label: "Daily", index: 0 },
    { label: "Weekly", index: 1 },
    { label: "Since IPO", index: 2 },
  ];
  const handleTabClick = (tabIndex: any) => {
    setSelectedTab(tabIndex);
    setCurrentPage(1);
  };

  const headerArrayDaily = [
    {
      name: "Company",
      key: "company",
      type: "string",
    },
    {
      name: "Symbol",
      key: "symbol",
      type: "string",
    },
    {
      name: "Last 30D",
      key: "last30D",
      type: "graph",
    },
    {
      name: "Price",
      key: "price",
      type: "string",
    },
    {
      name: "Daily",
      key: "daily",
      type: "gainer",
    },
    {
      name: "Vol",
      key: "vol",
      type: "string",
    },
  ];

  const headerArrayWeekly = [
    {
      name: "Company",
      key: "company",
      type: "string",
    },
    {
      name: "Symbol",
      key: "symbol",
      type: "string",
    },
    {
      name: "Last 30D",
      key: "last30D",
      type: "graph",
    },
    {
      name: "Price",
      key: "price",
      type: "string",
    },
    {
      name: "Weekly",
      key: "weekly",
      type: "gainer",
    },
    {
      name: "Vol",
      key: "vol",
      type: "string",
    },
  ];


  const headerArraysinceIpo = [
    {
      name: "Company",
      key: "company",
      type: "string",
    },
    {
      name: "Symbol",
      key: "symbol",
      type: "string",
    },
    {
      name: "Last 30D",
      key: "last30D",
      type: "graph",
    },
    {
      name: "Price",
      key: "price",
      type: "string",
    },
    {
      name: "Since IPO",
      key: "sinceIPO",
      type: "gainer",
    },
    {
      name: "Vol",
      key: "vol",
      type: "string",
    },
  ];
  return (
    <section className={styles.stockstablesection}>
      <div className={styles.tableTitle}>Past Year IPO Gainers</div>
      <div className={styles.tableContainerInner}>
        <div style={{ borderBottom: "1px solid #d2ecf9", display: "flex" }}>
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
        </div>
        <div style={{ overflow: "auto" }}>
          {isLoading ? (
            <SkeltonTable />
          ) : (
            iPOSTradingGainerData && (
              <ListingTrackTable
                data={iPOSTradingGainerData?.dataset}
                headerArray={
                  selectedTab === 0 ? headerArrayDaily : selectedTab === 1 ? headerArrayWeekly : headerArraysinceIpo
                }
                itemsPerPage={itemsPerPage}
                currentPage={currentPage}
                paginate={paginate}
                totalLength={iPOSTradingGainerData?.additional_dataset}
                showPagination
              />
            )
          )}
        </div>
      </div>
    </section>
  );
}

export default Gainer;
