import React, { useState, useEffect } from "react";
import { homeConstants } from "@/lib/ts/constants";
import { getODataWithParams } from "@/lib/ts/api";
import { URLs } from "@/lib/ts/apiUrl";
import { headerArrayHomeMergerTable } from "./constants";
import axios, { AxiosError } from "axios";
import { Table } from "@/lib/components/CommonComponents/Table/table.component";

const jsonResponse = "application/json";
interface PROPS {}
interface MergerPipelineInterface {
  companyName: string;
  companySymbol: string;
  ipoType: string;
  ipoStatus: string;
  exchange: string;
  expectedIpoDate: string;
  expectedIpoPrice: string;
  ipoOfferingSize: string;
}

const HomeMergerTable: React.FC<PROPS> = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const [mergerPipelineData, setMergerPipelineData] = useState<
    MergerPipelineInterface[]
  >([]);

  useEffect(() => {
    const source = axios.CancelToken.source();

    const getMergerPipelineData = async () => {
      setIsLoading(true);

      try {
        const response = await getODataWithParams(URLs.ipoOdata, {
          top: 5,
          orderby: [{ field: "companyName", direction: "desc" }],
          cancelToken: source.token,
        });

        if (response.status === 200 && response.data !== null) {
          setMergerPipelineData(
            jsonResponse === "application/json"
              ? response.data
              : response.data.source.dataset
          );
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

    getMergerPipelineData();
    return () => {
      source.cancel("Request cancelled due to component unmount");
    };
  }, []);

  return (
    <Table
      isLoading={isLoading}
      headerArray={headerArrayHomeMergerTable}
      pipelineData={mergerPipelineData}
      title={homeConstants.MergersPipeline.title}
    />
  );
};

export default HomeMergerTable;
