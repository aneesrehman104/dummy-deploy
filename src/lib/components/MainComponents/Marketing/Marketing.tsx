import React from "react";
import UnauthenticatedNavBar from "../../CommonComponents/UnauthenticatedNavBar/UnauthenticatedNavBar";
import TrackingOnePlace from "./TrackingOnePlace/TrackingOnePlace";
import PowerOfPro from "./PowerOfPro/PowerOfPro";
import Plans from "../Plans/Plans";
const Marketing = () => {
  return (
    <main>
      <section>
        <UnauthenticatedNavBar />
        <TrackingOnePlace />
        <PowerOfPro />
        <Plans/>
      </section>
    </main>
  );
};

export default Marketing;
