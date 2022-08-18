import { Grid, List, ListItem, Typography } from "@mui/material";
import React from "react";
import styles from "../../styles/Home.module.scss";

export default function AboutUs() {
  return (
    <>
      <Grid
        container
        spacing={1}
        sx={{ background: "#F1E5AC", display: "flex" }}
        alignItems="center"
        justifyContent="center"
      >
        <div className={styles.container}>
          <Grid item xs={12}>
            <h5 className={styles.subheading}>Introduction</h5>
          </Grid>
          <Grid item xs={12}>
            <div className={styles.description}>
              <List
                aria-labelledby="mission-list"
                sx={{ "--List-decorator-size": "32px" }}
              >
                <ListItem>
                  Auric Asia PLT is a company specialized in timber and biomass
                  product, that provides innovative products and services to
                  satisfy the needs. We handle all kinds of product related to
                  trees, ranging from raw wood felled by us to timber product
                  and biomass production. With the global shift to achieving
                  net-zero, the recognition of the sustainability of timber and
                  its vital role in decarbonizing the construction sector has
                  been brought into sharp focus. Timber is rapidly becoming the
                  material of the future and the use of timber frames and modern
                  methods of construction are key to ensuring to meet its needs.
                  Auric Asia has shown the innovative work which can be done
                  within the sector, and we look forward to bringing this
                  knowledge to the role and working collaboratively with
                  industry and government to ensure the sector continues to
                  thrive.” We as well welcome you to contact us to experience
                  the ultimate services that our clients experience when working
                  with us. Our aim is to provide the highest quality, efficient
                  delivery and professional services by offering unparalleled
                  support. Mr. Saravanan@Ram Managing Director
                </ListItem>
              </List>
            </div>
          </Grid>
        </div>
      </Grid>
    </>
  );
}
