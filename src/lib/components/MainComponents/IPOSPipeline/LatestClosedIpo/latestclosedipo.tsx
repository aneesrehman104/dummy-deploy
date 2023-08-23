import React, { Fragment, useEffect } from "react";
import styles from "./latest-closed-ipo.module.css";
import { useState } from "react";
import { getApiWithoutAuth, getODataWithParams } from "@/lib/ts/api";
import { URLs } from "@/lib/ts/apiUrl";
import {
  SkeltonTable,
  ListingTrackTable,
} from "@/lib/components/CommonComponents";
import { headerArray } from "./constants";
import axios, { AxiosError } from "axios";
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
  if (days === 0) return dateStr;
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
  const [itemsPerPage] = useState<number>(5);

  useEffect(() => {
    const source = axios.CancelToken.source();

    const getLatestClosedIpoData = async () => {
      setIsLoading(true);

      try {
        // Get the start and end of the current week
        const { startOfWeek, endOfWeek } = getStartAndEndOfWeek();
        console.log(startOfWeek, endOfWeek);
        const response = await getODataWithParams(URLs.ipoOdata, {
          skip: (currentPage - 1) * itemsPerPage,
          top: itemsPerPage,
          filter: `expectedIpoDate ge '${addDaysToDate(
            startOfWeek,
            selectedTab * 7
          )}' and expectedIpoDate le '${addDaysToDate(
            endOfWeek,
            selectedTab * 7
          )}'`,
          cancelToken: source.token,
        });
        if (response.status === 200 && response.data !== null) {
          setLatestClosedIpoData({
            dataset: response.data,
            additional_dataset: { totalLength: 10 },
          });
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

    getLatestClosedIpoData();
    return () => {
      source.cancel("Request cancelled due to component unmount");
    };
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
};

export default LatestClosedIpo;
