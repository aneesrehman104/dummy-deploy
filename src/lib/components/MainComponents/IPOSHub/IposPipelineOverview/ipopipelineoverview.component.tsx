import React, { Fragment, useEffect } from "react";
import styles from "./IposPipelineOverview.module.css";
import { useState } from "react";
import { getApiWithoutAuth, getODataWithParams } from "@/lib/ts/api";
import { URLs } from "@/lib/ts/apiUrl";
import axios, { AxiosError } from "axios";
import {
  SkeltonTable,
  ListingTrackTable,
} from "@/lib/components/CommonComponents";
import {
  headerArrayUpcomingIPOs,
  headerArrayLatestPriced,
  headerArrayRecentlyFiled,
  headerArrayRumored,
} from "./constants";
import { getDateDaysAgo } from "@/lib/ts/utils/utils";
interface PROPS {}

const Mapper = {
  0: "ipoStatus eq 'Expected'",
  1: `ipoStatus eq 'Priced' and ipoDate ge '${getDateDaysAgo(90)}'`,
  2: `ipoStatus eq 'Filed' and ipoDate ge '${getDateDaysAgo(90)}'`,
  3: `ipoStatus eq 'Rumored' and ipoDate ge '${getDateDaysAgo(90)}'`,
};

const IposPipelineOverview: React.FC<PROPS> = () => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [selectedTab, setSelectedTab] = useState<number>(1);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [
    iPOSTradingIposPipelineOverviewData,
    setIPOSTradingIposPipelineOverviewData,
  ] = useState<any>({
    dataset: [],
    additional_dataset: { totalLength: 20 },
  });
  const [itemsPerPage] = useState<number>(5);
  const tabValues: {
    [key: number]: "upcoming_ipo" | "latest_ipo" | "recent_ipo" | "rumor_ipo";
  } = {
    0: "upcoming_ipo",
    1: "latest_ipo",
    2: "recent_ipo",
    3: "rumor_ipo",
  };

  useEffect(() => {
    const source = axios.CancelToken.source();

    const getIPOSTradingIposPipelineOverviewData = async () => {
      setIsLoading(true);

      try {
        const response = await getODataWithParams(URLs.ipoOdata, {
          skip: selectedTab >= 3 ? 0 : (currentPage - 1) * itemsPerPage,
          top: selectedTab >= 3 ? 20 : itemsPerPage,
          filter: Mapper[selectedTab as 0 | 1 | 2 | 3],
          cancelToken: source.token,
          orderby:
            selectedTab === 3
              ? [{ field: "percentReturnFromIpoPrice", direction: "asc" }]
              : selectedTab === 4
              ? [{ field: "percentReturnFromIpoPrice", direction: "desc" }]
              : undefined,
        });
        if (response.status === 200 && response.data !== null) {
          setIPOSTradingIposPipelineOverviewData({
            dataset: response.data,
            additional_dataset: { totalLength: 10 },
          });
          setIsLoading(false);
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

    getIPOSTradingIposPipelineOverviewData();

    return () => {
      source.cancel("Request cancelled due to component unmount");
    };
  }, [selectedTab, currentPage]);

  const paginate = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  const tabData = [
    { label: "Upcoming IPOs", index: 0 },
    { label: "Latest Priced", index: 1 },
    { label: "Recently Filed", index: 2 },
    { label: "Rumored", index: 3 },
  ];
  const handleTabClick = (tabIndex: any) => {
    setSelectedTab(tabIndex);
    setCurrentPage(1);
  };

  return (
    <section className={styles.stockstablesection}>
      <div className={styles.tableTitle}>IPO Pipeline Overview</div>
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
            iPOSTradingIposPipelineOverviewData && (
              <ListingTrackTable
                data={iPOSTradingIposPipelineOverviewData?.dataset}
                headerArray={
                  selectedTab === 0
                    ? headerArrayUpcomingIPOs
                    : selectedTab === 1
                    ? headerArrayLatestPriced
                    : selectedTab === 2
                    ? headerArrayRecentlyFiled
                    : headerArrayRumored
                }
                itemsPerPage={itemsPerPage}
                currentPage={currentPage}
                paginate={paginate}
                totalLength={
                  iPOSTradingIposPipelineOverviewData?.additional_dataset
                }
                showPagination
              />
            )
          )}
        </div>
      </div>
    </section>
  );
};

export default IposPipelineOverview;
