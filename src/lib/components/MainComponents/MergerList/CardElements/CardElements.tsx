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
import Select, { SelectChangeEvent } from "@mui/material/Select";
import Checkbox from "@mui/material/Checkbox";
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
} from "@mui/material";
import { useContext } from "react";
import { MemberInformationContext } from "@/lib/components/context";
function CardElements() {
  const { user } = useContext(MemberInformationContext);
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
  const headerArrayClosedMergersList = [
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
      name: "Closing Date",
      key: "ClosingDate",
      type: "string",
    },
    {
      name: "Merger Type",
      key: "MergerType",
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
      name: "Premium (at Deal)",
      key: "Premium",
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
  const headerArrayAnnouncedMergersList = [
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
      name: "Merger Type",
      key: "MergerType",
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
      name: "Premium (at Deal)",
      key: "Premium",
      type: "string",
    },
    {
      name: "View Deal Page",
      key: "ViewDealPage",
      type: "string",
    },
  ];
  const [selectedTab, setSelectedTab] = useState(0);
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
    MergerType: null,
    ClosingYear: null,
    TargetSector: null,
    TargetRegion: null,
  });
  const [filterArray, setFilterArray] = useState<{
    MergerType?: any[];
    TargetSector?: any[];
    TargetRegion?: any[];
    ClosingYear?: any[];
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
  }, [selectedTab, currentPage, itemsPerPage]);
  const saveValue = (e: any) => {
    const { name, value } = e.target;
    setFilters({ ...filters, [name]: value });
  };

  const clearAll = () => {
    setFilters({
      MergerType: null,
      ClosingYear: null,
      TargetSector: null,
      TargetRegion: null,
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
            Closed Mergers List
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
            Announced Mergers List
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
                      style={{cursor:'pointer'}}
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
                  ? headerArrayClosedMergersList
                  : headerArrayAnnouncedMergersList
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
