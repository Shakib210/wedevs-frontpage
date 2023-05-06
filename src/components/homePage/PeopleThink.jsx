import { Box, Container, Grid, Typography } from "@mui/material";
import React, { useRef, useState } from "react";
import Slider from "react-slick";
import PeopleThinkCard from "../cards/PeopleThinkCard";
import { testimonialsData } from "../../assets/data/testimonialsData";

const hoverSX = {
  color: "#898f91",
  textAlign: { md: "end", xs: "center" },
  marginTop: "40px",
  cursor: "pointer",
  paddingRight: {md:'220px'},
  "&:hover": {
    color: "#007cf5",
  },
};

const sliderPaperSX = {
  borderRadius: "5px",
  position: "relative",
  padding: { md: "74px 180px 75px 181px", xs: "10px" },
  textAlign: "center",
  backgroundImage:
    "linear-gradient(90deg,hsla(0,0%,100%,0),#fff 49%)",
  boxShadow: " 0 40px 70px 0 rgba(0,0,0,.1)",
}

const headerImageSX = {
  backgroundImage:
    "linear-gradient(-30deg,#007cf5,#8d7dfe 88%,#8c7cff)",
  boxShadow: "26px 29px 40px 0 rgba(0,0,0,.15)",
  borderRadius: "16px",
  zIndex: "1",
}

const PeopleThink = () => {
  const slider = useRef();
  const [selectedIndex, setSelectedIndex] = useState(0)
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    afterChange: (...e) => {
      console.log(e);
    },
    beforeChange: (...e) => {
      console.log(e);
    },
  };

  const slideGotoHandler = (index) => {
    setSelectedIndex(index)
    if (slider && slider.current) slider.current.slickGoTo(index);
  };

  return (
    <Container maxWidth="lg">
      <Box>
        <Typography variant="h6" color="#4055ab" textAlign={"center"}>
          Testimonials
        </Typography>
        <Typography variant="h4" textAlign={"center"} fontWeight="bold">
          <span style={{ color: "#0068f3" }}>What People Think</span> About Our
          Products
        </Typography>
      </Box>

      <Grid
        container
        spacing={2}
        justifyContent={"center"}
        sx={{ marginTop: "60px", marginBottom: "100px" }}
      >
        <Grid
          xs={2}
          display={"flex"}
          justifyContent="end"
          sx={{ marginRight: "-50px", paddingTop: "70px" }}
        >
          <Box
            width={"100px"}
            height={"100px"}
            sx={headerImageSX}
          >
            <Typography fontSize="100px" textAlign={"center"} color={"white"}>
              “
            </Typography>
          </Box>
        </Grid>
        <Grid md={8} xs={10} justifyContent={"center"}>
          <Box
            sx={sliderPaperSX}
          >
            <Slider ref={slider} {...settings}>
              {testimonialsData.map((item) => (
                <PeopleThinkCard data={item} />
              ))}
            </Slider>
          </Box>
        </Grid>
        <Grid md={2} xs={12}>
          <Box
            height="100%"
            paddingLeft={"10px"}
            display={"flex"}
            sx={{
              flexDirection: { md: "column", xs: "row" },
              justifyContent: { md: "end", xs: "center" },
              marginTop: { md: "0px", xs: "5px" },
            }}
            justifyContent={"end"}
            gap={"10px"}
            marginTop={"-70px"}
          >
            {testimonialsData.map((item, i) => (
              <Box>
                <img
                  src={item.image}
                  width={"60px"}
                  style={{ borderRadius: "50%", cursor: "pointer", boxShadow: selectedIndex === i && '0 17px 53px 0 rgba(0,0,0,.25)' }}
                  alt="img"
                  onClick={() => slideGotoHandler(i)}
                />
              </Box>
            ))}

          </Box>
        </Grid>
        <Box width="100%">
          <Typography sx={hoverSX}>See More →</Typography>
        </Box>
      </Grid>
    </Container>
  );
};

export default PeopleThink;
