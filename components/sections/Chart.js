import { Grid, List, ListItem, ListItemIcon, Typography } from "@mui/material";
import React from "react";
import styles from "../../styles/Home.module.scss";

export default function Chart() {
  return (
    <>
      <Grid
        id="chart"
        container
        spacing={1}
        sx={{ background: "#F1E5AC", display: "flex" }}
        alignItems="center"
        justifyContent="center"
      >
        <div className={styles.container}>
          <Grid item xs={12}>
            <h5 className={styles.subheading}>Management Organization Chart</h5>
          </Grid>
          <Grid item xs={12} lg={12}>
            <div className={styles.description}>
              <span className={styles.subtitle}>Board of Directors</span>
              <List
                aria-labelledby="mission-list"
                sx={{ "--List-decorator-size": "32px" }}
              >
                <ListItem>
                  <ListItemIcon>1.</ListItemIcon> Mr. M.Saravanan
                </ListItem>
                <ListItem>
                  <ListItemIcon>2.</ListItemIcon> Mr. K.S.Kamala Seelan
                </ListItem>
              </List>
              <span className={styles.subtitle}>Managing Director</span>
              <List
                aria-labelledby="mission-list"
                sx={{ "--List-decorator-size": "32px" }}
              >
                <ListItem>Mr. M.Saravanan</ListItem>
              </List>
              <span className={styles.subtitle}>Operation Director</span>
              <List
                aria-labelledby="mission-list"
                sx={{ "--List-decorator-size": "32px" }}
              >
                <ListItem>Mr. K.S.Kamala Seelan</ListItem>
              </List>
              <span className={styles.subtitle}>Head of Finance</span>
              <Grid item xs={12} lg={4}>
                <Grid item xs={12}>
                  <List
                    aria-labelledby="mission-list"
                    sx={{ "--List-decorator-size": "32px" }}
                  >
                    <ListItem>Ms. K.K.Preety</ListItem>
                  </List>
                </Grid>{" "}
              </Grid>
              <span className={styles.subtitle}>Operation Manager</span>
              <Grid item xs={12} lg={4}>
                <Grid item xs={12}>
                  {" "}
                  <List
                    aria-labelledby="mission-list"
                    sx={{ "--List-decorator-size": "32px" }}
                  >
                    <ListItem>Mr. Syukri Bin Abdul Rahim</ListItem>
                  </List>
                </Grid>{" "}
              </Grid>
              <span className={styles.subtitle}>Head of Administration</span>
              <Grid item xs={12} lg={4}>
                <Grid item xs={12}>
                  {" "}
                  <List
                    aria-labelledby="mission-list"
                    sx={{ "--List-decorator-size": "32px" }}
                  >
                    <ListItem>Ms. Nursyerin Abdullah</ListItem>
                  </List>
                </Grid>{" "}
              </Grid>
            </div>
          </Grid>
        </div>
      </Grid>
    </>
  );
}
