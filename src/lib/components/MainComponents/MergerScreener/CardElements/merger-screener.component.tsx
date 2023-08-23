import React, { useEffect, useState } from "react";
import styles from "./card-elements.module.css";
import MyTable from "./functions";
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
import ListItemText from "@mui/material/ListItemText";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import Checkbox from "@mui/material/Checkbox";
import { useRouter, usePathname, useSearchParams } from "next/navigation";
import { useContext } from "react";
import { MemberInformationContext } from "@/lib/components/context";
import {
  ClosedMergersScreener,
  DealProfile,
  RumorsTerminations,
} from "@/lib/ts/constants";
  interface PROPS {}

  const MergerScreener: React.FC<PROPS> = () => {
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
  const styleBox = {
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
  };
  const [previousSaveScreen, setPreviousSaveScreen] = useState([
    { name: "anees", id: 20 },
    { name: "anees", id: 20 },
    { name: "anees", id: 20 },
  ]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [openFilterModal, setOpenFilterModal] = useState<boolean>(false);
  const [openColumnModal, setOpenColumnModal] = useState<boolean>(false);
  const [screenerData, setScreenerData] = useState<any>({
    dataset: [],
    additional_dataset: { totalLength: 20 },
  });
  const [selectedTab, setSelectedTab] = useState<number>(1);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [filterCount, setFilerCount] = useState<number>(0);
  const [filters, setFilters] = useState({
    MergerType: null,
    TargetSector: null,
    TargetRegion: null,
    ClosingYear: null,
  });

  const [filterArray, setFilterArray] = useState<{
    MergerType?: any[];
    TargetSector?: any[];
    TargetRegion?: any[];
    ClosingYear?: any[];
  }>({});
  const [isUser, setIsUser] = useState<boolean>(false);
  const [openModalSavedScreen, setOpenModalSavedScreen] = useState<boolean>(false);

  const [openModalCheckScreen, setOpenModalCheckScreen] = useState<boolean>(false);
  const [name, setName] = useState<string>("");
  const [userType, setUserType] = useState<string>("free");

  const [itemsPerPage, setItemPerPage] = useState<number>(5);
  const tabData = [
    {
      name: "Closed Mergers",
      key: 0,
    },
    {
      name: "Announced Mergers",
      key: 1,
    },
  ];
  const [personName, setPersonName] = React.useState([
    {
      name: "Deal Name",
      key: "dealName",
    },
    {
      name: "Acquirer Company Name",
      key: "acquirerCompanyName",
    },
    {
      name: "Acquirer Symbol",
      key: "AcquirerSymbol",
    },
    {
      name: "Acquirer Listing Status",
      key: "AcquirerListingStatus",
    },
    {
      name: "Target Company Name",
      key: "targetCompanyName",
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
      const selectedItem = ClosedMergersScreener.find(
        (item) => item.key === selectedKey
      );
      return selectedItem
        ? { name: selectedItem.name, key: selectedItem.key }
        : null;
    });
    const filteredItems = selectedItems.filter(
      (item: any) => item !== null
    ) as Array<{ name: string; key: string }>;
    setPersonName(filteredItems);
  };

  useEffect(() => {
    console.log("====================personName", personName);
  }, [personName]);

  const paginate = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };
  const saveValue = (e: any) => {
    const { name, value } = e.target;
    setFilters({ ...filters, [name]: value });
  };
  const clearAll = () => {
    setFilters({
      MergerType: null,
      TargetSector: null,
      TargetRegion: null,
      ClosingYear: null,
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
      `${URLs.spacsScreeners}?page=${currentPage}&offset=${itemsPerPage}&type=${tabValues[selectedTab]}`
    );
    console.log("========================res", response);
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
  }, [selectedTab, currentPage, itemsPerPage]);

  const handleTabClick = (key: any) => {
    setSelectedTab(key);
    setFilerCount(0);
    setPersonName([
      {
        name: "Deal Name",
        key: "DealName",
      },
      {
        name: "Acquirer Company Name",
        key: "AcquirerCompanyName",
      },
      {
        name: "Acquirer Symbol",
        key: "AcquirerSymbol",
      },
      {
        name: "Acquirer Listing Status",
        key: "AcquirerListingStatus",
      },
      {
        name: "Target Company Name",
        key: "TargetCompanyName",
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

  const MergerTypeOptions = [
    { key: "SPAC", name: "SPAC", pro: false },
    { key: "Strategic", name: "Strategic", pro: true },
    { key: "PE", name: "PE", pro: true },
    { key: "Non-SPAC", name: "Non-SPAC", pro: true },
  ];

  const TargetSectorOptions = [
    { key: "Tech", name: "Tech", pro: false },
    { key: "Energy", name: "Energy", pro: true },
    { key: "Financials", name: "Financials", pro: true },
    { key: "Communications", name: "Communications", pro: true },
    { key: "Materials", name: "Materials", pro: true },
  ];

  const IPOYearsOptions = [
    { key: "2023", name: "2023", pro: false },
    { key: "2022", name: "2022", pro: false },
    { key: "2021", name: "2021", pro: false },
    { key: "2020", name: "2020", pro: true },
    { key: "2019", name: "2019", pro: true },
  ];

  const TargetRegionOptions = [
    { key: "U.S. & Canada", name: "U.S. & Canada", pro: false },
    { key: "Latin America", name: "Latin America", pro: true },
    { key: " Asia & Oceania", name: " Asia & Oceania", pro: true },
    { key: "Africa", name: "Africa", pro: true },
    { key: "Europe", name: "Europe", pro: true },
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
        {/* <div className={styles.highlightStyle}>
          <span>
            Selected basked of 24 stocks up today an average of&nbsp;{" "}
          </span>
          <span className={styles.backgroundTitle}>+ 5.33%</span>&nbsp;
          <span>with an aggregate market capitalization of&nbsp;</span>
          <span className={styles.backgroundTitle}>$1.5T +$550M</span>
        </div> */}

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
              isUser={isUser}
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
          <Box sx={styleBox}>
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
                    Merger Type
                  </InputLabel>
                  <Select
                    label=" Merger Type"
                    labelId="demo-multiple-checkbox-label"
                    id="demo-multiple-checkbox"
                    multiple
                    value={
                      filterArray?.MergerType
                        ? filterArray?.MergerType.map((item: any) => item.key)
                        : []
                    }
                    onChange={(event) =>
                      handleChangeFilter("MergerType", event, MergerTypeOptions)
                    }
                    renderValue={(selected) =>
                      `${selected.length} filters selected: ` +
                      selected
                        .map((selectedKey: string) => {
                          const selectedItem = MergerTypeOptions.find(
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
                    {MergerTypeOptions.map((item: any) => (
                      <MenuItem
                        key={item.key}
                        value={item.key}
                        disabled={!user?.member?.stripeCustomerId && item.pro}
                      >
                        <Checkbox
                          checked={
                            filterArray.MergerType &&
                            filterArray.MergerType.some(
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
                    Closing Year
                  </InputLabel>
                  <Select
                    label="Closing Year"
                    labelId="demo-multiple-checkbox-label"
                    id="demo-multiple-checkbox"
                    multiple
                    value={
                      filterArray?.ClosingYear
                        ? filterArray?.ClosingYear.map((item: any) => item.key)
                        : []
                    }
                    onChange={(event) =>
                      handleChangeFilter("ClosingYear", event, IPOYearsOptions)
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
                            filterArray.ClosingYear &&
                            filterArray.ClosingYear.some(
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
                    Merger Type
                  </InputLabel>
                  <Select
                    label=" Merger Type"
                    labelId="demo-multiple-checkbox-label"
                    id="demo-multiple-checkbox"
                    multiple
                    value={
                      filterArray?.MergerType
                        ? filterArray?.MergerType.map((item: any) => item.key)
                        : []
                    }
                    onChange={(event) =>
                      handleChangeFilter("MergerType", event, MergerTypeOptions)
                    }
                    renderValue={(selected) =>
                      `${selected.length} filters selected: ` +
                      selected
                        .map((selectedKey: string) => {
                          const selectedItem = MergerTypeOptions.find(
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
                    {MergerTypeOptions.map((item: any) => (
                      <MenuItem
                        key={item.key}
                        value={item.key}
                        disabled={!user?.member?.stripeCustomerId && item.pro}
                      >
                        <Checkbox
                          checked={
                            filterArray.MergerType &&
                            filterArray.MergerType.some(
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
          <Box sx={styleBox}>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <div className={styles.tableTitle}>SELECT COLUMNS</div>

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
                            const selectedItem = ClosedMergersScreener.find(
                              (item) => item.key === selectedKey
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
                      {ClosedMergersScreener.map((item: any) => (
                        <MenuItem
                          key={item.key}
                          value={item.key}
                          disabled={!user?.member?.stripeCustomerId && item.pro}
                        >
                          <Checkbox
                            checked={personName.some(
                              (selectedItem) => selectedItem.key === item.key
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
                      {DealProfile.map((item: any) => (
                        <MenuItem
                          key={item.key}
                          value={item.key}
                          disabled={!user?.member?.stripeCustomerId && item.pro}
                        >
                          <Checkbox
                            checked={personName.some(
                              (selectedItem) => selectedItem.key === item.key
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
                      {RumorsTerminations.map((item: any) => (
                        <MenuItem
                          key={item.key}
                          value={item.key}
                          disabled={!user?.member?.stripeCustomerId && item.pro}
                        >
                          <Checkbox
                            checked={personName.some(
                              (selectedItem) => selectedItem.key === item.key
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
                            const selectedItem = ClosedMergersScreener.find(
                              (item) => item.key === selectedKey
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
                      {ClosedMergersScreener.map((item: any) => (
                        <MenuItem
                          key={item.key}
                          value={item.key}
                          disabled={!user?.member?.stripeCustomerId && item.pro}
                        >
                          <Checkbox
                            checked={personName.some(
                              (selectedItem) => selectedItem.key === item.key
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
                      {DealProfile.map((item: any) => (
                        <MenuItem
                          key={item.key}
                          value={item.key}
                          disabled={!user?.member?.stripeCustomerId && item.pro}
                        >
                          <Checkbox
                            checked={personName.some(
                              (selectedItem) => selectedItem.key === item.key
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
                      {RumorsTerminations.map((item: any) => (
                        <MenuItem
                          key={item.key}
                          value={item.key}
                          disabled={!user?.member?.stripeCustomerId && item.pro}
                        >
                          <Checkbox
                            checked={personName.some(
                              (selectedItem) => selectedItem.key === item.key
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
          <Box sx={styleBox}>
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
      <Modal
        keepMounted
        open={openModalSavedScreen}
        onClose={() => setOpenModalSavedScreen(false)}
        aria-labelledby="keep-mounted-modal-title"
        aria-describedby="keep-mounted-modal-description"
      >
        <>
          <Box sx={styleBox}>

            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <div className={styles.tableTitle}>Saved Screens</div>
              <div>
                {" "}
                <Image
                  src={crossIconSvg}
                  alt="filterSvg"
                  width={18}
                  height={18}
                  onClick={() => setOpenModalSavedScreen(false)}
                />
              </div>
            </div>
            <Divider style={{ marginTop: 5, marginBottom: 5 }} />
            <div
              style={{
                width: "100%",
                display: "flex",
                justifyContent: "center",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <TextField
                fullWidth
                placeholder="Name the Screen"
                id="fullWidth"
                sx={{ width: "80%" }}
                onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                  setName(event.target.value);
                }}
              />
              <Button
                onClick={() => saveScreenApi()}
                variant="text"
                color="success"
                disabled={name === ""}
              >
                Saved
              </Button>
            </div>
          </Box>
        </>
      </Modal>
    </section>
  );
}

export default MergerScreener;
