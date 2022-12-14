import styles from "../../styles/Home.module.scss";

import React from "react";

export default function OurProduct() {
  return (
    <>
      
      <div className="w-full pt-[130px]">

      <div className=" w-full h-full p-0 m-0">
        <h5 className={styles.subheading}>
          <b>Our Products</b>
        </h5>
      </div>
      <div className="w-full flex flex-col md:flex-row lg:flex-row xl:flex-row">
        <div className="w-full p-4 m-1 rounded-lg bg-[#F1E5AC] flex flex-col justify-center md:w-1/2 lg:width-1/2 xl:width-1/2">
          <span className={styles.subtitle}>
            <b className="text-black"> Malaysian Tropical Timber Product</b>
          </span>
          <div className="flex flex-wrap gap-2 p-2">
           
            <span className="rounded-xl px-3 bg-amber-600 text-white">
              {" "}
              Customize Pallet
            </span>
            <span className="rounded-xl px-3 bg-amber-600 text-white">
              {" "}
              Finger-jointed lumber
            </span>
            <span className="rounded-xl px-3 bg-amber-600 text-white">
              Sawdust wood pellet
            </span>
            <span className="rounded-xl px-3 bg-amber-600 text-white">
              Sawn timber
            </span>
            <span className="rounded-xl px-3 bg-amber-600 text-white">
              Polywood
            </span>
            <span className="rounded-xl px-3 bg-amber-600 text-white">MDF</span>
          </div>
          <div className={styles.description}>
           We are a reputable sawn timber supplier in Malaysia since 2008. in the span
            of over a decade, we have specialized in sourcing and supplying sawn
            timber across and beyond Malaysia, reaching international waters. We
            have exported our timber products to the Middle East, Europe and
            Japan. We source, supply and trade all types of tropical woods such
            as plywood, flooring, handrail, etc for the use of residences and
            commercial premises. Our timber supplies come in different groups in
            compliance to the MTIB specifications.
          </div>
        </div>
        <div className="w-full p-4 mt-1 ml-1 mb-1 mr-0 rounded bg-[#F1E5AC] flex flex-col justify-center md:w-1/2 lg:width-1/2 xl:width-1/2">
          <span className={styles.subtitle}>
            {" "}
            <b className="text-black">Palm Tree Based Products </b>
          </span>
          <div className="flex flex-wrap gap-2 p-2">
            <span className="rounded-xl px-3 bg-amber-600 text-white">
              Palm Kernel Cake/ Palm Kernel Expeller
            </span>
            <span className="rounded-xl px-3 bg-amber-600 text-white">
              Palm Kernel Shell
            </span>
            <span className="rounded-xl px-3 bg-amber-600 text-white">
              Empty Fruit Bunch Pellet
            </span>
            <span className="rounded-xl px-3 bg-amber-600 text-white">
              Palm Kernel Shell (Carbonized)
            </span>
          </div>
          <div className={styles.description}>
            Palm kernel shell has become one of the valuable commodity in palm
            oil industry. It is well known as biomass product because of it
            small in size and high in heat energy or calorific value, and low in
            CO2 emission. Thanks to these unique properties, palm kernel shell
            has been one of the key biomass fuel in order to replace existing
            fossil fuel for steam power plant, grate fired boiler system, and
            fluidized bed boiler system. We also actively Import and export palm
            tree products such as, PKC {"(Palm Kernel Cake) &"} EFB Pellet
            (Empty Fruit Bunch) from and to all parts of Asia.
          </div>
        </div>
      </div>
      </div>
      <span id="market" ></span>
    </>
  );
}
