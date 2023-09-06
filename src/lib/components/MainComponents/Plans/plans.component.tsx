import React, { useState } from "react";
import "./plans.css";
import { CommonfiButton } from "../../CommonComponents";
import { useCheckout } from "@memberstack/react";
import { useRouter } from "next/navigation";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import MonthlyPlan from "./monthly";
import YearlyPlan from "./yearly";

interface PROPS {}

const Plans: React.FC<PROPS> = () => {
  const checkout = useCheckout();
  const router = useRouter();
  const [value, setValue] = useState<string>("1");

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };
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
        <Box>
          <TabContext value={value}>
            <Box
              sx={{
                width: "100%",
                display: "flex",
                justifyContent: "center",
                marginTop: "20px",
              }}
            >
              <TabList
                onChange={handleChange}
                aria-label="lab API tabs example"
              >
                <Tab label="Monthly" value="1" />
                <Tab label="Annually" value="2" />
              </TabList>
            </Box>
            <TabPanel value="1" sx={{padding: '0px' }}>
              <MonthlyPlan handleCheckout={handleCheckout} />
            </TabPanel>
            <TabPanel value="2" sx={{padding: '0px' }}>
              <YearlyPlan handleCheckout={handleCheckout} />
            </TabPanel>
          </TabContext>
        </Box>
      </div>
    </main>
  );
};

export default Plans;
