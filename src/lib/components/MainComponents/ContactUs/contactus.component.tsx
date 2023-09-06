import React from "react";
import { CommonfiButton } from "@/lib/components/CommonComponents";
import "./contact-us.css";
import { CssTextField, CssTextFieldMultiLine } from "./constants";

interface PROPS {}
const buttonStyleMui = {
  "&:hover": {
    backgroundColor: "#263c6f",
    color: "white",
  },
  "&:active": {
    boxShadow: "none",
    backgroundColor: "#0AAC85",
  },
  border: "1px solid #0aac85",
  boxShadow:
    "0px 1px 5px rgba(0, 0, 0, 0.12), 0px 2px 2px rgba(0, 0, 0, 0.14), 0px 3px 1px -2px rgba(0, 0, 0, 0.2)",
  borderRadius: "4px",
  height: "40px",
  width: "196px",
  marginTop: "20px",
  background: "#0aac85",
};

const ContactUs: React.FC<PROPS> = () => {
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
      <main>
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
            sx={buttonStyleMui}
            variant="contained"
            title="Send Message"
          />
        </div>
      </main>
    </section>
  );
};

export default ContactUs;
