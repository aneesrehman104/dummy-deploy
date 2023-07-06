import React, { useEffect, useState } from "react";
import styles from "./MergerCalendar.module.css";
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
const FullCalendarComponet = dynamic(() => import("./FullCalender"), {
  ssr: false,
  loading: () => <Skeleton variant="rounded" height={200} />,
});

function MergerCalendar() {
  const theme = createTheme({
    palette: {
      primary: {
        main: "#0aac85",
      },
    },
  });

  const [currentPage, setCurrentPage] = useState(1);
  const [isLoading, setIsLoading] = useState(true);
  const [grapevineGraveyardData, setGrapevineGraveyardData] = useState<any>({
    dataset: [],
    additional_dataset: { totalLength: 20 },
  });
  const [itemsPerPage] = useState(4);
  const [isGrid, setIsGrid] = useState(true);

  const paginate = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };
  const headermergerTable = [
    {
      name: "Deal Name",
      key: "DealName",
      type: "string",
    },
    {
      name: "Announced Date",
      key: "AnnouncedDate",
      type: "string",
    },
    {
      name: "S-4 Filing Date",
      key: "FilingDate",
      type: "string",
    },
    {
      name: "Acquirer Vote Date",
      key: "AcquirerVoteDate",
      type: "string",
    },
    {
      name: "Target Vote Date",
      key: "TargetVoteDate",
      type: "string",
    },
    {
      name: "Expected Closing Date",
      key: "ExpectedClosingDate",
      type: "string",
    },
  ];

  const getLatestClosed = async () => {
    setIsLoading(true);
    let response;
    isGrid
      ? (response = await getApiWithoutAuth(`${URLs.spacsCalender}`))
      : (response = await getApiWithoutAuth(`${URLs.spacsCalender}?type=all`));
    if (response.status === 200) {
      setGrapevineGraveyardData(response.data);
      setIsLoading(false);
    } else {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getLatestClosed();
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
                  totalLength={grapevineGraveyardData?.additional_dataset}
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
