import React from "react";
import UnauthenticatedNavBar from "../../CommonComponents/UnauthenticatedNavBar/unauthenticated-navbar.component";
import TrackingOnePlace from "./TrackingOnePlace/trackingoneplace.component";
import PowerOfPro from "./PowerOfPro/powerofpro.component";
import Plans from "../Plans/plans.component";
import ContactUs from "../ContactUs";
import Creators from "./Creators/creators.component";
import GetFreeUpdates from "./GetFreeUpdates/get-free-updates.component";
import MarketingFooter from "./MarketingFooter/marketingfooter.component";
import { Footer } from "../../CommonComponents";
import Slider from "./Sider/sider.component";
import Navbar from "../../CommonComponents/Navbar/navbar.component";

const Marketing = () => {
  return (
    <section>
      {/* <Navbar/> */}
      {/* <UnauthenticatedNavBar /> */}
      <Slider />
      <Creators />
      <TrackingOnePlace />
      <PowerOfPro />
      <div id="pricing">
        <Plans />
      </div>
      {/* <GetFreeUpdates/> */}
      <ContactUs />
      {/* <MarketingFooter/> */}
      {/* <Footer /> */}
    </section>
  );
};

export default Marketing;
