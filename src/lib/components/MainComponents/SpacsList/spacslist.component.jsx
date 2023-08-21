import styles from "./SpacsList.module.css";
import React from "react";
import CardElements from "./CardElements/cardelements.component";
import CommonfiButton from "../../CommonComponents/CommonfiButton";
import { useRouter } from "next/navigation";

const SpacsList = () => {
  const router = useRouter();

  return (
    <>
      <div className={styles.dashboardheader}>
        <div className={styles.titleandsearchcontainer}>
          <div className={styles.dashboardtitle}>spacs List</div>
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
      </div>
      <CardElements />
    </>
  );
};

export default SpacsList;
