import Image from "next/image";
import React from "react";
import styles from "../../styles/Home.module.scss";

const Card = ({ title, employee }) => {
  return (
    <>
      <div className="z-10 w-full md:w-1/2 lg:w-1/2 xl:w-1/2 flex flex-col p-2 bg-white items-center rounded-lg border border-gold-200 shadow-2xl shadow-yellow-300 ring-4 ring-gray-300 m-2">
        <span className={styles.subtitle}>
          <b>{title}</b>
        </span>
        <b>{employee}</b>
      </div>
      <div
        className="z-0 w-full md:w-1/2 lg:w-1/2 xl:w-1/2 rounded-lg mt-[-100px] mr-20  h-[5rem]"
        style={{ backgroundColor: "#e9bf35" }}
      ></div>
    </>
  );
};
export default function Chart() {
  return (
    <div className={styles.description} style={{ background: "#F1E5AC",
    paddingTop: "50px",
      }}>
      
      <div id="chart" className="z-10 flex flex-col gap-5 items-center">
        <div className="w-full mb-[25px] pt-[50px]">
          <h5 className={styles.subheading}>Management & Organisation Chart</h5>
        </div>
        <div className="z-0 mb-[-412px] hidden md:hidden lg:block xl:block">
          <Image src={`/frame.png`} width={1000} height={380} />
        </div>
        <div className="z-10 w-full md:w-1/2 lg:w-1/2 xl:w-1/2 flex flex-col bg-white items-center rounded-lg border border-yellow-200 shadow-2xl shadow-yellow-300 ring-4 ring-gray-300 mt-2">
          <span className={styles.subtitle}>
            <b>Board Of Directors</b>
          </span>
          <b>1. Mr. M.Saravanan</b>
          <b>2. Mr. K.S.Kamala Seelan</b>
        </div>

        <div
          className="z-0 rounded-lg mt-[-99px] ml-[-80px] w-full md:w-1/2 lg:w-1/2 xl:w-1/2 h-[5.5rem] "
          style={{ backgroundColor: "#e9bf35" }}
        ></div>
        <Card title="Managing Director" employee="Mr. M.Saravanan" />
        <Card title="Operations Director" employee="Mr. K.S.Kamala Seelan" />
        <br />
        <div className="w-full hidden md:hidden lg:flex xl:flex flex-col md:flex-row lg:flex-row xl:flex-row gap-12 justify-between">
          <div className="z-10 w-full h-fit  md:w-1/4 lg:w-1/4 xl:w-1/4 flex flex-col p-2 bg-white items-center rounded-lg border border-gold-200 shadow-2xl shadow-yellow-300 ring-4 ring-gray-300 m-0">
            <span className={styles.subtitle}>
              <b>Head Of Finance</b>
            </span>
            <b>Ms. K.K.Preety</b>
          </div>
          <div
            className="z-0 rounded-lg mt-[-10px] ml-[-540px]  w-full md:w-1/4 lg:w-1/4 xl:w-1/4 h-[74px]"
            style={{ backgroundColor: "#e9bf35" }}
          ></div>

          <div className="z-10 w-full h-fit md:w-1/4 lg:w-1/4 xl:w-1/4 flex flex-col p-2 bg-white items-center rounded-lg border border-gold-200 shadow-2xl shadow-yellow-300 ring-4 ring-gray-300 m-0">
            <span className={styles.subtitle}>
              <b>Operations Manager</b>
            </span>
            <b>Mr. Syukri Bin Abdul Rahim</b>
          </div>
          <div
            className="z-0 rounded-lg mt-[-10px] ml-[-540px]  w-full md:w-1/4 lg:w-1/4 xl:w-1/ 4h-[74px]"
            style={{ backgroundColor: "#e9bf35" }}
          ></div>

          <div className="z-10 w-full h-fit md:w-1/4 lg:w-1/4 xl:w-1/4 flex flex-col p-2 bg-white items-center rounded-lg border border-gold-200 shadow-2xl shadow-yellow-300 ring-4 ml-[-60px]ring-gray-300">
            <span className={styles.subtitle}>
              <b>Head Of Administration</b>
            </span>
            <b>Ms. Nursyerin Abdullah</b>
          </div>
          <div
            className="z-0 rounded-lg mt-[-10px] ml-[-540px]  w-full md:w-1/4 lg:w-1/4 xl:w-1/4 h-[74px]"
            style={{ backgroundColor: "#e9bf35" }}
          ></div>
        </div>
        <div className="w-full flex md:flex lg:hidden xl:hidden flex-col gap-4">
          <div className="z-10 w-full  flex flex-col p-2 bg-white items-center rounded-lg border border-gold-200 shadow-2xl shadow-yellow-300 ring-4 ring-gray-300 m-2">
            <span className={styles.subtitle}>
              <b>Head Of Finance</b>
            </span>
            <b>Ms. K.K.Preety</b>
          </div>
          <div
            className="z-0 w-full rounded-lg mt-[-80px] mr-20  h-20 mb-6"
            style={{ backgroundColor: "#e9bf35" }}
          ></div>
          <div className="z-10 w-full  flex flex-col p-2 bg-white items-center rounded-lg border border-gold-200 shadow-2xl shadow-yellow-300 ring-4 ring-gray-300 m-2">
            <span className={styles.subtitle}>
              <b>Operations Manager</b>
            </span>
            <b>Mr. Syukri Bin Abdul Rahim</b>
          </div>
          <div
            className="z-0 w-full rounded-lg mt-[-80px]  mr-20  h-20 mb-6"
            style={{ backgroundColor: "#e9bf35" }}
          ></div>
          <div className="z-10 w-full  flex flex-col p-2 bg-white items-center rounded-lg border border-gold-200 shadow-2xl shadow-yellow-300 ring-4 ring-gray-300 m-2">
            <span className={styles.subtitle}>
              <b>Head Of Administration</b>
            </span>
            <b>Ms. Nursyerin Abdullah</b>
          </div>
          <div
            className="z-0 w-full rounded-lg mt-[-80px] mr-20  h-20 mb-6"
            style={{ backgroundColor: "#e9bf35" }}
          ></div>
        </div>
      </div>
      <span id="directors"></span>
    </div>
  );
}
