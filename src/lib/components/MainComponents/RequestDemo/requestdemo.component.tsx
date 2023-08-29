import React, { Fragment, useEffect, useState } from "react";
import { getApiWithoutAuth } from "@/lib/ts/api";
import { URLs } from "@/lib/ts/apiUrl";
import { CommonfiButton } from "@/lib/components/CommonComponents";
import { TextField, Select, MenuItem, InputLabel } from "@mui/material";
import { styled } from "@mui/material/styles";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
import utc from "dayjs/plugin/utc";
import dayjs, { Dayjs } from "dayjs";
import "./requestdemo.css";

interface PROPS {}

const RequestDemo: React.FC<PROPS> = () => {
  const [timeZone, setTimeZone] = React.useState<string>("");

  const CssTextField = styled(TextField)({
    width: "278px",
    height: "56px",
    marginRight: "30px",
    color: "#ffffff", // or "white"
    border: "1px solid #0aac85",
    borderRadius: "4px",
    fontFamily: "Open Sans",
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: "16px",
    marginTop: "10px",
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        border: "none",
      },
      "& input": {
        color: "#ffffff", // Sets the input text color to white
      },
      "&::placeholder": {
        color: "#ffffff", // Sets the placeholder color to white
      },
      "&::-moz-placeholder": {
        color: "#ffffff",
        opacity: 1,
      },
    },
  });

  const CssTextFieldMultiLine = styled(TextField)({
    width: "95%",
    height: "117px",
    color: "white", // Text color (white in this case)
    border: "1px solid #0aac85",
    borderRadius: "4px",
    fontFamily: "Open Sans",
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: "16px",
    marginTop: "30px",
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        border: "none",
      },
      "& textarea::placeholder": {
        color: "white", // Placeholder color (white in this case)
      },
      "& .MuiOutlinedInput-input": {
        color: "white", // Text color (white in this case)
      },
      "& .MuiInputLabel-root": {
        color: "white", // Label color (white in this case)
      },
    },
  });
  const CssSelect = styled(Select)({
    width: "278px",
    height: "56px",
    marginRight: "30px",
    color: "#ffffff",
    border: "1px solid #0aac85",
    borderRadius: "4px",
    fontFamily: "Open Sans",
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: "16px",
    marginTop: "20px",
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        border: "none",
      },
      "& input": {
        color: "#ffffff",
      },
      "&::placeholder": {
        color: "#ffffff",
      },
      "&::-moz-placeholder": {
        color: "#ffffff",
        opacity: 1,
      },
    },
    "& .MuiSelect-icon": {
      color: "#ffffff", // Sets the select icon color to white
    },
  });
  const timeZones = [
    { value: "UTC", label: "Coordinated Universal Time (UTC)" },
    { value: "GMT", label: "Greenwich Mean Time (GMT)" },
    { value: "BST", label: "British Summer Time (BST)" },
    { value: "CET", label: "Central European Time (CET)" },
    { value: "CEST", label: "Central European Summer Time (CEST)" },
    { value: "EET", label: "Eastern European Time (EET)" },
    { value: "EEST", label: "Eastern European Summer Time (EEST)" },
    { value: "WET", label: "Western European Time (WET)" },
    { value: "WEST", label: "Western European Summer Time (WEST)" },
    { value: "AST", label: "Atlantic Standard Time (AST)" },
    { value: "ADT", label: "Atlantic Daylight Time (ADT)" },
    { value: "EST", label: "Eastern Standard Time (EST)" },
    { value: "EDT", label: "Eastern Daylight Time (EDT)" },
    { value: "CST", label: "Central Standard Time (CST)" },
    { value: "CDT", label: "Central Daylight Time (CDT)" },
    { value: "MST", label: "Mountain Standard Time (MST)" },
    { value: "MDT", label: "Mountain Daylight Time (MDT)" },
    { value: "PST", label: "Pacific Standard Time (PST)" },
    { value: "PDT", label: "Pacific Daylight Time (PDT)" },
    { value: "AKST", label: "Alaska Standard Time (AKST)" },
    { value: "AKDT", label: "Alaska Daylight Time (AKDT)" },
    { value: "HAST", label: "Hawaii-Aleutian Standard Time (HAST)" },
    { value: "HADT", label: "Hawaii-Aleutian Daylight Time (HADT)" },
  ];

  const handleChange = (event: any) => {
    const { value } = event.target;
    setTimeZone(value);
  };

  return (
    <section
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "#20608B",
        height: "95vh",
        padding: 20,
      }}
    >
      <div>
        <div className="contactUsUpdate">SCHEDULE A DEMO</div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            width: "100%",
            flexWrap: "wrap",
          }}
        >
          <div>
            <CssTextField placeholder="Enter full name " hiddenLabel />
          </div>
          <div>
            <CssTextField placeholder="Enter your email address" hiddenLabel />
          </div>
        </div>
        <CssSelect
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={timeZone}
          onChange={handleChange}
        >
          <MenuItem value="">
            <em>Select TimeZone</em>
          </MenuItem>
          {timeZones.map((zone) => (
            <MenuItem key={zone.value} value={zone.value}>
              {zone.label}
            </MenuItem>
          ))}
        </CssSelect>
        <CssTextFieldMultiLine
          hiddenLabel
          multiline
          rows={4}
          placeholder="Let us know what your availability is, we will send an invite shortly."
        />


        <div>
          <CommonfiButton
            sx={{
              "&:hover": {
                backgroundColor: "#263c6f",
                color: "white",
              },
              "&:active": {
                boxShadow: "none",
                backgroundColor: "#0AAC85",
              },
            }}
            variant="contained"
            className="buttonStyleSendMessage"
            title="send demo request"
          />
        </div>
      </div>
    </section>
  );
}

export default RequestDemo;
