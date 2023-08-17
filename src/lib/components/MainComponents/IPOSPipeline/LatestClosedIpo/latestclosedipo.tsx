import React, { Fragment, useEffect } from "react";
import styles from "./LatestClosedIpo.module.css";
import { useState } from "react";
import { getApiWithoutAuth, getODataWithParams } from "@/lib/ts/api";
import { URLs } from "@/lib/ts/apiUrl";
import {
  SkeltonTable,
  ListingTrackTable,
} from "@/lib/components/CommonComponents";
import {headerArray} from './constants'
const tabValues: { [key: number]: string } = {
  0: "thisWeek",
  1: "nextWeek",
  2: "afterNextWeek",
};


function getStartAndEndOfWeek(): { startOfWeek: string; endOfWeek: string } {
  const today = new Date();
  const currentDay = today.getDay(); // 0 = Sunday, 1 = Monday, ..., 6 = Saturday

  // Calculate the date of the last Monday
  const lastMonday = new Date(today);
  lastMonday.setDate(
    today.getDate() - currentDay + (currentDay === 0 ? -6 : 1)
  );
  const formattedLastMonday = `${lastMonday.getFullYear()}/${(
    lastMonday.getMonth() + 1
  )
    .toString()
    .padStart(2, "0")}/${lastMonday.getDate().toString().padStart(2, "0")}`;

  // Calculate the date of the upcoming Friday (end of the week)
  const daysUntilFriday = 5 - currentDay;
  const endOfWeek = new Date(today);
  endOfWeek.setDate(today.getDate() + daysUntilFriday);
  const formattedEndOfWeek = `${endOfWeek.getFullYear()}/${(
    endOfWeek.getMonth() + 1
  )
    .toString()
    .padStart(2, "0")}/${endOfWeek.getDate().toString().padStart(2, "0")}`;

  return { startOfWeek: formattedLastMonday, endOfWeek: formattedEndOfWeek };
}

function addDaysToDate(dateStr: string, days: number): string {
  const parts = dateStr.split("/");
  const year = parseInt(parts[0], 10);
  const month = parseInt(parts[1], 10) - 1; // Month is 0-indexed in JavaScript
  const day = parseInt(parts[2], 10);

  const originalDate = new Date(year, month, day);
  const newDate = new Date(originalDate);
  newDate.setDate(originalDate.getDate() + days);

  const formattedNewDate = `${newDate.getFullYear()}/${(newDate.getMonth() + 1)
    .toString()
    .padStart(2, "0")}/${newDate.getDate().toString().padStart(2, "0")}`;
  return formattedNewDate;
}
interface PROPS {}

const LatestClosedIpo: React.FC<PROPS> = () => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [selectedTab, setSelectedTab] = useState<number>(1);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  
  const [LatestClosedIpoData, setLatestClosedIpoData] = useState<any>({
    dataset: [],
    additional_dataset: { totalLength: 20 },
  });
  const [itemsPerPage] = useState(5);
  
  useEffect(() => {
    const getLatestClosedIpoData = async () => {
      setIsLoading(true);
      // Get the start and end of the current week
      const { startOfWeek, endOfWeek } = getStartAndEndOfWeek();
      console.log(startOfWeek, endOfWeek);
      const response = await getODataWithParams(URLs.ipoOdata, {
        // ?page=${currentPage}&offset=${itemsPerPage}&type=${tabValues[selectedTab]}`
        skip: (currentPage - 1) * itemsPerPage,
        top: itemsPerPage,
        filter: "expectedIpoDate gt " + startOfWeek + " and expectedIpoDate lt " + endOfWeek,
      });

      if (response.status === 200 && response.data !== null) {
        setLatestClosedIpoData({
          dataset: response.data,
          additional_dataset: { totalLength: 10 },
        });
        setIsLoading(false);
      } else {
        setIsLoading(false);
      }
    };

    getLatestClosedIpoData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedTab, currentPage]);

  const paginate = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  const tabData = [
    { label: "Expected This Week", index: 0 },
    { label: "Next Week", index: 1 },
    { label: "After Next Week", index: 2 },
  ];
  const handleTabClick = (tabIndex: any) => {
    setSelectedTab(tabIndex);
    setCurrentPage(1);
  };

  return (
    <section className={styles.stockstablesection}>
      <div className={styles.tableTitle}>IPO Calendar</div>
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
            LatestClosedIpoData && (
              <ListingTrackTable
                data={LatestClosedIpoData.dataset}
                headerArray={headerArray}
                itemsPerPage={itemsPerPage}
                currentPage={currentPage}
                paginate={paginate}
                totalLength={LatestClosedIpoData.additional_dataset}
                showPagination
              />
            )
          )}
        </div>
      </div>
    </section>
  );
}

export default LatestClosedIpo;
