import { useState, useEffect } from "react";
import { useTheme } from "@mui/styles";
import Image from "next/image";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import styles from "../styles/Navbar.module.scss";
import Chip from "@mui/material/Chip";
import Link from "next/link";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import HomeIcon from "@mui/icons-material/Home";
import CategoryIcon from "@mui/icons-material/Category";
import BuildIcon from "@mui/icons-material/Build";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import InfoIcon from "@mui/icons-material/Info";
import WorkIcon from "@mui/icons-material/Work";
import PhoneIcon from "@mui/icons-material/Phone";
import { useRouter } from "next/router";

const NavBar = () => {
  const router = useRouter();
  const theme = useTheme();

  const [padding, setPadding] = useState("10px");
  const [fontSize, setFontSize] = useState("1em");
  const [imageWidth, setImageWidth] = useState("65%");
  const [imageHeight, setImageHeight] = useState("60%");

  const [drawer, setDrawer] = useState(false);

  const [anchorProducts, setAnchorProducts] = useState(null);
  const [anchorServices, setAnchorServices] = useState(null);
  const [anchorAboutUs, setAnchorAboutUs] = useState(null);

  const openProducts = Boolean(anchorProducts);
  const openServices = Boolean(anchorServices);
  const openAboutUs = Boolean(anchorAboutUs);

  const handleProductsClick = (event) => {
    setAnchorProducts(event.currentTarget);
  };
  const handleProductsClose = () => {
    setAnchorProducts(null);
  };
  const handleServicesClick = (event) => {
    setAnchorServices(event.currentTarget);
  };
  const handleServicesClose = () => {
    setAnchorServices(null);
  };
  const handleAboutUsClick = (event) => {
    setAnchorAboutUs(event.currentTarget);
  };
  const handleAboutUsClose = () => {
    setAnchorAboutUs(null);
  };

  const toggleDrawer = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setDrawer(open);
  };
  const list = (anchor) => (
    <Box
      sx={{ width: { xs: "60vw", md: "20vw" } }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        <Divider />
        <ListItem
          button
          onClick={() => router.push("/#aboutUs").then(() => setDrawer(false))}
          sx={{ textTransform: "none", fontSize: fontSize }}
        >
          <ListItemText primary="About Us" />
        </ListItem>
        <ListItem
          button
          onClick={() => router.push("/#vision").then(() => setDrawer(false))}
          sx={{ textTransform: "none", fontSize: fontSize }}
        >
          <ListItemText primary="Vision & Mission" />
        </ListItem>
        <ListItem
          button
          onClick={() => router.push("/#core").then(() => setDrawer(false))}
          sx={{ textTransform: "none", fontSize: fontSize }}
        >
          <ListItemText primary="Core Values" />
        </ListItem>

        <ListItem
          button
          onClick={() => router.push("/#corpInfo").then(() => setDrawer(false))}
          sx={{ textTransform: "none", fontSize: fontSize }}
        >
          <ListItemText primary="Corp Info" />
        </ListItem>

        <Divider />

        <ListItem
          button
          onClick={() => router.push("/#chart").then(() => setDrawer(false))}
          sx={{ textTransform: "none", fontSize: fontSize }}
        >
          <ListItemText primary="Chart" />
        </ListItem>
        <ListItem
          button
          onClick={() =>
            router.push("/#directors").then(() => setDrawer(false))
          }
          sx={{ textTransform: "none", fontSize: fontSize }}
        >
          <ListItemText primary="Directors" />
        </ListItem>
        <ListItem
          button
          onClick={() => router.push("/#ssm").then(() => setDrawer(false))}
          sx={{ textTransform: "none", fontSize: fontSize }}
        >
          <ListItemText primary="Company SSM & Info." />
        </ListItem>
        <ListItem
          button
          onClick={() => router.push("/#product").then(() => setDrawer(false))}
          sx={{ textTransform: "none", fontSize: fontSize }}
        >
          <ListItemText primary="Products" />
        </ListItem>

        <ListItem
          button
          onClick={() => router.push("/#market").then(() => setDrawer(false))}
          sx={{ textTransform: "none", fontSize: fontSize }}
        >
          <ListItemText primary="Export Market" />
        </ListItem>
        <ListItem
          button
          onClick={() => router.push("/#gallery").then(() => setDrawer(false))}
          sx={{ textTransform: "none", fontSize: fontSize }}
        >
          <ListItemText primary="Our Gallery" />
        </ListItem>
        <ListItem
          button
          onClick={() => router.push("/#footer").then(() => setDrawer(false))}
          sx={{ textTransform: "none", fontSize: fontSize }}
        >
          <ListItemText primary="Contact Us" />
        </ListItem>
      </List>
    </Box>
  );

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 1) {
        setPadding("0px");
        setFontSize("0.9em");
        setImageWidth("60%");
        setImageHeight("45%");
      } else {
        setPadding("10px");
        setFontSize("1em");
        setImageWidth("75%");
        setImageHeight("65%");
      }
    };

    document.addEventListener("scroll", handleScroll);
    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <AppBar
      position="sticky"
      sx={{
        padding: padding,
        transition: "0.8s",
        backgroundColor: "#000",
      }}
    >
      <Container maxWidth="xl">
        <Toolbar className={styles.navbar} disableGutters>
          {/* desktop */}

          <Link href="/">
            <Box
              sx={{ display: { xs: "none", md: "flex" }, cursor: "pointer" }}
            >
              <Image
                src="/aalogo.png"
                width={imageWidth}
                height={imageHeight}
              />
              <Typography className={styles.heading}>
                <span style={{ color: "#d1a000" }}> Auric Asia</span>
              </Typography>
            </Box>
          </Link>

          <Box
            className={styles.nav}
            sx={{
              display: { xs: "none", md: "flex" },
              flexGrow: 1,
              justifyContent: "end",
            }}
          >
            <Button
              href="/#aboutUs"
              sx={{
                my: 1,
                display: "flex",
                textTransform: "none",
                fontSize: fontSize,
              }}
            >
              <b>About Us</b>
            </Button>
            <Button
              href="/#vision"
              sx={{
                my: 1,
                display: "flex",
                textTransform: "none",
                fontSize: fontSize,
              }}
            >
              <b>Vision & Mission</b>
            </Button>

            <Button
              href="/#core"
              sx={{
                my: 1,
                display: "flex",
                textTransform: "none",
                fontSize: fontSize,
              }}
            >
              <b>Core Values</b>
            </Button>

            <Button
              href="/#corpInfo"
              sx={{
                my: 1,
                display: "flex",
                textTransform: "none",
                fontSize: fontSize,
              }}
            >
              <b>Corp Info</b>
            </Button>

            <Button
              href="/#chart"
              sx={{
                my: 1,
                display: "flex",
                textTransform: "none",
                fontSize: fontSize,
              }}
            >
              <b>Chart</b>
            </Button>

            <Button
              href="/#directors"
              sx={{
                my: 1,
                display: "flex",
                textTransform: "none",
                fontSize: fontSize,
              }}
            >
              <b> Directors</b>
            </Button>
            <Button
              href="/#ssm"
              sx={{
                my: 1,
                display: "flex",
                textTransform: "none",
                fontSize: fontSize,
              }}
            >
              <b>Company SSM & Info.</b>
            </Button>
            <Button
              href="/#product"
              sx={{
                my: 1,
                display: "flex",
                textTransform: "none",
                fontSize: fontSize,
              }}
            >
              <b>Products</b>
            </Button>

            <Button
              href="/#market"
              sx={{
                my: 1,
                display: "flex",
                textTransform: "none",
                fontSize: fontSize,
              }}
            >
              <b>Export Market</b>
            </Button>
            <Button
              href="/#gallery"
              sx={{
                my: 1,
                display: "flex",
                textTransform: "none",
                fontSize: fontSize,
              }}
            >
              <b>Our Gallery</b>
            </Button>
            <Button
              href="/#footer"
              sx={{
                my: 1,
                display: "flex",
                textTransform: "none",
                fontSize: fontSize,
              }}
            >
              <b>Contact Us.</b>
            </Button>
          </Box>

          {/* mobile */}
          <Link href="/">
            <Box
              sx={{ display: { xs: "flex", md: "none" }, cursor: "pointer" }}
            >
              <Image
                src="/aalogo.png"
                width={imageWidth}
                height={imageHeight}
              />
              <Typography
                sx={{
                  fontSize: fontSize,
                  fontWeight: "bold",
                  color: "#00478F;",
                  ml: 1,
                }}
                className={styles.heading}
              >
                <span style={{ color: "#d1a000" }}> Auric Asia</span>
              </Typography>
            </Box>
          </Link>
          <IconButton
            sx={{ display: { xs: "flex", md: "none" } }}
            color="secondary"
            size="large"
            aria-label="account of current user"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={toggleDrawer("right", true)}
          >
            <MenuIcon fontSize="large" />
          </IconButton>
          <Drawer
            anchor="right"
            open={drawer}
            onClose={toggleDrawer(false)}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
          >
            {list("right")}
          </Drawer>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default NavBar;
