import React from "react";
import Company from "./CompanyChart/company.component";
import News from "./News/news.component"
import PressReleases from "./PressReleases/pressreleases.component";
import CompanyInfo from "./CompanyInfo/companiinfo.component";
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
