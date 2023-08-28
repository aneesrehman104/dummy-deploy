import React, { useEffect, useState } from "react";
import styles from "./watch-list-ipo-spac-merger.module.css";
import { getApiWithoutAuth } from "@/lib/ts/api";
import { URLs } from "@/lib/ts/apiUrl";
import {
  SkeltonTable,
  ListingTrackTable,
} from "@/lib/components/CommonComponents";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import crossIconSvg from "@public/crossIconSvg.svg";
import Image from "next/image";
import {
  headerArrayIPO,
  headerArrayMergers,
  headerArraySpac,
} from "./constants";
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

const CardElements = ({ selectedTab }: any) => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [removeRow, setRemoveRow] = useState(null);
  const [showRemoveModal, setShowRemoveModal] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [tableData, setTableData] = useState<any>({
    dataset: [],
    additional_dataset: { totalLength: 20 },
  });
  const [itemsPerPage] = useState<number>(5);
  const tabValues: { [key: number]: string } = {
    0: "ipo",
    1: "merger",
    2: "spac",
  };

  const paginate = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  useEffect(() => {
    const getLatestClosed = async () => {
      setIsLoading(true);
      const response = await getApiWithoutAuth(
        `${URLs.spacPipeline}?page=${currentPage}&offset=${itemsPerPage}&type=grapevine&subtype=${tabValues[selectedTab]}`
      );
      if (response.status === 200 && response.data !== null) {
        setTableData(response.data);
        setIsLoading(false);
      } else {
        setIsLoading(false);
      }
    };

    getLatestClosed();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedTab, currentPage]);
  useEffect(() => {
    if (removeRow !== null) setShowRemoveModal(true);
  }, [removeRow]);

  return (
    <main className={styles.stockstablesection}>
      <header className={styles.tableTitle}>
        {selectedTab == 0
          ? "IPO Watchlist"
          : selectedTab == 1
          ? "Merger Watchlist"
          : "SPAC Watchlist"}
      </header>
      <section className={styles.tableContainerInner}>
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
      </section>
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
    </main>
  );
};

export default CardElements;
