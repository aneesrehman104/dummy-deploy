import React from "react";
import Company from "./CompanyChart/Company";
import News from "./News/News";
import PressReleases from "./PressReleases/PressReleases";
const MergerCompany = () => {
  return (
    <main>
      <section>
        <Company />
        <News />
        <PressReleases />
      </section>
    </main>
  );
};

export default MergerCompany;
