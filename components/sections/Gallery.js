import { Grid, List, ListItem, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";
import styles from "../../styles/Home.module.scss";

export default function Gallery() {
  const numberOfImagesArrayLoop = Array.from(Array(18).keys());
  return (
    <>
      <Grid
        id="gallery"
        container
        spacing={1}
        sx={{ background: "#F1E5AC", display: "flex" }}
        alignItems="center"
        justifyContent="center"
      >
        <SwipeableViews>
          {numberOfImagesArrayLoop.map((n, key) => (
            <Image src={`/gallery-${key + 1}`} width={400} height={500} />
          ))}
        </SwipeableViews>
      </Grid>
    </>
  );
}
