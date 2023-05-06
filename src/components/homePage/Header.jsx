import React, { useState } from "react";
import Box from "@mui/material/Box";
import Stack from "@mui/joy/Stack";
import { Menu, Typography, MenuItem, Divider, Grid } from "@mui/material";
import PersonOutlineIcon from "@mui/icons-material/Person";
import ArrowDropDownOutlinedIcon from "@mui/icons-material/ArrowDropDownOutlined";
import logo from "../../assets/images/wedevs-logo.png";
import cartIcon from "../../assets/images/cart.svg";
import MenuIcon from "@mui/icons-material/Menu";
import MenuModal from "../MenuModal";
import ClearIcon from '@mui/icons-material/Clear';
import Fade from '@mui/material/Fade';
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import MenuCard from "../cards/MenuCard";
import { headerData } from "../../assets/data/headerData";


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
  const [anchorEl, setAnchorEl] = useState(null);
  const [phoneAnchorEl, setPhoneAnchorEl] = useState(null);
  const [open, setOpen] = useState(false);
  const [phoneMenuOpen, setPhoneMenuOpen] = useState(false)
  const [showProduct, setShowProduct] = useState(false)

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
    setOpen(true);
  };
  const handleClose = () => {
    setAnchorEl(null);
    setOpen(false);
  };

  const handlePhoneOpen = (e) => {
    const anchorEl = phoneMenuOpen ? "" : e.currentTarget
    setPhoneAnchorEl(anchorEl)
    setPhoneMenuOpen(!phoneMenuOpen)
    setShowProduct(false)
  }

  const showProductHandler = () => {
    setShowProduct(!showProduct)
  }

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
        marginTop={"10px"}
        onClick={handlePhoneOpen}
      >
        {phoneMenuOpen ? <ClearIcon fontSize="large" sx={{ color: "gray" }} /> : <MenuIcon fontSize="large" sx={{ color: "gray" }} />}
      </Box>

      <Menu
        id="fade-menu"
        MenuListProps={{
          'aria-labelledby': 'fade-button',
        }}
        anchorEl={phoneAnchorEl}
        open={phoneMenuOpen}
        onClose={handlePhoneOpen}
        TransitionComponent={Fade}
        sx={{ display: { md: "none", xs: "block", marginTop: showProduct && '28px' } }}

      >
        <MenuItem >
          <Box width={'380px'} minHeight={'50px'} display={'flex'} justifyContent={'space-between'} alignItems={'center'} onClick={() => showProductHandler()}>
            <Typography>Product</Typography>

            <Box width={'30px'} height={'30px'} display={'flex'} justifyContent={'center'} alignItems={'center'} border={'1px solid black'}>
              {!showProduct ? <KeyboardArrowDownIcon /> : <KeyboardArrowUpIcon />}
            </Box>
          </Box>


        </MenuItem>
        <Divider />
        <Grid container>
          {showProduct && (
            headerData.map((item) => (
              <>
                <MenuItem >
                  <MenuCard data={item} />
                </MenuItem>
                <Divider />
              </>
            ))
          )}
        </Grid>
        <MenuItem >Blog</MenuItem>
        <Divider />
        <MenuItem>About</MenuItem>
        <Divider />
        <MenuItem>Docs</MenuItem>
        <Divider />
        <MenuItem>Contact Us</MenuItem>
        <Divider />
        <MenuItem>My Account</MenuItem>

      </Menu>
    </Stack>
  );
};

export default Header;
