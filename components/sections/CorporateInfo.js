import { Grid, List, ListItem, ListItemIcon, Typography } from "@mui/material";
import Link from "next/link";
import React from "react";
import styles from "../../styles/Home.module.scss";

export default function CorporateInfo() {
  return (
    <>
 <div className="w-full pt-[50px] mt-[50px]">

      <h5 className={styles.subheading}>
        Corporate Information
      </h5>
      <div className="flex flex-col justify-evenly gap-2">
        <div className="w-full flex flex-row">
          <span className={styles.subtitle}>
            <b>SSM Registration:</b>
          </span>
          <span className="text-base text-yellow-700">
            {" "}
            <b>LLP0016968-LGN</b>
          </span>
        </div>
        <div className="w-full flex flex-row">
          <span className={styles.subtitle}>
            <b>Date Of Incorporation:</b>
          </span>
          <span className="text-base text-yellow-700">
            {" "}
            <b>26 June 2018</b>
          </span>
        </div>
        <div className="w-full flex flex-row">
          <span className={styles.subtitle}>
            <b>Board Of Directors:</b>
          </span>
          <span className="text-base text-yellow-700">
            {" "}
            <b>
              Saravanan Muthaiyah <br />
              Kamala Seelan Kamala Segaran
            </b>
          </span>
        </div>
        <div className="w-full flex flex-row">
          <span className={styles.subtitle}>
            <b>Business Address:</b>
          </span>
          <span className="text-base text-yellow-700">
            {" "}
            <b>
              No.1-11, SUITE 43A,  Sentral <br/> Business Suites, Jalan TKS 1, <br />43000
              Kajang, Selangor Darul<br/> Ehsan, Malaysia
            </b>
          </span>
        </div>
        <div className="w-full flex flex-row">
          <span className={styles.subtitle}>
            <b>Office No:</b>
          </span>
          <span className="text-base text-yellow-700">
            {" "}
            <Link href="tel:+60387427681">
              <b>+603-87427681</b>
            </Link>
          </span>
        </div>
        <div className="w-full flex flex-row">
          <span className={styles.subtitle}>
            <b>Email Add:</b>
          </span>
          <span className="text-base text-yellow-700">
            {" "}
            <Link href="mailto:admin@auricasia.com.my">
              <b> admin@auricasia.com.my</b>
            </Link>
          </span>
        </div>
        <div className="w-full flex flex-row">
          <span className={styles.subtitle}>
            <b>Website:</b>
          </span>
          <span className="text-base text-yellow-700">
            {" "}
            <Link href="https://www.auricasia.com.my">
              <b>www.auricasia.com.my</b>
            </Link>
          </span>
        </div>
        <div className="w-full flex flex-row">
          <span className={styles.subtitle}>
            <b>Bank Facilities:</b>
          </span>
          <span className="text-base text-yellow-700">
            {" "}
            <b> CIMB Bank Berhad, Malaysia</b>
          </span>
        </div>
      </div>
 </div>
      <span id="chart"></span>
    </>
  );
}
