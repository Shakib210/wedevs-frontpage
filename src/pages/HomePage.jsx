import React from "react";
import { Box, Container } from "@mui/material";
import Header from "../components/homePage/Header";
import HeaderContent from "../components/homePage/HeaderContent";
import Solutions from "../components/homePage/Solutions";
import SpecialSection from "../components/homePage/SpecialSection";
import Glance from "../components/homePage/Glance";
import PeopleThink from "../components/homePage/PeopleThink";
import OurProducts from "../components/homePage/OurProducts";
import UpperFooter from "../components/homePage/UpperFooter";
import FooterSection from "../components/homePage/FooterSection";

const backgroundImages = {
  solutions: `url(https://wedevs.com/img/wedevs/front-page/our-solution-section-bg.svg)`,
  specials: `url(https://wedevs.com/img/wedevs/front-page/special-section-bg.svg)`,
  glance: `url(https://wedevs.com/img/wedevs/front-page/testimonial-section-bg.svg)`,
  ourProd: `url(https://wedevs.com/img/wedevs/front-page/rating-section-bg.svg)`
}

const HomePage = () => {
  return (
    <Box>
      <Box
        sx={{
          backgroundImage:
            "linear-gradient(to right, #e4e8f0, #eaecf3, #eff0f5, #f4f5f8, #f9f9fb, #faf9fc, #fafafc, #fbfafd, #f9f6fc, #f7f3fa, #f5eff8, #f4ebf6)",
        }}
        paddingBottom={'200px'}
      >
        <Container maxWidth="lg">
          <Header />
        </Container>
        <HeaderContent />
      </Box>
      <Box
        sx={{
          backgroundImage: backgroundImages.solutions,
          backgroundRepeat: "no-repeat",
          backgroundSize: "50%",
          backgroundPosition: "right",
        }}
      >
        <Solutions />
      </Box>
      <Box
        sx={{
          backgroundImage: backgroundImages.specials,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <SpecialSection />
      </Box>
      <Box
        sx={{
          backgroundImage: backgroundImages.glance,
          backgroundRepeat: "no-repeat",
          backgroundSize: "100%",
          minHeight: "1200px",
        }}
      >
        <Glance />
      </Box>

      <Box sx={{ backgroundColor: "#ffffff" }}>
        <PeopleThink />
      </Box>

      <Box
        sx={{
          backgroundImage: backgroundImages.ourProd,
          backgroundRepeat: "no-repeat",
          backgroundSize: "50%",
        }}
      >
        <OurProducts />
      </Box>

      <Box
        sx={{
          background: `linear-gradient(180deg,rgba(0,124,245,.12) 2%,hsla(0,0%,100%,0)),url(https://wedevs.com/img/wedevs/main-footer-bg.svg) no-repeat center 205px`,
        }}
      >
        <UpperFooter />
        <FooterSection />
      </Box>
    </Box>
  );
};

export default HomePage;
