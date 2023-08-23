import React from "react";
import UnauthenticatedNavBar from "../../CommonComponents/UnauthenticatedNavBar/unauthenticated-navbar.component";
import TrackingOnePlace from "./TrackingOnePlace/trackingoneplace.component";
import PowerOfPro from "./PowerOfPro/powerofpro.component";
import Plans from "../Plans/plans.component";
import Creators from "./Creators/creators.component";
import GetFreeUpdates from "./GetFreeUpdates/get-free-updates.component";
import MarketingFooter from "./MarketingFooter/marketingfooter.component";
import Slider from './Sider/sider.component'
const Marketing = () => {
  return (
    <main>
      <section>
        <UnauthenticatedNavBar />
        <Slider/>
        <TrackingOnePlace />
        <PowerOfPro />
        <Plans/>
        <Creators/>
        <GetFreeUpdates/>
        <MarketingFooter/>
      </section>
    </main>
  );
};

export default Marketing;
