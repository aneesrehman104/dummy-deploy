import React from "react";
import Company from "./CompanyChart/company.component";
import News from "./News/news.component"
import PressReleases from "./PressReleases/press-releases.component";
import CompanyInfo from "./CompanyInfo/company-info.component";
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
