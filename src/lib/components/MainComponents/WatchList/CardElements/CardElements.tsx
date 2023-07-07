import React, { useEffect, useState } from "react";
import styles from "./CardElements.module.css";
import { getApiWithoutAuth } from "@/lib/ts/api";
import { URLs } from "@/lib/ts/apiUrl";
import {
  SkeltonTable,
  ListingTrackTable,
} from "@/lib/components/CommonComponents";
function CardElements({ selectedTab }: any) {
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoading, setIsLoading] = useState(true);
  const [tableData, setTableData] = useState<any>({
    dataset: [],
    additional_dataset: { totalLength: 20 },
  });
  const [itemsPerPage] = useState(5);
  const tabValues: { [key: number]: string } = {
    0: "ipo",
    1: "merger",
    2: "spac",
  };
  const headerArrayIPO = [
    {
      name: "Company",
      key: "Company",
      type: "string",
    },
    {
      name: "Ticker",
      key: "Ticker",
      type: "string",
    },
    {
      name: "IPO Status",
      key: "IPOStatus",
      type: "string",
    },
    {
      name: "IPO Date",
      key: "IPODate",
      type: "string",
    },
    {
      name: "Price",
      key: "Price",
      type: "string",
    },
    {
      name: "Daily Chg %",
      key: "DailyChg",
      type: "string",
    },
  ];
  const headerArrayMergers = [
    {
      name: "Deal Name",
      key: "Deal Name",
      type: "string",
    },
    {
      name: "Company / Ticker (Acquirer)",
      key: "CompanyTicker",
      type: "string",
    },
    {
      name: "Merger Status",
      key: "MergerStatus",
      type: "string",
    },
    {
      name: "Merger Type",
      key: "MergerType",
      type: "string",
    },
    {
      name: "Target Price",
      key: "TargetPrice",
      type: "string",
    },
    {
      name: "Target Daily Chg %",
      key: "TargetDailyChg",
      type: "string",
    },
    {
      name: "Acquirer Price",
      key: "AcquirerPrice",
      type: "string",
    },
    {
      name: "Acquirer Daily Chg %",
      key: "AcquirerDailyChg",
      type: "string",
    },
  ];
  const headerArraySpac = [
    {
      name: "Company",
      key: "Company",
      type: "string",
    },
    {
      name: "Ticker",
      key: "Ticker",
      type: "string",
    },
    {
      name: "SPAC Progress Status with Merger Partner",
      key: "SPACProgressStatuswithMergerPartner",
      type: "string",
    },
    {
      name: "Price",
      key: "Price",
      type: "string",
    },
    {
      name: "Daily Chg %",
      key: "DailyChg",
      type: "string",
    },
    {
      name: "Trust Value",
      key: "TrustValue",
      type: "string",
    },
  ];

  const paginate = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };
  const getLatestClosed = async () => {
    setIsLoading(true);
    const response = await getApiWithoutAuth(
      `${URLs.spacPipeline}?page=${currentPage}&offset=${itemsPerPage}&type=grapevine&subtype=${tabValues[selectedTab]}`
    );
    if (response.status === 200) {
      setTableData(response.data);
      setIsLoading(false);
    } else {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getLatestClosed();
  }, [selectedTab, currentPage]);

  return (
    <section className={styles.stockstablesection}>
      <div className={styles.tableTitle}>
        {selectedTab == 0
          ? "IPO Watchlist"
          : selectedTab == 1
          ? "Merger Watchlist"
          : "SPAC Watchlist"}
      </div>
      <div className={styles.tableContainerInner}>
        <div style={{ overflow: "auto" }}>
          {isLoading ? (
            <SkeltonTable />
          ) : (
            <ListingTrackTable
              headerArray={
                selectedTab === 0
                  ? headerArrayIPO
                  : selectedTab === 1
                  ? headerArrayMergers
                  : headerArraySpac
              }
              data={tableData?.dataset}
              itemsPerPage={itemsPerPage}
              currentPage={currentPage}
              paginate={paginate}
              totalLength={tableData?.additional_dataset}
              showPagination
            />
          )}
        </div>
      </div>
    </section>
  );
}

export default CardElements;
