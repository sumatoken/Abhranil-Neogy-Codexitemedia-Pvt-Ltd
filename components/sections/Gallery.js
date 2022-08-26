import { Grid, List, ListItem, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";
import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";
import styles from "../../styles/Home.module.scss";
import Carousel from "react-gallery-carousel";
import "react-gallery-carousel/dist/index.css";
export default function Gallery() {
  const numberOfImagesArrayLoop = Array.from(Array(18).keys());
  const images = numberOfImagesArrayLoop.map((num) => ({
    src: `/gallery/gallery-${num + 1}.png`,
  }));
  const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

  return (
    <div className="w-full pt-[60px]">
      <h5 className={styles.subheading} style={{paddingBottom: "12px"}}>Gallery</h5>
      <Grid

        container
        spacing={1}
        sx={{ background: "#F1E5AC", display: "flex" }}
        alignItems="center"
        justifyContent="center"
      >
        <Carousel images={images} style={{ height: 500, width: 800 }} />
      </Grid>
    
    </div>
  );
}

