import React, { Fragment, useEffect } from "react";
import { useState } from "react";
import { URLs } from "@/lib/ts/apiUrl";
import { getODataWithParams } from "@lib/ts/api";
import axios, { AxiosError } from "axios";
import {
  headerArrayDaily,
  headerArrayWeekly,
  headerArraysinceIpo,
} from "./constants";
import { TabTable } from "@/lib/components/CommonComponents/Table/tab-table.component";
interface PROPS {}

const IpoHubLoser: React.FC<PROPS> = () => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [selectedTab, setSelectedTab] = useState<number>(0);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [iPOSTradingLosersData, setIPOSTradingLosersData] = useState<any>({
    dataset: [],
    additional_dataset: { totalLength: 20 },
  });
  const [itemsPerPage] = useState<number>(5);
  const Mapper = {
    daily_ipo: ``,
    weekly_ipo: ``,
    since_ipo: ``,
  };
  const tabValues: {
    [key: number]: "daily_ipo" | "weekly_ipo" | "since_ipo";
  } = {
    0: "daily_ipo",
    1: "weekly_ipo",
    2: "since_ipo",
  };

  useEffect(() => {
    const source = axios.CancelToken.source();

    const getIPOSTradingLosersData = async () => {
      setIsLoading(true);

      try {
        const response = await getODataWithParams(URLs.ipoOdata, {
          skip: (currentPage - 1) * itemsPerPage,
          top: itemsPerPage,
          filter: Mapper[tabValues[selectedTab]],
          cancelToken: source.token,
        });

        if (response.status === 200 && response.data !== null) {
          setIPOSTradingLosersData(response.data);
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

    getIPOSTradingLosersData();

    return () => {
      source.cancel("Request cancelled due to component unmount");
    };
  }, [selectedTab, currentPage]);

  const paginate = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  const tabData = [
    { label: "Daily", index: 0 },
    { label: "Weekly", index: 1 },
    { label: "Since IPO", index: 2 },
  ];
  const handleTabClick = (tabIndex: any) => {
    setSelectedTab(tabIndex);
    setCurrentPage(1);
  };

  return (
    <TabTable
      title="Past Year Ipo Gainers"
      isLoading={isLoading}
      headerArray={
        selectedTab === 0
          ? headerArrayDaily
          : selectedTab === 1
          ? headerArrayWeekly
          : headerArraysinceIpo
      }
      itemsPerPage={itemsPerPage}
      currentPage={currentPage}
      paginate={paginate}
      totalLength={iPOSTradingLosersData?.additional_dataset.totalLength}
      showPagination={true}
      tabData={tabData}
      handleTabClick={handleTabClick}
      pipelineData={iPOSTradingLosersData.dataset}
      selectedTab={selectedTab}
    />
  );
};

export default IpoHubLoser;
