import { Box, Container, Grid, Typography } from "@mui/material";
import React from "react";
import SpecialSectionCard from "../cards/SpecialSectionCard";

const SpecialSection = () => {
  return (
    <Container maxWidth="lg" sx={{ padding: "200px 0px 400px 0px" }}>
      <Box width={"100%"} display={"flex"} justifyContent="center" marginBottom={'20px'}>
        <Box width={"80%"} textAlign={"center"}>
          <Typography
            variant="h4"
            color="#2e2f2f"
            fontFamily="inherit"
            fontWeight={"700"}
          >
            <span style={{ color: "#2d82f4" }}>What's so Special</span> About
            weDevs?
          </Typography>

          <Typography color="#4f5b6d" paddingY={"15px"}>
            We help small businesses around the world with amazing products{" "}
            <br />
            that solve their business and web problems. weDevs is special
            because -
          </Typography>
        </Box>
      </Box>

      <Box width={"100%"} display={"flex"} justifyContent="center" >
        <Grid container spacing={3} width={"80%"}>
          {[1, 2, 3, 4, 5, 6].map((item) => (
            <Grid item md={4} sm={6} xs={12} key={item}>
              <SpecialSectionCard />
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  );
};

export default SpecialSection;
