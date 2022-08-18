import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Grid, List, ListItem } from "@mui/material";
import styles from "../../styles/Home.module.scss";

const bull = (
  <Box
    component="span"
    sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
  >
    •
  </Box>
);

const card = (
  <React.Fragment>
    <CardContent>
      <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
        Word of the Day
      </Typography>
      <Typography variant="h5" component="div">
        be{bull}nev{bull}o{bull}lent
      </Typography>
      <Typography sx={{ mb: 1.5 }} color="text.secondary">
        adjective
      </Typography>
      <Typography variant="body2">
        well meaning and kindly.
        <br />
        {'"a benevolent smile"'}
      </Typography>
    </CardContent>
    <CardActions>
      <Button size="small">Learn More</Button>
    </CardActions>
  </React.Fragment>
);

export default function ContactUs() {
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
          <Grid item xs={12}>
            <h5 className={styles.subheading}>Contact Us</h5>
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
                <a href="mailto: abc@example.com">Send Email</a>
              </Typography>
              <List
                aria-labelledby="mission-list"
                sx={{ "--List-decorator-size": "32px" }}
              >
                <ListItem>
                  <Box sx={{ minWidth: 300 }}>
                    <Card variant="outlined">{card}</Card>
                  </Box>
                </ListItem>
                <ListItem>
                  <Box
                    sx={{
                      minWidth: 300,
                      background:
                        'linear-gradient("circle at 10% 20%, rgb(0, 0, 0) 0%, rgb(64, 64, 64) 90.2%")',
                    }}
                  >
                    <Card variant="outlined">{card}</Card>
                  </Box>
                </ListItem>
              </List>
            </div>
          </Grid>
        </div>
      </Grid>
    </>
  );
}
