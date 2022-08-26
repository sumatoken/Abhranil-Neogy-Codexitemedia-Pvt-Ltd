import React from "react";
import styles from "../../styles/Home.module.scss";

export default function AboutUs() {
  return (
    <>
      <div
        className="bg-[#F1E5AC] h-screen pt-[60px]"
       
      >
        <div className={styles.container}>
          <div>
            <h5 className={styles.subheading} >About us</h5>
          </div>
          <div>
            <div className={styles.description}>
           <div className="text-left">
           Auric Asia PLT was registered under Limited Liability Partnerships Act 2012 on 26
June 2018. Initially Auric Asia PLT started off as a timber supplier, specializing in
Malaysian Sawn Timber. Over the years, we grew as a company, diversifying in
not only in the wood and timber business but also by providing resource services
for palm oil, palm products and rubber industries. <br /><br />
Through various strategic acquisition and sound management, we completed
supplying more than 20,000 tonnes of timber spread across Asia, mainly serving
countries such as India, Singapore, Pakistan, Sri Lanka, Nepal, Bangladesh and
Japan. We also have supplied timber to many private businesses in Malaysia for
construction and oil rigs.<br /><br />
Throughout the years, we identify gaps in the market to supply products and
services that are needed by business all over the world. The company strives to
deliver these services at a reasonable cost to our customers and be able to create
new rapport and maintain existing good business relationships and subsequently
provide for the community. The management applies a more practical approach
and has extensive experience in business management.<br /><br />
As an effort to reduce environment pollution, we are also involved into palm oil
biomass-products mainly Palm Kernel Shell (PKS). (PKS) is one of the highest
grade solid renewable fuel. Palm Oil Kernel Shell is targeted to replace existing
burning fuel such as Diesel and Coal, thanks to its high in heat energy, and low in
CO2 emission.<br /><br />
With our stringent management, we are committed to be continuously at the
forefront in the efforts to conserve our natural resources and to preserve the
environment, and ready to take on more challenges make today happen and
better the future.
           </div>
            </div>
          </div>
        </div>
      </div>
      <span id="vision"></span>
    </>
  );
}
