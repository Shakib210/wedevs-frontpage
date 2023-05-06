import { Menu, Grid, Box } from "@mui/material";
import React from "react";
import MenuCard from "./cards/MenuCard";
import { headerData } from "../assets/data/headerData";

const menuStyleSX =
{
  elevation: 0,
  sx: {
    overflow: "visible",
    filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
    maxWidth: { md: "840px", xs: '300px' },
    mt: 1.5,
    "& .MuiAvatar-root": {
      width: 32,
      height: 32,
      mr: -0.5,
      ml: 1,
    },
    "&:before": {
      content: '""',
      display: "block",
      position: "absolute",
      top: 0,
      left: 14,
      width: 10,
      height: 10,
      bgcolor: "background.paper",
      transform: "translateY(-50%) rotate(45deg)",
      zIndex: 0,
    },
  },

}

const MenuModal = ({ anchorEl, handleClose, open }) => {
  return (
    <Menu
      id="account-menu"
      open={open}
      anchorEl={anchorEl}
      onClose={handleClose}
      onClick={handleClose}
      PaperProps={menuStyleSX}
      transformOrigin={{ horizontal: "left", vertical: "top" }}
      anchorOrigin={{ horizontal: "left", vertical: "bottom" }}
    >
      <Box padding={"10px 0px 20px 30px"} key={'box'}>
        <Grid container>
          {headerData.map((item) => (
            <MenuCard data={item} />
          ))}
        </Grid>
      </Box>
    </Menu>
  );
};

export default MenuModal;
