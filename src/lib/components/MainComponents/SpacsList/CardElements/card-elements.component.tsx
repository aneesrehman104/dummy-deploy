import React, { useEffect, useState } from "react";
import styles from "./card-elements.module.css";
import MyTable from "./functions";
import { styled } from "@mui/material/styles";
import Image from "next/image";
import searchIcon from "../../../../../../public/searchIcon.svg";
import filterSvg from "../../../../../../public/filterSvg.svg";
import exportSvg from "../../../../../../public/exportSvg.svg";
import crossIconSvg from "../../../../../../public/crossIconSvg.svg";
import proSvg from "../../../../../../public/ProSvg.svg";
import { getApiWithoutAuth } from "@/lib/ts/api";
import { URLs } from "@/lib/ts/apiUrl";
import {
  SkeltonTable,
  ListingTrackTable,
} from "@/lib/components/CommonComponents";
import {
  TextField,
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
import Checkbox from "@mui/material/Checkbox";
import { useContext } from "react";
import { MemberInformationContext } from "@/lib/components/context";
  interface PROPS {}

  const CardElements: React.FC<PROPS> = () => {
  const { user } = useContext(MemberInformationContext);

  const style = {
    position: "absolute" as "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "60%",
    bgcolor: "background.paper",
    border: "2px solid grey",
    boxShadow: 24,
    borderRadius: "15px",
    p: 3,
  };
  const tabValues: { [key: number]: string } = {
    0: "all",
    1: "pre_deal",
    2: "announced",
    3: "de_spac",
  };
  const CssTextField = styled(TextField)({
    width: "368px",
    height: "40px",
    borderBottom: "1px solid rgba(0, 0, 0, 0.42)",
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        border: "none",
      },
    },
  });
  const headerArrayAllActiveSPACsList = [
    {
      name: "Company Name",
      key: "Company Name",
      type: "string",
    },
    {
      name: "Company Ticker",
      key: "CompanyTicker",
      type: "string",
    },
    {
      name: "SPAC Progress Status",
      key: "SPACProgressStatus",
      type: "string",
    },
    {
      name: "IPO Date",
      key: "IPODate",
      type: "string",
    },
    {
      name: "Est. Trust Value (M)",
      key: "EstTrustValue",
      type: "string",
    },
    {
      name: "Est. Public Shares (M)",
      key: "EstPublicShares",
      type: "string",
    },
    {
      name: "Est. Deadline",
      key: "EstDeadline",
      type: "string",
    },
    {
      name: "Progress to Deadline",
      key: "ProgresstoDeadline",
      type: "string",
    },
    {
      name: "Price",
      key: "Price",
      type: "string",
    },
    {
      name: "Price % Chg.",
      key: "PriceChg",
      type: "string",
    },
  ];
  const headerArrayPreDealSPACsList = [
    {
      name: "Company Name",
      key: "Company Name",
      type: "string",
    },
    {
      name: "Company Ticker",
      key: "CompanyTicker",
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
      name: "Price % Chg.",
      key: "PriceChg",
      type: "string",
    },
    {
      name: "Est. Public Shares (M)",
      key: "EstPublicShares",
      type: "string",
    },
    {
      name: "Trust Value per Share",
      key: "TrustValueperShare",
      type: "string",
    },
    {
      name: "Est. Trust Value",
      key: "EstTrustValue",
      type: "string",
    },
  ];
  const headerArrayAnnouncedSPACMergersList = [
    {
      name: "Target Company Name (Ticker)",
      key: "TargetCompanyName",
      type: "string",
    },
    {
      name: "Acquirer Company Name (Ticker)",
      key: "AcquirerCompanyName",
      type: "string",
    },
    {
      name: "Announced Date",
      key: "AnnouncedDate",
      type: "string",
    },
    {
      name: "Press Release",
      key: "PressRelease",
      type: "string",
    },
    {
      name: "Investor Presentation",
      key: "InvestorPresentation",
      type: "string",
    },
    {
      name: "Valuation",
      key: "Valuation",
      type: "string",
    },
    {
      name: "Valuation Detail",
      key: "ValuationDetail",
      type: "string",
    },
    {
      name: "PIPE",
      key: "PIPE",
      type: "string",
    },
    {
      name: "Target Industry",
      key: "TargetIndustry",
      type: "string",
    },
    {
      name: "View Deal Page",
      key: "ViewDealPage",
      type: "string",
    },
  ];

  const headerArrayDeSPACsList = [
    {
      name: "Company Name",
      key: "CompanyName",
      type: "string",
    },
    {
      name: "Company Ticker",
      key: "CompanyTicker",
      type: "string",
    },
    {
      name: "SPAC Name (SPAC Ticker)",
      key: "SPACName",
      type: "string",
    },
    {
      name: "De-SPAC Closing Date",
      key: "DeSPACClosingDate",
      type: "string",
    },
    {
      name: "SPAC Shares Redeemed (%)",
      key: "SPACSharesRedeemed",
      type: "string",
    },
    {
      name: "SPAC Shares Rem. Post-Close (M)",
      key: "SPACSharesRemPostClose",
      type: "string",
    },
    {
      name: "Price",
      key: "Price",
      type: "string",
    },
    {
      name: "Price % Chg.",
      key: "PriceChg",
      type: "string",
    },
    {
      name: "Valuation at Deal",
      key: "ValuationatDeal",
      type: "string",
    },
    {
      name: "Market Cap",
      key: "MarketCap",
      type: "string",
    },
    {
      name: "Return from IPO",
      key: "ReturnfromIPO",
      type: "string",
    },
    {
      name: "View Deal Page",
      key: "ViewDealPage",
      type: "string",
    },
  ];
  const headerArraySPACTrustValuesList = [
    {
      name: "Company Name",
      key: "CompanyName",
      type: "string",
    },
    {
      name: "Company Ticker",
      key: "CompanyTicker",
      type: "string",
    },
    {
      name: "Trust P.S. at IPO",
      key: "TrustPSatIPO",
      type: "string",
    },
    {
      name: "Trust per Share",
      key: "TrustperShare",
      type: "string",
    },
    {
      name: "SPAC Shares Redeemed (%)",
      key: "SPACSharesRedeemed",
      type: "string",
    },
    {
      name: "Trust Per Share Date",
      key: "TrustPerShareDate",
      type: "string",
    },
    {
      name: "Trust per Share Source",
      key: "TrustperShareSource",
      type: "string",
    },
    {
      name: "Price",
      key: "Price",
      type: "string",
    },
    {
      name: "Trading Premium/Discount",
      key: "TradingPremiumDiscount",
      type: "string",
    },
    {
      name: "Est. Shares (M)",
      key: "EstShares",
      type: "string",
    },
  ];
  const headerArraySPACLiquidationsList = [
    {
      name: "Company Name",
      key: "CompanyName",
      type: "string",
    },
    {
      name: "Company Ticker",
      key: "CompanyTicker",
      type: "string",
    },
    {
      name: "Liquidation Status",
      key: "LiquidationStatus",
      type: "string",
    },
    {
      name: "IPO Date",
      key: "IPODate",
      type: "string",
    },
    {
      name: "Liquidation Date",
      key: "LiquidationDate",
      type: "string",
    },
    {
      name: "Liquidation Price",
      key: "LiquidationPrice",
      type: "string",
    },
    {
      name: "Trust Value (M)",
      key: "TrustValue",
      type: "string",
    },
  ];
  const header20PerformingDeSPACsList = [
    {
      name: "Company Name",
      key: "Company Name",
      type: "string",
    },
    {
      name: "Ticker",
      key: "Ticker",
      type: "string",
    },
    {
      name: "De-SPAC Closing Date",
      key: "DeSPACClosingDate",
      type: "string",
    },
    {
      name: "Price",
      key: "Price",
      type: "string",
    },
    {
      name: "Price % Chg.",
      key: "PriceChg",
      type: "string",
    },
    {
      name: "Valuation at Deal",
      key: "ValuationatDeal",
      type: "string",
    },
    {
      name: "Market Cap",
      key: "MarketCap",
      type: "string",
    },
    {
      name: "Return from IPO (SPAC IPO)",
      key: "ReturnfromIPO",
      type: "string",
    },
    {
      name: "View Deal Page",
      key: "ViewDealPage",
      type: "string",
    },
  ];
  const [selectedTab, setSelectedTab] = useState<number>(0);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [openFilterModal, setOpenFilterModal] = useState<boolean>(false);
  const [spacsListData, setSpacsListData] = useState<any>({
    dataset: [],
    additional_dataset: { totalLength: 20 },
  });
  const [filterCount, setFilerCount] = useState<number>(0);

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
  const SPACProgressStatusOptions = [
    { key: "Searching", name: "Searching", pro: false },
    { key: "Announced", name: "Announced", pro: false },
    { key: "Liquidating", name: "Liquidating", pro: false },
  ];
  const IPOYearsOptions = [
    { key: "2023", name: "2023", pro: false },
    { key: "2022", name: "2022", pro: false },
    { key: "2021", name: "2021", pro: false },
    { key: "2020", name: "2020", pro: true },
    { key: "2019", name: "2019", pro: true },
  ];
  const LiquidationYearOptions = [
    { key: "2023", name: "2023", pro: true },
    { key: "2022", name: "2022", pro: true },
    { key: "2021", name: "2021", pro: true },
    { key: "2020", name: "2020", pro: true },
    { key: "2019", name: "2019", pro: true },
  ];

  const VotesDeadlinesOptions = [
    { key: "Approaching Deadline", name: "Approaching Deadline", pro: true },
    { key: "Merger Vote Set", name: "Merger Vote Set", pro: true },
    { key: "Extension Vote Set", name: "Extension Vote Set", pro: true },
  ];

  const LiquidationStatusOptions = [
    { key: "Liquidated", name: "Liquidated", pro: true },
    { key: "Liquidating", name: "Liquidating", pro: true },
  ];

  const TargetSectorOptions = [
    { key: "Tech", name: "Tech", pro: false },
    { key: "Energy", name: "Energy", pro: true },
    { key: "Financials", name: "Financials", pro: true },
    { key: "Communications", name: "Communications", pro: true },
    { key: "Materials", name: "Materials", pro: true },
  ];
  const TargetRegionOptions = [
    { key: "U.S. & Canada", name: "U.S. & Canada", pro: false },
    { key: "Latin America", name: "Latin America", pro: true },
    { key: " Asia & Oceania", name: " Asia & Oceania", pro: true },
    { key: "Africa", name: "Africa", pro: true },
    { key: "Europe", name: "Europe", pro: true },
  ];

  return (
    <section className={styles.stockstablesection}>
      <div className={styles.tableTitle}>Card Elements</div>
      <div className={styles.tableContainerInner}>
        <div style={{ borderBottom: "1px solid #d2ecf9", display: "flex" }}>
          <div
            onClick={() => {
              setSelectedTab(0);
              setFilerCount(0);
            }}
            className={`${styles.headerCell} ${
              selectedTab === 0 && styles.selectedHeader
            }`}
          >
            All Active SPACs
          </div>
          <div
            onClick={() => {
              setSelectedTab(1);
              setFilerCount(0);
            }}
            className={`${styles.headerCell} ${
              selectedTab === 1 && styles.selectedHeader
            }`}
          >
            Pre-Deal SPACs
          </div>
          <div
            onClick={() => {
              setSelectedTab(2);
              setFilerCount(0);
            }}
            className={`${styles.headerCell} ${
              selectedTab === 2 && styles.selectedHeader
            }`}
          >
            Announced SPAC Deals
          </div>
          <div
            onClick={() => {
              setSelectedTab(3);
              setFilerCount(0);
            }}
            className={`${styles.headerCell} ${
              selectedTab === 3 && styles.selectedHeader
            }`}
          >
            De-SPACs
          </div>
        </div>
        <div
          style={{
            borderBottom: "1px solid #d2ecf9",
            display: "flex",
            marginTop: 20,
          }}
        >
          <div
            onClick={() => {
              setSelectedTab(4);
              setFilerCount(0);
            }}
            className={`${styles.headerCell} ${
              selectedTab === 4 && styles.selectedHeader
            }`}
          >
            Top 20 De-SPAC Performers
          </div>
          <div
            onClick={() => {
              setSelectedTab(5);
              setFilerCount(0);
            }}
            className={`${styles.headerCell} ${
              selectedTab === 5 && styles.selectedHeader
            }`}
          >
            Worst 20 De-SPAC Performers
          </div>
          <div
            onClick={() => {
              setSelectedTab(6);
              setFilerCount(0);
            }}
            className={`${styles.headerCell} ${
              selectedTab === 6 && styles.selectedHeader
            }`}
          >
            SPAC Trust Values
          </div>
          <div
            onClick={() => {
              setSelectedTab(7);
              setFilerCount(0);
            }}
            className={`${styles.headerCell} ${
              selectedTab === 7 && styles.selectedHeader
            }`}
          >
            SPAC Liquidations
          </div>
        </div>

        <div style={{ marginTop: 20, marginBottom: 20 }}>
          <div className={styles.descriptionStyle}>Description</div>
          <div className={styles.descriptionDetailStyle}>
            This list shows all of the companies that have filed their
            registration statements with the SEC to go public, but have yet to
            launch their IPOs. The list includes traditional IPOs (including
            SPACs) and Direct Listings.
          </div>
        </div>
        <div className={styles.filterMainDiv}>
          <div>
            <CssTextField
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
      <Modal
        keepMounted
        open={openFilterModal}
        onClose={() => setOpenFilterModal(false)}
        aria-labelledby="keep-mounted-modal-title"
        aria-describedby="keep-mounted-modal-description"
      >
        <>
          <Box sx={style}>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <div className={styles.tableTitle}>Filter</div>
              <div>
                {" "}
                <Image
                  src={crossIconSvg}
                  alt="filterSvg"
                  width={18}
                  height={18}
                  onClick={clearAll}
                />
              </div>
            </div>
            <Divider style={{ marginTop: 5, marginBottom: 5 }} />
            {selectedTab === 0 ? (
              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                }}
              >
                <FormControl sx={{ m: 1, width: 300 }}>
                  <InputLabel id="demo-multiple-checkbox-label">
                    SPAC Progress Status
                  </InputLabel>
                  <Select
                    label="SPAC Progress Status"
                    labelId="demo-multiple-checkbox-label"
                    id="demo-multiple-checkbox"
                    multiple
                    value={
                      filterArray?.SPACProgressStatus
                        ? filterArray?.SPACProgressStatus.map(
                            (item: any) => item.key
                          )
                        : []
                    }
                    onChange={(event) =>
                      handleChangeFilter(
                        "SPACProgressStatus",
                        event,
                        SPACProgressStatusOptions
                      )
                    }
                    renderValue={(selected) =>
                      `${selected.length} filters selected: ` +
                      selected
                        .map((selectedKey: string) => {
                          const selectedItem = SPACProgressStatusOptions.find(
                            (item) => item.key === selectedKey
                          );
                          return selectedItem ? selectedItem.name : null;
                        })
                        .filter(Boolean) // Remove null values
                        .join(", ")
                    }
                    MenuProps={{
                      style: {
                        maxHeight: 250,
                      },
                      PaperProps: {
                        style: {
                          maxHeight: 250,
                        },
                      },
                    }}
                  >
                    {SPACProgressStatusOptions.map((item: any) => (
                      <MenuItem
                        key={item.key}
                        value={item.key}
                        disabled={!user?.member?.stripeCustomerId && item.pro}
                      >
                        <Checkbox
                          checked={
                            filterArray.SPACProgressStatus &&
                            filterArray.SPACProgressStatus.some(
                              (selectedItem: any) =>
                                selectedItem.key === item.key
                            )
                          }
                        />

                        {item.name}
                        {!user?.member?.stripeCustomerId && item.pro ? (
                          <Image
                            src={proSvg}
                            alt="filterSvg"
                            width={50}
                            height={32}
                          />
                        ) : null}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
                <FormControl sx={{ m: 1, width: 300 }}>
                  <InputLabel id="demo-multiple-checkbox-label">
                    Votes / Deadlines
                  </InputLabel>
                  <Select
                    label="Votes / Deadlines"
                    labelId="demo-multiple-checkbox-label"
                    id="demo-multiple-checkbox"
                    multiple
                    value={
                      filterArray?.VotesDeadlines
                        ? filterArray?.VotesDeadlines.map(
                            (item: any) => item.key
                          )
                        : []
                    }
                    onChange={(event) =>
                      handleChangeFilter(
                        "VotesDeadlines",
                        event,
                        VotesDeadlinesOptions
                      )
                    }
                    renderValue={(selected) =>
                      `${selected.length} filters selected: ` +
                      selected
                        .map((selectedKey: string) => {
                          const selectedItem = VotesDeadlinesOptions.find(
                            (item) => item.key === selectedKey
                          );
                          return selectedItem ? selectedItem.name : null;
                        })
                        .filter(Boolean) // Remove null values
                        .join(", ")
                    }
                    MenuProps={{
                      style: {
                        maxHeight: 250,
                      },
                      PaperProps: {
                        style: {
                          maxHeight: 250,
                        },
                      },
                    }}
                  >
                    {VotesDeadlinesOptions.map((item: any) => (
                      <MenuItem
                        key={item.key}
                        value={item.key}
                        disabled={!user?.member?.stripeCustomerId && item.pro}
                      >
                        <Checkbox
                          checked={
                            filterArray.VotesDeadlines &&
                            filterArray.VotesDeadlines.some(
                              (selectedItem: any) =>
                                selectedItem.key === item.key
                            )
                          }
                        />

                        {item.name}
                        {!user?.member?.stripeCustomerId && item.pro ? (
                          <Image
                            src={proSvg}
                            alt="filterSvg"
                            width={50}
                            height={32}
                          />
                        ) : null}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </div>
            ) : selectedTab === 1 ? (
              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                }}
              >
                <FormControl sx={{ m: 1, width: 300 }}>
                  <InputLabel id="demo-multiple-checkbox-label">
                    Votes / Deadlines
                  </InputLabel>
                  <Select
                    label="Votes / Deadlines"
                    labelId="demo-multiple-checkbox-label"
                    id="demo-multiple-checkbox"
                    multiple
                    value={
                      filterArray?.VotesDeadlines
                        ? filterArray?.VotesDeadlines.map(
                            (item: any) => item.key
                          )
                        : []
                    }
                    onChange={(event) =>
                      handleChangeFilter(
                        "VotesDeadlines",
                        event,
                        VotesDeadlinesOptions
                      )
                    }
                    renderValue={(selected) =>
                      `${selected.length} filters selected: ` +
                      selected
                        .map((selectedKey: string) => {
                          const selectedItem = VotesDeadlinesOptions.find(
                            (item) => item.key === selectedKey
                          );
                          return selectedItem ? selectedItem.name : null;
                        })
                        .filter(Boolean) // Remove null values
                        .join(", ")
                    }
                    MenuProps={{
                      style: {
                        maxHeight: 250,
                      },
                      PaperProps: {
                        style: {
                          maxHeight: 250,
                        },
                      },
                    }}
                  >
                    {VotesDeadlinesOptions.map((item: any) => (
                      <MenuItem
                        key={item.key}
                        value={item.key}
                        disabled={!user?.member?.stripeCustomerId && item.pro}
                      >
                        <Checkbox
                          checked={
                            filterArray.VotesDeadlines &&
                            filterArray.VotesDeadlines.some(
                              (selectedItem: any) =>
                                selectedItem.key === item.key
                            )
                          }
                        />

                        {item.name}
                        {!user?.member?.stripeCustomerId && item.pro ? (
                          <Image
                            src={proSvg}
                            alt="filterSvg"
                            width={50}
                            height={32}
                          />
                        ) : null}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </div>
            ) : selectedTab === 2 ? (
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-around",
                  flexWrap: "wrap",
                }}
              >
                <FormControl sx={{ m: 1, width: 300 }}>
                  <InputLabel id="demo-multiple-checkbox-label">
                    Target Sector
                  </InputLabel>
                  <Select
                    label="Target Sector"
                    labelId="demo-multiple-checkbox-label"
                    id="demo-multiple-checkbox"
                    multiple
                    value={
                      filterArray?.TargetSector
                        ? filterArray?.TargetSector.map((item: any) => item.key)
                        : []
                    }
                    onChange={(event) =>
                      handleChangeFilter(
                        "TargetSector",
                        event,
                        TargetSectorOptions
                      )
                    }
                    renderValue={(selected) =>
                      `${selected.length} filters selected: ` +
                      selected
                        .map((selectedKey: string) => {
                          const selectedItem = TargetSectorOptions.find(
                            (item) => item.key === selectedKey
                          );
                          return selectedItem ? selectedItem.name : null;
                        })
                        .filter(Boolean) // Remove null values
                        .join(", ")
                    }
                    MenuProps={{
                      style: {
                        maxHeight: 250,
                      },
                      PaperProps: {
                        style: {
                          maxHeight: 250,
                        },
                      },
                    }}
                  >
                    {TargetSectorOptions.map((item: any) => (
                      <MenuItem
                        key={item.key}
                        value={item.key}
                        disabled={!user?.member?.stripeCustomerId && item.pro}
                      >
                        <Checkbox
                          checked={
                            filterArray.TargetSector &&
                            filterArray.TargetSector.some(
                              (selectedItem: any) =>
                                selectedItem.key === item.key
                            )
                          }
                        />

                        {item.name}
                        {!user?.member?.stripeCustomerId && item.pro ? (
                          <Image
                            src={proSvg}
                            alt="filterSvg"
                            width={50}
                            height={32}
                          />
                        ) : null}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>

                <FormControl sx={{ m: 1, width: 300 }}>
                  <InputLabel id="demo-multiple-checkbox-label">
                    Target Region
                  </InputLabel>
                  <Select
                    label="Target Region"
                    labelId="demo-multiple-checkbox-label"
                    id="demo-multiple-checkbox"
                    multiple
                    value={
                      filterArray?.TargetRegion
                        ? filterArray?.TargetRegion.map((item: any) => item.key)
                        : []
                    }
                    onChange={(event) =>
                      handleChangeFilter(
                        "TargetRegion",
                        event,
                        TargetRegionOptions
                      )
                    }
                    renderValue={(selected) =>
                      `${selected.length} filters selected: ` +
                      selected
                        .map((selectedKey: string) => {
                          const selectedItem = TargetRegionOptions.find(
                            (item) => item.key === selectedKey
                          );
                          return selectedItem ? selectedItem.name : null;
                        })
                        .filter(Boolean) // Remove null values
                        .join(", ")
                    }
                    MenuProps={{
                      style: {
                        maxHeight: 250,
                      },
                      PaperProps: {
                        style: {
                          maxHeight: 250,
                        },
                      },
                    }}
                  >
                    {TargetRegionOptions.map((item: any) => (
                      <MenuItem
                        key={item.key}
                        value={item.key}
                        disabled={!user?.member?.stripeCustomerId && item.pro}
                      >
                        <Checkbox
                          checked={
                            filterArray.TargetRegion &&
                            filterArray.TargetRegion.some(
                              (selectedItem: any) =>
                                selectedItem.key === item.key
                            )
                          }
                        />

                        {item.name}
                        {!user?.member?.stripeCustomerId && item.pro ? (
                          <Image
                            src={proSvg}
                            alt="filterSvg"
                            width={50}
                            height={32}
                          />
                        ) : null}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
                <FormControl sx={{ m: 1, width: 300 }}>
                  <InputLabel id="demo-multiple-checkbox-label">
                    De-SPAC Closing Year
                  </InputLabel>
                  <Select
                    label=" De-SPAC Closing Year"
                    labelId="demo-multiple-checkbox-label"
                    id="demo-multiple-checkbox"
                    multiple
                    value={
                      filterArray?.De_SPAC_Closing_Year
                        ? filterArray?.De_SPAC_Closing_Year.map(
                            (item: any) => item.key
                          )
                        : []
                    }
                    onChange={(event) =>
                      handleChangeFilter(
                        "De_SPAC_Closing_Year",
                        event,
                        IPOYearsOptions
                      )
                    }
                    renderValue={(selected) =>
                      `${selected.length} filters selected: ` +
                      selected
                        .map((selectedKey: string) => {
                          const selectedItem = IPOYearsOptions.find(
                            (item) => item.key === selectedKey
                          );
                          return selectedItem ? selectedItem.name : null;
                        })
                        .filter(Boolean) // Remove null values
                        .join(", ")
                    }
                    MenuProps={{
                      style: {
                        maxHeight: 250,
                      },
                      PaperProps: {
                        style: {
                          maxHeight: 250,
                        },
                      },
                    }}
                  >
                    {IPOYearsOptions.map((item: any) => (
                      <MenuItem
                        key={item.key}
                        value={item.key}
                        disabled={!user?.member?.stripeCustomerId && item.pro}
                      >
                        <Checkbox
                          checked={
                            filterArray.De_SPAC_Closing_Year &&
                            filterArray.De_SPAC_Closing_Year.some(
                              (selectedItem: any) =>
                                selectedItem.key === item.key
                            )
                          }
                        />

                        {item.name}
                        {!user?.member?.stripeCustomerId && item.pro ? (
                          <Image
                            src={proSvg}
                            alt="filterSvg"
                            width={50}
                            height={32}
                          />
                        ) : null}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </div>
            ) : selectedTab === 3 ? (
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-around",
                  flexWrap: "wrap",
                }}
              >
                <FormControl sx={{ m: 1, width: 300 }}>
                  <InputLabel id="demo-multiple-checkbox-label">
                    Target Sector
                  </InputLabel>
                  <Select
                    label="Target Sector"
                    labelId="demo-multiple-checkbox-label"
                    id="demo-multiple-checkbox"
                    multiple
                    value={
                      filterArray?.TargetSector
                        ? filterArray?.TargetSector.map((item: any) => item.key)
                        : []
                    }
                    onChange={(event) =>
                      handleChangeFilter(
                        "TargetSector",
                        event,
                        TargetSectorOptions
                      )
                    }
                    renderValue={(selected) =>
                      `${selected.length} filters selected: ` +
                      selected
                        .map((selectedKey: string) => {
                          const selectedItem = TargetSectorOptions.find(
                            (item) => item.key === selectedKey
                          );
                          return selectedItem ? selectedItem.name : null;
                        })
                        .filter(Boolean) // Remove null values
                        .join(", ")
                    }
                    MenuProps={{
                      style: {
                        maxHeight: 250,
                      },
                      PaperProps: {
                        style: {
                          maxHeight: 250,
                        },
                      },
                    }}
                  >
                    {TargetSectorOptions.map((item: any) => (
                      <MenuItem
                        key={item.key}
                        value={item.key}
                        disabled={!user?.member?.stripeCustomerId && item.pro}
                      >
                        <Checkbox
                          checked={
                            filterArray.TargetSector &&
                            filterArray.TargetSector.some(
                              (selectedItem: any) =>
                                selectedItem.key === item.key
                            )
                          }
                        />

                        {item.name}
                        {!user?.member?.stripeCustomerId && item.pro ? (
                          <Image
                            src={proSvg}
                            alt="filterSvg"
                            width={50}
                            height={32}
                          />
                        ) : null}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>

                <FormControl sx={{ m: 1, width: 300 }}>
                  <InputLabel id="demo-multiple-checkbox-label">
                    Target Region
                  </InputLabel>
                  <Select
                    label="Target Region"
                    labelId="demo-multiple-checkbox-label"
                    id="demo-multiple-checkbox"
                    multiple
                    value={
                      filterArray?.TargetRegion
                        ? filterArray?.TargetRegion.map((item: any) => item.key)
                        : []
                    }
                    onChange={(event) =>
                      handleChangeFilter(
                        "TargetRegion",
                        event,
                        TargetRegionOptions
                      )
                    }
                    renderValue={(selected) =>
                      `${selected.length} filters selected: ` +
                      selected
                        .map((selectedKey: string) => {
                          const selectedItem = TargetRegionOptions.find(
                            (item) => item.key === selectedKey
                          );
                          return selectedItem ? selectedItem.name : null;
                        })
                        .filter(Boolean) // Remove null values
                        .join(", ")
                    }
                    MenuProps={{
                      style: {
                        maxHeight: 250,
                      },
                      PaperProps: {
                        style: {
                          maxHeight: 250,
                        },
                      },
                    }}
                  >
                    {TargetRegionOptions.map((item: any) => (
                      <MenuItem
                        key={item.key}
                        value={item.key}
                        disabled={!user?.member?.stripeCustomerId && item.pro}
                      >
                        <Checkbox
                          checked={
                            filterArray.TargetRegion &&
                            filterArray.TargetRegion.some(
                              (selectedItem: any) =>
                                selectedItem.key === item.key
                            )
                          }
                        />

                        {item.name}
                        {!user?.member?.stripeCustomerId && item.pro ? (
                          <Image
                            src={proSvg}
                            alt="filterSvg"
                            width={50}
                            height={32}
                          />
                        ) : null}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
                <FormControl sx={{ m: 1, width: 300 }}>
                  <InputLabel id="demo-multiple-checkbox-label">
                    De-SPAC Closing Year
                  </InputLabel>
                  <Select
                    label=" De-SPAC Closing Year"
                    labelId="demo-multiple-checkbox-label"
                    id="demo-multiple-checkbox"
                    multiple
                    value={
                      filterArray?.De_SPAC_Closing_Year
                        ? filterArray?.De_SPAC_Closing_Year.map(
                            (item: any) => item.key
                          )
                        : []
                    }
                    onChange={(event) =>
                      handleChangeFilter(
                        "De_SPAC_Closing_Year",
                        event,
                        IPOYearsOptions
                      )
                    }
                    renderValue={(selected) =>
                      `${selected.length} filters selected: ` +
                      selected
                        .map((selectedKey: string) => {
                          const selectedItem = IPOYearsOptions.find(
                            (item) => item.key === selectedKey
                          );
                          return selectedItem ? selectedItem.name : null;
                        })
                        .filter(Boolean) // Remove null values
                        .join(", ")
                    }
                    MenuProps={{
                      style: {
                        maxHeight: 250,
                      },
                      PaperProps: {
                        style: {
                          maxHeight: 250,
                        },
                      },
                    }}
                  >
                    {IPOYearsOptions.map((item: any) => (
                      <MenuItem
                        key={item.key}
                        value={item.key}
                        disabled={!user?.member?.stripeCustomerId && item.pro}
                      >
                        <Checkbox
                          checked={
                            filterArray.De_SPAC_Closing_Year &&
                            filterArray.De_SPAC_Closing_Year.some(
                              (selectedItem: any) =>
                                selectedItem.key === item.key
                            )
                          }
                        />

                        {item.name}
                        {!user?.member?.stripeCustomerId && item.pro ? (
                          <Image
                            src={proSvg}
                            alt="filterSvg"
                            width={50}
                            height={32}
                          />
                        ) : null}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </div>
            ) : selectedTab === 4 ? (
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-around",
                  flexWrap: "wrap",
                }}
              >
                <div className={styles.filterModalStyling}>
                  Not have any filter
                </div>
              </div>
            ) : selectedTab === 5 ? (
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-around",
                  flexWrap: "wrap",
                }}
              >
                <div className={styles.filterModalStyling}>
                  Not have any filter
                </div>
              </div>
            ) : selectedTab === 6 ? (
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-around",
                  flexWrap: "wrap",
                }}
              >
                <FormControl sx={{ m: 1, width: 300 }}>
                  <InputLabel id="demo-multiple-checkbox-label">
                    SPAC Progress Status
                  </InputLabel>
                  <Select
                    label="SPAC Progress Status"
                    labelId="demo-multiple-checkbox-label"
                    id="demo-multiple-checkbox"
                    multiple
                    value={
                      filterArray?.SPACProgressStatus
                        ? filterArray?.SPACProgressStatus.map(
                            (item: any) => item.key
                          )
                        : []
                    }
                    onChange={(event) =>
                      handleChangeFilter(
                        "SPACProgressStatus",
                        event,
                        SPACProgressStatusOptions
                      )
                    }
                    renderValue={(selected) =>
                      `${selected.length} filters selected: ` +
                      selected
                        .map((selectedKey: string) => {
                          const selectedItem = SPACProgressStatusOptions.find(
                            (item) => item.key === selectedKey
                          );
                          return selectedItem ? selectedItem.name : null;
                        })
                        .filter(Boolean) // Remove null values
                        .join(", ")
                    }
                    MenuProps={{
                      style: {
                        maxHeight: 250,
                      },
                      PaperProps: {
                        style: {
                          maxHeight: 250,
                        },
                      },
                    }}
                  >
                    {SPACProgressStatusOptions.map((item: any) => (
                      <MenuItem
                        key={item.key}
                        value={item.key}
                        disabled={!user?.member?.stripeCustomerId && item.pro}
                      >
                        <Checkbox
                          checked={
                            filterArray.SPACProgressStatus &&
                            filterArray.SPACProgressStatus.some(
                              (selectedItem: any) =>
                                selectedItem.key === item.key
                            )
                          }
                        />

                        {item.name}
                        {!user?.member?.stripeCustomerId && item.pro ? (
                          <Image
                            src={proSvg}
                            alt="filterSvg"
                            width={50}
                            height={32}
                          />
                        ) : null}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
                <FormControl sx={{ m: 1, width: 300 }}>
                  <InputLabel id="demo-multiple-checkbox-label">
                    Votes / Deadlines
                  </InputLabel>
                  <Select
                    label="Votes / Deadlines"
                    labelId="demo-multiple-checkbox-label"
                    id="demo-multiple-checkbox"
                    multiple
                    value={
                      filterArray?.VotesDeadlines
                        ? filterArray?.VotesDeadlines.map(
                            (item: any) => item.key
                          )
                        : []
                    }
                    onChange={(event) =>
                      handleChangeFilter(
                        "VotesDeadlines",
                        event,
                        VotesDeadlinesOptions
                      )
                    }
                    renderValue={(selected) =>
                      `${selected.length} filters selected: ` +
                      selected
                        .map((selectedKey: string) => {
                          const selectedItem = VotesDeadlinesOptions.find(
                            (item) => item.key === selectedKey
                          );
                          return selectedItem ? selectedItem.name : null;
                        })
                        .filter(Boolean) // Remove null values
                        .join(", ")
                    }
                    MenuProps={{
                      style: {
                        maxHeight: 250,
                      },
                      PaperProps: {
                        style: {
                          maxHeight: 250,
                        },
                      },
                    }}
                  >
                    {VotesDeadlinesOptions.map((item: any) => (
                      <MenuItem
                        key={item.key}
                        value={item.key}
                        disabled={!user?.member?.stripeCustomerId && item.pro}
                      >
                        <Checkbox
                          checked={
                            filterArray.VotesDeadlines &&
                            filterArray.VotesDeadlines.some(
                              (selectedItem: any) =>
                                selectedItem.key === item.key
                            )
                          }
                        />

                        {item.name}
                        {!user?.member?.stripeCustomerId && item.pro ? (
                          <Image
                            src={proSvg}
                            alt="filterSvg"
                            width={50}
                            height={32}
                          />
                        ) : null}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </div>
            ) : (
              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                }}
              >
                <FormControl sx={{ m: 1, width: 300 }}>
                  <InputLabel id="demo-multiple-checkbox-label">
                    Liquidation Status
                  </InputLabel>
                  <Select
                    label="Liquidation Status"
                    labelId="demo-multiple-checkbox-label"
                    id="demo-multiple-checkbox"
                    multiple
                    value={
                      filterArray?.LiquidationStatus
                        ? filterArray?.LiquidationStatus.map(
                            (item: any) => item.key
                          )
                        : []
                    }
                    onChange={(event) =>
                      handleChangeFilter(
                        "LiquidationStatus",
                        event,
                        LiquidationStatusOptions
                      )
                    }
                    renderValue={(selected) =>
                      `${selected.length} filters selected: ` +
                      selected
                        .map((selectedKey: string) => {
                          const selectedItem = LiquidationStatusOptions.find(
                            (item) => item.key === selectedKey
                          );
                          return selectedItem ? selectedItem.name : null;
                        })
                        .filter(Boolean) // Remove null values
                        .join(", ")
                    }
                    MenuProps={{
                      style: {
                        maxHeight: 250,
                      },
                      PaperProps: {
                        style: {
                          maxHeight: 250,
                        },
                      },
                    }}
                  >
                    {LiquidationStatusOptions.map((item: any) => (
                      <MenuItem
                        key={item.key}
                        value={item.key}
                        disabled={!user?.member?.stripeCustomerId && item.pro}
                      >
                        <Checkbox
                          checked={
                            filterArray.LiquidationStatus &&
                            filterArray.LiquidationStatus.some(
                              (selectedItem: any) =>
                                selectedItem.key === item.key
                            )
                          }
                        />

                        {item.name}
                        {!user?.member?.stripeCustomerId && item.pro ? (
                          <Image
                            src={proSvg}
                            alt="filterSvg"
                            width={50}
                            height={32}
                          />
                        ) : null}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
                <FormControl sx={{ m: 1, width: 300 }}>
                  <InputLabel id="demo-multiple-checkbox-label">
                    Liquidation Year
                  </InputLabel>
                  <Select
                    label="Liquidation Year"
                    labelId="demo-multiple-checkbox-label"
                    id="demo-multiple-checkbox"
                    multiple
                    value={
                      filterArray?.LiquidationYear
                        ? filterArray?.LiquidationYear.map(
                            (item: any) => item.key
                          )
                        : []
                    }
                    onChange={(event) =>
                      handleChangeFilter(
                        "LiquidationYear",
                        event,
                        LiquidationYearOptions
                      )
                    }
                    renderValue={(selected) =>
                      `${selected.length} filters selected: ` +
                      selected
                        .map((selectedKey: string) => {
                          const selectedItem = LiquidationYearOptions.find(
                            (item) => item.key === selectedKey
                          );
                          return selectedItem ? selectedItem.name : null;
                        })
                        .filter(Boolean) // Remove null values
                        .join(", ")
                    }
                    MenuProps={{
                      style: {
                        maxHeight: 250,
                      },
                      PaperProps: {
                        style: {
                          maxHeight: 250,
                        },
                      },
                    }}
                  >
                    {LiquidationYearOptions.map((item: any) => (
                      <MenuItem
                        key={item.key}
                        value={item.key}
                        disabled={!user?.member?.stripeCustomerId && item.pro}
                      >
                        <Checkbox
                          checked={
                            filterArray.LiquidationYear &&
                            filterArray.LiquidationYear.some(
                              (selectedItem: any) =>
                                selectedItem.key === item.key
                            )
                          }
                        />

                        {item.name}
                        {!user?.member?.stripeCustomerId && item.pro ? (
                          <Image
                            src={proSvg}
                            alt="filterSvg"
                            width={50}
                            height={32}
                          />
                        ) : null}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </div>
            )}
            <Divider style={{ marginTop: 20, marginBottom: 10 }} />
            <div
              style={{
                // marginLeft: 15,
                width: 200,
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <Button variant="contained" color="error" onClick={clearAll}>
                Clear
              </Button>

              <Button
                variant="contained"
                color="success"
                onClick={applyFilters}
              >
                Apply
              </Button>
            </div>
          </Box>
        </>
      </Modal>
    </section>
  );
}

export default CardElements;
