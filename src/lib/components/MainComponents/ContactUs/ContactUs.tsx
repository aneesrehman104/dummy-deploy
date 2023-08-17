import React, { Fragment, useEffect, useState } from "react";
import { getApiWithoutAuth } from "@/lib/ts/api";
import { URLs } from "@/lib/ts/apiUrl";
import { CommonfiButton } from "@/lib/components/CommonComponents";
import { TextField } from "@mui/material";
import { styled } from "@mui/material/styles";

import "./ContactUs.css";
interface PROPS {}

const ContactUs: React.FC<PROPS> = () => {

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
        <div className="contactUsUpdate">CONTACT US</div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            width: "100%",
            flexWrap: "wrap",
          }}
        >
          <div>
            <CssTextField placeholder="Enter first name " hiddenLabel />
          </div>
          <div>
            <CssTextField placeholder="Enter email address" hiddenLabel />
          </div>
        </div>
        <CssTextFieldMultiLine
          hiddenLabel
          multiline
          rows={4}
          placeholder="Enter message"
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
            title="Send Message"
          />
        </div>
      </div>
    </section>
  );
}

export default ContactUs;
