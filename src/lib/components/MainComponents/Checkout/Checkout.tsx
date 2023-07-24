import React from "react";
import "./checkout.css";
import { useState, useEffect } from "react";
import { CommonfiButton } from "../../CommonComponents";
import { useMemberstack, useCheckout } from "@memberstack/react";
import { useRouter, usePathname, useSearchParams } from "next/navigation";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import Image from "next/image";
import footerLogo from "../../../../../public/footerLogo.svg"

function Checkout() {
  const router = useRouter();

  return (
    <section
      style={{
        background: "#20608b",
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
      }}
    >

      <div>
      <div style={{ marginBottom:50 }}>
        <Image src={footerLogo} alt="footerImage" width={200} height={50} />
      </div>
        <div
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
          }}
        >
          <div style={{ color: "#263C6F", fontWeight: 500, fontSize: 33 }}>
            Amazing
          </div>
          <div style={{ width: "100%", marginTop: 10, marginBottom: 20 }}>
            Congratulations. You are done
          </div>
          <CommonfiButton
            variant="contained"
            className="buttonStylePlans paddingTop"
            title="Go to Home"
            onClick={() => router.push("/home")}
          />
        </div>
      </div>
    </section>
  );
}

export default Checkout;
