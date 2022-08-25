import Image from "next/image";
import React from "react";
import { Grid, List, ListItem, ListItemIcon, Typography } from "@mui/material";
import styles from "../../styles/Home.module.scss";

export default function Ssm() {
  return (
    <>
    <span id="ssm"></span>
      <Grid        container
        spacing={1}
        sx={{ background: "#F1E5AC", display: "flex" }}
        alignItems="center"
        justifyContent="center"
      >
        <div className={styles.container}>
          <Grid item xs={12}>
            <h5 className={styles.subheading}>Company SSM & info</h5>
          </Grid>
          <Grid item xs={12}>
            <div className={styles.description}>
              <Image src="/ssm.png" width={400} height={500} />
            </div>
          </Grid>
        </div>
      </Grid>
    </>
  );
}
