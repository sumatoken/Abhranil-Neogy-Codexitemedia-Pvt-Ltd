import React from "react";
import styles from "../../styles/Home.module.scss";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { Typography } from "@mui/material";
import LoyaltyIcon from "@mui/icons-material/Loyalty";
import VolunteerActivismIcon from "@mui/icons-material/VolunteerActivism";
import InsightsIcon from "@mui/icons-material/Insights";
import WorkspacePremiumIcon from "@mui/icons-material/WorkspacePremium";
import DirectionsWalkIcon from "@mui/icons-material/DirectionsWalk";
import ThumbUpAltIcon from "@mui/icons-material/ThumbUpAlt";
import HandshakeIcon from "@mui/icons-material/Handshake";
import PublicIcon from "@mui/icons-material/Public";
import DeveloperBoardIcon from "@mui/icons-material/DeveloperBoard";
import AssuredWorkloadIcon from "@mui/icons-material/AssuredWorkload";
import ForestIcon from "@mui/icons-material/Forest";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default function Core() {
  return (
    <>
      <Grid
        id="core"
        container
        spacing={1}
        sx={{ background: "#F1E5AC", display: "flex" }}
        alignItems="center"
        justifyContent="center"
      >
        <div className={styles.container}>
          <Grid item xs={12}>
            <h5 className={styles.subheading}>Core Values</h5>
          </Grid>
          <Grid item xs={12}>
            <div className={styles.description}>
              <Grid container spacing={2}>
                <Grid item xs={12} lg={3}>
                  <Grid item xs={12}>
                    <VolunteerActivismIcon
                      sx={{ width: "50px", height: "50px" }}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    We believe in sincerity, honesty and accuracy of promises.
                  </Grid>
                </Grid>
                <Grid item xs={12} lg={3}>
                  <Grid item xs={12}>
                    <InsightsIcon sx={{ width: "50px", height: "50px" }} />
                  </Grid>
                  <Grid item xs={12}>
                    We strive to attract, train and retain our staff at all
                    levels.
                  </Grid>
                </Grid>
                <Grid item xs={12} lg={3}>
                  <Grid item xs={12}>
                    <WorkspacePremiumIcon
                      sx={{ width: "50px", height: "50px" }}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    We are passionate to serve our customers and believe that
                    best enterprises are driven by a service excellence culture
                  </Grid>
                </Grid>
                <Grid item xs={12} lg={3}>
                  <Grid item xs={12}>
                    <DirectionsWalkIcon
                      sx={{ width: "50px", height: "50px" }}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    We are reliable, fair and honest as we appreciate when
                    others are the same.
                  </Grid>
                </Grid>
                <Grid item xs={12} lg={3}>
                  <Grid item xs={12}>
                    <ThumbUpAltIcon sx={{ width: "50px", height: "50px" }} />
                  </Grid>
                  <Grid item xs={12}>
                    We are committed to the satisfaction of our customers.
                  </Grid>
                </Grid>
                <Grid item xs={12} lg={3}>
                  <Grid item xs={12}>
                    <HandshakeIcon sx={{ width: "50px", height: "50px" }} />
                  </Grid>
                  <Grid item xs={12}>
                    We believe in the concept of teamwork, harmony and loyalty.
                  </Grid>
                </Grid>
                <Grid item xs={12} lg={3}>
                  <Grid item xs={12}>
                    <PublicIcon sx={{ width: "50px", height: "50px" }} />
                  </Grid>
                  <Grid item xs={12}>
                    We operate nationally and internationally.{" "}
                  </Grid>{" "}
                </Grid>
                <Grid item xs={12} lg={3}>
                  <Grid item xs={12}>
                    <DeveloperBoardIcon
                      sx={{ width: "50px", height: "50px" }}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    We are always looking for opportunities and trying out the
                    latest technology.{" "}
                  </Grid>{" "}
                </Grid>
                <Grid item xs={12} lg={4}>
                  <Grid item xs={12}>
                    <AssuredWorkloadIcon
                      sx={{ width: "50px", height: "50px" }}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    We will carry out work with full dedication, efficiency and
                    produce high quality and satisfactory work with a full sense
                    of responsibility{" "}
                  </Grid>{" "}
                </Grid>
                <Grid item xs={12} lg={4}>
                  <Grid item xs={12}>
                    <ForestIcon sx={{ width: "50px", height: "50px" }} />
                  </Grid>
                  <Grid item xs={12}>
                    We believe in the rightful use of all resources, accurately,
                    as it preserves the world we live in and make it a better
                    place for future generations{" "}
                  </Grid>{" "}
                </Grid>
                <Grid item xs={12} lg={4}>
                  <Grid item xs={12}>
                    <SupportAgentIcon sx={{ width: "50px", height: "50px" }} />
                  </Grid>
                  <Grid item xs={12}>
                    We place our customers at the centre of our business
                    activities, and go the extra mile to satisfy the business{" "}
                  </Grid>{" "}
                </Grid>
              </Grid>
            </div>
          </Grid>
        </div>
      </Grid>
    </>
  );
}
