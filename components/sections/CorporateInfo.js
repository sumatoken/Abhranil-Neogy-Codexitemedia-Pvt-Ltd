import { Grid, List, ListItem, ListItemIcon, Typography } from "@mui/material";
import Link from "next/link";
import React from "react";
import styles from "../../styles/Home.module.scss";

export default function CorporateInfo() {
  return (
    <div id="corpInfo">
      <Grid
        id="corpInfo"
        container
        spacing={1}
        sx={{ background: "#F1E5AC", display: "flex" }}
        alignItems="center"
        justifyContent="center"
      >
        <div className={styles.container}>
          <Grid item xs={12}>
            <h5 className={styles.subheading}> Corporate Information</h5>
          </Grid>
          <div className={styles.description}>
            <List
              aria-labelledby="mission-list"
              sx={{ "--List-decorator-size": "32px" }}
            >
              <ListItem>
                <ListItemIcon sx={{ marginRight: "10px" }}>
                  SSM Registration No:
                </ListItemIcon>
                LLP0016968-LGN
              </ListItem>
              <ListItem>
                <ListItemIcon sx={{ marginRight: "40px" }}>
                  Date Of Incorporation:
                </ListItemIcon>{" "}
                26 June 2018
              </ListItem>
              <ListItem>
                <ListItemIcon sx={{ marginRight: "40px" }}>
                  Board Of Directors:
                </ListItemIcon>{" "}
                Saravanan Muthaiyah <br />
                Kamala Seelan Kamala Segaran
              </ListItem>
              <ListItem>
                <ListItemIcon sx={{ marginRight: "40px" }}>
                  Business Address:
                </ListItemIcon>{" "}
                No.1-11, SUITE 43A, Sentral Business Suites, Jalan TKS 1, 43000
                Kajang, Selangor Darul Ehsan, Malaysia
              </ListItem>
              <ListItem>
                <ListItemIcon sx={{ marginRight: "40px" }}>
                  Office No:
                </ListItemIcon>
                <Link href="mailto: abc@example.com">
                  admin@auricasia.com.my
                </Link>
              </ListItem>
              <ListItem>
                <ListItemIcon sx={{ marginRight: "40px" }}>
                  Website:{" "}
                </ListItemIcon>{" "}
                <Link href="https://www.auricasia.com.my">
                  www.auricasia.com.my
                </Link>
              </ListItem>
              <ListItem>
                <ListItemIcon sx={{ marginRight: "40px" }}>
                  Bank Facilities:{" "}
                </ListItemIcon>{" "}
                CIMB Bank Berhad, Malaysia
              </ListItem>
            </List>
          </div>
        </div>
      </Grid>
    </div>
  );
}
