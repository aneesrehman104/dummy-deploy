import styles from "./spacs-list.module.css";
import React from "react";
import SpacsListComponet from "./CardElements/spacs-list-element.component";
import CommonfiButton from "../../CommonComponents/CommonfiButton";
import { useRouter } from "next/navigation";

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
            sx={{
              "&:hover": {
                backgroundColor: "#0aac85",
                color: "white",
              },
              "&:active": {
                boxShadow: "none",
                backgroundColor: "#0aac85",
                color: "white",
              },
            }}
            disableRipple
            className="buttonStyle"
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
