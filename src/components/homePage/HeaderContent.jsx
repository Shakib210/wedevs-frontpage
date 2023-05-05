import React from "react";
import { Grid, Box, Typography, Container } from "@mui/material";
import heroFeat from "../../assets/images/hero-feature.webp";
import brandLogo from "../../assets/images/brand-logo.webp";

const innovativeStyleSX = {
  "&:after": {
    position: "absolute",
    left: 0,
    bottom: "3px",
    height: "14px",
    width: "100px",
    background: "#c9defb",
    content: "",
    borderRadius: "10px",
    zIndex: -1,
    marginLeft: "-5px",
  },
};

const headingTextSX = {
  color: "#000",
  fontSize: { lg: "45px", md: "40px", sm: "30px", xs: "25px" },
  fontWeight: 600,
  lineHeight: "1.15em",
  letterSpacing: ".49px",
  marginBottom: "22px",
  textAlign: { md: "left", xs: "center" },
}

const descriptionTextSX = {
  width: { md: "75%", xs: "100%" },
  fontSize: "1.5rem",
  color: "#606b7b",
  lineHeight: "33px",
  fontFamily: "sans-serif",
  textAlign: { md: "left", xs: "center" },
}

const headerCardSX = {
  boxShadow: "0 30px 80px 0 rgba(0,0,0,.15)",
  borderRadius: "5px",
  padding: "22px 27px",
  marginTop: "50px",
  maxWidth: "438px",
}

const rightSideDivSX = {
  backgroundImage: `url(${heroFeat})`,
  backgroundRepeat: "no-repeat",
  backgroundSize: "100%",
  width: { xs: "90%", md: "100%" },
  // height:'100px',
  height: "500px",
}

const HeaderContent = () => {
  return (
    <Container maxWidth="lg">
      <Grid container spacing={2} sx={{ marginTop: "100px" }}>
        <Grid item md={6} xs={12}>
          <Box width={"90%"}>
            <Typography
              sx={headingTextSX}
            >
              We Create <span style={innovativeStyleSX}>Innovative</span> Tools
              to Empower Businesses Around the World
            </Typography>
            <Typography
              sx={descriptionTextSX}
            >
              weDevs is the maker of Dokan Multivendor, WP Project Manager, WP
              User Frontend, WP ERP and many more
            </Typography>
          </Box>

          <Box sx={headerCardSX}>
            <Typography color="#707a89" paddingBottom={"10px"}>
              Empowering{" "}
              <span
                style={{ fontSize: "20px", fontWeight: "bold", color: "black" }}
              >
                520,000+
              </span>{" "}
              Businesses with Innovation
            </Typography>
            <img src={brandLogo} alt="Brand Logo" />
          </Box>
        </Grid>
        <Grid item md={6} xs={12} display={"flex"}>
          <Box
            sx={rightSideDivSX}
          ></Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default HeaderContent;
