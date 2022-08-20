import styles from "../styles/Footer.module.scss";
import Image from "next/image";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PhoneIcon from "@mui/icons-material/Phone";
import MailIcon from "@mui/icons-material/Mail";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import { Box } from "@mui/material";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className={styles.footer} id="footer">
      <Box>
        <Image src="/aalogo.png" width="100%" height="90%" />
        <p>
          &copy; {new Date().getFullYear()} Auric Asia. All rights reserved.
        </p>

        <Box>
          <a target="__blank" href="/">
            <FacebookIcon sx={{ color: "#3b5998" }} className={styles.icon} />
          </a>
          <a target="__blank" href="/">
            <LinkedInIcon sx={{ color: "#0072b1" }} className={styles.icon} />
          </a>
          {/* <a target='__blank' href='/'>
                        <GitHubIcon sx={{color: '#171515'}} className={styles.icon} />
                    </a> */}
        </Box>
        {/* <p>Designed and developed by <u><Link href='http://localhost:3000/about-us/our-team#abdullahansari'>Abdullah Ansari</Link></u></p> */}
      </Box>

      <Box sx={{ display: { xs: "none", md: "flex" } }}>
        <ul className={styles.iconList}>
          <h3>Quick Links</h3>
          <li className={styles.iconListItem}>
            <a href="/#aboutUs">
              <ArrowRightIcon className={styles.icon} />
              About Us
            </a>
          </li>
          <li className={styles.iconListItem}>
            <a href="/#corpInfo">
              <ArrowRightIcon className={styles.icon} />
              Corporate Information
            </a>
          </li>
          <li className={styles.iconListItem}>
            <a href="/#chart">
              <ArrowRightIcon className={styles.icon} />
              Mgmt. Org. Chart
            </a>
          </li>
          <li className={styles.iconListItem}>
            <a href="/#directors">
              <ArrowRightIcon className={styles.icon} />
              Our Director
            </a>
          </li>
          <li className={styles.iconListItem}>
            <a href="/#product">
              <ArrowRightIcon className={styles.icon} />
              Our Product
            </a>
          </li>
          <li className={styles.iconListItem}>
            <a href="/#ssm">
              <ArrowRightIcon className={styles.icon} />
              Company SSM & Info.
            </a>
          </li>
        </ul>
      </Box>

      <Box sx={{ display: { xs: "none", md: "flex" } }}>
        <ul className={styles.iconList}>
          <h3>Connect With Us</h3>
          <li className={styles.iconListItem}>
            <LocationOnIcon className={styles.icon} />
            <span>
              No.1-11, Suite 43A, Sentral Business Suites,
              <br /> Jalan TKS 1, 43000 Kajang, Selangor Darul Ehsan.
            </span>
          </li>
          <br />
          <li className={styles.iconListItem}>
            <PhoneIcon className={styles.icon} />
            <Link href="tel: +60192100978">+601-9210-0978</Link>
            <span style={{ marginLeft: "10px" }}></span>
            <PhoneIcon className={styles.icon} />
            <Link href="tel:+60179800081">+601-7980-0081</Link>
          </li>
          <br />
          <li className={styles.iconListItem}>
            <MailIcon className={styles.icon} />
            <Link href="mailto:admin@auricasia.com">admin@auricasia.com</Link>
          </li>
        </ul>
      </Box>
    </footer>
  );
};
export default Footer;
