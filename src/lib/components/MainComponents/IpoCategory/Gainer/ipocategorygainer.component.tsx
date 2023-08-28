import React, { useState, useEffect } from "react";
import styles from "./gainer.module.css";
import { getApiWithoutAuth } from "@/lib/ts/api";
import { URLs } from "@/lib/ts/apiUrl";
import { getODataWithParams } from "@lib/ts/api";
import axios, { AxiosError } from "axios";
import {
  SkeltonTable,
  ListingTrackTable,
} from "@/lib/components/CommonComponents";
interface PROPS {}

const IpoHubGainer: React.FC<PROPS> = () => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [selectedTab, setSelectedTab] = useState<number>(0);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [iPOSTradingGainerData, setIPOSTradingGainerData] = useState<any>({
    dataset: [],
    additional_dataset: { totalLength: 20 },
  });
  const [itemsPerPage] = useState<number>(5);
  const Mapper = {
    daily_ipo: ``,
    weekly_ipo: ``,
    since_ipo: ``,
  };
  const tabValues: {
    [key: number]: "daily_ipo" | "weekly_ipo" | "since_ipo";
  } = {
    0: "daily_ipo",
    1: "weekly_ipo",
    2: "since_ipo",
  };

  useEffect(() => {
    const source = axios.CancelToken.source();

    const getIPOSTradingGainerData = async () => {
      setIsLoading(true);
      try {
        const response = await getODataWithParams(URLs.ipoOdata, {
          skip: (currentPage - 1) * itemsPerPage,
          top: itemsPerPage,
          filter: Mapper[tabValues[selectedTab]],
          cancelToken: source.token,
        });

        if (response.status === 200 && response.data !== null) {
          setIPOSTradingGainerData(response.data);
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

    getIPOSTradingGainerData();

    return () => {
      source.cancel("Request cancelled due to component unmount");
    };
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
      key: "volume",
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
      key: "volume",
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
      key: "volume",
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
                  selectedTab === 0
                    ? headerArrayDaily
                    : selectedTab === 1
                    ? headerArrayWeekly
                    : headerArraysinceIpo
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
};

export default IpoHubGainer;
