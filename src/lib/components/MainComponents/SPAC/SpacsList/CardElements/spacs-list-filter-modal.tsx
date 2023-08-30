import React, { Fragment } from "react";

import { FilterModalStyle } from "@/lib/styled-components/index.styled";
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
  ChipPropsVariantOverrides,
} from "@mui/material";
import Image from "next/image";
import crossIconSvg from "@public/crossIconSvg.svg";
import proSvg from "@public/ProSvg.svg";
import styles from "./spacs-list-element.module.css";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import {
  SPACProgressStatusOptions,
  IPOYearsOptions,
  LiquidationYearOptions,
  VotesDeadlinesOptions,
  LiquidationStatusOptions,
  TargetSectorOptions,
  TargetRegionOptions,
} from "./constants";
import Checkbox from "@mui/material/Checkbox";

export const SpacsListFilterModal: React.FC<{
  openFilterModal: boolean;
  selectedTab: number;
  setOpenFilterModal: any;
  clearAll: any;
  filterArray: any;
  handleChangeFilter: any;
  user: any;
  applyFilters: any;
}> = ({
  openFilterModal,
  setOpenFilterModal,
  selectedTab,
  clearAll,
  filterArray,
  handleChangeFilter,
  user,
  applyFilters,
}) => {
  return (
    <Modal
      keepMounted
      open={openFilterModal}
      onClose={() => setOpenFilterModal(false)}
      aria-labelledby="keep-mounted-modal-title"
      aria-describedby="keep-mounted-modal-description"
    >
      <>
        <Box sx={FilterModalStyle}>
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
                            (selectedItem: any) => selectedItem.key === item.key
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
                      ? filterArray?.VotesDeadlines.map((item: any) => item.key)
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
                            (selectedItem: any) => selectedItem.key === item.key
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
                      ? filterArray?.VotesDeadlines.map((item: any) => item.key)
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
                            (selectedItem: any) => selectedItem.key === item.key
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
                            (selectedItem: any) => selectedItem.key === item.key
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
                            (selectedItem: any) => selectedItem.key === item.key
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
                            (selectedItem: any) => selectedItem.key === item.key
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
                            (selectedItem: any) => selectedItem.key === item.key
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
                            (selectedItem: any) => selectedItem.key === item.key
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
                            (selectedItem: any) => selectedItem.key === item.key
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
                            (selectedItem: any) => selectedItem.key === item.key
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
                      ? filterArray?.VotesDeadlines.map((item: any) => item.key)
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
                            (selectedItem: any) => selectedItem.key === item.key
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
                            (selectedItem: any) => selectedItem.key === item.key
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
                            (selectedItem: any) => selectedItem.key === item.key
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

            <Button variant="contained" color="success" onClick={applyFilters}>
              Apply
            </Button>
          </div>
        </Box>
      </>
    </Modal>
  );
};
