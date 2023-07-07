import React, { useEffect, useState } from "react";
import styles from "./CardElements.module.css";
import MyTable from "./functions";
import { styled } from "@mui/material/styles";
import Image from "next/image";
import searchIcon from "../../../../../../public/searchIcon.svg";
import filterSvg from "../../../../../../public/filterSvg.svg";
import selectedColumnSvg from "../../../../../../public/selectedColumnSvg.svg";
import saveScreenerSvg from "../../../../../../public/saveScreenerSvg.svg";
import exportSvg from "../../../../../../public/exportSvg.svg";
import crossIconSvg from "../../../../../../public/crossIconSvg.svg";
import proSvg from "../../../../../../public/proSvg.svg";
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
function CardElements() {
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
    border: "2px solid #000",
    boxShadow: 24,
    p: 1,
  };
  const tabValues: { [key: number]: string } = {
    // 0: "priced",
    // 1: "upcoming",
    0: "pre_deal",
    1: "pre_deal",
  };
  const [isLoading, setIsLoading] = useState(true);
  const [openFilterModal, setOpenFilterModal] = useState(false);
  const [openColumnModal, setOpenColumnModal] = useState(false);
  const [screenerData, setScreenerData] = useState<any>({
    dataset: [],
    additional_dataset: { totalLength: 20 },
  });
  const [selectedTab, setSelectedTab] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);
  const [filterCount, setFilerCount] = useState(0);
  const [filters, setFilters] = useState({
    IPOYear: null,
    IPOType: null,
    IPOStatus: null,
  });
  const [isUser, setIsUser] = useState(false);

  const [itemsPerPage, setItemPerPage] = useState(5);
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
  const [personName, setPersonName] = React.useState([
    {
      name: "Company",
      key: "company",
    },
    {
      name: "Symbol",
      key: "symbol",
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

  const getScreenerData = async () => {
    setIsLoading(true);
    const response = await getApiWithoutAuth(
      `${URLs.spacsScreeners}?page=${currentPage}&offset=${itemsPerPage}&type=${tabValues[selectedTab]}`
    );
    console.log("========================res", response);
    if (response.status === 200) {
      setScreenerData(response.data);
      setIsLoading(false);
    } else {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getScreenerData();
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
              <Image src={proSvg} alt="filterSvg" width={50} height={26} />
              <div className={styles.filterGap}>
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
                <div className={styles.filterModalStyling}>
                  {filters?.IPOYear ? (
                    <Image
                      src={crossIconSvg}
                      alt="filterSvg"
                      width={18}
                      height={18}
                      onClick={() => setFilters({ ...filters, IPOYear: null })}
                    />
                  ) : null}
                  <FormControl sx={{ m: 2, minWidth: 180 }}>
                    <InputLabel htmlFor="demo-dialog-native">
                      IPO Year
                    </InputLabel>
                    <Select
                      placeholder="Select"
                      name="IPOYear"
                      value={filters?.IPOYear}
                      onChange={(e) => saveValue(e)}
                      variant="standard"
                    >
                      <MenuItem value={"2023"}>2023</MenuItem>
                      <MenuItem value={"2022"}>2022</MenuItem>
                      <MenuItem value={"2021"}>2021</MenuItem>
                      <MenuItem value={"2020"} disabled={!isUser}>
                        2020
                        <Image
                          src={proSvg}
                          alt="filterSvg"
                          width={50}
                          height={32}
                        />
                      </MenuItem>
                      <MenuItem value={"2019"} disabled={!isUser}>
                        2019
                        <Image
                          src={proSvg}
                          alt="filterSvg"
                          width={50}
                          height={32}
                        />
                      </MenuItem>
                    </Select>
                  </FormControl>
                </div>

                <div className={styles.filterModalStyling}>
                  {filters?.IPOType ? (
                    <Image
                      src={crossIconSvg}
                      alt="filterSvg"
                      width={18}
                      height={18}
                      onClick={() => setFilters({ ...filters, IPOType: null })}
                    />
                  ) : null}
                  <div style={{ display: "flex", alignItems: "center" }}>
                    <FormControl sx={{ m: 2, minWidth: 180 }}>
                      <InputLabel htmlFor="demo-dialog-native">
                        IPO Type
                      </InputLabel>
                      <Select
                        disabled={!isUser}
                        placeholder="Select"
                        name="IPOType"
                        value={filters?.IPOType}
                        onChange={(e) => saveValue(e)}
                        variant="standard"
                      >
                        <MenuItem value={"Traditional"}>Traditional</MenuItem>
                        <MenuItem value={"SPAC"}>SPAC</MenuItem>
                        <MenuItem value={"Direct Listing"}>
                          Direct Listing
                        </MenuItem>
                      </Select>
                    </FormControl>
                    <Image
                      src={proSvg}
                      alt="filterSvg"
                      width={50}
                      height={32}
                      style={{ marginTop: 10 }}
                    />
                  </div>
                </div>
              </div>
            ) : (
              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                }}
              >
                <div className={styles.filterModalStyling}>
                  {filters?.IPOStatus ? (
                    <Image
                      src={crossIconSvg}
                      alt="filterSvg"
                      width={18}
                      height={18}
                      onClick={() =>
                        setFilters({ ...filters, IPOStatus: null })
                      }
                    />
                  ) : null}
                  <FormControl sx={{ m: 2, minWidth: 180 }}>
                    <InputLabel htmlFor="demo-dialog-native">
                      IPO Status
                    </InputLabel>
                    <Select
                      placeholder="Select"
                      name="IPOStatus"
                      value={filters?.IPOStatus}
                      onChange={(e) => saveValue(e)}
                      variant="standard"
                    >
                      <MenuItem value={"Expected"}>Expected</MenuItem>
                      <MenuItem value={"Filed"}>Filed</MenuItem>
                      <MenuItem value={"Withdrawn"}>Withdrawn</MenuItem>
                      <MenuItem value={"Filed Amended"} disabled={!isUser}>
                        Filed Amended
                        <Image
                          src={proSvg}
                          alt="filterSvg"
                          width={50}
                          height={32}
                        />
                      </MenuItem>
                    </Select>
                  </FormControl>
                </div>

                <div className={styles.filterModalStyling}>
                  {filters?.IPOType ? (
                    <Image
                      src={crossIconSvg}
                      alt="filterSvg"
                      width={18}
                      height={18}
                      onClick={() => setFilters({ ...filters, IPOType: null })}
                    />
                  ) : null}
                  <div style={{ display: "flex", alignItems: "center" }}>
                    <FormControl sx={{ m: 2, minWidth: 180 }}>
                      <InputLabel htmlFor="demo-dialog-native">
                        IPO Type
                      </InputLabel>
                      <Select
                        disabled={!isUser}
                        placeholder="Select"
                        name="IPOType"
                        value={filters?.IPOType}
                        onChange={(e) => saveValue(e)}
                        variant="standard"
                      >
                        <MenuItem value={"Traditional"}>Traditional</MenuItem>
                        <MenuItem value={"SPAC"}>SPAC</MenuItem>
                        <MenuItem value={"Direct Listing"}>
                          Direct Listing
                        </MenuItem>
                      </Select>
                    </FormControl>
                    <Image
                      src={proSvg}
                      alt="filterSvg"
                      width={50}
                      height={32}
                      style={{ marginTop: 10 }}
                    />
                  </div>
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
      <Modal
        keepMounted
        open={openColumnModal}
        onClose={() => setOpenColumnModal(false)}
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
                onClick={() => setOpenColumnModal(false)}
              />
            </div>
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
                          disabled={isUser && item.pro}
                        >
                          <Checkbox
                            checked={personName.some(
                              (selectedItem) => selectedItem.key === item.key
                            )}
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
                          disabled={isUser && item.pro}
                        >
                          <Checkbox
                            checked={personName.some(
                              (selectedItem) => selectedItem.key === item.key
                            )}
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
                          disabled={isUser && item.pro}
                        >
                          <Checkbox
                            checked={personName.some(
                              (selectedItem) => selectedItem.key === item.key
                            )}
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
                          disabled={isUser && item.pro}
                        >
                          <Checkbox
                            checked={personName.some(
                              (selectedItem) => selectedItem.key === item.key
                            )}
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
                          disabled={isUser && item.pro}
                        >
                          <Checkbox
                            checked={personName.some(
                              (selectedItem) => selectedItem.key === item.key
                            )}
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
                          disabled={isUser && item.pro}
                        >
                          <Checkbox
                            checked={personName.some(
                              (selectedItem) => selectedItem.key === item.key
                            )}
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
                          disabled={isUser && item.pro}
                        >
                          <Checkbox
                            checked={personName.some(
                              (selectedItem) => selectedItem.key === item.key
                            )}
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
    </section>
  );
}

export default CardElements;
