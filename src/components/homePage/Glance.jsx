import { Box, Container, Grid, Typography } from "@mui/material";
import React from "react";
import groupLogo from "../../assets/icons/group.png";

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
        <Box sx={{ padding: "74px 60px 67px", textAlign: "center" }}>
          <Typography variant="h4" fontWeight={"600"}>
            <span style={{ color: "#0068f3" }}>weDevs</span> at A Glance
          </Typography>
        </Box>

        <Grid container spacing={0} justifyContent={"center"}>
          {[1, 2, 3, 4, 5].map((item) => (
            <Grid item md={2} sm={4} xs={12}>
              <Box width="100%" textAlign={"center"}>
                <img
                  src={groupLogo}
                  alt="group"
                  style={{
                    borderRadius: "50%",
                    boxShadow: " 0 14px 41px 0 rgba(58,17,98,.1)",
                  }}
                />

                <Typography variant="h3" pt="30px">
                  98+
                </Typography>
                <Typography pt="30px" color="#474b4f">
                  Team <br /> Members{" "}
                </Typography>
              </Box>
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
