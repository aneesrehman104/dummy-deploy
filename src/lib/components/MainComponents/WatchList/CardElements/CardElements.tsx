import React, { useEffect, useState } from "react";
import styles from "./CardElements.module.css";
import { getApiWithoutAuth } from "@/lib/ts/api";
import { URLs } from "@/lib/ts/apiUrl";
import {
  SkeltonTable,
  ListingTrackTable,
} from "@/lib/components/CommonComponents";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

import crossIconSvg from "../../../../../../public/crossIconSvg.svg";
import Image from "next/image";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

function CardElements({ selectedTab }: any) {
  const [currentPage, setCurrentPage] = useState(1);
  const [removeRow, setRemoveRow] = useState(null);
  const [showRemoveModal, setShowRemoveModal] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [tableData, setTableData] = useState<any>({
    dataset: [],
    additional_dataset: { totalLength: 20 },
  });
  const [itemsPerPage] = useState(5);
  const tabValues: { [key: number]: string } = {
    0: "ipo",
    1: "merger",
    2: "spac",
  };
  const headerArrayIPO = [
    {
      name: "Company",
      key: "Company",
      type: "string",
    },
    {
      name: "Ticker",
      key: "Ticker",
      type: "string",
    },
    {
      name: "IPO Status",
      key: "IPOStatus",
      type: "string",
    },
    {
      name: "IPO Date",
      key: "IPODate",
      type: "string",
    },
    {
      name: "Price",
      key: "Price",
      type: "string",
    },
    {
      name: "Daily Chg %",
      key: "DailyChg",
      type: "string",
    },
  ];
  const headerArrayMergers = [
    {
      name: "Deal Name",
      key: "Deal Name",
      type: "string",
    },
    {
      name: "Company / Ticker (Acquirer)",
      key: "CompanyTicker",
      type: "string",
    },
    {
      name: "Merger Status",
      key: "MergerStatus",
      type: "string",
    },
    {
      name: "Merger Type",
      key: "MergerType",
      type: "string",
    },
    {
      name: "Target Price",
      key: "TargetPrice",
      type: "string",
    },
    {
      name: "Target Daily Chg %",
      key: "TargetDailyChg",
      type: "string",
    },
    {
      name: "Acquirer Price",
      key: "AcquirerPrice",
      type: "string",
    },
    {
      name: "Acquirer Daily Chg %",
      key: "AcquirerDailyChg",
      type: "string",
    },
  ];
  const headerArraySpac = [
    {
      name: "Company",
      key: "Company",
      type: "string",
    },
    {
      name: "Ticker",
      key: "Ticker",
      type: "string",
    },
    {
      name: "SPAC Progress Status with Merger Partner",
      key: "SPACProgressStatuswithMergerPartner",
      type: "string",
    },
    {
      name: "Price",
      key: "Price",
      type: "string",
    },
    {
      name: "Daily Chg %",
      key: "DailyChg",
      type: "string",
    },
    {
      name: "Trust Value",
      key: "TrustValue",
      type: "string",
    },
  ];

  const paginate = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };
  const getLatestClosed = async () => {
    setIsLoading(true);
    const response = await getApiWithoutAuth(
      `${URLs.spacPipeline}?page=${currentPage}&offset=${itemsPerPage}&type=grapevine&subtype=${tabValues[selectedTab]}`
    );
    if (response.status === 200) {
      setTableData(response.data);
      setIsLoading(false);
    } else {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getLatestClosed();
  }, [selectedTab, currentPage]);
  useEffect(() => {
    if (removeRow !== null) setShowRemoveModal(true);
  }, [removeRow]);
  return (
    <section className={styles.stockstablesection}>
      <div className={styles.tableTitle}>
        {selectedTab == 0
          ? "IPO Watchlist"
          : selectedTab == 1
          ? "Merger Watchlist"
          : "SPAC Watchlist"}
      </div>
      <div className={styles.tableContainerInner}>
        <div style={{ overflow: "auto" }}>
          {isLoading ? (
            <SkeltonTable />
          ) : (
            <ListingTrackTable
              headerArray={
                selectedTab === 0
                  ? headerArrayIPO
                  : selectedTab === 1
                  ? headerArrayMergers
                  : headerArraySpac
              }
              isRemoveAble
              setRemoveRow={setRemoveRow}
              data={tableData?.dataset}
              itemsPerPage={itemsPerPage}
              currentPage={currentPage}
              paginate={paginate}
              totalLength={tableData?.additional_dataset}
              showPagination
            />
          )}
        </div>
      </div>
      <Modal
        open={showRemoveModal}
        onClose={() => {
          setShowRemoveModal(false);
          setRemoveRow(null);
        }}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <>
            <div style={{ display: "flex", justifyContent: "flex-end" }}>
              <Image
                src={crossIconSvg}
                alt="filterSvg"
                width={18}
                height={18}
                onClick={() => {
                  setShowRemoveModal(false);
                  setRemoveRow(null);
                }}
              />
            </div>
            <div>Open Modal</div>
            <div style={{ display: "flex", justifyContent: "flex-end" }}>
              <div
                style={{
                  width: 150,
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                <Button
                  variant="text"
                  color="error"
                  onClick={() => {
                    setShowRemoveModal(false);
                    setRemoveRow(null);
                  }}
                >
                  No
                </Button>

                <Button variant="text" color="success">
                  Yes
                </Button>
              </div>
            </div>
          </>
        </Box>
      </Modal>
    </section>
  );
}

export default CardElements;
