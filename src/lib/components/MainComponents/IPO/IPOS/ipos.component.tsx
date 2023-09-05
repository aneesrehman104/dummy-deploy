import React, { useEffect, useState } from "react";
import IpoCompanyChart from "./IpoComapnyChart/ipos-company-chart";
import IpoCompanyInfo from "./IpoCompanyInfo/ipocompanyinfo.component";
import IpoCompanyNew from "./News/iponews.component";
import IpoCompanyPressReleased from "./PressReleases/ipo-pressreleases.component";
interface PROPS {}

const IpoCompany: React.FC<PROPS> = () => {
  return (
    <>
      <IpoCompanyChart />
      <IpoCompanyInfo />
      <IpoCompanyNew/>
      <IpoCompanyPressReleased/>
    </>
  );
};

export default IpoCompany;
