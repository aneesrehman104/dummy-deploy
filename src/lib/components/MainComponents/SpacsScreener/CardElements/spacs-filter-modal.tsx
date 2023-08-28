import React, { Fragment } from "react";

import {
  CssTextSpacsField,
  FilterModalStyle,
  CssTextFieldBorder,
} from "@/lib/styled-components/index.styled";
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

import styles from "./card-elements.module.css";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import {
  SPACProgressStatusOptions,
  IPOYearsOptions,
  VotesDeadlinesOptions,
  SPACProfileOptions,
  TradingOptions,
  TargetSectorOptions,
  TargetRegionOptions,
  ActivityOptions,
} from "./constants";
import Checkbox from "@mui/material/Checkbox";

export const SpacsFilterModal: React.FC<{
  openFilterModal: boolean;
  selectedTab: number;
  setOpenFilterModal: any;
  clearAll: any;
  filterArray: any;
  handleChangeFilter:any;
  user:any,
  applyFilters:any
}> = ({
  openFilterModal,
  setOpenFilterModal,
  selectedTab,
  clearAll,
  filterArray,
  handleChangeFilter,
  user,
  applyFilters
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
                    filterArray?.mergerVoteSet
                      ? filterArray?.mergerVoteSet.map((item: any) => item.key)
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
                    handleChangeFilter("spacProfile", event, SPACProfileOptions)
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
                    filterArray?.mergerVoteSet
                      ? filterArray?.mergerVoteSet.map((item: any) => item.key)
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
                    handleChangeFilter("spacProfile", event, SPACProfileOptions)
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
