import Head from "next/head";
import styles from "../styles/Home.module.scss";
import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";
import Image from "next/image";
import AccessibilityNewIcon from "@mui/icons-material/AccessibilityNew";
import ElectricBoltIcon from "@mui/icons-material/ElectricBolt";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import InventoryIcon from "@mui/icons-material/Inventory";
import AddBusinessIcon from "@mui/icons-material/AddBusiness";
import TimelineIcon from "@mui/icons-material/Timeline";
import ShieldIcon from "@mui/icons-material/Shield";
import MobileFriendlyIcon from "@mui/icons-material/MobileFriendly";
import LanguageIcon from "@mui/icons-material/Language";
import YouTubeIcon from "@mui/icons-material/YouTube";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import MailIcon from "@mui/icons-material/Mail";
import {
  Grid,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Typography,
} from "@mui/material";

export default function Vision() {
  const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

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
          <Head>
            <title>Auric Asia</title>
            <meta name="description" content="Auric Asia" />
            <link rel="icon" href="/favicon.ico" />
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link
              rel="preconnect"
              href="https://fonts.gstatic.com"
              crossOrigin
            />
            <link
              href="https://fonts.googleapis.com/css2?family=Ubuntu:wght@300&display=swap"
              rel="stylesheet"
            />
          </Head>
          <Grid item xs={12}>
            <h5 className={styles.subheading}>Vision & Mission</h5>
          </Grid>
          <Grid item xs={12}>
            <div className={styles.description}>
              <Typography
                id="decorated-list-demo"
                textTransform="uppercase"
                fontWeight="lg"
                mb={1}
                variant="h4"
              >
                Vision
              </Typography>
              <List
                aria-labelledby="decorated-list-demo"
                sx={{ "--List-decorator-size": "32px" }}
              >
                <ListItem>
                  <ListItemIcon>.</ListItemIcon>To develop and maintain strong
                  and valued business synergies our partners and our customers.
                </ListItem>
                <ListItem>
                  <ListItemIcon>.</ListItemIcon>To provide excellent quality in
                  our product and exemplary service to our customers, regardless
                  of the volume of trade.
                </ListItem>
                <ListItem>
                  <ListItemIcon>.</ListItemIcon> To help, in which way we can,
                  preserve the world we live in, protecting the environment,
                  flora and fauna and making EARTH a better place for future
                  generations.
                </ListItem>
                <ListItem>
                  <ListItemIcon>.</ListItemIcon> To be a significant contributor
                  to the sustainable development of timber resources and value
                  added industry.
                </ListItem>
              </List>
              <Typography
                id="decorated-list-demo"
                level="body3"
                textTransform="uppercase"
                fontWeight="lg"
                mb={1}
                variant="h4"
              >
                Mission
              </Typography>
              <List
                aria-labelledby="decorated-list-demo"
                sx={{ "--List-decorator-size": "32px" }}
              >
                <ListItem>
                  <ListItemIcon>.</ListItemIcon> To be a significant contributor
                  To deliver satisfactory service to our customers through
                  organization efficiency, value creation and talent
                  development.
                </ListItem>
              </List>
            </div>
          </Grid>
        </div>
      </Grid>
    </>
  );
}
