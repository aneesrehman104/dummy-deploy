import styles from "./merger-list.module.css";
import React from "react";
import CardElements from "./CardElements/mergerlist.component";
import CommonfiButton from "../../../CommonComponents/CommonfiButton";
import { useRouter } from "next/navigation";

const MergerList = () => {
  const router = useRouter();
  return (
    <>
       <div className={styles.dashboardheader}>
        <div className={styles.titleandsearchcontainer}>
          <div className={styles.dashboardtitle}>Merger List</div>
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
              onClick={() => router.push("/merger/screeners")}
            />
          </div>
        </div>
      </div>
      <CardElements/>
    </>
  );
};

export default MergerList;
