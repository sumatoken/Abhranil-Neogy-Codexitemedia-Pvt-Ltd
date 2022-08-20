import { Grid, List, ListItem, ListItemIcon, Typography } from "@mui/material";
import Link from "next/link";
import React from "react";
import styles from "../../styles/Home.module.scss";

export default function CorporateInfo() {
  return (
    /*  <>
      <h5 className={styles.subheading}>Corporate Information</h5>
      <div id="corpInfo" className="flex flex-col">
        <div className="flex flex-row justify-center">
          <span className={styles.subtitle}>SSM Registration:</span>
          <span className={styles.subtitle}>LLP0016968-LGN</span>
        </div>
        <div className="flex flex-row justify-center">
          <span className={styles.subtitle}>SDate Of Incorporation:</span>
          <span className={styles.subtitle}>26 June 2018</span>
        </div>
        <div className="flex flex-row justify-center">
          <span className={styles.subtitle}>Board Of Directors:</span>
          <span className={styles.subtitle}>
            1. Saravanan Muthaiyah 2. Kamala Seelan Kamala Segaran
          </span>
        </div>
        <div className="flex flex-row justify-center">
          <span className={styles.subtitle}>Business Address:</span>
          <span className={styles.subtitle}>
            No.1-11, SUITE 43A, Sentral Business Suites, Jalan TKS 1, 43000
            Kajang, Selangor Darul Ehsan, Malaysia
          </span>
        </div>
        <div className="flex flex-row justify-center">
          <span className={styles.subtitle}>Office No. :</span>
          <span className={styles.subtitle}>
            {" "}
            <Link href="tel: +60387427681">+603-87427681</Link>
          </span>
        </div>
        <div className="flex flex-row justify-center">
          <span className={styles.subtitle}>Email Address:</span>
          <span className={styles.subtitle}>
            {" "}
            <Link href="mailto: admin@auricasia.com.my">
              admin@auricasia.com.my
            </Link>
          </span>
        </div>
        <div className="flex flex-row justify-center">
          <span className={styles.subtitle}>Website :</span>
          <span className={styles.subtitle}>
            {" "}
            <Link href="https://www.auricasia.com.my">
              www.auricasia.com.my
            </Link>
          </span>
        </div>
        <div className="flex flex-row justify-center">
          <span className={styles.subtitle}>Bank Facilities:</span>
          <span className={styles.subtitle}> CIMB Bank Berhad, Malaysia</span>
        </div>
   
       
      </div>
    </> */
    <>
      <h5 className={styles.subheading}>Corporate Information</h5>
      <div id="corpInfo" className="flex flex-row justify-around m-2">
        <div className="flex flex-col">
          <span className={styles.subtitle}>SSM Registration:</span>
          <span className={styles.subtitle}>Date Of Incorporation:</span>
          <span className={styles.subtitle}>Board Of Directors:</span>
          <span className={styles.subtitle}>Office No:</span>
          <span className={styles.subtitle}>Email Address:</span>
          <span className={styles.subtitle}>Website:</span>
          <span className={styles.subtitle}>Bank Facilities:</span>
          <span className={styles.subtitle}>Business Address:</span>
        </div>
        <div className="flex flex-col">
          <span className={styles.subtitle}>LLP0016968-LGN</span>
          <span className={styles.subtitle}>26 June 2018</span>
          <span className={styles.subtitle}>
            1. Saravanan Muthaiyah 2. Kamala Seelan{" "}
          </span>

          <span className={styles.subtitle}>
            {" "}
            <Link href="tel: +60387427681">+603-87427681</Link>
          </span>
          <span className={styles.subtitle}>
            {" "}
            <Link href="mailto: admin@auricasia.com.my">
              admin@auricasia.com.my
            </Link>
          </span>
          <span className={styles.subtitle}>
            {" "}
            <Link href="mailto: admin@auricasia.com.my">
              admin@auricasia.com.my
            </Link>
          </span>
          <span className={styles.subtitle}> CIMB Bank Berhad, Malaysia</span>
          <span className={styles.address}>
            {" "}
            No.1-11, SUITE 43A, Sentral Business Suites, Jalan TKS 1, 43000
            Kajang, Selangor Darul Ehsan, Malaysia
          </span>
        </div>
      </div>
    </>
  );
}
