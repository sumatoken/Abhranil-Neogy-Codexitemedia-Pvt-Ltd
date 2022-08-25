import React from "react";
import styles from "../../styles/Home.module.scss";
import EmailIcon from "@mui/icons-material/Email";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import FaxIcon from "@mui/icons-material/Fax";
import Link from "next/link";
import Image from "next/image";
export default function OurDirectors() {
  return (
    <div className="flex flex-col md:flex-row lg:flex-row   ">
      <div
        className="w-full flex flex-col border rounded-lg border-yellow-300 p-4"
        style={{
          color: "#d1a000",
        }}
      >
        <div className="flex flex-row gap-2 items-center align-center justify-center">
          <div className="flex flex-col border-yellow-300 border-r-4">
            <span className={styles.subtitle}>SARAVANAN.M@RAM</span>
            <b>Managing Director</b>
          </div>
          <div className="flex flex-col align-start">
            <div className="flex flex-row items-center">
              <LocalPhoneIcon
                sx={{
                  width: "20px",
                  height: "20px",
                  margin: "10px",
                  color: "#d1a000",
                }}
              />
              <Link href="tel:+60192100978">
                <b>+601-9210-0978</b>
              </Link>
            </div>
            <div className="flex flex-row items-center">
              <EmailIcon
                sx={{
                  width: "20px",
                  height: "20px",
                  margin: "10px",
                  color: "#d1a000",
                }}
              />
              <Link href="mailto:seelan@auricasia.com.my">
                <b>saravanan.m@auricasia.com.my</b>
              </Link>
            </div>

            <div className="flex flex-row items-center">
              <FaxIcon
                sx={{
                  width: "20px",
                  height: "20px",
                  margin: "10px",
                  color: "#d1a000",
                }}
              />
              <Link href="tel:+60387417681">
                <b>+603-8741-7681</b>
              </Link>
            </div>
            <div className="flex flex-row items-center">
              <LocationOnIcon
                sx={{
                  width: "20px",
                  height: "20px",
                  margin: "10px",
                  color: "#d1a000",
                }}
              />

              <b>
                {" "}
                No.1-11, Suite 43A, Sentral Business Suites,
                <br /> Jalan TKS 1, 43000 Kajang, Selangor Darul Ehsan.
              </b>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center">
          <Image src="/aalogo.png" width={40} height={40} />
          <b>Auric Asia PLT</b>
          <span>LLP0016968-LGN</span>
          <Link href="https://www.auricasia.com.my">www.auricasioa.com.my</Link>
        </div>
      </div>
      <div
        className="w-full flex flex-col border rounded-lg border-yellow-300 p-4"
        style={{
          color: "#d1a000",
        }}
      >
        <div className="flex flex-row gap-2 items-center align-center justify-center">
          <div className="flex flex-col border-yellow-300 border-r-4">
            <span className={styles.subtitle}>K.S.KAMALA SEELAN</span>
            <b>Operations Director</b>
          </div>
          <div className="flex flex-col align-start">
            <div className="flex flex-row items-center">
              <LocalPhoneIcon
                sx={{
                  width: "20px",
                  height: "20px",
                  margin: "10px",
                  color: "#d1a000",
                }}
              />
              <Link href="tel:+60179800081">
                <b>+6017-9800-081</b>
              </Link>
            </div>
            <div className="flex flex-row items-center">
              <EmailIcon
                sx={{
                  width: "20px",
                  height: "20px",
                  margin: "10px",
                  color: "#d1a000",
                }}
              />
              <Link href="mailto:seelan@auricasia.com.my">
                <b>seelan@auricasia.com.my</b>
              </Link>
            </div>

            <div className="flex flex-row items-center">
              <FaxIcon
                sx={{
                  width: "20px",
                  height: "20px",
                  margin: "10px",
                  color: "#d1a000",
                }}
              />
              <Link href="tel:+60387417681">
                <b>+603-8741-7681</b>
              </Link>
            </div>
            <div className="flex flex-row items-center">
              <LocationOnIcon
                sx={{
                  width: "20px",
                  height: "20px",
                  margin: "10px",
                  color: "#d1a000",
                }}
              />

              <b>
                {" "}
                No.1-11, Suite 43A, Sentral Business Suites,
                <br /> Jalan TKS 1, 43000 Kajang, Selangor Darul Ehsan.
              </b>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center">
          <Image src="/aalogo.png" width={40} height={40} />
          <b>Auric Asia PLT</b>
          <span>LLP0016968-LGN</span>
          <Link href="https://www.auricasia.com.my">www.auricasioa.com.my</Link>
        </div>
      </div>
      <span id="ssm"></span>
    </div>
  );
}
