import React from "react";
import styles from "../../styles/Home.module.scss";

const Item = ({ children }) => {
  return <>{children}</>;
};
export default function Chart() {
  return (
    <>
      <h5 className={styles.subheading}>Management Organisation Chart</h5>
      <div id="chart" className="flex flex-row justify-around m-2">
        <div className="flex flex-col">
          <span className={styles.subtitle}>Board of Directors:</span>
          <span className={styles.subtitle}>Managing Director:</span>
          <span className={styles.subtitle}>Operations Director:</span>
          <span className={styles.subtitle}>Head Of Finance:</span>
          <span className={styles.subtitle}>Operations Manager:</span>
          <span className={styles.subtitle}>Head Of Administration:</span>
        </div>
        <div className="flex flex-col">
          <span className={styles.subtitle}>
            1. Mr. M.Saravanan 2. Mr. K.S.Kamala Seelan
          </span>
          <span className={styles.subtitle}>Mr. M.Saravanan</span>
          <span className={styles.subtitle}>Mr. K.S.Kamala Seelan</span>
          <span className={styles.subtitle}>Ms. K.K.Preety</span>
          <span className={styles.subtitle}>Mr. Syukri Bin Abdul Rahim</span>
          <span className={styles.subtitle}>Ms. Nursyerin Abdullah</span>
        </div>
      </div>
    </>
  );
}
