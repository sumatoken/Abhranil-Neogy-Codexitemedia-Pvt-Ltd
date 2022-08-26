import Image from "next/image";
import React from "react";
import styles from "../../styles/Home.module.scss";

export default function Market() {
  const countries = [
    "Philippines",
    "Singapore",
    "Thailand",
    "Myanmar",
    "Taiwan",
    "Vietnam",
    "Laos",
    "Cambodia",
    "Brunei",
    "India",
    "Nepal",
    "Bangladesh",
    "Australia",
    "South Korea",
    "Japan",
    "Pakistan",
    "UAE",
    "Saudi Arabia",
    "Oman",
    "Turkey",
    "Egypt",
    "Morocco",
    "Mauritius",
    "Maldives",
  ];
  return (
    
    <div className="w-full pt-[50px] ">
      <h5 className={styles.subheading}>Export Market</h5>
      <div className="w-full grid grid-cols-2 md:grid-cols-4 content-center">
        {countries.map((country, key) => (
          <div key={key} className="flex flex-col items-center">
            <Image src={`/countries/${country}.png`} width={50} height={50} />
            <b>{country}</b>
          </div>
        ))}
      </div>
      <span id="gallery"></span>
    </div>
  );
}
