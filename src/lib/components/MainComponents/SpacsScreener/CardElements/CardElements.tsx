import React, { useEffect, useState } from "react";
import styles from "./CardElements.module.css";
import { styled } from "@mui/material/styles";
import Image from "next/image";
import searchIcon from "../../../../../../public/searchIcon.svg";
import filterSvg from "../../../../../../public/filterSvg.svg";
import selectedColumnSvg from "../../../../../../public/selectedColumnSvg.svg";
import saveScreenerSvg from "../../../../../../public/saveScreenerSvg.svg";
import exportSvg from "../../../../../../public/exportSvg.svg";
import crossIconSvg from "../../../../../../public/crossIconSvg.svg";
import proSvg from "../../../../../../public/ProSvg.svg";
import { getApiWithoutAuth } from "@/lib/ts/api";
import { useContext } from "react";
import { URLs } from "@/lib/ts/apiUrl";
import { MemberInformationContext } from "@/lib/components/context";
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
  Divider
} from "@mui/material";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import Checkbox from "@mui/material/Checkbox";
import {
  PreDealSpacScreener,
  CompanyProfile,
  IPOProfile,
  Trading,
  SPACTrading,
  SPACProfile,
  TrustRedemptions,
  AnnouncedSPACMergersScreener,
  DealProfile,
  RumorsTerminations,
  SPACTargetProfile,
  DeSPACScreener,
} from "@/lib/ts/constants";

import { useRouter, usePathname, useSearchParams } from "next/navigation";

  interface PROPS {}

  const CardElements: React.FC<PROPS> = () => {
  const { user } = useContext(MemberInformationContext);
  const router = useRouter();

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
  const CssTextFieldBorder = styled(TextField)({
    height: "40px",
    marginTop: "10px",
    border: "1px solid #dddee0",
    background: "#dddee0",
    borderRadius: "40px",
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        border: "none",
      },
    },
  });
  const tabValues: { [key: number]: string } = {
    0: "pre_deal",
    1: "announced",
    2: "all",
    3: "de_spac",
  };
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [openModalCheckScreen, setOpenModalCheckScreen] = useState<boolean>(false);
  const [userType, setUserType] = useState<string>("free");
  const [openModalSavedScreen, setOpenModalSavedScreen] = useState<boolean>(false);

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
  const saveValue = (e: any) => {
    const { name, value } = e.target;
    setFilters({ ...filters, [name]: value });
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

  const VotesDeadlinesOptions = [
    { key: "Merger Vote Set", name: "Merger Vote Set", pro: true },
    { key: "Extension Vote Set", name: "Extension Vote Set", pro: true },
    { key: "Upcoming Vote", name: "Upcoming Vote", pro: true },
    { key: " 1 Month to Deadline", name: " 1 Month to Deadline", pro: true },
    { key: "2 Months to Deadline", name: "2 Months to Deadline", pro: true },
    { key: " 3 Months to Deadline", name: " 3 Months to Deadline", pro: true },
  ];
  const SPACProfileOptions = [
    { key: "US Domicile", name: "US Domicile", pro: true },
    { key: "Non-US Domicile", name: "Non-US Domicile", pro: true },
    { key: "Has Warrants", name: "Has Warrants", pro: true },
    { key: " Has Rights", name: " Has Rights", pro: true },
  ];

  const TradingOptions = [
    { key: "Has Warrants", name: "Has Warrants", pro: true },
    { key: "Has Rights", name: "Has Rights", pro: true },
    { key: "Optionable", name: "Optionable", pro: true },
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

  const ActivityOptions = [
    { key: "Recent DA", name: "Recent DA", pro: true },
    { key: "Filed S-4", name: "Filed S-4", pro: true },
  ];
  const saveScreenApi = () => {
    setOpenModalSavedScreen(false);
  };
  return (
    <section className={styles.stockstablesection}>
      <div className={styles.tableTitle}>Card Elements</div>
      <div className={styles.tableContainerInner}>
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
              <div className={styles.filterGap} onClick={() => setOpenModalCheckScreen(true)}>
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
                      filterArray?.spacProgressStatus
                        ? filterArray?.spacProgressStatus.map(
                            (item: any) => item.key
                          )
                        : []
                    }
                    onChange={(event) =>
                      handleChangeFilter(
                        "spacProgressStatus",
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
                            filterArray.spacProgressStatus &&
                            filterArray.spacProgressStatus.some(
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
                    IPO Year
                  </InputLabel>
                  <Select
                    label="IPO Year"
                    labelId="demo-multiple-checkbox-label"
                    id="demo-multiple-checkbox"
                    multiple
                    value={
                      filterArray?.ipoYear
                        ? filterArray?.ipoYear.map((item: any) => item.key)
                        : []
                    }
                    onChange={(event) =>
                      handleChangeFilter("ipoYear", event, IPOYearsOptions)
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
                            filterArray.ipoYear &&
                            filterArray.ipoYear.some(
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
                      filterArray?.mergerVoteSet
                        ? filterArray?.mergerVoteSet.map(
                            (item: any) => item.key
                          )
                        : []
                    }
                    onChange={(event) =>
                      handleChangeFilter(
                        "mergerVoteSet",
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
                            filterArray.mergerVoteSet &&
                            filterArray.mergerVoteSet.some(
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
                    SPAC Profile
                  </InputLabel>
                  <Select
                    label="SPAC Profile"
                    labelId="demo-multiple-checkbox-label"
                    id="demo-multiple-checkbox"
                    multiple
                    value={
                      filterArray?.spacProfile
                        ? filterArray?.spacProfile.map((item: any) => item.key)
                        : []
                    }
                    onChange={(event) =>
                      handleChangeFilter(
                        "spacProfile",
                        event,
                        SPACProfileOptions
                      )
                    }
                    renderValue={(selected) =>
                      `${selected.length} filters selected: ` +
                      selected
                        .map((selectedKey: string) => {
                          const selectedItem = SPACProfileOptions.find(
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
                    {SPACProfileOptions.map((item: any) => (
                      <MenuItem
                        key={item.key}
                        value={item.key}
                        disabled={!user?.member?.stripeCustomerId && item.pro}
                      >
                        <Checkbox
                          checked={
                            filterArray.spacProfile &&
                            filterArray.spacProfile.some(
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
                    Trading
                  </InputLabel>
                  <Select
                    label="Trading"
                    labelId="demo-multiple-checkbox-label"
                    id="demo-multiple-checkbox"
                    multiple
                    value={
                      filterArray?.Trading
                        ? filterArray?.Trading.map((item: any) => item.key)
                        : []
                    }
                    onChange={(event) =>
                      handleChangeFilter("Trading", event, TradingOptions)
                    }
                    renderValue={(selected) =>
                      `${selected.length} filters selected: ` +
                      selected
                        .map((selectedKey: string) => {
                          const selectedItem = TradingOptions.find(
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
                    {TradingOptions.map((item: any) => (
                      <MenuItem
                        key={item.key}
                        value={item.key}
                        disabled={!user?.member?.stripeCustomerId && item.pro}
                      >
                        <Checkbox
                          checked={
                            filterArray.Trading &&
                            filterArray.Trading.some(
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
                    Target Sector
                  </InputLabel>
                  <Select
                    label="Target Sector"
                    labelId="demo-multiple-checkbox-label"
                    id="demo-multiple-checkbox"
                    multiple
                    value={
                      filterArray?.targetSector
                        ? filterArray?.targetSector.map((item: any) => item.key)
                        : []
                    }
                    onChange={(event) =>
                      handleChangeFilter(
                        "targetSector",
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
                            filterArray.targetSector &&
                            filterArray.targetSector.some(
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
                      filterArray?.targetRegion
                        ? filterArray?.targetRegion.map((item: any) => item.key)
                        : []
                    }
                    onChange={(event) =>
                      handleChangeFilter(
                        "targetRegion",
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
                            filterArray.targetRegion &&
                            filterArray.targetRegion.some(
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
                    Activity
                  </InputLabel>
                  <Select
                    label="Activity"
                    labelId="demo-multiple-checkbox-label"
                    id="demo-multiple-checkbox"
                    multiple
                    value={
                      filterArray?.Activity
                        ? filterArray?.Activity.map((item: any) => item.key)
                        : []
                    }
                    onChange={(event) =>
                      handleChangeFilter("Activity", event, ActivityOptions)
                    }
                    renderValue={(selected) =>
                      `${selected.length} filters selected: ` +
                      selected
                        .map((selectedKey: string) => {
                          const selectedItem = ActivityOptions.find(
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
                    {ActivityOptions.map((item: any) => (
                      <MenuItem
                        key={item.key}
                        value={item.key}
                        disabled={!user?.member?.stripeCustomerId && item.pro}
                      >
                        <Checkbox
                          checked={
                            filterArray.Activity &&
                            filterArray.Activity.some(
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
                    SPAC Progress Status
                  </InputLabel>
                  <Select
                    label="SPAC Progress Status"
                    labelId="demo-multiple-checkbox-label"
                    id="demo-multiple-checkbox"
                    multiple
                    value={
                      filterArray?.spacProgressStatus
                        ? filterArray?.spacProgressStatus.map(
                            (item: any) => item.key
                          )
                        : []
                    }
                    onChange={(event) =>
                      handleChangeFilter(
                        "spacProgressStatus",
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
                            filterArray.spacProgressStatus &&
                            filterArray.spacProgressStatus.some(
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
                    IPO Year
                  </InputLabel>
                  <Select
                    label="IPO Year"
                    labelId="demo-multiple-checkbox-label"
                    id="demo-multiple-checkbox"
                    multiple
                    value={
                      filterArray?.ipoYear
                        ? filterArray?.ipoYear.map((item: any) => item.key)
                        : []
                    }
                    onChange={(event) =>
                      handleChangeFilter("ipoYear", event, IPOYearsOptions)
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
                            filterArray.ipoYear &&
                            filterArray.ipoYear.some(
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
                      filterArray?.mergerVoteSet
                        ? filterArray?.mergerVoteSet.map(
                            (item: any) => item.key
                          )
                        : []
                    }
                    onChange={(event) =>
                      handleChangeFilter(
                        "mergerVoteSet",
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
                            filterArray.mergerVoteSet &&
                            filterArray.mergerVoteSet.some(
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
                    SPAC Profile
                  </InputLabel>
                  <Select
                    label="SPAC Profile"
                    labelId="demo-multiple-checkbox-label"
                    id="demo-multiple-checkbox"
                    multiple
                    value={
                      filterArray?.spacProfile
                        ? filterArray?.spacProfile.map((item: any) => item.key)
                        : []
                    }
                    onChange={(event) =>
                      handleChangeFilter(
                        "spacProfile",
                        event,
                        SPACProfileOptions
                      )
                    }
                    renderValue={(selected) =>
                      `${selected.length} filters selected: ` +
                      selected
                        .map((selectedKey: string) => {
                          const selectedItem = SPACProfileOptions.find(
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
                    {SPACProfileOptions.map((item: any) => (
                      <MenuItem
                        key={item.key}
                        value={item.key}
                        disabled={!user?.member?.stripeCustomerId && item.pro}
                      >
                        <Checkbox
                          checked={
                            filterArray.spacProfile &&
                            filterArray.spacProfile.some(
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
                    Trading
                  </InputLabel>
                  <Select
                    label="Trading"
                    labelId="demo-multiple-checkbox-label"
                    id="demo-multiple-checkbox"
                    multiple
                    value={
                      filterArray?.Trading
                        ? filterArray?.Trading.map((item: any) => item.key)
                        : []
                    }
                    onChange={(event) =>
                      handleChangeFilter("Trading", event, TradingOptions)
                    }
                    renderValue={(selected) =>
                      `${selected.length} filters selected: ` +
                      selected
                        .map((selectedKey: string) => {
                          const selectedItem = TradingOptions.find(
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
                    {TradingOptions.map((item: any) => (
                      <MenuItem
                        key={item.key}
                        value={item.key}
                        disabled={!user?.member?.stripeCustomerId && item.pro}
                      >
                        <Checkbox
                          checked={
                            filterArray.Trading &&
                            filterArray.Trading.some(
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
                    Target Sector
                  </InputLabel>
                  <Select
                    label="Target Sector"
                    labelId="demo-multiple-checkbox-label"
                    id="demo-multiple-checkbox"
                    multiple
                    value={
                      filterArray?.targetSector
                        ? filterArray?.targetSector.map((item: any) => item.key)
                        : []
                    }
                    onChange={(event) =>
                      handleChangeFilter(
                        "targetSector",
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
                            filterArray.targetSector &&
                            filterArray.targetSector.some(
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
                      filterArray?.targetRegion
                        ? filterArray?.targetRegion.map((item: any) => item.key)
                        : []
                    }
                    onChange={(event) =>
                      handleChangeFilter(
                        "targetRegion",
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
                            filterArray.targetRegion &&
                            filterArray.targetRegion.some(
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
                      filterArray?.deSpacClosed
                        ? filterArray?.deSpacClosed.map((item: any) => item.key)
                        : []
                    }
                    onChange={(event) =>
                      handleChangeFilter("deSpacClosed", event, IPOYearsOptions)
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
                            filterArray.deSpacClosed &&
                            filterArray.deSpacClosed.some(
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
      <Modal
        keepMounted
        open={openColumnModal}
        onClose={() => setOpenColumnModal(false)}
        aria-labelledby="keep-mounted-modal-title"
        aria-describedby="keep-mounted-modal-description"
      >
        <>
          <Box sx={style}>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
              <div className={styles.tableTitle}>SELECT COLUMNS</div>
              <div>
                {" "}
                <Image
                  src={crossIconSvg}
                  alt="filterSvg"
                  width={18}
                  height={18}
                  onClick={() => setOpenColumnModal(false)}
                />
              </div>
            </div>
            <Divider style={{ marginTop: 5, marginBottom: 5 }} />
            {selectedTab === 0 ? (
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  width: "100%",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    flexWrap: "wrap",
                    justifyContent: "center",
                  }}
                >
                  <FormControl sx={{ m: 1, width: 300 }}>
                    <InputLabel id="demo-multiple-checkbox-label">
                      Find Column
                    </InputLabel>
                    <Select
                      labelId="demo-multiple-checkbox-label"
                      id="demo-multiple-checkbox"
                      multiple
                      value={personName.map((item: any) => item.key)}
                      onChange={handleChange}
                      renderValue={(selected) =>
                        selected
                          .map((selectedKey: string) => {
                            const selectedItem = personName.find(
                              (item: any) => item.key === selectedKey
                            );
                            return selectedItem ? selectedItem.name : "";
                          })
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
                      {PreDealSpacScreener.map((item: any) => (
                        <MenuItem key={item.key} value={item.key}>
                          {" "}
                          disabled={!user?.member?.stripeCustomerId && item.pro}
                          <Checkbox
                            checked={personName.some(
                              (selectedItem: any) =>
                                selectedItem.key === item.key
                            )}
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
                <div
                  style={{
                    display: "flex",
                    flexWrap: "wrap",
                    justifyContent: "center",
                  }}
                >
                  <FormControl sx={{ m: 1, width: 300 }}>
                    <InputLabel id="demo-multiple-checkbox-label">
                      Company Profile
                    </InputLabel>
                    <Select
                      labelId="demo-multiple-checkbox-label"
                      id="demo-multiple-checkbox"
                      multiple
                      value={personName.map((item: any) => item.key)}
                      onChange={handleChange}
                      renderValue={(selected) =>
                        selected
                          .map((selectedKey: string) => {
                            const selectedItem = CompanyProfile.find(
                              (item: any) => item.key === selectedKey
                            );
                            return selectedItem ? selectedItem.name : "";
                          })
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
                      {CompanyProfile.map((item: any) => (
                        <MenuItem
                          key={item.key}
                          value={item.key}
                          disabled={!user?.member?.stripeCustomerId && item.pro}
                        >
                          <Checkbox
                            checked={personName.some(
                              (selectedItem: any) =>
                                selectedItem.key === item.key
                            )}
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
                      IPO Profile
                    </InputLabel>
                    <Select
                      labelId="demo-multiple-checkbox-label"
                      id="demo-multiple-checkbox"
                      multiple
                      value={personName.map((item: any) => item.key)}
                      onChange={handleChange}
                      renderValue={(selected) =>
                        selected
                          .map((selectedKey: string) => {
                            const selectedItem = IPOProfile.find(
                              (item: any) => item.key === selectedKey
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
                      {IPOProfile.map((item: any) => (
                        <MenuItem
                          key={item.key}
                          value={item.key}
                          disabled={!user?.member?.stripeCustomerId && item.pro}
                        >
                          <Checkbox
                            checked={personName.some(
                              (selectedItem: any) =>
                                selectedItem.key === item.key
                            )}
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
                      Trading
                    </InputLabel>
                    <Select
                      labelId="demo-multiple-checkbox-label"
                      id="demo-multiple-checkbox"
                      multiple
                      value={personName.map((item: any) => item.key)}
                      onChange={handleChange}
                      renderValue={(selected) =>
                        selected
                          .map((selectedKey: string) => {
                            const selectedItem = Trading.find(
                              (item: any) => item.key === selectedKey
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
                      {Trading.map((item: any) => (
                        <MenuItem
                          key={item.key}
                          value={item.key}
                          disabled={!user?.member?.stripeCustomerId && item.pro}
                        >
                          <Checkbox
                            checked={personName.some(
                              (selectedItem: any) =>
                                selectedItem.key === item.key
                            )}
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
                      SPAC Trading
                    </InputLabel>
                    <Select
                      labelId="demo-multiple-checkbox-label"
                      id="demo-multiple-checkbox"
                      multiple
                      value={personName.map((item: any) => item.key)}
                      onChange={handleChange}
                      renderValue={(selected) =>
                        selected
                          .map((selectedKey: string) => {
                            const selectedItem = SPACTrading.find(
                              (item: any) => item.key === selectedKey
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
                      {SPACTrading.map((item: any) => (
                        <MenuItem
                          key={item.key}
                          value={item.key}
                          disabled={!user?.member?.stripeCustomerId && item.pro}
                        >
                          <Checkbox
                            checked={personName.some(
                              (selectedItem: any) =>
                                selectedItem.key === item.key
                            )}
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
                      SPAC Profile
                    </InputLabel>
                    <Select
                      labelId="demo-multiple-checkbox-label"
                      id="demo-multiple-checkbox"
                      multiple
                      value={personName.map((item: any) => item.key)}
                      onChange={handleChange}
                      renderValue={(selected) =>
                        selected
                          .map((selectedKey: string) => {
                            const selectedItem = SPACProfile.find(
                              (item: any) => item.key === selectedKey
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
                      {SPACProfile.map((item: any) => (
                        <MenuItem
                          key={item.key}
                          value={item.key}
                          disabled={!user?.member?.stripeCustomerId && item.pro}
                        >
                          <Checkbox
                            checked={personName.some(
                              (selectedItem: any) =>
                                selectedItem.key === item.key
                            )}
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
                      Trust Redemptions
                    </InputLabel>
                    <Select
                      labelId="demo-multiple-checkbox-label"
                      id="demo-multiple-checkbox"
                      multiple
                      value={personName.map((item: any) => item.key)}
                      onChange={handleChange}
                      renderValue={(selected) =>
                        selected
                          .map((selectedKey: string) => {
                            const selectedItem = TrustRedemptions.find(
                              (item: any) => item.key === selectedKey
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
                      {TrustRedemptions.map((item: any) => (
                        <MenuItem
                          key={item.key}
                          value={item.key}
                          disabled={!user?.member?.stripeCustomerId && item.pro}
                        >
                          <Checkbox
                            checked={personName.some(
                              (selectedItem: any) =>
                                selectedItem.key === item.key
                            )}
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
              </div>
            ) : selectedTab === 1 ? (
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  width: "100%",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    flexWrap: "wrap",
                    justifyContent: "center",
                  }}
                >
                  <FormControl sx={{ m: 1, width: 300 }}>
                    <InputLabel id="demo-multiple-checkbox-label">
                      Find Column
                    </InputLabel>
                    <Select
                      labelId="demo-multiple-checkbox-label"
                      id="demo-multiple-checkbox"
                      multiple
                      value={personName.map((item: any) => item.key)}
                      onChange={handleChange}
                      renderValue={(selected) =>
                        selected
                          .map((selectedKey: string) => {
                            const selectedItem = personName.find(
                              (item: any) => item.key === selectedKey
                            );
                            return selectedItem ? selectedItem.name : "";
                          })
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
                      {AnnouncedSPACMergersScreener.map((item: any) => (
                        <MenuItem
                          key={item.key}
                          value={item.key}
                          disabled={!user?.member?.stripeCustomerId && item.pro}
                        >
                          <Checkbox
                            checked={personName.some(
                              (selectedItem: any) =>
                                selectedItem.key === item.key
                            )}
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
                <div
                  style={{
                    display: "flex",
                    flexWrap: "wrap",
                    justifyContent: "center",
                  }}
                >
                  <FormControl sx={{ m: 1, width: 300 }}>
                    <InputLabel id="demo-multiple-checkbox-label">
                      Deal Profile
                    </InputLabel>
                    <Select
                      labelId="demo-multiple-checkbox-label"
                      id="demo-multiple-checkbox"
                      multiple
                      value={personName.map((item: any) => item.key)}
                      onChange={handleChange}
                      renderValue={(selected) =>
                        selected
                          .map((selectedKey: string) => {
                            const selectedItem = DealProfile.find(
                              (item: any) => item.key === selectedKey
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
                      {DealProfile.map((item: any) => (
                        <MenuItem
                          key={item.key}
                          value={item.key}
                          disabled={!user?.member?.stripeCustomerId && item.pro}
                        >
                          <Checkbox
                            checked={personName.some(
                              (selectedItem: any) =>
                                selectedItem.key === item.key
                            )}
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
                      SPAC Target Profile
                    </InputLabel>
                    <Select
                      labelId="demo-multiple-checkbox-label"
                      id="demo-multiple-checkbox"
                      multiple
                      value={personName.map((item: any) => item.key)}
                      onChange={handleChange}
                      renderValue={(selected) =>
                        selected
                          .map((selectedKey: string) => {
                            const selectedItem = SPACTargetProfile.find(
                              (item: any) => item.key === selectedKey
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
                      {SPACTargetProfile.map((item: any) => (
                        <MenuItem
                          key={item.key}
                          value={item.key}
                          disabled={!user?.member?.stripeCustomerId && item.pro}
                        >
                          <Checkbox
                            checked={personName.some(
                              (selectedItem: any) =>
                                selectedItem.key === item.key
                            )}
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
                      Rumors / Terminations
                    </InputLabel>
                    <Select
                      labelId="demo-multiple-checkbox-label"
                      id="demo-multiple-checkbox"
                      multiple
                      value={personName.map((item: any) => item.key)}
                      onChange={handleChange}
                      renderValue={(selected) =>
                        selected
                          .map((selectedKey: string) => {
                            const selectedItem = RumorsTerminations.find(
                              (item: any) => item.key === selectedKey
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
                      {RumorsTerminations.map((item: any) => (
                        <MenuItem
                          key={item.key}
                          value={item.key}
                          disabled={!user?.member?.stripeCustomerId && item.pro}
                        >
                          <Checkbox
                            checked={personName.some(
                              (selectedItem: any) =>
                                selectedItem.key === item.key
                            )}
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
              </div>
            ) : selectedTab === 2 ? (
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  width: "100%",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    flexWrap: "wrap",
                    justifyContent: "center",
                  }}
                >
                  <FormControl sx={{ m: 1, width: 300 }}>
                    <InputLabel id="demo-multiple-checkbox-label">
                      Find Column
                    </InputLabel>
                    <Select
                      labelId="demo-multiple-checkbox-label"
                      id="demo-multiple-checkbox"
                      multiple
                      value={personName.map((item: any) => item.key)}
                      onChange={handleChange}
                      renderValue={(selected) =>
                        selected
                          .map((selectedKey: string) => {
                            const selectedItem = personName.find(
                              (item: any) => item.key === selectedKey
                            );
                            return selectedItem ? selectedItem.name : "";
                          })
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
                      {PreDealSpacScreener.map((item: any) => (
                        <MenuItem
                          key={item.key}
                          value={item.key}
                          disabled={!user?.member?.stripeCustomerId && item.pro}
                        >
                          <Checkbox
                            checked={personName.some(
                              (selectedItem: any) =>
                                selectedItem.key === item.key
                            )}
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
                <div
                  style={{
                    display: "flex",
                    flexWrap: "wrap",
                    justifyContent: "center",
                  }}
                >
                  <FormControl sx={{ m: 1, width: 300 }}>
                    <InputLabel id="demo-multiple-checkbox-label">
                      Company Profile
                    </InputLabel>
                    <Select
                      labelId="demo-multiple-checkbox-label"
                      id="demo-multiple-checkbox"
                      multiple
                      value={personName.map((item: any) => item.key)}
                      onChange={handleChange}
                      renderValue={(selected) =>
                        selected
                          .map((selectedKey: string) => {
                            const selectedItem = CompanyProfile.find(
                              (item: any) => item.key === selectedKey
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
                      {CompanyProfile.map((item: any) => (
                        <MenuItem
                          key={item.key}
                          value={item.key}
                          disabled={!user?.member?.stripeCustomerId && item.pro}
                        >
                          <Checkbox
                            checked={personName.some(
                              (selectedItem: any) =>
                                selectedItem.key === item.key
                            )}
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
                      IPO Profile
                    </InputLabel>
                    <Select
                      labelId="demo-multiple-checkbox-label"
                      id="demo-multiple-checkbox"
                      multiple
                      value={personName.map((item: any) => item.key)}
                      onChange={handleChange}
                      renderValue={(selected) =>
                        selected
                          .map((selectedKey: string) => {
                            const selectedItem = IPOProfile.find(
                              (item: any) => item.key === selectedKey
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
                      {IPOProfile.map((item: any) => (
                        <MenuItem
                          key={item.key}
                          value={item.key}
                          disabled={!user?.member?.stripeCustomerId && item.pro}
                        >
                          <Checkbox
                            checked={personName.some(
                              (selectedItem: any) =>
                                selectedItem.key === item.key
                            )}
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
                      Trading
                    </InputLabel>
                    <Select
                      labelId="demo-multiple-checkbox-label"
                      id="demo-multiple-checkbox"
                      multiple
                      value={personName.map((item: any) => item.key)}
                      onChange={handleChange}
                      renderValue={(selected) =>
                        selected
                          .map((selectedKey: string) => {
                            const selectedItem = Trading.find(
                              (item: any) => item.key === selectedKey
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
                      {Trading.map((item: any) => (
                        <MenuItem
                          key={item.key}
                          value={item.key}
                          disabled={!user?.member?.stripeCustomerId && item.pro}
                        >
                          <Checkbox
                            checked={personName.some(
                              (selectedItem: any) =>
                                selectedItem.key === item.key
                            )}
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
                      SPAC Trading
                    </InputLabel>
                    <Select
                      labelId="demo-multiple-checkbox-label"
                      id="demo-multiple-checkbox"
                      multiple
                      value={personName.map((item: any) => item.key)}
                      onChange={handleChange}
                      renderValue={(selected) =>
                        selected
                          .map((selectedKey: string) => {
                            const selectedItem = SPACTrading.find(
                              (item: any) => item.key === selectedKey
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
                      {SPACTrading.map((item: any) => (
                        <MenuItem
                          key={item.key}
                          value={item.key}
                          disabled={!user?.member?.stripeCustomerId && item.pro}
                        >
                          <Checkbox
                            checked={personName.some(
                              (selectedItem: any) =>
                                selectedItem.key === item.key
                            )}
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
                      SPAC Profile
                    </InputLabel>
                    <Select
                      labelId="demo-multiple-checkbox-label"
                      id="demo-multiple-checkbox"
                      multiple
                      value={personName.map((item: any) => item.key)}
                      onChange={handleChange}
                      renderValue={(selected) =>
                        selected
                          .map((selectedKey: string) => {
                            const selectedItem = SPACProfile.find(
                              (item: any) => item.key === selectedKey
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
                      {SPACProfile.map((item: any) => (
                        <MenuItem
                          key={item.key}
                          value={item.key}
                          disabled={!user?.member?.stripeCustomerId && item.pro}
                        >
                          <Checkbox
                            checked={personName.some(
                              (selectedItem: any) =>
                                selectedItem.key === item.key
                            )}
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
                      Trust Redemptions
                    </InputLabel>
                    <Select
                      labelId="demo-multiple-checkbox-label"
                      id="demo-multiple-checkbox"
                      multiple
                      value={personName.map((item: any) => item.key)}
                      onChange={handleChange}
                      renderValue={(selected) =>
                        selected
                          .map((selectedKey: string) => {
                            const selectedItem = TrustRedemptions.find(
                              (item: any) => item.key === selectedKey
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
                      {TrustRedemptions.map((item: any) => (
                        <MenuItem
                          key={item.key}
                          value={item.key}
                          disabled={!user?.member?.stripeCustomerId && item.pro}
                        >
                          <Checkbox
                            checked={personName.some(
                              (selectedItem: any) =>
                                selectedItem.key === item.key
                            )}
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
              </div>
            ) : (
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  width: "100%",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    flexWrap: "wrap",
                    justifyContent: "center",
                  }}
                >
                  <FormControl sx={{ m: 1, width: 300 }}>
                    <InputLabel id="demo-multiple-checkbox-label">
                      Find Column
                    </InputLabel>
                    <Select
                      labelId="demo-multiple-checkbox-label"
                      id="demo-multiple-checkbox"
                      multiple
                      value={personName.map((item: any) => item.key)}
                      onChange={handleChange}
                      renderValue={(selected) =>
                        selected
                          .map((selectedKey: string) => {
                            const selectedItem = personName.find(
                              (item: any) => item.key === selectedKey
                            );
                            return selectedItem ? selectedItem.name : "";
                          })
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
                      {DeSPACScreener.map((item: any) => (
                        <MenuItem
                          key={item.key}
                          value={item.key}
                          disabled={!user?.member?.stripeCustomerId && item.pro}
                        >
                          <Checkbox
                            checked={personName.some(
                              (selectedItem: any) =>
                                selectedItem.key === item.key
                            )}
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
                <div
                  style={{
                    display: "flex",
                    flexWrap: "wrap",
                    justifyContent: "center",
                  }}
                >
                  <FormControl sx={{ m: 1, width: 300 }}>
                    <InputLabel id="demo-multiple-checkbox-label">
                      Company Profile
                    </InputLabel>
                    <Select
                      labelId="demo-multiple-checkbox-label"
                      id="demo-multiple-checkbox"
                      multiple
                      value={personName.map((item: any) => item.key)}
                      onChange={handleChange}
                      renderValue={(selected) =>
                        selected
                          .map((selectedKey: string) => {
                            const selectedItem = CompanyProfile.find(
                              (item: any) => item.key === selectedKey
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
                      {CompanyProfile.map((item: any) => (
                        <MenuItem
                          key={item.key}
                          value={item.key}
                          disabled={!user?.member?.stripeCustomerId && item.pro}
                        >
                          <Checkbox
                            checked={personName.some(
                              (selectedItem: any) =>
                                selectedItem.key === item.key
                            )}
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
                      IPO Profile
                    </InputLabel>
                    <Select
                      labelId="demo-multiple-checkbox-label"
                      id="demo-multiple-checkbox"
                      multiple
                      value={personName.map((item: any) => item.key)}
                      onChange={handleChange}
                      renderValue={(selected) =>
                        selected
                          .map((selectedKey: string) => {
                            const selectedItem = IPOProfile.find(
                              (item: any) => item.key === selectedKey
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
                      {IPOProfile.map((item: any) => (
                        <MenuItem
                          key={item.key}
                          value={item.key}
                          disabled={!user?.member?.stripeCustomerId && item.pro}
                        >
                          <Checkbox
                            checked={personName.some(
                              (selectedItem: any) =>
                                selectedItem.key === item.key
                            )}
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
                      Trading
                    </InputLabel>
                    <Select
                      labelId="demo-multiple-checkbox-label"
                      id="demo-multiple-checkbox"
                      multiple
                      value={personName.map((item: any) => item.key)}
                      onChange={handleChange}
                      renderValue={(selected) =>
                        selected
                          .map((selectedKey: string) => {
                            const selectedItem = Trading.find(
                              (item: any) => item.key === selectedKey
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
                      {Trading.map((item: any) => (
                        <MenuItem
                          key={item.key}
                          value={item.key}
                          disabled={!user?.member?.stripeCustomerId && item.pro}
                        >
                          <Checkbox
                            checked={personName.some(
                              (selectedItem: any) =>
                                selectedItem.key === item.key
                            )}
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
              </div>
            )}
            {/* <div
              style={{
                marginLeft: 15,
                width: 200,
                display: "flex",
                justifyContent: "space-evenly",
                
              }}
            >
              <Button variant="text" color="error" onClick={clearAll}>
                Clear
              </Button>

              <Button variant="text" color="success" onClick={applyFilters}>
                Apply
              </Button>
            </div> */}
          </Box>
        </>
      </Modal>
      <Modal
        keepMounted
        open={openModalCheckScreen}
        onClose={() => setOpenModalCheckScreen(false)}
        aria-labelledby="keep-mounted-modal-title"
        aria-describedby="keep-mounted-modal-description"
      >
        <>
          <Box sx={style}>
            <>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
              <div className={styles.tableTitle}>Saved Screens</div>
              <div>
                {" "}
                <Image
                  src={crossIconSvg}
                  alt="filterSvg"
                  width={18}
                  height={18}
                  onClick={() => setOpenModalCheckScreen(false)}
                />
              </div>
            </div>
            <Divider style={{ marginTop: 5, marginBottom: 5 }} />
              {userType === "free" ? (
                <div
                  style={{
                    fontSize: "12px",
                  }}
                >
                  <div className={styles.filterGap} style={{ marginTop: 7 }}>
                    <Image src={proSvg} alt="proSvg" width={50} height={32} />
                    <div>
                      Upgrade the one of our Premium plans to use this feacture.
                    </div>
                  </div>
                  <div style={{ marginTop: 7 }}>
                    To save a new screen, select your desired filters and then
                    click &apos;Save This Screen&apos; below.
                  </div>
                  <div
                    style={{
                      width: "100%",
                      display: "flex",
                      alignItems: "center",
                      marginTop: 7,
                    }}
                  >
                    <CssTextFieldBorder
                      fullWidth
                      sx={{ width: "50%" }}
                      placeholder="Name the Screen"
                      size="small"
                      hiddenLabel
                    />
                    <Button variant="text" color="success" disabled>
                      Save
                    </Button>
                  </div>
                  <div style={{ marginTop: 7 }}>
                    Or select a previously saved screen:
                  </div>

                  <div style={{ marginTop: 7 }}>
                    No Saved Screen Yet! Add one
                  </div>
                  <div className={styles.filterGap} style={{ marginTop: 7 }}>
                    <Image
                      src={selectedColumnSvg}
                      alt="selectedColumnSvg"
                      width={20}
                      height={20}
                    />
                    <div>
                      Only filters will be saved, any selected columns will not
                      be saved.
                    </div>
                  </div>
                </div>
              ) : userType === "plus" ? (
                <div
                  style={{
                    fontSize: "12px",
                  }}
                >
                  <div
                    style={{
                      width: "100%",
                      display: "flex",
                      alignItems: "center",
                      marginTop: 7,
                    }}
                  >
                    <CssTextFieldBorder
                      fullWidth
                      sx={{ width: "50%" }}
                      placeholder="Name the Screen"
                      size="small"
                      hiddenLabel
                      value={name}
                      disabled={previousSaveScreen.length > 2}
                      onChange={(
                        event: React.ChangeEvent<HTMLInputElement>
                      ) => {
                        setName(event.target.value);
                      }}
                    />
                    <Button
                      variant="text"
                      color="success"
                      onClick={() => saveScreenApi()}
                      disabled={previousSaveScreen.length > 2 && name === ""}
                    >
                      Save
                    </Button>
                  </div>
                  <div style={{ marginTop: 7 }}>
                    To save a new screen, select your desired filters and then
                    click &apos;Save This Screen&apos; below.
                  </div>
                  {previousSaveScreen.length === 0 ? (
                    <div style={{ marginTop: 7 }}>
                      No Saved Screen Yet! Add one
                    </div>
                  ) : (
                    previousSaveScreen.map((item: any, index: number) => {
                      return (
                        <div
                          style={{
                            width: "100%",
                            display: "flex",
                            marginTop: "7px",
                            alignItems: "center",
                          }}
                          key={item.id}
                        >
                          <CssTextFieldBorder
                            fullWidth
                            sx={{ width: "50%" }}
                            placeholder="Name the Screen"
                            size="small"
                            hiddenLabel
                          />
                          <Button
                            variant="text"
                            color="inherit"
                            onClick={() => {
                              console.log("===========", index);
                            }}
                          >
                            Rename
                          </Button>
                          <Button
                            variant="text"
                            color="error"
                            onClick={() => {
                              console.log("===========", index);
                            }}
                          >
                            Delete
                          </Button>
                          <Button
                            variant="text"
                            color="success"
                            onClick={() => {
                              console.log("===========", index);
                            }}
                          >
                            Apply
                          </Button>
                        </div>
                      );
                    })
                  )}

                  <div className={styles.filterGap} style={{ marginTop: 7 }}>
                    <Image
                      src={selectedColumnSvg}
                      alt="selectedColumnSvg"
                      width={20}
                      height={20}
                    />
                    <div>
                      Only filters will be saved, any selected columns will not
                      be saved.
                    </div>
                  </div>
                </div>
              ) : (
                <div
                  style={{
                    fontSize: "12px",
                  }}
                >
                  <div
                    style={{
                      width: "100%",
                      display: "flex",
                      alignItems: "center",
                      marginTop: 7,
                    }}
                  >
                    <CssTextFieldBorder
                      fullWidth
                      sx={{ width: "50%" }}
                      placeholder="Name the Screen"
                      size="small"
                      hiddenLabel
                    />
                    <Button
                      variant="text"
                      color="success"
                      onClick={() => saveScreenApi()}
                      disabled={name === ""}
                    >
                      Save
                    </Button>
                  </div>
                  <div style={{ marginTop: 7 }}>
                    To save a new screen, select your desired filters and then
                    click &apos;Save This Screen&apos; below.
                  </div>
                  {previousSaveScreen.length === 0 ? (
                    <div style={{ marginTop: 7 }}>
                      No Saved Screen Yet! Add one
                    </div>
                  ) : (
                    previousSaveScreen.map((item: any, index: number) => {
                      return (
                        <div
                          style={{
                            width: "100%",
                            display: "flex",
                            marginTop: "7px",
                            alignItems: "center",
                          }}
                          key={item.id}
                        >
                          <CssTextFieldBorder
                            fullWidth
                            sx={{ width: "50%" }}
                            placeholder="Name the Screen"
                            size="small"
                            hiddenLabel
                            value={name}
                            onChange={(
                              event: React.ChangeEvent<HTMLInputElement>
                            ) => {
                              setName(event.target.value);
                            }}
                          />
                          <Button
                            variant="text"
                            color="inherit"
                            onClick={() => {
                              console.log("===========", index);
                            }}
                          >
                            Rename
                          </Button>
                          <Button
                            variant="text"
                            color="error"
                            onClick={() => {
                              console.log("===========", index);
                            }}
                          >
                            Delete
                          </Button>
                          <Button
                            variant="text"
                            color="success"
                            onClick={() => {
                              console.log("===========", index);
                            }}
                          >
                            Apply
                          </Button>
                        </div>
                      );
                    })
                  )}

                  <div className={styles.filterGap} style={{ marginTop: 10 }}>
                    <Image
                      src={selectedColumnSvg}
                      alt="selectedColumnSvg"
                      width={20}
                      height={20}
                    />
                    <div>
                      Only filters will be saved, any selected columns will not
                      be saved.
                    </div>
                  </div>
                </div>
              )}
            </>
          </Box>
        </>
      </Modal>
    </section>
  );
}

export default CardElements;
