import { Box, Container, Typography } from "@mui/material";
import React, { useRef } from "react";
import Slider from "react-slick";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ProductsCard from "../cards/ProductsCard";


const navigationSX = {
  width: "50px",
  height: "50px",
  borderRadius: "50%",
  boxShadow: "2.736px 7.518px 20px 0 rgba(0,0,0,.15)",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  cursor: "pointer",
  "&:hover": {
    boxShadow: "2.736px 7.518px 20px 0 rgba(0,0,0,.3)",
  },
}

const OurProducts = () => {
  const slider = useRef();

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
    afterChange: (...e) => {
      console.log(e);
    },
    beforeChange: (...e) => {
      console.log(e);
    },
  };

  const prevHandler = () => {
    if (slider && slider.current) slider.current.slickPrev();
  };

  const nextHandler = () => {
    if (slider && slider.current) slider.current.slickNext();
  };

  return (
    <Box>
      <Box textAlign={"center"}>
        <Typography variant="h4" color="#0068f3" fontWeight="bold">
          Our Products Are Highly Rated
        </Typography>
        <Typography variant="h4" color="black" fontWeight="bold">
          by Thousand of Customers{" "}
        </Typography>
      </Box>

      <Box padding={" 50px 100px"}>
        <Slider ref={slider} {...settings}>
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item, index) => (
            <ProductsCard />
          ))}
        </Slider>
      </Box>

      <Container sx={{ display: "flex", justifyContent: "space-between" }}>
        <Box
          sx={navigationSX}
          onClick={prevHandler}
        >
          <ArrowBackIosNewIcon style={{ color: "#007cf5" }} />
        </Box>
        <Box
          sx={navigationSX}
          onClick={nextHandler}
        >
          <ArrowForwardIosIcon style={{ color: "#007cf5" }} />
        </Box>
      </Container>
    </Box>
  );
};

export default OurProducts;
