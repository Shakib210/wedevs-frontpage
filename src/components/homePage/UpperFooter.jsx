import React from "react";
import { Box, Container, Typography } from "@mui/material";
import LoveImg from "../../assets/images/loveIcon.png";

const containerDesignSX = {
  boxShadow: "0 40px 80px 0 rgba(0,29,133,.4)",
  borderRadius: "5px",
  padding: "80px 80px 30px 80px",
  display: "flex",
  justifyContent: "space-between",
  flexDirection: { md: "row", xs: "column" },
  alignItems: "center",
  position: "relative",
  top: "-100px",
  backgroundColor: "white",
}

const productViewSX = {
  backgroundColor: "#0062c2",
  boxShadow: "0 25px 35px 0 rgba(4,22,94,.3)",
  borderRadius: "3px",
  padding: " 15px 23px",
  height: "20px",
  color: "white",
  textAlign: "center",
  marginTop: { md: "0px", xs: "10px" },
}

const UpperFooter = () => {
  return (
    <Container>
      <Box
        sx={containerDesignSX}
      >
        <Box
          display={"flex"}
          sx={{
            flexDirection: { md: "row", xs: "column" },
            alignItems: "center",
          }}
        >
          <img
            width="150px"
            height="150px"
            src={LoveImg}
            alt="love"
            style={{ zIndex: "10" }}
          />

          <Box>
            <Typography
              variant="h5"
              fontWeight={"bold"}
              sx={{ textAlign: { md: "left", xs: "center" } }}
              textAlign={"center"}
            >
              You will love our solutions
            </Typography>
            <Typography
              color="#758598"
              sx={{
                marginTop: { md: "0px", xs: "10px" },
                textAlign: { md: "left", xs: "center" },
              }}
            >
              Take a look at our highly rated 20+ premium and free plugins.
            </Typography>
          </Box>
        </Box>

        <Box
          sx={productViewSX}
        >
          View Products
        </Box>
      </Box>
    </Container>
  );
};

export default UpperFooter;
