import React from "react";
import "./plans.css";
import { useState, useEffect } from "react";
import { CommonfiButton } from "../../CommonComponents";
import { useMemberstack, useCheckout } from "@memberstack/react";
import { useRouter, usePathname, useSearchParams } from "next/navigation";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

function Plans() {
  const checkout = useCheckout();
  const router = useRouter();
  // const { pathname, query } = router
// console.log('=================query',pathname,query)
  // const { fromDropdown } = router?.query;
  const handleCheckout = async (id: any) => {
    checkout({
      successUrl: "http://localhost:3000/checkout",
      priceId: id,
      cancelUrl: "http://localhost:3000/ipos",
    });
  };
  return (
    <section
      style={{
        background: "#D2ECF9",
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
      }}
    >
      <div>
        {/* {!query?.fromDropdown ? ( */}
          <div>
            <ArrowBackIcon
              onClick={() => {
                router.back();
              }}
            />
          </div>
         {/* ) : null} */}

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
            Unlock the full potential
          </div>
          <div style={{ width: "80%", marginTop: 10 }}>
            Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut
            fugit, sed quia consequuntur magni dolores eos qui ratione
            voluptatem.
          </div>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "flex-end",
            flexWrap: "wrap",
            marginTop: 15,
          }}
        >
          <div className="planStyle">
            <div className="plansBackground">Free</div>
            <div>
              <div className="plansPrice">View-only dashboard access</div>
              <ul style={{ marginLeft: -29 }}>
                <li style={{ marginTop: 15 }}>Sign up to use the Watchlist</li>
                <li style={{ marginTop: 15, textDecoration: "line-through" }}>
                  Set notifications
                </li>
                <li style={{ marginTop: 15, textDecoration: "line-through" }}>
                  {" "}
                  Customize & export tables
                </li>
                <li style={{ marginTop: 15, textDecoration: "line-through" }}>
                  {" "}
                  Daily premium newsletter
                </li>
              </ul>
            </div>
            <div>
              <CommonfiButton
                variant="contained"
                className="buttonStylePlans paddingTop"
                title="CONTINUE"
                onClick={() => handleCheckout("prc_commonfi-11dh0xk5")}
              />
            </div>
          </div>
          <div className="planStyle" style={{ height: 420 }}>
            <div className="plansBackground" style={{ background: "#0AAC85" }}>
              PRO
            </div>
            <div>
              <div className="plansPrice">
                <div>
                  <div>$60 </div>
                  <div> monthly</div>{" "}
                </div>
                <div style={{ color: "grey", fontSize: 16 }}>or </div>{" "}
                <div>
                  <div>$500 </div>
                  <div>annually </div>
                  <span style={{ color: "#0AAC85", fontSize: 16 }}>
                    ($41.66/mo)
                  </span>
                </div>
              </div>
              <ul style={{ marginLeft: -29 }}>
                <li style={{ marginTop: 15 }}>Sign up to use the Watchlist</li>
                <li style={{ marginTop: 15 }}>Set notifications</li>
                <li style={{ marginTop: 15 }}> Customize & export tables</li>
                <li style={{ marginTop: 15 }}> Export tables</li>
                <li style={{ marginTop: 15 }}> Daily premium newsletter</li>
              </ul>
            </div>
            <div>
              <CommonfiButton
                variant="contained"
                className="buttonStylePlans paddingTop"
                title="PURCHASE"
                onClick={() => handleCheckout("prc_commonfi-11dh0xk5")}
              />
            </div>
          </div>
          <div className="planStyle">
            <div className="plansBackground" style={{ background: "#1991AC" }}>
              PLUS
            </div>
            <div>
              <div className="plansPrice">
                <div>
                  <div>$10 </div>
                  <div> monthly</div>{" "}
                </div>
                <div style={{ color: "grey", fontSize: 16 }}>or </div>{" "}
                <div>
                  <div>$79.99 </div>
                  <div>annually </div>
                  <span style={{ color: "grey", fontSize: 16 }}>
                    ($6.66/mo)
                  </span>
                </div>
              </div>
              <ul style={{ marginLeft: -29 }}>
                <li style={{ marginTop: 15 }}>Sign up to use the Watchlist</li>
                <li style={{ marginTop: 15 }}>Set notifications</li>
                <li style={{ marginTop: 15 }}> Customize table Filters</li>
                <li style={{ marginTop: 15, textDecoration: "line-through" }}>
                  {" "}
                  Export tables
                </li>
                <li style={{ marginTop: 15, textDecoration: "line-through" }}>
                  {" "}
                  Daily premium newsletter
                </li>
              </ul>
            </div>
            <div>
              <CommonfiButton
                variant="contained"
                className="buttonStylePlans paddingTop"
                title="START FREE 7-day TRIAL"
                onClick={() => handleCheckout("prc_commonfi-11dh0xk5")}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Plans;
