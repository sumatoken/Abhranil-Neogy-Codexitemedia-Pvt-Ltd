import { Grid, List, ListItem, ListItemIcon, Typography } from "@mui/material";
import styles from "../../styles/Home.module.scss";

import React from "react";

export default function OurProduct() {
  return (
    <>
      <Grid
        id="product"
        container
        spacing={1}
        sx={{ background: "#F1E5AC", display: "flex" }}
        alignItems="center"
        justifyContent="center"
      >
        <div className={styles.container}>
          <Grid item xs={12}>
            <h5 className={styles.subheading}>Our Products</h5>
          </Grid>
          <Grid item xs={12}>
            <div className={styles.description}>
              <Typography
                id="product-subtitle"
                fontWeight="lg"
                mb={1}
                variant="h4"
                className={styles.subheading}
              >
                Malaysian Timber Products
              </Typography>
              <List
                aria-labelledby="mission-list"
                sx={{ "--List-decorator-size": "32px" }}
              >
                <ListItem>
                  <ListItemIcon>a.</ListItemIcon> Sawn timber
                </ListItem>
                <ListItem>
                  <ListItemIcon>b.</ListItemIcon> Plywood
                </ListItem>
                <ListItem>
                  <ListItemIcon>c.</ListItemIcon> MDF
                </ListItem>
                <ListItem>
                  <ListItemIcon>d.</ListItemIcon> Laminated veneer lumber{" "}
                  {"(LVL)"}
                </ListItem>
                <ListItem>
                  <ListItemIcon>e.</ListItemIcon> Finger-jointed lumber
                </ListItem>
                <ListItem>
                  <ListItemIcon>f.</ListItemIcon> Sawdust wood pellet
                </ListItem>
                <ListItem>
                  Import and export of Malaysian tropical wood based products.
                  We are a reputable sawn timber supplier in Malaysia since
                  2008. in the span of over a decade, we have specialized in
                  sourcing and supplying sawn timber across and beyond Malaysia,
                  reaching international waters. We have exported our timber
                  products to the Middle East, Europe and Japan. We source,
                  supply and trade all types of tropical woods such as plywood,
                  flooring, handrail, etc for the use of residences and
                  commercial premises. Our timber supplies come in different
                  groups in compliance to the MTIB specifications.
                </ListItem>
              </List>
            </div>
            <div className={styles.description}>
              <Typography
                id="product-subtitle"
                fontWeight="lg"
                mb={1}
                variant="h4"
                className={styles.subheading}
              >
                Palm Tree Based Products
              </Typography>
              <List
                aria-labelledby="mission-list"
                sx={{ "--List-decorator-size": "32px" }}
              >
                <ListItem>
                  <ListItemIcon>a.</ListItemIcon> Palm Kernel Shell
                </ListItem>
                <ListItem>
                  <ListItemIcon>b.</ListItemIcon> Palm Kernel Cake
                </ListItem>
                <ListItem>
                  <ListItemIcon>c.</ListItemIcon> Empty Fruit Bunch PelletDF
                </ListItem>
                <ListItem>
                  <ListItemIcon>d.</ListItemIcon> Palm Oil- CPO-CP8-CP10
                </ListItem>
                <ListItem>
                  <ListItemIcon>e.</ListItemIcon> Palm Kernel Shell
                  {"(Carbonized)"}
                </ListItem>

                <ListItem>
                  Import and export of Malaysian tropical wood based products.
                  We are a reputable sawn timber supplier in Malaysia since
                  2008. in the span of over a decade, we have specialized in
                  sourcing and supplying sawn timber across and beyond Malaysia,
                  reaching international waters. We have exported our timber
                  products to the Middle East, Europe and Japan. We source,
                  supply and trade all types of tropical woods such as plywood,
                  flooring, handrail, etc for the use of residences and
                  commercial premises. Our timber supplies come in different
                  groups in compliance to the MTIB specifications.
                </ListItem>
              </List>
            </div>
          </Grid>
        </div>
      </Grid>
    </>
  );
}
