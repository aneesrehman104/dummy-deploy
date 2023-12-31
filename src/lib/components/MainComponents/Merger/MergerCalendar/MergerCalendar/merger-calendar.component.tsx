import React, { useEffect, useState } from "react";
import styles from "./merger-calendar.module.css";
import { getApiWithoutAuth } from "@/lib/ts/api";
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
const FullCalendarComponet = dynamic(() => import("./full-calender"), {
  ssr: false,
  loading: () => <Skeleton variant="rounded" height={200} />,
});

  interface PROPS {}

  const MergerCalendar: React.FC<PROPS> = () => {
  const theme = createTheme({
    palette: {
      primary: {
        main: "#0aac85",
      },
    },
  });

  const [currentPage, setCurrentPage] = useState<number>(1);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [grapevineGraveyardData, setGrapevineGraveyardData] = useState<any>({
    dataset: [],
    additional_dataset: { totalLength: 20 },
  });
  const [itemsPerPage] = useState<number>(4);
  const [isGrid, setIsGrid] = useState<boolean>(true);

  const paginate = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };
  const headermergerTable = [
    {
      name: "Deal Name",
      key: "dealName",
      type: "string",
    },
    {
      name: "Announced Date",
      key: "announcedDate",
      type: "string",
    },
    {
      name: "S-4 Filing Date",
      key: "s4FillingDate",
      type: "string",
    },
    {
      name: "Acquirer Vote Date",
      key: "acquirerVoteDate",
      type: "string",
    },
    {
      name: "Target Vote Date",
      key: "targetVoteDate",
      type: "string",
    },
    {
      name: "Expected Closing Date",
      key: "expectedClosingDate",
      type: "string",
    },
  ];

  const getLatestClosed = async () => {
    setIsLoading(true);
    let response;
    isGrid
      ? (response = await getApiWithoutAuth(`${URLs.mergerCalender}`))
      : (response = await getApiWithoutAuth(`${URLs.mergerCalender}?type=all`));
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
  }, [currentPage]);

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
                  totalLength={grapevineGraveyardData?.additional_dataset?.totalLength}
                  headerArray={headermergerTable}
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

export default MergerCalendar;
