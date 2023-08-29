import React, { Fragment, useEffect, useState } from "react";
import { URLs } from "@/lib/ts/apiUrl";
import { CommonfiButton } from "@/lib/components/CommonComponents";
import { MenuItem } from "@mui/material";
import { timeZones } from "./constants";
import {
  RequestDemoCssTextField,
  RequestDemoCssTextFieldMultiLine,
  CssSelect,
} from "@lib/styled-components/index.styled";
import "./requestdemo.css";

interface PROPS {}

const RequestDemo: React.FC<PROPS> = () => {
  const [timeZone, setTimeZone] = React.useState<string>("");

  const handleChange = (event: any) => {
    const { value } = event.target;
    setTimeZone(value);
  };

  return (
    <main
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
        <header className="contactUsUpdate">SCHEDULE A DEMO</header>
        <section
          style={{
            display: "flex",
            justifyContent: "space-between",
            width: "100%",
            flexWrap: "wrap",
          }}
        >
          <div>
            <RequestDemoCssTextField
              placeholder="Enter full name "
              hiddenLabel
            />
          </div>
          <div>
            <RequestDemoCssTextField
              placeholder="Enter your email address"
              hiddenLabel
            />
          </div>
        </section>
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
        <RequestDemoCssTextFieldMultiLine
          hiddenLabel
          multiline
          rows={4}
          placeholder="Let us know what your availability is, we will send an invite shortly."
        />

        <section>
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
        </section>
      </div>
    </main>
  );
};

export default RequestDemo;
