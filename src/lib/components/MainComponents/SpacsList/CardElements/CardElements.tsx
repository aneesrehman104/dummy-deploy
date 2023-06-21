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
import { SkeltonTable } from "@/lib/components/CommonComponents";
import {
  TextField,
  InputAdornment,
  Badge,
  Modal,
  Box,
  FormControl,
  InputLabel,
  Select,
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
  const [spacsListData, setSpacsListData] = useState<any>();
  const [isUser, setIsUser] = useState(false);
  const [filterCount, setFilerCount] = useState(0);

  const [itemsPerPage, setItemPerPage] = useState(5);
  const [filters, setFilters] = useState({
    LiquidationYear: null,
    LiquidationStatus: null,
    SPACProgressStatus: null,
    VotesDeadlines: null,
    TargetSector: null,
    TargetRegion: null,
    De_SPAC_Closing_Year: null,
  });
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
            <MyTable
              data={spacsListData?.dataset}
              itemsPerPage={itemsPerPage}
              setItemPerPage={setItemPerPage}
              currentPage={currentPage}
              paginate={paginate}
              totalLength={spacsListData?.additional_dataset}
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
                  <FormControl sx={{ m: 2, minWidth: 180 }}>
                    <InputLabel htmlFor="demo-dialog-native">
                      SPACProgressStatus
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
                        <MenuItem value={"Approaching Deadline"}>
                          Approaching Deadline
                        </MenuItem>
                        <MenuItem value={"Merger Vote Set"}>
                          Merger Vote Set
                        </MenuItem>
                        <MenuItem value={"Extension Vote Set"}>
                          Extension Vote Set
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
            ) : selectedTab === 1 ? (
              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                }}
              >
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
                        <MenuItem value={"Approaching Deadline"}>
                          Approaching Deadline
                        </MenuItem>
                        <MenuItem value={"Extension Vote Set"}>
                          Extension Vote Set
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
            ) : selectedTab === 2 ? (
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-around",
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
                      Target Region
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
                      Target Region
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
                      SPACProgressStatus
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
                        <MenuItem value={"Approaching Deadline"}>
                          Approaching Deadline
                        </MenuItem>
                        <MenuItem value={"Merger Vote Set"}>
                          Merger Vote Set
                        </MenuItem>
                        <MenuItem value={"Extension Vote Set"}>
                          Extension Vote Set
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
                  {filters?.LiquidationStatus ? (
                    <Image
                      src={crossIconSvg}
                      alt="filterSvg"
                      width={18}
                      height={18}
                      onClick={() =>
                        setFilters({ ...filters, LiquidationStatus: null })
                      }
                    />
                  ) : null}
                  <div style={{ display: "flex", alignItems: "center" }}>
                    <FormControl sx={{ m: 2, minWidth: 180 }}>
                      <InputLabel htmlFor="demo-dialog-native">
                        Liquidation Status
                      </InputLabel>
                      <Select
                        placeholder="Select"
                        name="LiquidationStatus"
                        value={filters?.LiquidationStatus}
                        onChange={(e) => saveValue(e)}
                        variant="standard"
                      >
                        <MenuItem value={"Liquidated"}>Liquidated</MenuItem>
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
                  {filters?.LiquidationYear ? (
                    <Image
                      src={crossIconSvg}
                      alt="filterSvg"
                      width={18}
                      height={18}
                      onClick={() =>
                        setFilters({ ...filters, LiquidationYear: null })
                      }
                    />
                  ) : null}
                  <div style={{ display: "flex", alignItems: "center" }}>
                    <FormControl sx={{ m: 2, minWidth: 180 }}>
                      <InputLabel htmlFor="demo-dialog-native">
                        Liquidation Year
                      </InputLabel>
                      <Select
                        placeholder="Select"
                        name="LiquidationYear"
                        value={filters?.LiquidationYear}
                        onChange={(e) => saveValue(e)}
                        variant="standard"
                      >
                        <MenuItem value={"2023"}>2023</MenuItem>
                        <MenuItem value={"2022"}>2022</MenuItem>
                        <MenuItem value={"2021"}>2021</MenuItem>
                        <MenuItem value={"2020"}>2020</MenuItem>
                        <MenuItem value={"2019"}>2019</MenuItem>
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
    </section>
  );
}

export default CardElements;
