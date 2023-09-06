import React, { useEffect, useState } from "react";
import styles from "./ipo-event-calendar.module.css";
import { getApiWithoutAuth, getODataWithParams } from "@/lib/ts/api";
import { URLs } from "@/lib/ts/apiUrl";
import {
  SkeltonTable,
  ListingTrackTable,
} from "@/lib/components/CommonComponents";
import Switch from "@mui/material/Switch";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import dynamic from "next/dynamic";
import Skeleton from "@mui/material/Skeleton";
import { Extension, Mergers, IPOAndSplitDates } from "@/lib/ts/constants";
import axios, { AxiosError } from "axios";

const FullCalendarComponet = dynamic(
  () => import("./full-calender.component"),
  {
    ssr: false,
    loading: () => <Skeleton variant="rounded" height={200} />,
  }
);

interface PROPS {}

const IpoEventCalendar: React.FC<PROPS> = () => {
  const theme = createTheme({
    palette: {
      primary: {
        main: "#0aac85",
      },
    },
  });

  const [selectedTab, setSelectedTab] = useState<number>(0);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [eventCalenderData, setEventCalenderData] = useState<any>({
    dataset: [],
    additional_dataset: { totalLength: 20 },
  });
  const [itemsPerPage] = useState<number>(4);
  const [isGrid, setIsGrid] = useState<boolean>(true);

  const tabData = [
    { label: "Extensions", index: 0 },
    { label: "Mergers", index: 1 },
    { label: "IPO & Split Dates", index: 2 },
  ];
  const tabValues: { [key: number]: string } = {
    0: "extension",
    1: "merger",
    2: "ipo",
  };

  const paginate = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  const handleTabClick = (tabIndex: any) => {
    setSelectedTab(tabIndex);
    setCurrentPage(1);
  };

  useEffect(() => {
    const source = axios.CancelToken.source();
    const getSpacsEvent = async () => {
      setIsLoading(true);
      try {
        let response;
        isGrid
          ? (response = await getODataWithParams(URLs.spacPipeline, {
              top: itemsPerPage,
              skip: (currentPage - 1) * itemsPerPage,
              cancelToken: source.token,
            }))
          : await getODataWithParams(URLs.spacPipeline, {
              top: itemsPerPage,
              skip: (currentPage - 1) * itemsPerPage,
              cancelToken: source.token,
            });

        if (response.status === 200 && response.data !== null) {
          setEventCalenderData(response.data);
          setIsLoading(false);
        }
      } catch (error) {
        if (axios.isCancel(error)) {
          console.log("Request cancelled:", (error as AxiosError).message);
          setIsLoading(false);
        } else {
          console.error("An error occurred:", (error as AxiosError).message);
          setIsLoading(false);
        }
      } finally {
        setIsLoading(false);
      }
    };
    getSpacsEvent();
    return () => {
      source.cancel("Request cancelled due to component unmount");
    };
  }, [selectedTab, currentPage]);

  return (
    <main className={styles.stockstablesection}>
      <header className={styles.tableTitle}>IPO Event Calendar</header>
      <section
        style={{
          display: "flex",
          justifyContent: "flex-end",
          alignItems: "center",
          width: "100%",
        }}
      >
        Month
        <ThemeProvider theme={theme}>
          <Switch
            color="primary"
            checked={isGrid}
            onChange={(e) => {
              setIsGrid(e.target.checked);
            }}
          />
        </ThemeProvider>
        Grid
      </section>
      <section className={styles.tableContainerInner}>
        {isGrid ? (
          <>
            <section
              style={{ borderBottom: "1px solid #d2ecf9", display: "flex" }}
            >
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
            </section>
            <section style={{ overflow: "auto" }}>
              {isLoading ? (
                <SkeltonTable />
              ) : (
                <ListingTrackTable
                  data={eventCalenderData?.dataset}
                  itemsPerPage={itemsPerPage}
                  currentPage={currentPage}
                  paginate={paginate}
                  showPagination
                  totalLength={eventCalenderData?.additional_dataset?.totalLength}
                  headerArray={
                    selectedTab === 0
                      ? Extension
                      : selectedTab === 1
                      ? Mergers
                      : IPOAndSplitDates
                  }
                />
              )}
            </section>
          </>
        ) : (
          <FullCalendarComponet data={eventCalenderData}  />
        )}
      </section>
    </main>
  );
};

export default IpoEventCalendar;
