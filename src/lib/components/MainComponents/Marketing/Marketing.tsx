import React from "react";
import UnauthenticatedNavBar from "../../CommonComponents/UnauthenticatedNavBar/UnauthenticatedNavBar";
import TrackingOnePlace from "./TrackingOnePlace/trackingoneplace.component";
import PowerOfPro from "./PowerOfPro/powerofpro.component";
import Plans from "../Plans/plans.component";
import Creators from "./Creators/creators.component";
import GetFreeUpdates from "./GetFreeUpdates/getfreeupdates.component";
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
