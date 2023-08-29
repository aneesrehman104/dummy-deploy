"use client";

import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });
import React, { useContext, useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import { CircularProgress } from "@mui/material";
import { serializeData } from "@/lib/utils/data-ingestion";
import { IResponseSchema } from "@/lib/ts";
import styles from "./page.module.css";
import { Feed } from "@/lib/components/CommonComponents/Feed";
import {
  Selection,
  patternIPO,
  patternListingTrack,
  patternMerger,
  patternSPAC,
} from "@/lib/ts/newsletter-feed";
import { NewsletterContext } from "../layout";
import { SpacFeed } from "@/lib/components/CommonComponents/Feed/Daily/spacfeed";
import { MergerFeed } from "@/lib/components/CommonComponents/Feed/Daily/mergerfeed";
import { IpoFeed } from "@/lib/components/CommonComponents/Feed/Daily/ipofeed";
import { ListingtrackFeed } from "@/lib/components/CommonComponents/Feed/Daily/listingtrackfeed";
import { URLs } from "@/lib/ts/apiUrl";
import { backEndURLWithoutAuth, getApiWithoutAuth } from "@/lib/ts/api";

const selections: Array<Selection> = ["Merger", "IPO", "SPAC", "ListingTrack"];
const mapper = {
  IPO: 0,
  Merger: 1,
  SPAC: 2,
  ListingTrack: 3,
};

export default function RootLayout() {
  const [isLoading, setLoading] = useState<boolean>(false);
  const [selection, setSelection] = useState<
    "Merger" | "IPO" | "SPAC" | "ListingTrack"
  >("Merger");
  const [spac_data, setSpacData] = useState<patternSPAC | null>(null);
  const [merger_data, setMergerData] = useState<patternMerger | null>(null);
  const [ipo_data, setIpoData] = useState<patternIPO | null>(null);
  const [listingtrack_data, setListingTrackData] =
    useState<patternListingTrack | null>(null);
  const context = useContext(NewsletterContext);

  // useEffect(() => {
  //   if (context.current_selection_row) {
  //     if (context.current_selection_row[17].toString().length > 0)
  //     setSelection(context.current_selection_row[17] as string);
  //     setRowData(context.current_selection_row);
  //   }
  // }, [context.current_selection_row]);

  // console.log(context.current_selection_row);

  useEffect(() => {
    const fetchData = async () => {
      const url = URLs.newsLetterTool + `?type=${mapper[selection]}`;
      const response = await backEndURLWithoutAuth.get(url);
      console.log(response.data);
      switch (selection) {
        case "SPAC":
          setSpacData(response.data as patternSPAC);
          break;
        case "Merger":
          setMergerData(response.data as patternMerger);
          break;
        case "IPO":
          setIpoData(response.data as patternIPO);
          break;
        case "ListingTrack":
          setListingTrackData(response.data as patternListingTrack);
          break;
        default:
          break;
      }
    };
    fetchData();
  }, [selection]);

  return (
    <Box
      component="main"
      sx={{
        backgroundColor: (theme) =>
          theme.palette.mode === "light"
            ? theme.palette.grey[100]
            : theme.palette.grey[900],
        flexGrow: 1,
        height: "100vh",
        overflow: "auto",
      }}
    >
      <Toolbar />

      {isLoading ? (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100%",
          }}
        >
          <CircularProgress />
        </div>
      ) : (
        <>
          <div className={styles.flexContainer}>
            {selections.map((selectionItem) => {
              const selections = [styles.selectionMapper];
              if (selectionItem === selection) {
                selections.push(styles.selectionItemActive);
              }
              return (
                <div
                  key={selectionItem}
                  onClick={() => setSelection(selectionItem)}
                  className={selections.join(" ")}
                >
                  {selectionItem}
                </div>
              );
            })}
          </div>

          <section
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              padding: "2rem",
              gap: "16px",
            }}
          >
            {selection === "SPAC" ? (
              <>
                <SpacFeed type={selection} data={spac_data} />
                <SpacFeed type={selection} data={spac_data} />
              </>
            ) : selection === "Merger" ? (
              <>
                <MergerFeed type={selection} data={merger_data} />
                <MergerFeed type={selection} data={merger_data} />
              </>
            ) : selection === "IPO" ? (
              <>
                <IpoFeed type={selection} data={ipo_data} />
                <IpoFeed type={selection} data={ipo_data} />
              </>
            ) : (
              <>
                <ListingtrackFeed type={selection} data={listingtrack_data} />
                <ListingtrackFeed type={selection} data={listingtrack_data} />
              </>
            )}
          </section>
        </>
      )}
    </Box>
  );
}
