import styles from "./merger-list.module.css";
import React from "react";
import CardElements from "./CardElements/mergerlist.component";
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
              sx={buttonStyleMui}
              disableRipple
              className="buttonStyle"
              title="SPAC SCREENERS"
              onClick={() => router.push("/merger/screeners")}
            />
          </div>
        </div>
      </div>
      <CardElements />
    </>
  );
};

export default MergerList;
