import React from "react";
import Company from "./CompanyChart/Company";
import News from "./News/News";
import PressReleases from "./PressReleases/PressReleases";
import CompanyInfo from "./CompanyInfo/CompaniInfo";
const MergerCompany = () => {
  return (
    <main>
      <section>
        <Company />
        <CompanyInfo />
        <News />
        <PressReleases />
      </section>
    </main>
  );
};

export default MergerCompany;
