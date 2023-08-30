import React, { useEffect } from "react";
import styles from "./grapevine-graveyard.module.css";
import { useState } from "react";
import { getODataWithParams } from "@/lib/ts/api";
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
import axios, { AxiosError } from "axios";
import { TabTable } from "@/lib/components/CommonComponents/Table/tab-table.component";

interface PROPS {}

const GrapevineGraveyard: React.FC<PROPS> = () => {
  const Mapper = {
    rumor: "Rumored",
    stalledIPO: "Stalled",
    wishlistIPO: "Wishlist",
  };
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [selectedTab, setSelectedTab] = useState<number>(0);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [grapevineGraveyardData, setGrapevineGraveyardData] = useState<any>({
    dataset: [],
    additional_dataset: { totalLength: 20 },
  });
  const [itemsPerPage] = useState<number>(5);
  const tabValues: { [key: number]: "rumor" | "stalledIPO" | "wishlistIPO" } = {
    0: "rumor",
    1: "stalledIPO",
    2: "wishlistIPO",
  };

  useEffect(() => {
    const source = axios.CancelToken.source();

    const getGrapevineGraveyardData = async () => {
      setIsLoading(true);

      try {
        const response = await getODataWithParams(URLs.ipoOdata, {
          skip: (currentPage - 1) * itemsPerPage,
          top: itemsPerPage,
          filter: `ipoStatus eq '${Mapper[tabValues[selectedTab]]}'`,
          cancelToken: source.token,
        });
        console.log("================res", response);
        if (response.status === 200 && response.data !== null) {
          setGrapevineGraveyardData({
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

    getGrapevineGraveyardData();
    return () => {
      source.cancel("Request cancelled due to component unmount");
    };
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
    <TabTable
      title="IPO Grapevine"
      isLoading={isLoading}
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
      totalLength={grapevineGraveyardData.additional_dataset.totalLength}
      showPagination={true}
      tabData={tabData}
      handleTabClick={handleTabClick}
      pipelineData={grapevineGraveyardData.dataset}
      selectedTab={selectedTab}
    />
  );
};

export default GrapevineGraveyard;
