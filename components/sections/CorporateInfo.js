import { Grid, List, ListItem, ListItemIcon, Typography } from "@mui/material";
import Link from "next/link";
import React from "react";
import styles from "../../styles/Home.module.scss";

export default function CorporateInfo() {
  return (
    <>
    <div className="w-full bg-[#F1E5AC]  pt-[50px] flex flex-col items-center align-center justify-center">
    <h5 className={styles.subheading}>
        Corporate Information
      </h5>
    <table class="table-fixed">
        <tbody>
          <tr>
            <td>
              {" "}
              <span className={styles.subtitle}>
                <b>SSM Registration:</b>
              </span>
            </td>
            <td>
              {" "}
              <span className="text-base text-yellow-700">
                {" "}
                <b>LLP0016968-LGN</b>
              </span>
            </td>
          </tr>
          <tr>
            <td>
              {" "}
              <span className={styles.subtitle}>
                <b>Date Of Incorporation:</b>
              </span>
            </td>
            <td>
              {" "}
              <span className="text-base text-yellow-700">
                {" "}
                <b>26 June 2018</b>
              </span>
            </td>
          </tr>
          <tr>
            <td>
              {" "}
              <span className={styles.subtitle}>
                <b>Board Of Directors:</b>
              </span>
            </td>
            <td>
              {" "}
              <span className="text-base text-yellow-700">
                {" "}
                <b>
                  Saravanan Muthaiyah <br />
                  Kamala Seelan Kamala Segaran
                </b>
              </span>
            </td>
          </tr>
          <tr>
            <td>
            <span className={styles.subtitle}>
            <b>Business Address:</b>
          </span>
            </td>
            <td>
              {" "}
              <span className="text-base text-yellow-700">
            {" "}
            <b>
              No.1-11, SUITE 43A,  Sentral <br/> Business Suites, Jalan TKS 1, <br />43000
              Kajang, Selangor Darul<br/> Ehsan, Malaysia
            </b>
          </span>
            </td>
          </tr>
          <tr>
            <td>
            <span className={styles.subtitle}>
            <b>Office No:</b>
          </span>
            </td>
            <td>
            <span className="text-base text-yellow-700">
            {" "}
            <Link href="tel:+60387427681">
              <b>+603-87427681</b>
            </Link>
          </span>
            </td>
          </tr>
          <tr>
            <td>
            <span className={styles.subtitle}>
            <b>Email Add:</b>
          </span>
            </td>
            <td>
              {" "}
              <span className="text-base text-yellow-700">
            {" "}
            <Link href="mailto:admin@auricasia.com.my">
              <b> admin@auricasia.com.my</b>
            </Link>
          </span>
            </td>
          </tr>
          <tr>
            <td>
            <span className={styles.subtitle}>
            <b>Website:</b>
          </span>
            </td>
            <td>
            <span className="text-base text-yellow-700">
            {" "}
            <Link href="https://www.auricasia.com.my">
              <b>www.auricasia.com.my</b>
            </Link>
          </span>
            </td>
          </tr>
        
          <tr>
            <td>
            <span className={styles.subtitle}>
            <b>Bank Facilities:</b>
          </span>
            </td>
            <td>
            <span className="text-base text-yellow-700">
            {" "}
            <b> CIMB Bank Berhad, Malaysia</b>
          </span>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
      <span id="chart"></span>
    </>
  );
}
