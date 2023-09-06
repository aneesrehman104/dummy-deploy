import styles from "./spacs-list.module.css";
import React from "react";
import SpacsListComponet from "./CardElements/spacs-list-element.component";
import CommonfiButton from "../../../CommonComponents/CommonfiButton";
import { useRouter } from "next/navigation";
const buttonStyleMui = {
  "&:hover": {
    backgroundColor: "#263c6f",
    color: "white",
  },
  "&:active": {
    boxShadow: "none",
    backgroundColor: "#0AAC85",
  },
  border: "1px solid #0aac85",
  boxShadow:
    "0px 1px 5px rgba(0, 0, 0, 0.12), 0px 2px 2px rgba(0, 0, 0, 0.14), 0px 3px 1px -2px rgba(0, 0, 0, 0.2)",
  borderRadius: "4px",
  height: "48px",
  minWidth: "131px",
  maxWidth: "200px",
  background: "#0aac85",
};
const SpacsList = () => {
  const router = useRouter();
  const HeaderComponent = () => {
    return (
      <div className={styles.titleandsearchcontainer}>
        <header className={styles.dashboardtitle}>spacs List</header>
        <div className={styles.moreData}>
          <div>FOR MORE DATA, FILTERING AND ADDING COLUMNS:</div>
          <CommonfiButton
            variant="contained"
            disableRipple
           sx={buttonStyleMui}
            title="SPAC SCREENERS"
            onClick={() => router.push("/spacs/screeners")}
          />
        </div>
      </div>
    );
  };
  return (
    <>
      <main className={styles.dashboardheader}>
        <HeaderComponent />
      </main>
      <SpacsListComponet />
    </>
  );
};

export default SpacsList;
