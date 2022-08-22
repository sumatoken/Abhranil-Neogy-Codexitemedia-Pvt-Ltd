import React from "react";
import styles from "../../styles/Home.module.scss";

const Item = ({ children }) => {
  return <>{children}</>;
};
export default function Chart() {
  return (
    <div className={styles.description} style={{ background: "#F1E5AC" }}>
      <div id="chart" className="flex flex-col items-center p-2">
        <h5 className={styles.subheading}>Management Organisation Chart</h5>
        <div className="flex flex-col p-2 items-center rounded-lg border border-gold-200 shadow-md mt-2">
          <span className={styles.subtitle}>Board Of Directors</span>
          <b>1. Mr. M.Saravanan</b>
          <b>2. Mr. K.S.Kamala Seelan</b>
        </div>
        <div className="flex flex-col p-2 items-center rounded-lg border border-gold-200 shadow-md m-2">
          <span className={styles.subtitle}>Managing Director</span>
          <b>Mr. M.Saravanan</b>
        </div>
        <div className="flex flex-col p-2 items-center m-2 rounded-lg border border-gold-200 shadow-md">
          <span className={styles.subtitle}>Operations Director</span>
          <b>Mr. K.S.Kamala Seelan</b>
        </div>
        <div className="flex flex-row">
          <div className="flex flex-col p-2 items-center rounded-lg border border-gold-200 shadow-md m-2">
            <span className={styles.subtitle}>Head Of Finance</span>
            <b>Ms. K.K.Preety</b>
          </div>
          <div className="flex flex-col p-2 items-center rounded-lg border border-gold-200 shadow-md m-2">
            <span className={styles.subtitle}>Operations Manager</span>
            <b>Mr. Syukri Bin Abdul Rahim</b>
          </div>
          <div className="flex flex-col p-2 items-center rounded-lg border border-gold-200 shadow-md m-2">
            <span className={styles.subtitle}>Head Of Administration</span>
            <b>Ms. Nursyerin Abdullah</b>
          </div>
        </div>
      </div>
    </div>
  );
}
