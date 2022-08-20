import { Grid, List, ListItem, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";
import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";
import styles from "../../styles/Home.module.scss";

export default function Gallery() {
  const numberOfImagesArrayLoop = Array.from(Array(18).keys());
  const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

  return (
    <>
      <h5 className={styles.subheading}>Gallery</h5>
      <Grid
        id="gallery"
        container
        spacing={1}
        sx={{ background: "#F1E5AC", display: "flex" }}
        alignItems="center"
        justifyContent="center"
      >
        {numberOfImagesArrayLoop.map((n, key) => (
          <Image
            key={key}
            src={`/gallery-${key + 1}.png`}
            width={400}
            height={500}
          />
        ))}
      </Grid>
    </>
  );
}
