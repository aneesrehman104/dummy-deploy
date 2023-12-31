import React, { Fragment, useEffect } from "react";
import styles from "./latest-announcedMergers.module.css";
import { useState } from "react";
import { getApiWithoutAuth, getODataWithParams } from "@/lib/ts/api";
import { URLs } from "@/lib/ts/apiUrl";
import axios, { AxiosError } from "axios";
import {
  SkeltonTable,
  ListingTrackTable,
} from "@/lib/components/CommonComponents";
import { headerArray } from "./constants";
import { Table } from "@/lib/components/CommonComponents/Table/table.component";
const itemsPerPage = 5;

interface PROPS {}
const LatestAnnouncedMergers: React.FC<PROPS> = () => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [latestAnnouncedMergersData, setLatestAnnouncedMergersData] =
    useState<any>({
      dataset: [],
      additional_dataset: { totalLength: 20 },
    });

  useEffect(() => {
    const source = axios.CancelToken.source();
    const getLatestAnnouncedMergersData = async () => {
      setIsLoading(true);
      try {
        const response = await getODataWithParams(URLs.ipoOdata, {
          skip: (currentPage - 1) * itemsPerPage,
          top: itemsPerPage,
          cancelToken: source.token,
        });

        if (response.status === 200 && response.data !== null) {
          setLatestAnnouncedMergersData({
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
    getLatestAnnouncedMergersData();
    return () => {
      source.cancel("Request cancelled due to component unmount");
    };
  }, [currentPage]);

  const paginate = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  return (
    <Table
      isLoading={isLoading}
      headerArray={headerArray}
      pipelineData={latestAnnouncedMergersData}
      title="Latest IPOs"
    />
  );
};

export default LatestAnnouncedMergers;
