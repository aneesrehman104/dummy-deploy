

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
import { getApiWithoutAuth, getODataWithParams } from "@/lib/ts/api";
import { URLs } from "@/lib/ts/apiUrl";
import {
  SkeltonTable,
  ListingTrackTable,
  CommonfiButton,
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
  IPOPricedScreeners,
  IPOUpcommingScreeners,
} from "@/lib/ts/constants";
import { useContext } from "react";
import { MemberInformationContext } from "@/lib/components/context";
import { useRouter, usePathname, useSearchParams } from "next/navigation";
 import { IPOYearsOptions, IPOTypeOptions, IPOStatusOptions } from "./constants";

const Mapper = {
  priced_ipo: `ipoStatus eq 'Priced'`,
  upcoming_ipo: `ipoStatus eq 'Expected' `,
};

interface PROPS {}

const IpoScreener: React.FC<PROPS> = () => {
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
  const tabValues: { [key: number]: "priced_ipo" | "upcoming_ipo" } = {
    0: "priced_ipo",
    1: "upcoming_ipo",
  };

  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [openFilterModal, setOpenFilterModal] = useState<boolean>(false);
  const [openColumnModal, setOpenColumnModal] = useState<boolean>(false);
  const [openModalSavedScreen, setOpenModalSavedScreen] = useState<boolean>(false);
  const [openModalCheckScreen, setOpenModalCheckScreen] = useState<boolean>(false);
  const [name, setName] = useState("");
  const [userType, setUserType] = useState("free");

  const [screenerData, setScreenerData] = useState<any>({
    dataset: [],
    additional_dataset: { totalLength: 20 },
  });
  
  const [selectedTab, setSelectedTab] = useState<number>(0);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [filterCount, setFilerCount] = useState<number>(0);
  const [itemsPerPage, setItemPerPage] = useState<number>(5);
  const tabData = [
    {
      name: "Priced IPOs",
      key: 0,
    },
    {
      name: "Upcoming IPOs",
      key: 1,
    },
  ];
  const [personName, setPersonName] = useState([
    {
      name: "Company",
      key: "companyName",
    },
    {
      name: "Symbol",
      key: "companySymbol",
    },
    {
      name: "Listing Method",
      key: "listing_method",
    },
    {
      name: "Listing Status",
      key: "listing_status",
    },
    {
      name: "Market Cap",
      key: "marketCap",
    },
  ]);

  const [filterArray, setFilterArray] = useState<{
    IPOYEAR?: any[];
    IPOType?: any[];
    IPOStatus?: any[];
  }>({});
  const [previousSaveScreen, setPreviousSaveScreen] = useState([
    { name: "anees", id: 20 },
    { name: "anees", id: 20 },
    { name: "anees", id: 20 },
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
    console.log("====================filterArray", filterArray);
  }, [filterArray]);

  const paginate = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  const clearAll = () => {
    setOpenFilterModal(false);
    setFilerCount(0);
  };
  const applyFilters = () => {
    let count = 0;

    setFilerCount(count);
    setOpenFilterModal(false);
  };

  const getScreenerData = async () => {
    setIsLoading(true);
    const response = await getODataWithParams(URLs.ipoOdata, {
      skip: (currentPage - 1) * itemsPerPage,
      top: itemsPerPage,
      filter: Mapper[tabValues[selectedTab]],
    });
    console.log("========================res", response);
    if (response.status === 200 && response.data !== null) {
      setScreenerData({
        dataset: response.data,
        additional_dataset: { totalLength: 10 },
      });
      console.log("donee ----")
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
        name: "Company",
        key: "company",
      },
      {
        name: "Symbol",
        key: "symbol",
      },
      {
        name: "Price",
        key: "price",
      },
      {
        name: "Today",
        key: "daily",
      },
      {
        name: "Market Cap",
        key: "vol",
      },
    ]);
    // setFilterArray({
    //   IPOYear: null,
    //   IPOType: null,
    //   IPOStatus: null,
    // });
  };
  const saveScreenApi = () => {
    setOpenModalSavedScreen(false);
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

  const IPOYearsOptions = [
    { key: "2023", name: "2023", pro: false },
    { key: "2022", name: "2022", pro: false },
    { key: "2021", name: "2021", pro: false },
    { key: "2020", name: "2020", pro: true },
    { key: "2019", name: "2019", pro: true },
  ];

  const IPOTypeOptions = [
    { key: "Traditional", name: "Traditional", pro: true },
    { key: "SPAC", name: "SPAC", pro: true },
    { key: "Direct Listing", name: "Direct Listing", pro: true },
  ];

  const IPOStatusOptions = [
    { key: "Expected", name: "Expected", pro: false },
    { key: "Filed", name: "Filed", pro: false },
    { key: "Withdrawn", name: "Withdrawn", pro: false },
    { key: "Filed Amended", name: "Filed Amended", pro: true },
  ];

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
                    IPO Year
                  </InputLabel>
                  <Select
                    label="IPO Year"
                    labelId="demo-multiple-checkbox-label"
                    id="demo-multiple-checkbox"
                    multiple
                    value={
                      filterArray?.IPOYEAR
                        ? filterArray?.IPOYEAR.map((item: any) => item.key)
                        : []
                    }
                    onChange={(event) =>
                      handleChangeFilter("IPOYEAR", event, IPOYearsOptions)
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
                            filterArray.IPOYEAR &&
                            filterArray.IPOYEAR.some(
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
                  <InputLabel
                    id="demo-multiple-c
                  heckbox-label"
                  >
                    IPO Type
                  </InputLabel>
                  <Select
                    label="IPO Type"
                    labelId="demo-multiple-checkbox-label"
                    id="demo-multiple-checkbox"
                    multiple
                    value={
                      filterArray?.IPOType
                        ? filterArray?.IPOType.map((item: any) => item.key)
                        : []
                    }
                    onChange={(event) =>
                      handleChangeFilter("IPOType", event, IPOTypeOptions)
                    }
                    renderValue={(selected) =>
                      `${selected.length} filters selected: ` +
                      selected
                        .map((selectedKey: string) => {
                          const selectedItem = IPOTypeOptions.find(
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
                    {IPOTypeOptions.map((item: any) => (
                      <MenuItem
                        key={item.key}
                        value={item.key}
                        disabled={!user?.member?.stripeCustomerId && item.pro}
                      >
                        <Checkbox
                          checked={
                            filterArray.IPOType &&
                            filterArray.IPOType.some(
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
                    IPO Status
                  </InputLabel>
                  <Select
                    label="IPO Status"
                    labelId="demo-multiple-checkbox-label"
                    id="demo-multiple-checkbox"
                    multiple
                    value={
                      filterArray?.IPOStatus
                        ? filterArray?.IPOStatus.map((item: any) => item.key)
                        : []
                    }
                    onChange={(event) =>
                      handleChangeFilter("IPOStatus", event, IPOStatusOptions)
                    }
                    renderValue={(selected) =>
                      `${selected.length} filters selected: ` +
                      selected
                        .map((selectedKey: string) => {
                          const selectedItem = IPOStatusOptions.find(
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
                    {IPOStatusOptions.map((item: any) => (
                      <MenuItem
                        key={item.key}
                        value={item.key}
                        disabled={!user?.member?.stripeCustomerId && item.pro}
                      >
                        <Checkbox
                          checked={
                            filterArray.IPOStatus &&
                            filterArray.IPOStatus.some(
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
                  <InputLabel
                    id="demo-multiple-c
                  heckbox-label"
                  >
                    IPO Type
                  </InputLabel>
                  <Select
                    label="IPO Type"
                    labelId="demo-multiple-checkbox-label"
                    id="demo-multiple-checkbox"
                    multiple
                    value={
                      filterArray?.IPOType
                        ? filterArray?.IPOType.map((item: any) => item.key)
                        : []
                    }
                    onChange={(event) =>
                      handleChangeFilter("IPOType", event, IPOTypeOptions)
                    }
                    renderValue={(selected) =>
                      `${selected.length} filters selected: ` +
                      selected
                        .map((selectedKey: string) => {
                          const selectedItem = IPOTypeOptions.find(
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
                    {IPOTypeOptions.map((item: any) => (
                      <MenuItem
                        key={item.key}
                        value={item.key}
                        disabled={!user?.member?.stripeCustomerId && item.pro}
                      >
                        <Checkbox
                          checked={
                            filterArray.IPOType &&
                            filterArray.IPOType.some(
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
                      label="Find Column"
                      labelId="demo-multiple-checkbox-label"
                      id="demo-multiple-checkbox"
                      multiple
                      value={personName.map((item: any) => item.key)}
                      onChange={handleChange}
                      renderValue={(selected) =>
                        selected
                          .map((selectedKey: string) => {
                            const selectedItem = personName.find(
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
                      {IPOPricedScreeners.map((item: any) => (
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
                      Company Profile
                    </InputLabel>
                    <Select
                      label="Company Profile"
                      labelId="demo-multiple-checkbox-label"
                      id="demo-multiple-checkbox"
                      multiple
                      value={personName.map((item: any) => item.key)}
                      onChange={handleChange}
                      renderValue={(selected) =>
                        selected
                          .map((selectedKey: string) => {
                            const selectedItem = CompanyProfile.find(
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
                      {CompanyProfile.map((item: any) => (
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
                      IPO Profile
                    </InputLabel>
                    <Select
                      label="IPO Profile"
                      labelId="demo-multiple-checkbox-label"
                      id="demo-multiple-checkbox"
                      multiple
                      value={personName.map((item: any) => item.key)}
                      onChange={handleChange}
                      renderValue={(selected) =>
                        selected
                          .map((selectedKey: string) => {
                            const selectedItem = IPOProfile.find(
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
                      {IPOProfile.map((item: any) => (
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
                      Trading
                    </InputLabel>
                    <Select
                      label="Trading"
                      labelId="demo-multiple-checkbox-label"
                      id="demo-multiple-checkbox"
                      multiple
                      value={personName.map((item: any) => item.key)}
                      onChange={handleChange}
                      renderValue={(selected) =>
                        selected
                          .map((selectedKey: string) => {
                            const selectedItem = Trading.find(
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
                      {Trading.map((item: any) => (
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
                      label="Find Column"
                      labelId="demo-multiple-checkbox-label"
                      id="demo-multiple-checkbox"
                      multiple
                      value={personName.map((item: any) => item.key)}
                      onChange={handleChange}
                      renderValue={(selected) =>
                        selected
                          .map((selectedKey: string) => {
                            const selectedItem = personName.find(
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
                      {IPOUpcommingScreeners.map((item: any) => (
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
                      Company Profile
                    </InputLabel>
                    <Select
                      label="Company Profile"
                      labelId="demo-multiple-checkbox-label"
                      id="demo-multiple-checkbox"
                      multiple
                      value={personName.map((item: any) => item.key)}
                      onChange={handleChange}
                      renderValue={(selected) =>
                        selected
                          .map((selectedKey: string) => {
                            const selectedItem = CompanyProfile.find(
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
                      {CompanyProfile.map((item: any) => (
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
                      IPO Profile
                    </InputLabel>
                    <Select
                      label="IPO Profile"
                      labelId="demo-multiple-checkbox-label"
                      id="demo-multiple-checkbox"
                      multiple
                      value={personName.map((item: any) => item.key)}
                      onChange={handleChange}
                      renderValue={(selected) =>
                        selected
                          .map((selectedKey: string) => {
                            const selectedItem = IPOProfile.find(
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
                      {IPOProfile.map((item: any) => (
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
    </section>
  );
}

export default IpoScreener;