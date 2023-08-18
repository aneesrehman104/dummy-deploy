import React, { Fragment, useEffect } from "react";
import styles from "./GrapevineGraveyard.module.css";
import { useState } from "react";
import { getApiWithoutAuth, getODataWithParams } from "@/lib/ts/api";
import { URLs } from "@/lib/ts/apiUrl";
import {
  SkeltonTable,
  ListingTrackTable,
} from "@/lib/components/CommonComponents";
import {
  headerArrayRumoredIPOs,
  headerArrayStalledIPOs,
  headerArrayWishlistIPOs,
} from "./constants";
interface PROPS {}

const GrapevineGraveyard: React.FC<PROPS> = () => {
  const Mapper = {
    rumor: "Rumored",
    stalledIPO: "Stalled",
    wishlistIPO: "Wishlist",
  };
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [selectedTab, setSelectedTab] = useState<number>(1);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [GrapevineGraveyardData, setGrapevineGraveyardData] = useState<any>({
    dataset: [],
    additional_dataset: { totalLength: 20 },
  });
  const [itemsPerPage] = useState<number>(5);
  const tabValues: { [key: number]: "rumor" | "stalledIPO" | "wishlistIPO" } = {
    0: "rumor",
    1: "stalledIPO",
    2: "wishlistIPO",
  };
  const getGrapevineGraveyardData = async () => {
    setIsLoading(true);
    const response = await getODataWithParams(URLs.ipoOdata, {
      skip: (currentPage - 1) * itemsPerPage,
      top: itemsPerPage,
      filter: `ipoStatus eq '${Mapper[tabValues[selectedTab]]}'`,
    });
    if (response.status === 200 && response.data !== null) {
      setGrapevineGraveyardData({
        dataset: response.data,
        additional_dataset: { totalLength: 10 },
      });
      setIsLoading(false);
    } else {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getGrapevineGraveyardData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedTab, currentPage]);

  const paginate = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  const tabData = [
    { label: "Rumored IPOs", index: 0 },
    { label: "Stalled IPOs", index: 1 },
    { label: "Wishlist IPOs", index: 2 },
  ];
  const handleTabClick = (tabIndex: any) => {
    setSelectedTab(tabIndex);
    setCurrentPage(1);
  };

  return (
    <section className={styles.stockstablesection}>
      <div className={styles.tableTitle}>IPO Grapevine</div>
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
            GrapevineGraveyardData && (
              <ListingTrackTable
                data={GrapevineGraveyardData?.dataset}
                headerArray={
                  selectedTab === 0
                    ? headerArrayRumoredIPOs
                    : selectedTab === 1
                    ? headerArrayStalledIPOs
                    : headerArrayWishlistIPOs
                }
                itemsPerPage={itemsPerPage}
                currentPage={currentPage}
                paginate={paginate}
                totalLength={GrapevineGraveyardData?.additional_dataset}
                showPagination
              />
            )
          )}
        </div>
      </div>
    </section>
  );
};

export default GrapevineGraveyard;
