import { Grid, List, ListItem, Typography } from "@mui/material";
import React from "react";
import styles from "../../styles/Home.module.scss";

export default function AboutUs() {
  return (
    <>
      <Grid
        id="directors"
        container
        spacing={1}
        sx={{ background: "#F1E5AC", display: "flex" }}
        alignItems="center"
        justifyContent="center"
      >
        <div className={styles.container}>
          <Grid item xs={12}>
            <h5 className={styles.subheading}>Our Directors</h5>
          </Grid>
          <Grid item xs={12}>
            <div className={styles.description}>
              <List
                aria-labelledby="mission-list"
                sx={{ "--List-decorator-size": "32px" }}
              >
                <Typography
                  id="decorated-list-demo"
                  textTransform="uppercase"
                  fontWeight="lg"
                  mb={1}
                  variant="h4"
                >
                  SARAVANAN S/O MUTHAIYAH
                </Typography>
                <Typography
                  id="decorated-list-demo"
                  textTransform="uppercase"
                  fontWeight="lg"
                  mb={1}
                  variant="h6"
                >
                  Managing Director
                </Typography>
                <ListItem>
                  Cert in Electric and Electronic, Politeknik Sultan Ahmad Shah,
                  Kuantan Pahang Advance Diploma in Information System , Olympia
                  College Petaling Jaya, Selangor Kamala Seelan started his
                  career with Western Digital {"(M)"} Sdn Bhd as Process
                  Technician in 2005 and resign on 2015 as a Technical
                  Specialist Process Engineering. Later in 2016, he joined Phone
                  Star Marketing Sdn Bhd as a Operation Manager. Subsequently
                  2019,he move on to a more challenging position in Sinar Suri
                  Komunikasi as Project Manager. In May 2021, he joined Auric
                  Asia PLT. As a Operations Director of Auric Asia, Kamala
                  Seelan is in charge of planning, coordinating and manage all
                  administrative procedures and operation. He collaborate with
                  customers and vendors to ensure high-quality products that
                  adhere to schedule timelines and meet budget guidelines. He as
                  well develop design documents as well for project
                  documentation. He developed project strategies for large-scale
                  enterprise implementations with management. He keeps abreast
                  with all organizational changes and also on business
                  developments.
                </ListItem>
                <Typography
                  id="decorated-list-demo"
                  textTransform="uppercase"
                  fontWeight="lg"
                  mb={1}
                  variant="h4"
                >
                  KAMALA SEELAN S/O KAMALA SEGARAN
                </Typography>
                <Typography
                  id="decorated-list-demo"
                  textTransform="uppercase"
                  fontWeight="lg"
                  mb={1}
                  variant="h6"
                >
                  Operations Director
                </Typography>
                <ListItem>
                  Cert in Electric and Electronic, Politeknik Sultan Ahmad Shah,
                  Kuantan Pahang Advance Diploma in Information System , Olympia
                  College Petaling Jaya, Selangor Kamala Seelan started his
                  career with Western Digital {"(M)"} Sdn Bhd as Process
                  Technician in 2005 and resign on 2015 as a Technical
                  Specialist Process Engineering. Later in 2016, he joined Phone
                  Star Marketing Sdn Bhd as a Operation Manager. Subsequently
                  2019,he move on to a more challenging position in Sinar Suri
                  Komunikasi as Project Manager. In May 2021, he joined Auric
                  Asia PLT. As a Operations Director of Auric Asia, Kamala
                  Seelan is in charge of planning, coordinating and manage all
                  administrative procedures and operation. He collaborate with
                  customers and vendors to ensure high-quality products that
                  adhere to schedule timelines and meet budget guidelines. He as
                  well develop design documents as well for project
                  documentation. He developed project strategies for large-scale
                  enterprise implementations with management. He keeps abreast
                  with all organizational changes and also on business
                  developments.
                </ListItem>
              </List>
            </div>
          </Grid>
        </div>
      </Grid>
    </>
  );
}
