import React from "react";
import UnauthenticatedNavBar from "../../CommonComponents/UnauthenticatedNavBar/UnauthenticatedNavBar";
import TrackingOnePlace from "./TrackingOnePlace/TrackingOnePlace";
import PowerOfPro from "./PowerOfPro/PowerOfPro";
import Plans from "../Plans/Plans";
import Creators from "./Creators/Creators";
import GetFreeUpdates from "./GetFreeUpdates/GetFreeUpdates";
import MarketingFooter from "./MarketingFooter/MarketingFooter";
const Marketing = () => {
  return (
    <main>
      <section>
        <UnauthenticatedNavBar />
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
