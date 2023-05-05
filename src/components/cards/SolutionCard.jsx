import { Box, Typography } from '@mui/material'
import React from 'react'
import ProductImage from "../../assets/images/product-logo.png";

const boxStyleSX = (index) => {
  return {
    height: "300px",
    width: "350px",
    marginTop: { md: index % 3 === 1 ? "-50px" : "0px", xs: "0px" },
    boxShadow: "0 40px 70px 0 rgba(0,0,0,.05)",
    borderRadius: "5px",
    textAlign: "center",
    transition: ".5s ease",
    backgroundColor: "white",
    "&:hover": {
      marginTop: { md: index % 3 === 1 ? "-60px" : "-10px", xs: "0px" },
    }
  }
}

const SolutionCard = ({ index }) => {
  return (
    <Box display={'flex'} width="100%" justifyContent={'center'}>
      <Box
        sx={boxStyleSX(index)}
      >
        <Box padding={"65px 40px 60px"}>
          <img src={ProductImage} alt="logo" />
          <Typography color="#4f5b6d" paddingTop={"40px"}>
            Ultimate Frontend Solution for WordPress
          </Typography>

          <Box paddingTop={"40px"} color="#008bcc">
            Learn more →
          </Box>
        </Box>
      </Box>
    </Box>
  )
}

export default SolutionCard