import React from "react";
import { CommonfiButton } from "@/lib/components/CommonComponents";
import "./contact-us.css";
import { CssTextField, CssTextFieldMultiLine } from "./constants";

interface PROPS {}

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
      </main>
    </section>
  );
};

export default ContactUs;
