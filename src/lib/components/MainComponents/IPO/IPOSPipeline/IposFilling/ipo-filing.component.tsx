import React, { useEffect } from "react";
import styles from "./ipo-filing.module.css";
import { useState } from "react";
import { getODataWithParams } from "@/lib/ts/api";
import { URLs } from "@/lib/ts/apiUrl";
import {
  headerArrayLatestFilings,
  headerArrayLatestAmendedFilings,
  headerArrayWithdrawn,
} from "./constants";
import axios, { AxiosError } from "axios";
import { getDateDaysAgo } from "@/lib/ts/utils/utils";
import { TabTable } from "@/lib/components/CommonComponents/Table/tab-table.component";
interface PROPS {}

const Mapper = {
  latest: "Filed",
  amended: "Filed",
  withdrawn: "Withdrawn",
};

const NameMapper = {
  latest: `s1InitialFilingDate ge '${getDateDaysAgo(90)}'`,
  amended: `amendedS1FilingDate ge '${getDateDaysAgo(90)}'`,
  withdrawn: `s1WithdrawalDate ge '${getDateDaysAgo(90)}'`,
};

const IposFilling: React.FC<PROPS> = () => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [selectedTab, setSelectedTab] = useState<number>(0);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [ipoFillingData, setIposFillingData] = useState<any>({
    dataset: [],
    additional_dataset: { totalLength: 20 },
  });
  const [itemsPerPage] = useState<number>(5);

  const tabValues: { [key: number]: "latest" | "amended" | "withdrawn" } = {
    0: "latest",
    1: "amended",
    2: "withdrawn",
  };

  useEffect(() => {
    const source = axios.CancelToken.source();

    const getIposFillingData = async () => {
      setIsLoading(true);

      try {
        const response = await getODataWithParams(URLs.ipoOdata, {
          skip: (currentPage - 1) * itemsPerPage,
          top: itemsPerPage,
          filter: `ipoStatus eq '${Mapper[tabValues[selectedTab]]}' and ${
            NameMapper[tabValues[selectedTab]]
          } `,
        });

        if (response.status === 200 && response.data !== null) {
          setIposFillingData({
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

    getIposFillingData();

    return () => {
      source.cancel("Request cancelled due to component unmount");
    };
  }, [selectedTab, currentPage]);

  const paginate = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  const tabData = [
    { label: "Latest Filings", index: 0 },
    { label: "Latest Amended Filings", index: 1 },
    { label: "Withdrawn", index: 2 },
  ];
  const handleTabClick = (tabIndex: any) => {
    setSelectedTab(tabIndex);
    setCurrentPage(1);
  };

  return (
    <TabTable
      title="IPO Filings"
      isLoading={isLoading}
      headerArray={
        selectedTab === 0
          ? headerArrayLatestFilings
          : selectedTab === 1
          ? headerArrayLatestAmendedFilings
          : headerArrayWithdrawn
      }
      itemsPerPage={itemsPerPage}
      currentPage={currentPage}
      paginate={paginate}
      totalLength={ipoFillingData.additional_dataset.totalLength}
      showPagination={true}
      tabData={tabData}
      handleTabClick={handleTabClick}
      pipelineData={ipoFillingData.dataset}
      selectedTab={selectedTab}
    />
  );
};

export default IposFilling;
