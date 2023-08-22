import React, { useEffect, useState } from "react";
import styles from "./SpacEventCalendar.module.css";
import { getApiWithoutAuth } from "@/lib/ts/api";
import { URLs } from "@/lib/ts/apiUrl";
import { SkeltonTable,ListingTrackTable } from "@/lib/components/CommonComponents";
import Switch from "@mui/material/Switch";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import dynamic from "next/dynamic";
import Skeleton from "@mui/material/Skeleton";
import { Extension, Mergers, IPOAndSplitDates } from "@/lib/ts/constants";
const FullCalendarComponet = dynamic(() => import("./FullCalender"), {
  ssr: false,
  loading: () => <Skeleton variant="rounded" height={200} />,
});

  interface PROPS {}

  const SpacEventCalendar: React.FC<PROPS> = () => {
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
  const [grapevineGraveyardData, setGrapevineGraveyardData] = useState<any>({
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

  const getLatestClosed = async () => {
    setIsLoading(true);
    let response;
    isGrid
      ? (response = await getApiWithoutAuth(
          `${URLs.spacsCalender}?page=${currentPage}&offset=${itemsPerPage}&type=${tabValues[selectedTab]}`
        ))
      : (response = await getApiWithoutAuth(`${URLs.spacsCalender}?type=all`));

    console.log(
      "========================res",
      `${URLs.spacsCalender}?page=${currentPage}&offset=${itemsPerPage}&type=${tabValues[selectedTab]}`,
      response
    );
    if (response.status === 200 && response.data !== null) {
      setGrapevineGraveyardData(response.data);
      setIsLoading(false);
    } else {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getLatestClosed();
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
                <ListingTrackTable
                  data={grapevineGraveyardData?.dataset}
                  itemsPerPage={itemsPerPage}
                  currentPage={currentPage}
                  paginate={paginate}
                  showPagination
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
