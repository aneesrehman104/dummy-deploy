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
import selectedColumnSvg from "@public/selectedColumnSvg.svg";
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

export const SpacsPlansModal: React.FC<{
  openModalCheckScreen: boolean;
  setOpenModalCheckScreen: any;
  userType:string,
  previousSaveScreen:any,
  setName:any,
  name:any,
  saveScreenApi:any
}> = ({
  openModalCheckScreen,
  setOpenModalCheckScreen,
  userType,
  previousSaveScreen,
  setName,
  name,
  saveScreenApi
}) => {
  return (
    <Modal
    keepMounted
    open={openModalCheckScreen}
    onClose={() => setOpenModalCheckScreen(false)}
    aria-labelledby="keep-mounted-modal-title"
    aria-describedby="keep-mounted-modal-description"
  >
    <>
      <Box sx={FilterModalStyle}>
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
  );
};
