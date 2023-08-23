import React, { useEffect, useState } from "react";
import styles from "./grapevine-graveyard.module.css";
import { getApiWithoutAuth } from "@/lib/ts/api";
import { URLs } from "@/lib/ts/apiUrl";
import {
  SkeltonTable,
  ListingTrackTable,
} from "@/lib/components/CommonComponents";
  interface PROPS {}

  const GrapevineGraveyard: React.FC<PROPS> = () => {
  const [selectedTab, setSelectedTab] = useState<number>(1);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [grapevineGraveyardData, setGrapevineGraveyardData] = useState<any>({
    dataset: [],
    additional_dataset: { totalLength: 20 },
  });
  const [itemsPerPage] = useState<number>(5);

  const tabData = [
    { label: "Rumored Mergers", index: 0 },
    { label: "Terminated Mergers", index: 1 },
    { label: "Talks Failed", index: 2 },
  ];
  const tabValues: { [key: number]: string } = {
    0: "rumor",
    1: "latest_failed",
    2: "other",
  };
  const headerArrayRumoredMergers = [
    {
      name: "Target",
      key: "Target",
      type: "string",
    },
    {
      name: "Acquirer",
      key: "Acquirer",
      type: "string",
    },
    {
      name: "Rumored Date",
      key: "RumoredDate",
      type: "string",
    },
    {
      name: "Rumored Valuation",
      key: "RumoredValuation",
      type: "string",
    },
    {
      name: "Rumor Source",
      key: "RumorSource",
      type: "string",
    },
    {
      name: "Rumor Link",
      key: "RumorLink",
      type: "string",
    },
    {
      name: "View Deal Page",
      key: "ViewDealPage",
      type: "string",
    },
  ];
  const headerArrayTerminatedMergers = [
    {
      name: "Target",
      key: "Target",
      type: "string",
    },
    {
      name: "Acquirer",
      key: "Acquirer",
      type: "string",
    },
    {
      name: "Terminated Date",
      key: "TerminatedDate",
      type: "string",
    },
    {
      name: "Rumored Valuation",
      key: "RumoredValuation",
      type: "string",
    },
    {
      name: "Terminated Link",
      key: "TerminatedLink",
      type: "string",
    },
    {
      name: "Terminated Reason",
      key: "TerminatedReason",
      type: "string",
    },
  ];
  const headerArrayTalksFailed = [
    {
      name: "Target",
      key: "Target",
      type: "string",
    },
    {
      name: "Acquirer",
      key: "Acquirer",
      type: "string",
    },
    {
      name: "Talks Failed Date",
      key: "TalksFailedDate",
      type: "string",
    },
    {
      name: "Valuation",
      key: "Valuation",
      type: "string",
    },
    {
      name: "Talks Failed Source",
      key: "TalksFailedSource",
      type: "string",
    },
    {
      name: "Talks Failed Link",
      key: "TalksFailedLink",
      type: "string",
    },
  ];

  const paginate = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  const handleTabClick = (tabIndex: any) => {
    setSelectedTab(tabIndex);
    setCurrentPage(1);
  };

  const getLatestClosed = async () => {
    setIsLoading(true);
    const response = await getApiWithoutAuth(
      `${URLs.spacPipeline}?page=${currentPage}&offset=${itemsPerPage}&type=grapevine&subtype=${tabValues[selectedTab]}`
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
      <div className={styles.tableTitle}>SPAC Merger Grapevine & Graveyard</div>
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
            <ListingTrackTable
              headerArray={
                selectedTab === 0
                  ? headerArrayRumoredMergers
                  : selectedTab === 1
                  ? headerArrayTerminatedMergers
                  : headerArrayTalksFailed
              }
              data={grapevineGraveyardData?.dataset}
              itemsPerPage={itemsPerPage}
              currentPage={currentPage}
              paginate={paginate}
              totalLength={grapevineGraveyardData?.additional_dataset}
              showPagination
            />
          )}
        </div>
      </div>
    </section>
  );
}

export default GrapevineGraveyard;
