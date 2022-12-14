import Head from "next/head";
import styles from "../styles/Home.module.scss";
import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";
import { Fade } from "react-awesome-reveal";
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
import { Button, Box, Grid } from "@mui/material";
import Vision from "../components/sections/Vision";
import Core from "../components/sections/Core";
import AboutUs from "../components/sections/AboutUs";
import OurProduct from "../components/sections/OurProduct";
import Ssm from "../components/sections/Ssm";
import OurDirectors from "../components/sections/OurDirectors";
import CorporateInfo from "../components/sections/CorporateInfo";
import Introduction from "../components/sections/Introduction";
import Chart from "../components/sections/Chart";
import Gallery from "../components/sections/Gallery";
import Market from "../components/sections/Market";

export default function Home() {
  const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

  return (
    <>
      <Grid
        container
        spacing={1}
        sx={{ background: "#F1E5AC", display: "flex" }}
      >
        <Grid
          item
          xs={12}
          md={6}
          className={styles.left}
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            order: { xs: "2", md: "1" },
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            {/* <Image src='/logo.png' width='70%' height='65%' /> */}
            <h5 className={styles.heading}>Auric Asia</h5>
          </Box>
          <h6 className={styles.description}>
            We deliver satisfactory service to our customers through
            organization efficiency, value creation and talent development.
          </h6>
          <Button
            className={styles.animatedButton}
            href="/"
            target="_blank"
            variant="outlined"
            color="primary"
            sx={{
              textTransform: "none",
              justifySelf: "center",
              margin: "0.5vw",
            }}
          >
            Learn More
          </Button>
        </Grid>



        <Grid
          item
          xs={12}
          md={6}
          sx={{
            display: "flex",
            justifyContent: "center",
            order: { xs: "1", md: "2" },
          }}
        >
          <img className={styles.image} src="/logs.jpg" width="100%" />
      
        </Grid>
    
      </Grid>

      {/*   <div className={styles.container}>
        <Fade>
          <main className={styles.description} style={{ marginBottom: "25px" }}>
            Auric Asia PLT is a company specialized in timber and biomass
            product, that provides innovative products and services to satisfy
            the needs. We handle all kinds of product related to trees, ranging
            from raw wood felled by us to timber product and biomass production.
            With the global shift to achieving net-zero, the recognition of the
            sustainability of timber and its vital role in decarbonizing the
            construction sector has been brought into sharp focus. Timber is
            rapidly becoming the material of the future and the use of timber
            frames and modern methods of construction are key to ensuring to
            meet its needs. Auric Asia has shown the innovative work which can
            be done within the sector, and we look forward to bringing this
            knowledge to the role and working collaboratively with industry and
            government to ensure the sector continues to thrive.??? We as well
            welcome you to contact us to experience the ultimate services that
            our clients experience when working with us. Our aim is to provide
            the highest quality, efficient delivery and professional services by
            offering unparalleled support.
          </main>
        </Fade>
      </div> */}
      <span id="aboutUs"></span>
     <div className="p-[35px] bg-[#F1E5AC] min-h-screen flex flex-col shrink-0 ">
     <Fade>
        <AboutUs />
      </Fade>
      <Fade>
        <Vision />
      </Fade>
      <Fade>
        <Core />
      </Fade>
      <Fade>
        <CorporateInfo />
      </Fade>
      <Fade>
        <Chart />
      </Fade>
      <Fade>
        <OurDirectors />
      </Fade>
      <Fade>
        <Ssm />
      </Fade>
      <Fade>
        <OurProduct />
      </Fade>
      <Fade>
        <Market />
      </Fade>
      <Fade>
        <Gallery />
      </Fade>
     </div>
    </>
  );
}
