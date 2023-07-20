import React, { useEffect, useState } from "react";
import styles from "./CardElements.module.css";
import MyTable from "./functions";
import { styled } from "@mui/material/styles";
import Image from "next/image";
import searchIcon from "../../../../../../public/searchIcon.svg";
import filterSvg from "../../../../../../public/filterSvg.svg";
import exportSvg from "../../../../../../public/exportSvg.svg";
import crossIconSvg from "../../../../../../public/crossIconSvg.svg";
import proSvg from "../../../../../../public/proSvg.svg";
import { getApiWithoutAuth } from "@/lib/ts/api";
import { URLs } from "@/lib/ts/apiUrl";
import {
  SkeltonTable,
  ListingTrackTable,
} from "@/lib/components/CommonComponents";
import Checkbox from "@mui/material/Checkbox";
import Select, { SelectChangeEvent } from "@mui/material/Select";
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
} from "@mui/material";

function CardElements() {
  const style = {
    position: "absolute" as "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "60%",
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 1,
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

  const [selectedTab, setSelectedTab] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoading, setIsLoading] = useState(true);
  const [openFilterModal, setOpenFilterModal] = useState(false);
  const [spacsListData, setSpacsListData] = useState<any>({
    dataset: [],
    additional_dataset: { totalLength: 20 },
  });
  const [isUser, setIsUser] = useState(false);
  const [filterCount, setFilerCount] = useState(0);

  const [itemsPerPage, setItemPerPage] = useState(5);
  const [filters, setFilters] = useState({
    IPOYear: null,
    IPOType: null,
    IPOStatus: null,
  });
  const [filterArray, setFilterArray] = useState<{
    IPOYEAR?: any[];
    IPOType?: any[];
    IPOStatus?: any[];
  }>({});
  const headerPricedIPOsList = [
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
      name: "IPO Type",
      key: "IPOType",
      type: "string",
    },
    {
      name: "Pricing Date",
      key: "PricingDate",
      type: "string",
    },
    {
      name: "Price",
      key: "Price",
      type: "string",
    },
    {
      name: "Offer Size (M)",
      key: "OfferSize",
      type: "string",
    },
    {
      name: "Return from IPO",
      key: "ReturnfromIPO",
      type: "string",
    },
  ];
  const headerUpcomingIPOsList = [
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
      name: "IPO Type",
      key: "IPOType",
      type: "string",
    },
    {
      name: "Exchange",
      key: "Exchange",
      type: "string",
    },
    {
      name: "Est. Pricing Date",
      key: "EstPricingDate",
      type: "string",
    },
    {
      name: "Price Range",
      key: "PriceRange",
      type: "string",
    },
    {
      name: "Offer Size (M)",
      key: "OfferSize",
      type: "string",
    },
  ];

  const headerIPOGrapevineList = [
    {
      name: "Company Name",
      key: "Company Name",
      type: "string",
    },
    {
      name: "IPO Status",
      key: "IPOStatus",
      type: "string",
    },
    {
      name: "Rumored Date",
      key: "RumoredDate",
      type: "string",
    },
    {
      name: "Rumored IPO Offering Size (M)",
      key: "RumoredIPOOfferingSize",
      type: "string",
    },
    {
      name: "Rumored Source",
      key: "RumoredSource",
      type: "string",
    },
    {
      name: "Rumored Link",
      key: "RumoredLink",
      type: "string",
    },
    {
      name: "Rumor Inactive Date",
      key: "RumorInactiveDate",
      type: "string",
    },
    {
      name: "Rumor Inactive Link",
      key: "RumorInactiveLink",
      type: "string",
    },
    {
      name: "Rumor Inactive Source",
      key: "RumorInactiveSource",
      type: "string",
    },
  ];

  const header20PerformingIPOsList = [
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
      name: "IPO Type",
      key: "IPOType",
      type: "string",
    },
    {
      name: "Pricing Date",
      key: "PricingDate",
      type: "string",
    },
    {
      name: "Price",
      key: "Price",
      type: "string",
    },
    {
      name: "Market Cap at IPO",
      key: "MarketCapatIPO",
      type: "string",
    },
    {
      name: "Market Cap",
      key: "MarketCap",
      type: "string",
    },
    {
      name: "Rumor Inactive Link",
      key: "RumorInactiveLink",
      type: "string",
    },
    {
      name: "Offer Size (M)",
      key: "OfferSize",
      type: "string",
    },
    {
      name: "Return from IPO",
      key: "ReturnfromIPO",
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
  const paginate = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  const getSpacsList = async () => {
    setIsLoading(true);
    const response = await getApiWithoutAuth(
      `${URLs.spacsList}?page=${currentPage}&offset=${itemsPerPage}&type=${tabValues[selectedTab]}`
    );
    if (response.status === 200) {
      setSpacsListData(response.data);
      setIsLoading(false);
    } else {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getSpacsList();
  }, [selectedTab, currentPage, itemsPerPage]);
  const saveValue = (e: any) => {
    const { name, value } = e.target;
    setFilters({ ...filters, [name]: value });
  };

  const clearAll = () => {
    setFilters({
      IPOYear: null,
      IPOType: null,
      IPOStatus: null,
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
  const IPOStatusRumorOptions = [
    { key: "Rumor Active", name: "Rumor Active", pro: false },
    { key: "Rumor Inactive", name: "Rumor Inactive", pro: true },
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
            Priced IPOs
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
            Upcoming IPOs
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
            IPO Grapevine
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
              setSelectedTab(3);
              setFilerCount(0);
            }}
            className={`${styles.headerCell} ${
              selectedTab === 3 && styles.selectedHeader
            }`}
          >
            Top 20 Performers
          </div>
          <div
            onClick={() => {
              setSelectedTab(4);
              setFilerCount(0);
            }}
            className={`${styles.headerCell} ${
              selectedTab === 4 && styles.selectedHeader
            }`}
          >
            Worst 20 Performers
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
        <div style={{ overflow: "auto" }}>
          {isLoading ? (
            <SkeltonTable />
          ) : (
            <ListingTrackTable
              data={spacsListData?.dataset}
              headerArray={
                selectedTab === 0
                  ? headerPricedIPOsList
                  : selectedTab === 1
                  ? headerUpcomingIPOsList
                  : selectedTab === 2
                  ? headerIPOGrapevineList
                  : selectedTab === 3
                  ? header20PerformingIPOsList
                  : header20PerformingIPOsList
              }
              currentPage={currentPage}
              itemsPerPage={itemsPerPage}
              paginate={paginate}
              totalLength={spacsListData?.additional_dataset}
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
          <Box sx={style}>
            <div style={{ display: "flex", justifyContent: "flex-end" }}>
              <Image
                src={crossIconSvg}
                alt="filterSvg"
                width={18}
                height={18}
                onClick={clearAll}
              />
            </div>
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
                        disabled={isUser && item.pro}
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
                        {item.pro ? (
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
                        disabled={isUser && item.pro}
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
                        {item.pro ? (
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
                        disabled={isUser && item.pro}
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
                        {item.pro ? (
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
                        disabled={isUser && item.pro}
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
                        {item.pro ? (
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
                      handleChangeFilter("IPOStatus", event, IPOStatusRumorOptions)
                    }
                    renderValue={(selected) =>
                      `${selected.length} filters selected: ` +
                      selected
                        .map((selectedKey: string) => {
                          const selectedItem = IPOStatusRumorOptions.find(
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
                    {IPOStatusRumorOptions.map((item: any) => (
                      <MenuItem
                        key={item.key}
                        value={item.key}
                        disabled={isUser && item.pro}
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
                        {item.pro ? (
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
                <div className={styles.filterModalStyling}>
                  Not have any filter
                </div>
              </div>
            ) : (
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
            )}
            <div
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
            </div>
          </Box>
        </>
      </Modal>
    </section>
  );
}

export default CardElements;
