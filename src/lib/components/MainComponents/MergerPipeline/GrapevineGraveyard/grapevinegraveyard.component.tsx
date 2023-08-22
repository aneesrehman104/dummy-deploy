import React, { useEffect, useState } from "react";
import styles from "./GrapevineGraveyard.module.css";
import { getApiWithoutAuth } from "@/lib/ts/api";
import { URLs } from "@/lib/ts/apiUrl";
import {
  SkeltonTable,
  ListingTrackTable,
} from "@/lib/components/CommonComponents";
  interface PROPS {}

  const GrapevineGraveyard: React.FC<PROPS> = () => {
  const [selectedTab, setSelectedTab] = useState<number>(0);
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
    1: "terminate",
    2: "talkFail",
  };
  const headerArrayRumoredMergers = [
    {
      name: "Target",
      key: "targetCompanyName",
      type: "string",
    },
    {
      name: "Acquirer",
      key: "acquirerCompanyName",
      type: "string",
    },
    {
      name: "Rumored Date",
      key: "rumorDate",
      type: "string",
    },
    {
      name: "Rumored Valuation",
      key: "valuation",
      type: "string",
    },
    {
      name: "Rumor Publication",
      key: "rumorPublication",
      type: "string",
    },
    {
      name: "Rumor SourceLink",
      key: "rumorSourceLink",
      type: "string",
    },
    {
      name: "View Deal Page",
      key: "id",
      type: "string",
    },
  ];
  const headerArrayTerminatedMergers = [
    {
      name: "Target",
      key: "targetCompanyName",
      type: "string",
    },
    {
      name: "Acquirer",
      key: "acquirerCompanyName",
      type: "string",
    },
    {
      name: "Terminated Date",
      key: "terminateDate",
      type: "string",
    },
    {
      name: "Rumored Valuation",
      key: "valuation",
      type: "string",
    },
    {
      name: "Terminated Link",
      key: "terminateLink",
      type: "string",
    },
    {
      name: "Terminated Reason",
      key: "terminateReason",
      type: "string",
    },
  ];
  const headerArrayTalksFailed = [
    {
      name: "Target",
      key: "targetCompanyName",
      type: "string",
    },
    {
      name: "Acquirer",
      key: "acquirerCompanyName",
      type: "string",
    },
    {
      name: "Talks Failed Date",
      key: "talkFailDate",
      type: "string",
    },
    {
      name: "Valuation",
      key: "valuation",
      type: "string",
    },
    {
      name: "Talks Failed Publication",
      key: "talkFailPublication",
      type: "string",
    },
    {
      name: "Talks Failed Souce Link",
      key: "talkFailSourceLink",
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
      `${URLs.mergerPipeline}?page=${currentPage}&offset=${itemsPerPage}&type=grapevine&subtype=${tabValues[selectedTab]}`
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
