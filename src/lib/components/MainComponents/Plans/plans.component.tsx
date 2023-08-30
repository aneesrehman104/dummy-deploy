import React from "react";
import "./plans.css";
import { CommonfiButton } from "../../CommonComponents";
import { useCheckout } from "@memberstack/react";
import { useRouter } from "next/navigation";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
interface PROPS {}

const Plans: React.FC<PROPS> = () => {
  const checkout = useCheckout();
  const router = useRouter();
  const handleCheckout = async (id: any) => {
    checkout({
      successUrl: "http://localhost:3000/checkout",
      priceId: id,
      cancelUrl: "http://localhost:3000/ipos",
    });
  };
  return (
    <main className="planMainContainer">
      <div>
        {/* <div>
            <ArrowBackIcon
              onClick={() => {
                router.back();
              }}
            />
          </div> */}
        <section className="firstsectionOuterContainer">
          <header className="firstsectionInnerContainerHeading">
            Unlock the full potential
          </header>
          <div className="firstsectionInnerContainerText">
            Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut
            fugit, sed quia consequuntur magni dolores eos qui ratione
            voluptatem.
          </div>
        </section>
        <section className="secondsectionOuterContainer">
          <section className="planStyle">
            <header className="plansBackground">Free</header>
            <div>
              <div className="plansPrice">View-only dashboard access</div>
              <ul style={{ marginLeft: -29 }}>
                <li className="marginTop15">Sign up to use the Watchlist</li>
                <div className="marginTop15TextDecoration">
                  Set notifications
                </div>
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
                className="buttonStylePlans paddingTop"
                title="Sign Up"
                onClick={() => handleCheckout("prc_commonfi-11dh0xk5")}
              />
            </div>
          </section>
          <section className="planStylePro">
            <header className="plansBackground" style={{ background: "#0AAC85" }}>
              PRO
            </header>
            <div>
              <div className="plansPrice">
                <div>
                  <div>$60 </div>
                  <div> monthly</div>{" "}
                </div>
                <div style={{ color: "grey", fontSize: 16 }}>or </div>{" "}
                <div>
                  <div>$500 </div>
                  <div>
                    annually{" "}
                    <span style={{ color: "#0AAC85", fontSize: 16 }}>
                      ($41.66/mo)
                    </span>
                  </div>
                </div>
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
                className="buttonStylePlans paddingTop"
                title="PURCHASE"
                onClick={() => handleCheckout("prc_commonfi-11dh0xk5")}
              />
            </div>
          </section>
          <section className="planStyle">
            <header className="plansBackground" style={{ background: "#1991AC" }}>
              PLUS
            </header>
            <div>
              <div className="plansPrice">
                <div>
                  <div>$10 </div>
                  <div> monthly</div>{" "}
                </div>
                <div style={{ color: "grey", fontSize: 16 }}>or </div>{" "}
                <div>
                  <div>$79.99 </div>
                  <div>
                    annually{" "}
                    <span style={{ color: "grey", fontSize: 16 }}>
                      ($6.66/mo)
                    </span>
                  </div>
                </div>
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
                className="buttonStylePlans paddingTop"
                title="START FREE 7-day TRIAL"
                onClick={() => handleCheckout("prc_commonfi-11dh0xk5")}
              />
            </div>
          </section>
        </section>
      </div>
    </main>
  );
};

export default Plans;
