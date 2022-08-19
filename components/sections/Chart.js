import { Grid, List, ListItem, ListItemIcon, Typography } from "@mui/material";
import React from "react";
import styles from "../../styles/Home.module.scss";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
/* const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
})); */
const Item = ({ children }) => {
  return <div>{children}</div>;
};
export default function Chart() {
  /* return (
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

              <List
                aria-labelledby="mission-list"
                sx={{ "--List-decorator-size": "32px" }}
              >
                <ListItem>
                  <ListItemIcon>Mr. M.Saravanan</ListItemIcon>
                </ListItem>
              </List>
              <Grid item xs={6}>
                <span>Mr. M.Saravanan</span>
              </Grid>
              <Grid item xs={6}>
                  <span className={styles.subtitle}>Managing Director</span>
              </Grid>
              <List
                aria-labelledby="mission-list"
                sx={{ "--List-decorator-size": "32px" }}
              >
                <ListItem>
                  <ListItemIcon>Mr. K.S.Kamala Seelan</ListItemIcon>{" "}
                  <span className={styles.subtitle}>Operation Director</span>
                </ListItem>
              </List>
              <Grid item xs={12} lg={4}>
                <Grid item xs={12}>
                  <List
                    aria-labelledby="mission-list"
                    sx={{ "--List-decorator-size": "32px" }}
                  >
                    <ListItem>
                      <ListItemIcon>Ms. K.K.Preety</ListItemIcon>
                      <span className={styles.subtitle}>Head of Finance</span>
                    </ListItem>
                  </List>
                </Grid>{" "}
              </Grid>
              <Grid item xs={12} lg={4}>
                <Grid item xs={12}>
                  {" "}
                  <List
                    aria-labelledby="mission-list"
                    sx={{ "--List-decorator-size": "32px" }}
                  >
                    <ListItem>
                      <ListItemIcon>Mr. Syukri Bin Abdul Rahim</ListItemIcon>
                      <span className={styles.subtitle}>Operation Manager</span>
                    </ListItem>
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
  ); */
  return (
    <div id="chart">
      <Grid item xs={12}>
        <h5 className={styles.subheading}>Management Organization Chart</h5>
      </Grid>
      <Box sx={{ width: "100%" }}>
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          <Grid item xs={6}>
            <Item>
              {" "}
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
            </Item>
          </Grid>
          <Grid item xs={6}>
            <Item>
              {" "}
              <span className={styles.subtitle}>Board of Directors</span>
            </Item>
          </Grid>
          <Grid item xs={6}>
            <Item>
              {" "}
              <List
                aria-labelledby="mission-list"
                sx={{ "--List-decorator-size": "32px" }}
              >
                <ListItem>
                  <ListItemIcon>.</ListItemIcon>Mr. M.Saravanan
                </ListItem>
              </List>
            </Item>
          </Grid>
          <Grid item xs={6}>
            <Item>
              {" "}
              <span className={styles.subtitle}>Managing Director</span>
            </Item>
          </Grid>
          <Grid item xs={6}>
            <Item>
              {" "}
              <List
                aria-labelledby="mission-list"
                sx={{ "--List-decorator-size": "32px" }}
              >
                <ListItem>
                  <ListItemIcon>.</ListItemIcon>Mr. K.S.Kamala Seelan
                </ListItem>
              </List>
            </Item>
          </Grid>
          <Grid item xs={6}>
            <Item>
              {" "}
              <span className={styles.subtitle}>Operations Director</span>
            </Item>
          </Grid>
          <Grid item xs={6}>
            <Item>
              {" "}
              <List
                aria-labelledby="mission-list"
                sx={{ "--List-decorator-size": "32px" }}
              >
                <ListItem>
                  <ListItemIcon>.</ListItemIcon>Ms. K.K.Preety
                </ListItem>
              </List>
            </Item>
          </Grid>
          <Grid item xs={6}>
            <Item>
              {" "}
              <span className={styles.subtitle}>Head Of Finance</span>
            </Item>
          </Grid>
          <Grid item xs={6}>
            <Item>
              {" "}
              <List
                aria-labelledby="mission-list"
                sx={{ "--List-decorator-size": "32px" }}
              >
                <ListItem>
                  <ListItemIcon>.</ListItemIcon>Mr. Syukri Bin Abdul Rahim
                </ListItem>
              </List>
            </Item>
          </Grid>
          <Grid item xs={6}>
            <Item>
              {" "}
              <span className={styles.subtitle}>Operations Manager</span>
            </Item>
          </Grid>
          <Grid item xs={6}>
            <Item>
              {" "}
              <List
                aria-labelledby="mission-list"
                sx={{ "--List-decorator-size": "32px" }}
              >
                <ListItem>
                  <ListItemIcon>.</ListItemIcon>Ms. Nursyerin Abdullah
                </ListItem>
              </List>
            </Item>
          </Grid>
          <Grid item xs={6}>
            <Item>
              {" "}
              <span className={styles.subtitle}>Head Of Administration</span>
            </Item>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}
