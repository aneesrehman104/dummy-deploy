import React, { useEffect, useState } from "react";
import styles from "./spacs-list-element.module.css";
import Image from "next/image";
import searchIcon from "@public/searchIcon.svg";
import filterSvg from "@public/filterSvg.svg";
import exportSvg from "@public/exportSvg.svg";
import { getApiWithoutAuth } from "@/lib/ts/api";
import { URLs } from "@/lib/ts/apiUrl";
import {
  SkeltonTable,
  ListingTrackTable,
} from "@/lib/components/CommonComponents";
import {
  InputAdornment,
  Badge,
} from "@mui/material";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { useContext } from "react";
import { MemberInformationContext } from "@/lib/components/context";
import {
  CssTextSpacsField,
} from "@/lib/styled-components/index.styled";
import {
  headerArrayAllActiveSPACsList,
  headerArrayPreDealSPACsList,
  headerArrayAnnouncedSPACMergersList,
  headerArrayDeSPACsList,
  headerArraySPACTrustValuesList,
  headerArraySPACLiquidationsList,
  header20PerformingDeSPACsList,
} from "./constants";
import {SpacsListFilterModal} from './spacs-list-filter-modal'
interface PROPS {}

const SpacsListElement: React.FC<PROPS> = () => {
  const { user } = useContext(MemberInformationContext);

  const tabValues: { [key: number]: string } = {
    0: "all",
    1: "pre_deal",
    2: "announced",
    3: "de_spac",
  };
  const tabData = [
    { index: 0, title: "All Active SPACs" },
    { index: 1, title: "Pre-Deal SPACs" },
    { index: 2, title: "Announced SPAC Deals" },
    { index: 3, title: "De-SPACs" },
    { index: 4, title: "Top 20 De-SPAC Performers" },
    { index: 5, title: "Worst 20 De-SPAC Performers" },
    { index: 6, title: "SPAC Trust Values" },
    { index: 7, title: "SPAC Liquidations" },
  ];

  const [selectedTab, setSelectedTab] = useState<number>(0);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [openFilterModal, setOpenFilterModal] = useState<boolean>(false);
  const [spacsListData, setSpacsListData] = useState<any>({
    dataset: [],
    additional_dataset: { totalLength: 20 },
  });
  const [filterCount, setFilterCount] = useState<number>(0);

  const [itemsPerPage, setItemPerPage] = useState<number>(5);
  const [filters, setFilters] = useState({
    LiquidationYear: null,
    LiquidationStatus: null,
    SPACProgressStatus: null,
    VotesDeadlines: null,
    TargetSector: null,
    TargetRegion: null,
    De_SPAC_Closing_Year: null,
  });

  const [filterArray, setFilterArray] = useState<{
    LiquidationYear?: any[];
    LiquidationStatus?: any[];
    SPACProgressStatus?: any[];
    VotesDeadlines?: any[];
    TargetSector?: any[];
    TargetRegion?: any[];
    De_SPAC_Closing_Year?: any[];
  }>({});
  const paginate = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  const getSpacsList = async () => {
    setIsLoading(true);
    const response = await getApiWithoutAuth(
      `${URLs.spacsList}?page=${currentPage}&offset=${itemsPerPage}&type=${tabValues[selectedTab]}`
    );
    if (response.status === 200 && response.data !== null) {
      setSpacsListData(response.data);
      setIsLoading(false);
    } else {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getSpacsList();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedTab, currentPage, itemsPerPage]);

  // useEffect(() => {
  //   const source = axios.CancelToken.source();
  //   const getScreenerData = async () => {
  //     setIsLoading(true);
  //     try {
  //       const response = await getODataWithParams(
  //         `${
  //           URLs.spacsScreeners
  //         }?page=${currentPage}&offset=${itemsPerPage}&type=${
  //           tabValues[selectedTab]
  //         }&columnIds=${personName.map((item: any) => item.key).join(", ")}`,
  //         {
  //           cancelToken: source.token,
  //         }
  //       );
  //       if (response.status === 200 && response.data !== null) {
  //         setScreenerData(response.data);
  //         setIsLoading(false);
  //       }
  //     } catch (error) {
  //       if (axios.isCancel(error)) {
  //         console.log("Request cancelled:", (error as AxiosError).message);
  //         setIsLoading(false);
  //       } else {
  //         console.error("An error occurred:", (error as AxiosError).message);
  //         setIsLoading(false);
  //       }
  //     } finally {
  //       setIsLoading(false);
  //     }
  //   };
  //   getScreenerData();
  //   return () => {
  //     source.cancel("Request cancelled due to component unmount");
  //   };
  // }, [selectedTab, currentPage, itemsPerPage]);

  const saveValue = (e: any) => {
    const { name, value } = e.target;
    setFilters({ ...filters, [name]: value });
  };

  const clearAll = () => {
    setFilters({
      LiquidationYear: null,
      LiquidationStatus: null,
      SPACProgressStatus: null,
      VotesDeadlines: null,
      TargetSector: null,
      TargetRegion: null,
      De_SPAC_Closing_Year: null,
    });
    setOpenFilterModal(false);
    setFilterCount(0);
  };

  const applyFilters = () => {
    console.log("====================filters", filters);

    let count = 0;

    for (const key in filters) {
      if (filters[key as keyof typeof filters] !== null) {
        count++;
      }
    }
    setFilterCount(count);
    setOpenFilterModal(false);
  };

  const handleChangeFilter = (
    key: string,
    event: SelectChangeEvent<string[]>,
    selectedArray: any
  ) => {
    const selectedValues = event.target.value as string[];

    const updatedFilterArray = {
      ...filterArray,
      [key]: selectedValues.map((selectedValue: string) =>
        selectedArray.find((item: any) => item.key === selectedValue)
      ),
    };

    console.log(
      "===============================",
      key,
      selectedValues,
      selectedArray,
      updatedFilterArray
    );

    setFilterArray(updatedFilterArray);
  };
  const handleClick = (index:any) => {
    setSelectedTab(index);
    setFilterCount(0);
  };

  const generateDescriptionSection = () => {
    return (
      <div style={{ marginTop: 20, marginBottom: 20 }}>
        <div className={styles.descriptionStyle}>Description</div>
        <div className={styles.descriptionDetailStyle}>
          This list shows all of the companies that have filed their
          registration statements with the SEC to go public, but have yet to
          launch their IPOs. The list includes traditional IPOs (including
          SPACs) and Direct Listings.
        </div>
      </div>
    );
  };

  return (
    <section className={styles.stockstablesection}>
      <header className={styles.tableTitle}>Card Elements</header>
      <div className={styles.tableContainerInner}>
        <div style={{ borderBottom: "1px solid #d2ecf9", display: "flex" }}>
          {tabData.slice(0, 4).map((tab) => (
            <div
              key={tab.index}
              onClick={() => handleClick(tab.index)}
              className={`${styles.headerCell} ${
                selectedTab === tab.index && styles.selectedHeader
              }`}
            >
              {tab.title}
            </div>
          ))}
        </div>
        <div
          style={{
            borderBottom: "1px solid #d2ecf9",
            display: "flex",
            marginTop: 20,
          }}
        >
          {tabData.slice(4).map((tab) => (
            <div
              key={tab.index}
              onClick={() => handleClick(tab.index)}
              className={`${styles.headerCell} ${
                selectedTab === tab.index && styles.selectedHeader
              }`}
            >
              {tab.title}
            </div>
          ))}
        </div>

        {generateDescriptionSection()}
        <div className={styles.filterMainDiv}>
          <div>
            <CssTextSpacsField
              placeholder="Search by company or ticker to filter results"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Image
                      src={searchIcon}
                      alt="searchIcon"
                      width={18}
                      height={18}
                      style={{ cursor: "pointer" }}
                    />
                  </InputAdornment>
                ),
              }}
              size="small"
              hiddenLabel
            />
          </div>
          <div className={styles.filterInnerDiv}>
            <div
              className={styles.filterGap}
              onClick={() => setOpenFilterModal(true)}
            >
              <Image src={filterSvg} alt="filterSvg" width={18} height={18} />

              <Badge badgeContent={filterCount} color="info">
                <div>Filter&nbsp;&nbsp;</div>
              </Badge>
            </div>
            <div className={styles.filterGap}>
              <Image src={exportSvg} alt="filterSvg" width={18} height={18} />
              <div>EXPORT</div>
            </div>
          </div>
        </div>
        <div style={{ width: "100%", overflow: "auto" }}>
          {isLoading ? (
            <SkeltonTable />
          ) : (
            <ListingTrackTable
              data={spacsListData?.dataset}
              headerArray={
                selectedTab === 0
                  ? headerArrayAllActiveSPACsList
                  : selectedTab === 1
                  ? headerArrayPreDealSPACsList
                  : selectedTab === 2
                  ? headerArrayAnnouncedSPACMergersList
                  : selectedTab === 3
                  ? headerArrayDeSPACsList
                  : selectedTab === 4
                  ? header20PerformingDeSPACsList
                  : selectedTab === 5
                  ? header20PerformingDeSPACsList
                  : selectedTab === 6
                  ? headerArraySPACTrustValuesList
                  : headerArraySPACLiquidationsList
              }
              currentPage={currentPage}
              itemsPerPage={itemsPerPage}
              paginate={paginate}
              totalLength={spacsListData?.additional_dataset}
              showPagination
              setItemPerPage={setItemPerPage}
              isUser={user?.member?.stripeCustomerId}
            />
          )}
        </div>
      </div>
      <SpacsListFilterModal
        openFilterModal={openFilterModal}
        setOpenFilterModal={setOpenFilterModal}
        selectedTab={selectedTab}
        clearAll={clearAll}
        filterArray={filterArray}
        handleChangeFilter={handleChangeFilter}
        user={user}
        applyFilters={applyFilters}
      />
    </section>
  );
};

export default SpacsListElement;
