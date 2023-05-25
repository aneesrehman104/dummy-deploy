import styles from "./dashboard-header.module.css";
import React from "react";
import { TextField, InputAdornment } from "@mui/material";
import searchIcon from "../../../../public/searchIcon.svg";
import Image from "next/image";
import { createTheme } from "@mui/material/styles";
import EventSummary from "./EventSummary/EventSummary";
import TableTitleSection from "./TableTitleSection/TableTitleSection";
import AggrecatedMiniTable from "./AggrecatedMiniTable/AggrecatedMiniTable";
import MiniTableList from "./MiniTableList/MiniTableList";
import { styled } from "@mui/material/styles";

const CssTextField = styled(TextField)({
  width: "390px",
  height: "40px",
  border: "1px solid #dddee0",
  borderRadius: "8px",
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      border: "none",
    },
  },
});

const Home = () => {
  return (
    <>
      <div className={styles.dashboardheader}>
        <div className={styles.breadcrumb}>
          <div className={styles.link}>Home</div>
        </div>
        <div className={styles.titleandsearchcontainer}>
          <div className={styles.dashboardtitle}>Dashboard</div>
          <CssTextField
            placeholder="Search ticker or company"
            className=""
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Image
                    src={searchIcon}
                    alt="searchIcon"
                    width={18}
                    height={18}
                  />
                </InputAdornment>
              ),
            }}
            size="small"
            hiddenLabel
          />
        </div>
      </div>
      <EventSummary />
      <TableTitleSection />
      <AggrecatedMiniTable />
      <MiniTableList />
    </>
  );
};

export default Home;
