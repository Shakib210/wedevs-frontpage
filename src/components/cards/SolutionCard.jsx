import { Box, Typography } from '@mui/material'
import React from 'react'

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
      marginTop: { md: index % 3 === 1 ? "-55px" : "-5px", xs: "0px" },
    }
  }
}

const seeMoreSX = {
  cursor: 'pointer',
  "&:hover": {
    color: '#008bcc',
  }
}

const SolutionCard = ({ data, index }) => {
  return (
    <Box display={'flex'} width="100%" justifyContent={'center'}>
      <Box
        sx={boxStyleSX(index)}
      >
        <Box padding={"65px 40px 60px"}>
          <img src={data.image} alt="logo" />
          <Typography color="#4f5b6d" paddingTop={"40px"} sx={{ display: '-webkit-box', '-webkit-line-clamp': 3, '-webkit-box-orient': 'vertical', overflow: 'hidden' }}>
            {data.description}
          </Typography>

          <Box sx={seeMoreSX} paddingTop={"40px"} color={data.color}>
            Learn more →
          </Box>
        </Box>
      </Box>
    </Box>
  )
}

export default SolutionCard