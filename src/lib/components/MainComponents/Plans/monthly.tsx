import React, { useState } from "react";
import "./plans.css";
import { CommonfiButton } from "../../CommonComponents";
interface PROPS {
  handleCheckout: any;
}

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
  height: "48px",
  width: "100%",
  marginTop: "15px",
  background: "#0aac85",
};

const MonthlyPlans: React.FC<PROPS> = ({ handleCheckout }) => {
  return (
    <>
      <section className="secondsectionOuterContainer">
        <section className="planStyle">
          <header className="plansBackground">Free</header>
          <div>
            <div className="plansPrice">View-only dashboard access</div>
            <ul style={{ marginLeft: -29 }}>
              <li className="marginTop15">Sign up to use the Watchlist</li>
              <div className="marginTop15TextDecoration">Set notifications</div>
              <div className="marginTop15TextDecoration">
                {" "}
                Customize & export tables
              </div>
              <div className="marginTop15TextDecoration">
                {" "}
                Daily premium newsletter
              </div>
            </ul>
          </div>
          <div>
            <CommonfiButton
              variant="contained"
              sx={buttonStyleMui}
              title="Sign Up"
              onClick={() => handleCheckout("prc_commonfi-11dh0xk5")}
            />
          </div>
        </section>
        <section className="planStylePro">
          <header className="plansBackground" style={{ color: "#0AAC85" }}>
            PRO
          </header>
          <div>
            <div className="plansPrice">
              <div>
                <div>$60 monthly</div>
              </div>
              {/* <div style={{ color: "grey", fontSize: 16 }}>or </div>{" "}
                  <div>
                    <div>$500 </div>
                    <div>
                      annually{" "}
                      <span style={{ color: "#0AAC85", fontSize: 16 }}>
                        ($41.66/mo)
                      </span>
                    </div>
                  </div> */}
            </div>
            <ul style={{ marginLeft: -29 }}>
              <li className="marginTop15">Sign up to use the Watchlist</li>
              <li className="marginTop15">Set notifications</li>
              <li className="marginTop15"> Customize & export tables</li>
              <li className="marginTop15"> Export tables</li>
              <li className="marginTop15"> Daily premium newsletter</li>
            </ul>
          </div>
          <div>
            <CommonfiButton
              variant="contained"
              sx={buttonStyleMui}
              title="PURCHASE"
              onClick={() => handleCheckout("prc_commonfi-11dh0xk5")}
            />
          </div>
        </section>
        <section className="planStyle">
          <header className="plansBackground" style={{ color: "#1991AC" }}>
            PLUS
          </header>
          <div>
            <div className="plansPrice">
              <div>
                <div>$10 monthly</div>
                {/* <div> monthly</div>{" "} */}
              </div>
              {/* <div style={{ color: "grey", fontSize: 16 }}>or </div>{" "}
                  <div>
                    <div>$79.99 </div>
                    <div>
                      annually{" "}
                      <span style={{ color: "grey", fontSize: 16 }}>
                        ($6.66/mo)
                      </span>
                    </div>
                  </div> */}
            </div>
            <ul style={{ marginLeft: -29 }}>
              <li className="marginTop15">Sign up to use the Watchlist</li>
              <li className="marginTop15">Set notifications</li>
              <li className="marginTop15"> Customize table Filters</li>
              <div className="marginTop15TextDecoration"> Export tables</div>
              <div className="marginTop15TextDecoration">
                {" "}
                Daily premium newsletter
              </div>
            </ul>
          </div>
          <div>
            <CommonfiButton
              variant="contained"
              sx={buttonStyleMui}
              title="START FREE 7-day TRIAL"
              onClick={() => handleCheckout("prc_commonfi-11dh0xk5")}
            />
          </div>
        </section>
      </section>
    </>
  );
};

export default MonthlyPlans;
