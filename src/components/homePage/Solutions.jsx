import { Box, Container, Grid, Typography } from "@mui/material";
import React from "react";
import SolutionCard from "../cards/SolutionCard";
import { solutionsData } from "../../assets/data/solutionsData";

const allProductsButtonSX = {
  backgroundColor: "#007cf5",
  padding: "13px 24px",
  boxShadow: "0 40px 70px 0 rgba(0,0,0,.1)",
  alignItems: "center",
  display: "flex",
  justifyContent: "center",
  cursor: "pointer",
  borderRadius: "5px",
  width: '200px',
  transition: ".5s ease",
  columnGap: '10px',
  "&:hover": {
    columnGap: '20px',
  }
}

const Solutions = () => {
  return (
    <Container maxWidth="lg">
      <Box width="100%" >
        <Box display={"flex"} justifyContent="center" width={"100%"}>
          <Box sx={{ width: { md: "50%", xs: "90%" } }} textAlign={"center"}>
            <Typography
              variant="h4"
              color="#2e2f2f"
              fontFamily="inherit"
              fontWeight={"700"}
            >
              <span style={{ color: "#2d82f4" }}>Our</span> Solutions
            </Typography>

            <Typography color="#4f5b6d" paddingTop={"15px"}>
              With our innovative tools and solutions tailored to empower your
              business, you just need to sit back and see your problems solved,
              business operations accelerated and team productivity boosted.
            </Typography>
          </Box>
        </Box>

        <Grid container spacing={5} marginTop={"50px"}>
          {solutionsData.map((item, i) => (
            <Grid item md={4} sm={6} xs={12} key={item.id}>
              <SolutionCard data={item} index={i} />
            </Grid>
          ))}
        </Grid>

        <Box width="100%" display={'flex'} justifyContent={'center'} textAlign={"center"} marginTop="60px">
          <Box
            sx={allProductsButtonSX}
          >
            <Typography color={"white"} fontSize="17px" textAlign="center">
              View All Products
            </Typography>
            <Typography color={"white"} fontSize="20px" textAlign="center">
              ↝
            </Typography>
          </Box>
        </Box>
      </Box>
    </Container>
  );
};

export default Solutions;
