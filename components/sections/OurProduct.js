import styles from "../../styles/Home.module.scss";

import React from "react";

export default function OurProduct() {
  return (
    <div className="w-full flex flex-col md:flex-row lg:flex-row xl:flex-row">
      <h5 className={styles.subheading} id="">Our Products</h5>
      <div className="w-full p-4 rounded bg-[#F1E5AC] flex flex-col md:w-1/2 lg:width-1/2 xl:width-1/2">
        <span className={styles.subtitle}>
          Malaysian Tropical Timber Product
        </span>
        <div className="flex flex-wrap gap-2 justify-between p-2">
          <span className="rounded-lg px-2 bg-amber-700">. Sawn timber</span>
          <span className="rounded-lg px-2 bg-amber-700">Polywood</span>
          <span className="rounded-lg px-2 bg-amber-700">MDF</span>
          <span className="rounded-lg px-2 bg-amber-700"> Customize Pallet</span>
          <span className="rounded-lg px-2 bg-amber-700">
            {" "}
            Finger-jointed lumber
          </span>
          <span className="rounded-lg px-2 bg-amber-700">
            Sawdust wood pellet
          </span>
        </div>
        <div className={styles.description}>
          Import and export of Malaysian tropical wood based products. We are a
          reputable sawn timber supplier in Malaysia since 2008. in the span of
          over a decade, we have specialized in sourcing and supplying sawn
          timber across and beyond Malaysia, reaching international waters. We
          have exported our timber products to the Middle East, Europe and
          Japan. We source, supply and trade all types of tropical woods such as
          plywood, flooring, handrail, etc for the use of residences and
          commercial premises. Our timber supplies come in different groups in
          compliance to the MTIB specifications.
        </div>
      </div>
      <div className="w-full p-4 rounded bg-[#d1a000] flex flex-col md:w-1/2 lg:width-1/2 xl:width-1/2">
        <span className={styles.subtitle}>Palm Tree Based Products</span>
        <div className="flex flex-wrap gap-2 p-2">
          <span className="rounded-lg px-2 bg-amber-700">Palm Kernel Shell</span>
          <span className="rounded-lg px-2 bg-amber-700">
            Palm Kernel Cake/ Palm Kernel Expeller
          </span>
          <span className="rounded-lg px-2 bg-amber-700">
            . Empty Fruit Bunch Pellet
          </span>
          <span className="rounded-lg px-2 bg-amber-700">
            . Palm Kernel Shell (Carbonized)
          </span>
        </div>
        <div className={styles.description}>
          Palm kernel shell has become one of the valuable commodity in palm oil
          industry. It is well known as biomass product because of it small in
          size and high in heat energy or calorific value, and low in CO2
          emission. Thanks to these unique properties, palm kernel shell has
          been one of the key biomass fuel in order to replace existing fossil
          fuel for steam power plant, grate fired boiler system, and fluidized
          bed boiler system. We also actively Import and export palm tree
          products such as, PKC {"(Palm Kernel Cake) &"} EFB Pellet (Empty Fruit
          Bunch) from and to all parts of Asia.
        </div>
      </div>
    </div>
  );
}
