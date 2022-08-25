import React from "react";
import styles from "../../styles/Home.module.scss";
import EmailIcon from "@mui/icons-material/Email";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import Link from "next/link";
export default function OurDirectors() {
  return (
    <div style={{ background: "#F1E5AC" }}>
      <span id="directors p-10"></span>
      <h5 className={styles.subheading}>Our Directors</h5>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 p-2">
        <div className="break-all bg-gray-100 w-full flex flex-col flex-wrap content-start p-2  m-2 rounded-lg border border-gold-200 shadow-md">
          <span className={styles.subtitle}>SARAVANAN.M@RAM</span>
          <b>Managing Director</b>
          <div className="flex flex-row items-center">
            <EmailIcon
              sx={{
                width: "50px",
                height: "50px",
                margin: "10px",
                color: "#d1a000",
              }}
            />
            <Link href="mailto:saravanan.m@auricasia.com.my">
              <b>saravanan.m@auricasia.com.my</b>
            </Link>
          </div>
          <div className="flex flex-row items-center">
            <LocalPhoneIcon
              sx={{
                width: "50px",
                height: "50px",
                margin: "10px",
                color: "#d1a000",
              }}
            />
            <Link href="tel:+60387417681">
              <b>+603-8741-7681</b>
            </Link>
          </div>
        </div>
        <div className="break-all bg-gray-100 w-full flex flex-col flex-wrap content-start p-2  m-2 rounded-lg border border-gold-200 shadow-md">
          <span className={styles.subtitle}>
           K.S.KAMALA SEELAN
          </span>
          <b>Operations Director</b>
          <div className="flex flex-row items-center">
            <EmailIcon
              sx={{
                width: "50px",
                height: "50px",
                margin: "10px",
                color: "#d1a000",
              }}
            />
            <Link href="mailto:seelan@auricasia.com.my">
              <b>seelan@auricasia.com.my</b>
            </Link>
          </div>
          <div className="flex flex-row items-center">
            <LocalPhoneIcon
              sx={{
                width: "50px",
                height: "50px",
                margin: "10px",
                color: "#d1a000",
              }}
            />
            <Link href="tel:+60387417681">
              <b>+603-8741-7681</b>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
