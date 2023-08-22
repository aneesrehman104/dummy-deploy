import styles from "./IPOSList.module.css";
import React from "react";
import CardElements from "./CardElements/ipolist.component";
import CommonfiButton from "../../CommonComponents/CommonfiButton";
import { useRouter } from "next/navigation";

const IPOSList = () => {
  const router = useRouter();

  return (
    <>
      <div className={styles.dashboardheader}>
        <div className={styles.titleandsearchcontainer}>
          <div className={styles.dashboardtitle}>IPO List</div>
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
              title="IPO SCREENERS"
              onClick={() => router.push("/ipos/screeners")}
            />
          </div>
        </div>
      </div>
      <CardElements />
    </>
  );
};

export default IPOSList;
