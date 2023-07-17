import styles from "./iposscreeners.module.css";
import React from "react";
import CardElements from "./CardElements/CardElements";
import { useMemberstackModal } from "@memberstack/react";

const IPOScreener = () => {
  const { openModal, hideModal } = useMemberstackModal();

  return (
    <main>
      <header className={styles.dashboardheader}>
        <div className={styles.titleandsearchcontainer}>
          <div
            className={styles.dashboardtitle}
            onClick={() =>
              openModal({
                type: "SIGNUP",
              }).then(({ data, type }) => {
                console.log("data", data);
                console.log("type: ", type);
                hideModal();
              })
            }
          >
            IPOS screeners
          </div>
        </div>
      </header>
      <section>
        <CardElements />
      </section>
    </main>
  );
};

export default IPOScreener;
