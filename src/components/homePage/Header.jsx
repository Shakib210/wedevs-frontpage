import React, { useState } from "react";
import Box from "@mui/material/Box";
import Stack from "@mui/joy/Stack";
import { Typography } from "@mui/material";
import PersonOutlineIcon from "@mui/icons-material/Person";
import ArrowDropDownOutlinedIcon from "@mui/icons-material/ArrowDropDownOutlined";
import logo from "../../assets/images/wedevs-logo.png";
import cartIcon from "../../assets/images/cart.svg";
import MenuIcon from "@mui/icons-material/Menu";
import MenuModal from "../cards/MenuModal"; 

const headerMenuItemSX = {
  cursor: "pointer",
  color: "#939393",
  fontFamily: "Lato",
  fontSize: "18px",
  "&:hover": {
    color: "#007cf5",
    opacity: [0.9, 0.8, 0.7],
  },
};

const accuntButtonSX = {
  backgroundColor: "#007cf5",
  color: "white",
  height: "41px",
  width: "135px",
  justifyContent: "center",
  cursor: "pointer",
  fontSize: "13px",
  fontWeight: "600",
  boxShadow: "1px 25px 42px 0 rgba(0,118,255,.23)",
  borderRadius: "25px",
  "&:hover": {
    backgroundColor: "#0055a9",
  },
};

const Header = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [open, setOpen] = useState(false);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
    setOpen(true);
  };
  const handleClose = () => {
    setAnchorEl(null);
    setOpen(false);
  };

  return (
    <Stack
      direction={"row"}
      height="50px"
      paddingTop="21px"
      justifyContent={"space-between"}
    >
      <Box display={"flex"} alignItems={"center"}>
        <img src={logo} width={"200px"} alt="logo" />

        <Box
          gap={5}
          display={{ md: "flex", xs: "none" }}
          alignItems={"center"}
          sx={{ marginLeft: "40px" }}
        >
          <Box display={"flex"} alignItems={"center"} sx={headerMenuItemSX}>
            <Typography
              sx={{ fontFamily: "Lato", fontSize: "18px" }}
              onClick={handleClick}
            >
              Products
            </Typography>{" "}
            <ArrowDropDownOutlinedIcon onClick={handleClick} />
            <MenuModal
              open={open}
              anchorEl={anchorEl}
              handleClose={handleClose}
            />
          </Box>
          <Typography sx={headerMenuItemSX}>Blog</Typography>
          <Typography sx={headerMenuItemSX}>About</Typography>
          <Typography sx={headerMenuItemSX}>Docs</Typography>
          <Typography sx={headerMenuItemSX}>Contact Us</Typography>
        </Box>
      </Box>

      <Box display={{ md: "flex", xs: "none" }} alignItems={"center"} gap={5}>
        <img src={cartIcon} alt="cart" />

        <Box display={"flex"} alignItems={"center"} sx={accuntButtonSX}>
          <PersonOutlineIcon />
          My Account
        </Box>
      </Box>

      <Box
        sx={{ cursor: "pointer" }}
        display={{ md: "none", xs: "block" }}
        marginTop={"20px"}
      >
        <MenuIcon sx={{ color: "gray" }} />
      </Box>
    </Stack>
  );
};

export default Header;
