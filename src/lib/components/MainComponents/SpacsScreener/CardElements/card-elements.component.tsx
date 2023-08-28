import React, { useEffect, useState } from "react";
import styles from "./card-elements.module.css";
import { styled } from "@mui/material/styles";
import Image from "next/image";
import searchIcon from "../../../../../../public/searchIcon.svg";
import filterSvg from "../../../../../../public/filterSvg.svg";
import selectedColumnSvg from "../../../../../../public/selectedColumnSvg.svg";
import saveScreenerSvg from "../../../../../../public/saveScreenerSvg.svg";
import exportSvg from "../../../../../../public/exportSvg.svg";
import crossIconSvg from "../../../../../../public/crossIconSvg.svg";
import proSvg from "../../../../../../public/ProSvg.svg";
import { getApiWithoutAuth, getODataWithParams } from "@/lib/ts/api";
import { useContext } from "react";
import { URLs } from "@/lib/ts/apiUrl";
import { MemberInformationContext } from "@/lib/components/context";
import {
  SkeltonTable,
  ListingTrackTable,
} from "@/lib/components/CommonComponents";
import {
  InputAdornment,
  Badge,
  Modal,
  Box,
  FormControl,
  InputLabel,
  Button,
  MenuItem,
  Divider,
} from "@mui/material";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { PreDealSpacScreener } from "@/lib/ts/constants";
import {
  CssTextSpacsField,
  FilterModalStyle,
  CssTextFieldBorder,
} from "@/lib/styled-components/index.styled";
import { useRouter } from "next/navigation";
import axios, { AxiosError } from "axios";
import { SpacsFilterModal } from "./spacs-filter-modal";
import { SpacsColumnModal } from "./spacs-column-modal";
import { SpacsPlansModal } from "./spacs-plans-modal";
interface PROPS {}

const CardElements: React.FC<PROPS> = () => {
  const { user } = useContext(MemberInformationContext);
  const router = useRouter();
  const tabValues: { [key: number]: string } = {
    0: "pre_deal",
    1: "announced",
    2: "all",
    3: "de_spac",
  };
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [openModalCheckScreen, setOpenModalCheckScreen] =
    useState<boolean>(false);
  const [userType, setUserType] = useState<string>("free");
  const [openModalSavedScreen, setOpenModalSavedScreen] =
    useState<boolean>(false);

  const [openFilterModal, setOpenFilterModal] = useState<boolean>(false);
  const [openColumnModal, setOpenColumnModal] = useState<boolean>(false);
  const [screenerData, setScreenerData] = useState<any>({
    dataset: [],
    additional_dataset: { totalLength: 20 },
  });
  const [selectedTab, setSelectedTab] = useState(2);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [filterCount, setFilerCount] = useState<number>(0);
  const [name, setName] = useState<string>("");

  const [previousSaveScreen, setPreviousSaveScreen] = useState([
    { name: "anees", id: 20 },
    { name: "anees", id: 20 },
    { name: "anees", id: 20 },
  ]);
  const [filters, setFilters] = useState({
    ipoYear: null,
    mergerVoteSet: null,
    spacProfile: null,
    Trading: null,
    targetSector: null,
    targetRegion: null,
    Activity: null,
    spacProgressStatus: null,
    deSpacClosed: null,
  });

  const [filterArray, setFilterArray] = useState<{
    ipoYear?: any[];
    mergerVoteSet?: any[];
    spacProfile?: any[];
    Trading?: any[];
    targetSector?: any[];
    targetRegion?: any[];
    Activity?: any[];
    spacProgressStatus?: any[];
    deSpacClosed?: any[];
  }>({});

  const [itemsPerPage, setItemPerPage] = useState<number>(5);
  const tabData = [
    {
      name: "Pre-Deal SPAC Screener",
      key: 0,
    },
    {
      name: "Announced SPAC Mergers Screener",
      key: 1,
    },
    {
      name: "All Active SPACs Screener",
      key: 2,
    },
    {
      name: "De-SPAC Screener",
      key: 3,
    },
  ];
  const [personName, setPersonName] = useState<any>([
    {
      name: "Company",
      key: "company",
      type: "string",
      pro: false,
    },
    {
      name: "Symbol",
      key: "symbol",
      type: "string",
      pro: false,
    },
    {
      name: "Listing Method",
      key: "listing_method",
      type: "string",
      pro: false,
    },
    {
      name: "Listing Status",
      key: "listing_status",
      type: "string",
      pro: false,
    },
    {
      name: "Market Cap",
      key: "marketCap",
      type: "string",
      pro: false,
    },
  ]);

  const handleChange = (
    event: SelectChangeEvent<any[]>,
    child: React.ReactNode
  ) => {
    const { value } = event.target;
    const selectedKeys = Array.isArray(value)
      ? value.map((selectedKey: any) => selectedKey)
      : [];
    const selectedItems = selectedKeys.map((selectedKey: string) => {
      const selectedItem = PreDealSpacScreener.find(
        (item: any) => item.key === selectedKey
      );
      return selectedItem
        ? {
            name: selectedItem.name,
            key: selectedItem.key,
            type: selectedItem.type,
            pro: selectedItem.pro,
          }
        : null;
    });
    const filteredItems = selectedItems.filter(
      (item: any) => item !== null
    ) as Array<{ name: string; key: string; type: string; pro: boolean }>;
    setPersonName(filteredItems);
  };

  useEffect(() => {
    console.log("====================user", user);
  }, [user]);

  const paginate = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };
  const clearAll = () => {
    setFilters({
      ipoYear: null,
      mergerVoteSet: null,
      spacProfile: null,
      Trading: null,
      targetSector: null,
      targetRegion: null,
      Activity: null,
      spacProgressStatus: null,
      deSpacClosed: null,
    });
    setOpenFilterModal(false);
    setFilerCount(0);
  };
  const applyFilters = () => {
    console.log("====================filters", filters);

    let count = 0;

    for (const key in filters) {
      if (filters[key as keyof typeof filters] !== null) {
        count++;
      }
    }
    setFilerCount(count);
    setOpenFilterModal(false);
  };
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
  // }, [selectedTab, currentPage, itemsPerPage, personName]);
  const getScreenerData = async () => {
    setIsLoading(true);
    const response = await getApiWithoutAuth(
      `${URLs.spacsScreeners}?page=${currentPage}&offset=${itemsPerPage}&type=${
        tabValues[selectedTab]
      }&columnIds=${personName.map((item: any) => item.key).join(", ")}`
    );
    console.log(
      "========================res",
      `${URLs.spacsScreeners}?page=${currentPage}&offset=${itemsPerPage}&type=${
        tabValues[selectedTab]
      }&columnIds=${personName.map((item: any) => item.key).join(",")}`,
      response
    );
    if (response.status === 200 && response.data !== null) {
      setScreenerData(response.data);
      setIsLoading(false);
    } else {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getScreenerData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedTab, currentPage, itemsPerPage, personName]);
  const handleTabClick = (key: any) => {
    setSelectedTab(key);
    setFilerCount(0);
    setPersonName([
      {
        name: "Company",
        key: "company",
        type: "string",
        pro: false,
      },
      {
        name: "Symbol",
        key: "symbol",
        type: "string",
        pro: false,
      },
      {
        name: "Listing Method",
        key: "listing_method",
        type: "string",
        pro: false,
      },
      {
        name: "Listing Status",
        key: "listing_status",
        type: "string",
        pro: false,
      },
      {
        name: "Market Cap",
        key: "marketCap",
        type: "string",
        pro: false,
      },
    ]);
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

  const saveScreenApi = () => {
    setOpenModalSavedScreen(false);
  };
  return (
    <main className={styles.stockstablesection}>
      <header className={styles.tableTitle}>Card Elements</header>
      <section className={styles.tableContainerInner}>
        <div style={{ borderBottom: "1px solid #d2ecf9", display: "flex" }}>
          {tabData.map((tab) => (
            <div
              key={tab.key}
              onClick={() => handleTabClick(tab.key)}
              className={`${styles.headerCell} ${
                selectedTab === tab.key && styles.selectedHeader
              }`}
            >
              {tab.name}
            </div>
          ))}
        </div>
        <div className={styles.highlightStyle}>
          <span>
            Selected basked of 24 stocks up today an average of&nbsp;{" "}
          </span>
          <span className={styles.backgroundTitle}>+ 5.33%</span>&nbsp;
          <span>with an aggregate market capitalization of&nbsp;</span>
          <span className={styles.backgroundTitle}>$1.5T +$550M</span>
        </div>

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
            <div
              className={styles.filterGap}
              onClick={() => setOpenColumnModal(true)}
            >
              <Image
                src={selectedColumnSvg}
                alt="filterSvg"
                width={18}
                height={18}
              />

              <div>SELECT COLUMNS</div>
            </div>{" "}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-end",
              }}
            >
              {user?.member?.stripeCustomerId ? null : (
                <Image
                  src={proSvg}
                  alt="filterSvg"
                  width={50}
                  height={26}
                  onClick={() => {
                    router.push("/plans");
                  }}
                />
              )}
              <div
                className={styles.filterGap}
                onClick={() => setOpenModalCheckScreen(true)}
              >
                <Image
                  src={saveScreenerSvg}
                  alt="filterSvg"
                  width={18}
                  height={18}
                />

                <div>SAVED SCREENS</div>
              </div>{" "}
            </div>
            <div className={styles.filterGap}>
              <Image src={exportSvg} alt="filterSvg" width={18} height={18} />
              <div>EXPORT</div>
            </div>
          </div>
        </div>
        <div style={{ overflow: "auto" }}>
          {isLoading ? (
            <SkeltonTable />
          ) : (
            <ListingTrackTable
              data={screenerData?.dataset}
              headerArray={personName}
              currentPage={currentPage}
              itemsPerPage={itemsPerPage}
              paginate={paginate}
              totalLength={screenerData?.additional_dataset}
              showPagination
              setItemPerPage={setItemPerPage}
              isUser={user?.member?.stripeCustomerId}
            />
          )}
        </div>
      </section>
      <SpacsFilterModal
        openFilterModal={openFilterModal}
        setOpenFilterModal={setOpenFilterModal}
        selectedTab={selectedTab}
        clearAll={clearAll}
        filterArray={filterArray}
        handleChangeFilter={handleChangeFilter}
        user={user}
        applyFilters={applyFilters}
      />
      <SpacsColumnModal
        openColumnModal={openColumnModal}
        setOpenColumnModal={setOpenColumnModal}
        selectedTab={selectedTab}
        user={user}
        personName={personName}
        handleChange={handleChange}
      />
      <SpacsPlansModal
        openModalCheckScreen={openModalCheckScreen}
        setOpenModalCheckScreen={setOpenModalCheckScreen}
        userType={userType}
        previousSaveScreen={previousSaveScreen}
        setName={setName}
        name={name}
        saveScreenApi={saveScreenApi}
      />
    </main>
  );
};

export default CardElements;
