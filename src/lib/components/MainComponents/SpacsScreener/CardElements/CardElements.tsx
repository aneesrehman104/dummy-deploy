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
import { SkeltonTable } from "@/lib/components/CommonComponents";
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
import OutlinedInput from "@mui/material/OutlinedInput";
import ListItemText from "@mui/material/ListItemText";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import Checkbox from "@mui/material/Checkbox";
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
    0: "pre_deal",
    1: "announced",
    2: "all",
    3: "de_spac",
  };
  const [isLoading, setIsLoading] = useState(true);
  const [openFilterModal, setOpenFilterModal] = useState(false);
  const [openColumnModal, setOpenColumnModal] = useState(false);
  const [screenerData, setScreenerData] = useState<any>();
  const [selectedTab, setSelectedTab] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);
  const [filterCount, setFilerCount] = useState(0);
  const [filters, setFilters] = useState({
    IPOYear: null,
    VotesDeadlines: null,
    SPAC_Profile: null,
    Trading: null,
    TargetSector: null,
    TargetRegion: null,
    Activity: null,
    SPACProgressStatus: null,
    De_SPAC_Closing_Year: null,
  });
  const [isUser, setIsUser] = useState(false);

  const [itemsPerPage, setItemPerPage] = useState(5);
  const data = [
    {
      company: "Activision",
      symbol: "ACTIA",
      price: "$21",
      today: "+5.62%",
      marketCap: "$723.23B",
    },
    {
      company: "Activision",
      symbol: "ACTIA",
      price: "$21",
      today: "+5.62%",
      marketCap: "$723.23B",
    },
    {
      company: "Activision3",
      symbol: "ACTIA",
      price: "$21",
      today: "+5.62%",
      marketCap: "$723.23T",
    },
    {
      company: "Activision",
      symbol: "ACTIA",
      price: "$21",
      today: "+5.62%",
      marketCap: "$723.23B",
    },
    {
      company: "Activision",
      symbol: "ACTIA",
      price: "$21",
      today: "+5.62%",
      marketCap: "$723.23B",
    },
    {
      company: "Activision3",
      symbol: "ACTIA",
      price: "$21",
      today: "+5.62%",
      marketCap: "$723.23T",
    },
    {
      company: "Activision",
      symbol: "ACTIA",
      price: "$21",
      today: "+5.62%",
      marketCap: "$723.23B",
    },
    {
      company: "Activision",
      symbol: "ACTIA",
      price: "$21",
      today: "+5.62%",
      marketCap: "$723.23B",
    },
    {
      company: "Activision3",
      symbol: "ACTIA",
      price: "$21",
      today: "+5.62%",
      marketCap: "$723.23T",
    },
  ];
  const names = [
    "Oliver Hansen",
    "Van Henry",
    "April Tucker",
    "Ralph Hubbard",
    "Omar Alexander",
    "Carlos Abbott",
    "Miriam Wagner",
    "Bradley Wilkerson",
    "Virginia Andrews",
    "Kelly Snyder",
  ];
  const [personName, setPersonName] = React.useState<string[]>([]);

  const handleChange = (event: SelectChangeEvent<typeof personName>) => {
    const {
      target: { value },
    } = event;
    setPersonName(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
  };
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
      VotesDeadlines: null,
      SPAC_Profile: null,
      Trading: null,
      TargetSector: null,
      TargetRegion: null,
      Activity: null,
      SPACProgressStatus: null,
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
            Pre-Deal SPAC Screener
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
            Announced SPAC Mergers Screener
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
            All Active SPACs Screener
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
            De-SPAC Screener
          </div>
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
            <MyTable
              data={screenerData?.dataset}
              itemsPerPage={itemsPerPage}
              setItemPerPage={setItemPerPage}
              currentPage={currentPage}
              paginate={paginate}
              totalLength={screenerData?.additional_dataset}
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
                  {filters?.SPACProgressStatus ? (
                    <Image
                      src={crossIconSvg}
                      alt="filterSvg"
                      width={18}
                      height={18}
                      onClick={() =>
                        setFilters({ ...filters, SPACProgressStatus: null })
                      }
                    />
                  ) : null}
                  <div style={{ display: "flex", alignItems: "center" }}>
                    <FormControl sx={{ m: 2, minWidth: 180 }}>
                      <InputLabel htmlFor="demo-dialog-native">
                        SPAC Progress Status
                      </InputLabel>
                      <Select
                        disabled={!isUser}
                        placeholder="Select"
                        name="SPACProgressStatus"
                        value={filters?.SPACProgressStatus}
                        onChange={(e) => saveValue(e)}
                        variant="standard"
                      >
                        <MenuItem value={"Searching"}>Searching</MenuItem>
                        <MenuItem value={"Announced"}>Announced</MenuItem>
                        <MenuItem value={"Liquidating"}>Liquidating</MenuItem>
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
                  {filters?.VotesDeadlines ? (
                    <Image
                      src={crossIconSvg}
                      alt="filterSvg"
                      width={18}
                      height={18}
                      onClick={() =>
                        setFilters({ ...filters, VotesDeadlines: null })
                      }
                    />
                  ) : null}
                  <div style={{ display: "flex", alignItems: "center" }}>
                    <FormControl sx={{ m: 2, minWidth: 180 }}>
                      <InputLabel htmlFor="demo-dialog-native">
                        Votes / Deadlines
                      </InputLabel>
                      <Select
                        disabled={!isUser}
                        placeholder="Select"
                        name="VotesDeadlines"
                        value={filters?.VotesDeadlines}
                        onChange={(e) => saveValue(e)}
                        variant="standard"
                      >
                        <MenuItem value={"Merger Vote Set"}>
                          Merger Vote Set
                        </MenuItem>
                        <MenuItem value={"Extension Vote Set"}>
                          Extension Vote Set
                        </MenuItem>
                        <MenuItem value={"Upcoming Vote"}>
                          Upcoming Vote
                        </MenuItem>
                        <MenuItem value={"1 Month to Deadline"}>
                          1 Month to Deadline
                        </MenuItem>
                        <MenuItem value={"2 Months to Deadline"}>
                          2 Months to Deadline
                        </MenuItem>
                        <MenuItem value={"3 Months to Deadline"}>
                          3 Months to Deadline
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

                <div className={styles.filterModalStyling}>
                  {filters?.SPAC_Profile ? (
                    <Image
                      src={crossIconSvg}
                      alt="filterSvg"
                      width={18}
                      height={18}
                      onClick={() =>
                        setFilters({ ...filters, SPAC_Profile: null })
                      }
                    />
                  ) : null}
                  <div style={{ display: "flex", alignItems: "center" }}>
                    <FormControl sx={{ m: 2, minWidth: 180 }}>
                      <InputLabel htmlFor="demo-dialog-native">
                        SPAC Profile
                      </InputLabel>
                      <Select
                        disabled={!isUser}
                        placeholder="Select"
                        name="SPAC_Profile"
                        value={filters?.SPAC_Profile}
                        onChange={(e) => saveValue(e)}
                        variant="standard"
                      >
                        <MenuItem value={"US Domicile"}>US Domicile</MenuItem>
                        <MenuItem value={"Non-US Domicile"}>
                          Non-US Domicile
                        </MenuItem>
                        <MenuItem value={"Has Warrants"}>Has Warrants</MenuItem>
                        <MenuItem value={"Has Rights"}>Has Rights</MenuItem>
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

                <div className={styles.filterModalStyling}>
                  {filters?.Trading ? (
                    <Image
                      src={crossIconSvg}
                      alt="filterSvg"
                      width={18}
                      height={18}
                      onClick={() => setFilters({ ...filters, Trading: null })}
                    />
                  ) : null}
                  <div style={{ display: "flex", alignItems: "center" }}>
                    <FormControl sx={{ m: 2, minWidth: 180 }}>
                      <InputLabel htmlFor="demo-dialog-native">
                        Trading
                      </InputLabel>
                      <Select
                        disabled={!isUser}
                        placeholder="Select"
                        name="Trading"
                        value={filters?.Trading}
                        onChange={(e) => saveValue(e)}
                        variant="standard"
                      >
                        <MenuItem value={"Has Warrants"}>Has Warrants</MenuItem>
                        <MenuItem value={"Has Rights"}>Has Rights</MenuItem>
                        <MenuItem value={"Optionable"}>Optionable</MenuItem>
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
            ) : selectedTab === 1 ? (
              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                }}
              >
                <div className={styles.filterModalStyling}>
                  {filters?.TargetSector ? (
                    <Image
                      src={crossIconSvg}
                      alt="filterSvg"
                      width={18}
                      height={18}
                      onClick={() =>
                        setFilters({ ...filters, TargetSector: null })
                      }
                    />
                  ) : null}
                  <FormControl sx={{ m: 2, minWidth: 180 }}>
                    <InputLabel htmlFor="demo-dialog-native">
                      Target Sector
                    </InputLabel>
                    <Select
                      placeholder="Select"
                      name="TargetSector"
                      value={filters?.TargetSector}
                      onChange={(e) => saveValue(e)}
                      variant="standard"
                    >
                      <MenuItem value={"Tech"}>Tech</MenuItem>
                      <MenuItem value={"Energy"} disabled={!isUser}>
                        Energy{" "}
                        <Image
                          src={proSvg}
                          alt="filterSvg"
                          width={50}
                          height={32}
                        />
                      </MenuItem>
                      <MenuItem value={"Financials"} disabled={!isUser}>
                        Financials{" "}
                        <Image
                          src={proSvg}
                          alt="filterSvg"
                          width={50}
                          height={32}
                        />
                      </MenuItem>
                      <MenuItem value={"Communications"} disabled={!isUser}>
                        Communications
                        <Image
                          src={proSvg}
                          alt="filterSvg"
                          width={50}
                          height={32}
                        />
                      </MenuItem>
                      <MenuItem value={"Materials"} disabled={!isUser}>
                        Materials
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
                  {filters?.TargetRegion ? (
                    <Image
                      src={crossIconSvg}
                      alt="filterSvg"
                      width={18}
                      height={18}
                      onClick={() =>
                        setFilters({ ...filters, TargetRegion: null })
                      }
                    />
                  ) : null}
                  <FormControl sx={{ m: 2, minWidth: 180 }}>
                    <InputLabel htmlFor="demo-dialog-native">
                      TargetRegion
                    </InputLabel>
                    <Select
                      placeholder="Select"
                      name="TargetRegion"
                      value={filters?.TargetRegion}
                      onChange={(e) => saveValue(e)}
                      variant="standard"
                    >
                      <MenuItem value={"U.S. & Canada"}>U.S. & Canada</MenuItem>
                      <MenuItem value={"Latin America"} disabled={!isUser}>
                        Latin America
                        <Image
                          src={proSvg}
                          alt="filterSvg"
                          width={50}
                          height={32}
                        />
                      </MenuItem>
                      <MenuItem value={" Asia & Oceania"} disabled={!isUser}>
                        Asia & Oceania
                        <Image
                          src={proSvg}
                          alt="filterSvg"
                          width={50}
                          height={32}
                        />
                      </MenuItem>
                      <MenuItem value={"Africa"} disabled={!isUser}>
                        Africa
                        <Image
                          src={proSvg}
                          alt="filterSvg"
                          width={50}
                          height={32}
                        />
                      </MenuItem>
                      <MenuItem value={"Europe"} disabled={!isUser}>
                        Europe
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
                  {filters?.Activity ? (
                    <Image
                      src={crossIconSvg}
                      alt="filterSvg"
                      width={18}
                      height={18}
                      onClick={() => setFilters({ ...filters, Activity: null })}
                    />
                  ) : null}
                  <div style={{ display: "flex", alignItems: "center" }}>
                    <FormControl sx={{ m: 2, minWidth: 180 }}>
                      <InputLabel htmlFor="demo-dialog-native">
                        Activity
                      </InputLabel>
                      <Select
                        disabled={!isUser}
                        placeholder="Select"
                        name="Activity"
                        value={filters?.Activity}
                        onChange={(e) => saveValue(e)}
                        variant="standard"
                      >
                        <MenuItem value={" Recent DA"}>Recent DA</MenuItem>
                        <MenuItem value={"Filed S-4"}>Filed S-4</MenuItem>
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
            ) : selectedTab === 2 ? (
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-around",
                  flexWrap: "wrap",
                }}
              >
                <div className={styles.filterModalStyling}>
                  {filters?.SPACProgressStatus ? (
                    <Image
                      src={crossIconSvg}
                      alt="filterSvg"
                      width={18}
                      height={18}
                      onClick={() =>
                        setFilters({ ...filters, SPACProgressStatus: null })
                      }
                    />
                  ) : null}
                  <FormControl sx={{ m: 2, minWidth: 180 }}>
                    <InputLabel htmlFor="demo-dialog-native">
                      SPAC Progress Status
                    </InputLabel>
                    <Select
                      placeholder="Select"
                      name="SPACProgressStatus"
                      value={filters?.SPACProgressStatus}
                      onChange={(e) => saveValue(e)}
                      variant="standard"
                    >
                      <MenuItem value={"Searching"}>Searching</MenuItem>
                      <MenuItem value={"Announced"}>Announced</MenuItem>
                      <MenuItem value={"Liquidating"}>Liquidating</MenuItem>
                    </Select>
                  </FormControl>
                </div>
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
                  {filters?.VotesDeadlines ? (
                    <Image
                      src={crossIconSvg}
                      alt="filterSvg"
                      width={18}
                      height={18}
                      onClick={() =>
                        setFilters({ ...filters, VotesDeadlines: null })
                      }
                    />
                  ) : null}
                  <div style={{ display: "flex", alignItems: "center" }}>
                    <FormControl sx={{ m: 2, minWidth: 180 }}>
                      <InputLabel htmlFor="demo-dialog-native">
                        Votes / Deadlines
                      </InputLabel>
                      <Select
                        disabled={!isUser}
                        placeholder="Select"
                        name="VotesDeadlines"
                        value={filters?.VotesDeadlines}
                        onChange={(e) => saveValue(e)}
                        variant="standard"
                      >
                        <MenuItem value={"Merger Vote Set"}>
                          Merger Vote Set
                        </MenuItem>
                        <MenuItem value={"Extension Vote Set"}>
                          Extension Vote Set
                        </MenuItem>
                        <MenuItem value={"Upcoming Vote"}>
                          Upcoming Vote
                        </MenuItem>
                        <MenuItem value={"1 Month to Deadline"}>
                          1 Month to Deadline
                        </MenuItem>
                        <MenuItem value={"2 Months to Deadline"}>
                          2 Months to Deadline
                        </MenuItem>
                        <MenuItem value={"3 Months to Deadline"}>
                          3 Months to Deadline
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

                <div className={styles.filterModalStyling}>
                  {filters?.SPAC_Profile ? (
                    <Image
                      src={crossIconSvg}
                      alt="filterSvg"
                      width={18}
                      height={18}
                      onClick={() =>
                        setFilters({ ...filters, SPAC_Profile: null })
                      }
                    />
                  ) : null}
                  <div style={{ display: "flex", alignItems: "center" }}>
                    <FormControl sx={{ m: 2, minWidth: 180 }}>
                      <InputLabel htmlFor="demo-dialog-native">
                        SPAC Profile
                      </InputLabel>
                      <Select
                        disabled={!isUser}
                        placeholder="Select"
                        name="SPAC_Profile"
                        value={filters?.SPAC_Profile}
                        onChange={(e) => saveValue(e)}
                        variant="standard"
                      >
                        <MenuItem value={"US Domicile"}>US Domicile</MenuItem>
                        <MenuItem value={"Non-US Domicile"}>
                          Non-US Domicile
                        </MenuItem>
                        <MenuItem value={"Has Warrants"}>Has Warrants</MenuItem>
                        <MenuItem value={"Has Rights"}>Has Rights</MenuItem>
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

                <div className={styles.filterModalStyling}>
                  {filters?.Trading ? (
                    <Image
                      src={crossIconSvg}
                      alt="filterSvg"
                      width={18}
                      height={18}
                      onClick={() => setFilters({ ...filters, Trading: null })}
                    />
                  ) : null}
                  <div style={{ display: "flex", alignItems: "center" }}>
                    <FormControl sx={{ m: 2, minWidth: 180 }}>
                      <InputLabel htmlFor="demo-dialog-native">
                        Trading
                      </InputLabel>
                      <Select
                        disabled={!isUser}
                        placeholder="Select"
                        name="Trading"
                        value={filters?.Trading}
                        onChange={(e) => saveValue(e)}
                        variant="standard"
                      >
                        <MenuItem value={"Has Warrants"}>Has Warrants</MenuItem>
                        <MenuItem value={"Has Rights"}>Has Rights</MenuItem>
                        <MenuItem value={"Optionable"}>Optionable</MenuItem>
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
                  {filters?.TargetSector ? (
                    <Image
                      src={crossIconSvg}
                      alt="filterSvg"
                      width={18}
                      height={18}
                      onClick={() =>
                        setFilters({ ...filters, TargetSector: null })
                      }
                    />
                  ) : null}
                  <FormControl sx={{ m: 2, minWidth: 180 }}>
                    <InputLabel htmlFor="demo-dialog-native">
                      Target Sector
                    </InputLabel>
                    <Select
                      placeholder="Select"
                      name="TargetSector"
                      value={filters?.TargetSector}
                      onChange={(e) => saveValue(e)}
                      variant="standard"
                    >
                      <MenuItem value={"Tech"}>Tech</MenuItem>
                      <MenuItem value={"Energy"} disabled={!isUser}>
                        Energy{" "}
                        <Image
                          src={proSvg}
                          alt="filterSvg"
                          width={50}
                          height={32}
                        />
                      </MenuItem>
                      <MenuItem value={"Financials"} disabled={!isUser}>
                        Financials{" "}
                        <Image
                          src={proSvg}
                          alt="filterSvg"
                          width={50}
                          height={32}
                        />
                      </MenuItem>
                      <MenuItem value={"Communications"} disabled={!isUser}>
                        Communications
                        <Image
                          src={proSvg}
                          alt="filterSvg"
                          width={50}
                          height={32}
                        />
                      </MenuItem>
                      <MenuItem value={"Materials"} disabled={!isUser}>
                        Materials
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
                  {filters?.TargetRegion ? (
                    <Image
                      src={crossIconSvg}
                      alt="filterSvg"
                      width={18}
                      height={18}
                      onClick={() =>
                        setFilters({ ...filters, TargetRegion: null })
                      }
                    />
                  ) : null}
                  <FormControl sx={{ m: 2, minWidth: 180 }}>
                    <InputLabel htmlFor="demo-dialog-native">
                      TargetRegion
                    </InputLabel>
                    <Select
                      placeholder="Select"
                      name="TargetRegion"
                      value={filters?.TargetRegion}
                      onChange={(e) => saveValue(e)}
                      variant="standard"
                    >
                      <MenuItem value={"U.S. & Canada"}>U.S. & Canada</MenuItem>
                      <MenuItem value={"Latin America"} disabled={!isUser}>
                        Latin America
                        <Image
                          src={proSvg}
                          alt="filterSvg"
                          width={50}
                          height={32}
                        />
                      </MenuItem>
                      <MenuItem value={" Asia & Oceania"} disabled={!isUser}>
                        Asia & Oceania
                        <Image
                          src={proSvg}
                          alt="filterSvg"
                          width={50}
                          height={32}
                        />
                      </MenuItem>
                      <MenuItem value={"Africa"} disabled={!isUser}>
                        Africa
                        <Image
                          src={proSvg}
                          alt="filterSvg"
                          width={50}
                          height={32}
                        />
                      </MenuItem>
                      <MenuItem value={"Europe"} disabled={!isUser}>
                        Europe
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
                  {filters?.De_SPAC_Closing_Year ? (
                    <Image
                      src={crossIconSvg}
                      alt="filterSvg"
                      width={18}
                      height={18}
                      onClick={() =>
                        setFilters({ ...filters, De_SPAC_Closing_Year: null })
                      }
                    />
                  ) : null}
                  <FormControl sx={{ m: 2, minWidth: 180 }}>
                    <InputLabel htmlFor="demo-dialog-native">
                      De-SPAC Closing Year
                    </InputLabel>
                    <Select
                      placeholder="Select"
                      name="De_SPAC_Closing_Year"
                      value={filters?.De_SPAC_Closing_Year}
                      onChange={(e) => saveValue(e)}
                      variant="standard"
                    >
                      <MenuItem value={2023}>2023</MenuItem>
                      <MenuItem value={2022}>2022</MenuItem>
                      <MenuItem value={2021}>2021</MenuItem>
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
            <FormControl sx={{ m: 1, width: 300 }}>
              <InputLabel id="demo-multiple-checkbox-label">
                Find Column
              </InputLabel>
              <Select
                labelId="demo-multiple-checkbox-label"
                id="demo-multiple-checkbox"
                multiple
                value={personName}
                onChange={handleChange}
                // input={<OutlinedInput label="Tag" />}
                renderValue={(selected) => selected.join(", ")}
                // MenuProps={MenuProps}
              >
                {names.map((name: any) => (
                  <MenuItem key={name} value={name}>
                    <Checkbox checked={personName.indexOf(name) > -1} />
                    <ListItemText primary={name} />
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
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
