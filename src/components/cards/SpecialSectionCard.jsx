import { Box, Typography } from '@mui/material'
import React from 'react'
import codeIcon from "../../assets/icons/code-icon.png";

const cardSX = {
  display: 'flex', justifyContent: { md: 'left', xs: 'center' }, alignItems: { md: 'start', xs: 'center' }, flexDirection: 'column'
}

const imageIconSX = {
  backgroundImage:
    "linear-gradient(180deg,#e08bfc,#7357fb)",
  boxShadow: "0 15px 30px 0 rgba(101,0,0,.08)",
  borderRadius: "50%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  marginBottom: "13px",
}

const SpecialSectionCard = () => {
  return (
    <Box
      width={"100%"}
      sx={{
        backgroundColor: "rgba(144,19,254,.06)",
        borderRadius: "10px",
      }}
    >
      <Box padding={"30px 65px 30px 48px"} sx={cardSX}>
        <Box
          width={"60px"}
          height={"60px"}
          sx={imageIconSX}
        >
          <img src={codeIcon} width="30px" height="30px" alt="code" />
        </Box>
        <Typography
          fontSize={"20px"}
          fontWeight={"600"}
          color="#7d6e9b"
        >
          We are Open Source
        </Typography>
      </Box>
    </Box>
  )
}

export default SpecialSectionCard