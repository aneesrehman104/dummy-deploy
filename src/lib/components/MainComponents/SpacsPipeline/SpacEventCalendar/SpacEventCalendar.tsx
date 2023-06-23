import React, { useEffect, useState } from "react";
import styles from "./SpacEventCalendar.module.css";
import MyTable from "./functions";
import { getApiWithoutAuth } from "@/lib/ts/api";
import { URLs } from "@/lib/ts/apiUrl";
import { SkeltonTable } from "@/lib/components/CommonComponents";
import Switch from "@mui/material/Switch";
import { createTheme, ThemeProvider } from "@mui/material/styles";
// import { FullCalendarComponet } from "./FullCalender";
import dynamic from "next/dynamic";
import Skeleton from "@mui/material/Skeleton";
import { Extension, Mergers, IPOAndSplitDates } from "@/lib/ts/constants";
const FullCalendarComponet = dynamic(() => import("./FullCalender"), {
  ssr: false,
  loading: () => <Skeleton variant="rounded" height={200} />,
});

function SpacEventCalendar() {
  const theme = createTheme({
    palette: {
      primary: {
        main: "#0aac85",
      },
    },
  });

  const [selectedTab, setSelectedTab] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoading, setIsLoading] = useState(true);
  const [grapevineGraveyardData, setGrapevineGraveyardData] = useState<any>();
  const [itemsPerPage] = useState(4);
  const [isGrid, setIsGrid] = useState(true);

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

  const getLatestClosed = async () => {
    setIsLoading(true);
    // /api/spac/calendar?page=1&offset=4&type=extension' \
    const response = await getApiWithoutAuth(
      `${URLs.spacsCalender}?page=${currentPage}&offset=${itemsPerPage}&type=${tabValues[selectedTab]}`
    );
    console.log(
      "========================res",
      `${URLs.spacsCalender}?page=${currentPage}&offset=${itemsPerPage}&type=${tabValues[selectedTab]}`,
      response
    );
    if (response.status === 200) {
      setGrapevineGraveyardData(response.data);
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
      <div className={styles.tableTitle}>SPAC Event Calendar</div>
      <div
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
      </div>
      <div className={styles.tableContainerInner}>
        {isGrid ? (
          <>
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
                <MyTable
                  data={grapevineGraveyardData?.dataset}
                  itemsPerPage={itemsPerPage}
                  currentPage={currentPage}
                  paginate={paginate}
                  totalLength={grapevineGraveyardData?.additional_dataset}
                  headerArray={
                    selectedTab === 0
                      ? Extension
                      : selectedTab === 1
                      ? Mergers
                      : IPOAndSplitDates
                  }
                />
              )}
            </div>
          </>
        ) : (
          <FullCalendarComponet />
        )}
      </div>
    </section>
  );
}

export default SpacEventCalendar;
