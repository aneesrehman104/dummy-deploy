import React, { Fragment, useEffect } from "react";
import styles from "./IposPipelineOverview.module.css";
import { useState } from "react";
import { getApiWithoutAuth } from "@/lib/ts/api";
import { URLs } from "@/lib/ts/apiUrl";
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
interface PROPS {}

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
  const [itemsPerPage] = useState(5);

  useEffect(() => {
    const getIPOSTradingIposPipelineOverviewData = async () => {
      setIsLoading(true);
      const response = await getApiWithoutAuth(
        `${URLs.iposGainer}?page=${currentPage}&offset=${itemsPerPage}&period=${
          selectedTab === 0
            ? "upcomingIPO"
            : selectedTab === 1
            ? "latestPrice"
            : selectedTab === 2
            ? "recentlyFiled"
            : "rumor"
        }&gainOrLoser=gain`
      );
      if (response.status === 200 && response.data !== null) {
        setIPOSTradingIposPipelineOverviewData(response.data);
        setIsLoading(false);
      } else {
        setIsLoading(false);
      }
    };
    getIPOSTradingIposPipelineOverviewData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
