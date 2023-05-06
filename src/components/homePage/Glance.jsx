import { Box, Container, Grid, Typography } from "@mui/material";
import React from "react";
import groupLogo from "../../assets/icons/group.png";
import { glanceData } from "../../assets/data/glanceData";
import GlanceCard from "../cards/GlanceCard";

const cardStyleSX = {
  backgroundColor: "#fff",
  boxShadow: "30px 35px 119px 0 rgba(0,0,0,.16)",
  borderRadius: "5px",
  minHeight: "500px",
  position: "relative",
  top: "-250px",
}

const Glance = () => {
  return (
    <Container maxWidth="lg">
      <Box
        width="100%"
        sx={cardStyleSX}
      >
        <Box sx={{ padding: "74px 60px 20px", textAlign: "center" }}>
          <Typography variant="h4" fontWeight={"600"}>
            <span style={{ color: "#0068f3" }}>weDevs</span> at A Glance
          </Typography>
        </Box>

        <Grid container spacing={0} justifyContent={"center"}>
          {glanceData.map((item) => (
            <Grid item md={2} sm={4} xs={12}>
              <GlanceCard data={item} />
            </Grid>
          ))}
        </Grid>
      </Box>

      <Typography
        textAlign="center"
        marginTop="-150px"
        color="white"
        variant="h3"
        fontWeight="800"
      >
        Our Customers Worldwide
      </Typography>
    </Container>
  );
};

export default Glance;
