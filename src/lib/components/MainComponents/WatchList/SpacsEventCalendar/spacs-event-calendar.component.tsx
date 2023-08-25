import React, { useState } from "react";
import styles from "./spacs-event-calendar.module.css";
import MyTable from "./functions";
import { createTheme } from "@mui/material/styles";
import { data } from "./constant";

  interface PROPS {}

  const SpacsEventCalendar: React.FC<PROPS> = () => {
  const [selectedTab, setSelectedTab] = useState<number>(0);

  const theme = createTheme({
    palette: {
      primary: {
        main: "#0aac85",
      },
    },
  });

  return (
    <section className={styles.stockstablesection}>
      <div className={styles.tableTitle}>SPAC Event Calendar</div>
      <div className={styles.companiestable}>
        <div className={styles.tablecontent}>
          <MyTable data={data} />
        </div>
      </div>
    </section>
  );
}

export default SpacsEventCalendar;
