import { Box, Button, Container, Grid, Typography } from "@mui/material";
import React from "react";
import logo from "../../assets/images/wedevs-logo.png";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import SendIcon from "@mui/icons-material/Send";
import Divider from "@mui/material/Divider";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

const backToTopSX = {
  boxShadow: "0 20px 30px 0 rgba(17,31,98,.5)",
  width: "40px",
  height: "40px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  borderRadius: "50%",
  marginTop: "-20px",
  zIndex: "5",
  backgroundColor: "white",
  cursor: "pointer",
}

const FooterSection = () => {

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  return (
    <Container container maxWidth="lg">
      <Grid container spacing={4}>
        <Grid item md={5} xs={12}>
          <Box textAlign={{ md: "left", xs: "center" }}>
            <img
              src={logo}
              style={{ marginTop: "30px" }}
              width={"200px"}
              alt="logo"
            />

            <Typography marginTop={"30px"} variant="h5">
              Subscribe to our newsletter{" "}
            </Typography>

            <Paper
              component="form"
              sx={{
                p: "2px 10px",
                display: "flex",
                alignItems: "center",
                maxWidth: 400,
                marginY: "20px",
              }}
            >
              <InputBase
                sx={{ m: 1, flex: 1 }}
                placeholder="Email Address"
                inputProps={{ "aria-label": "Email Address" }}
              />
              <Button
                sx={{ color: "white", backgroundColor: "#007cf5" }}
                variant="contained"
                endIcon={
                  <SendIcon
                    style={{
                      fontSize: "18px",
                      padding: " 0px 0px 5px 5px",
                      transform: "rotate(-45deg)",
                      color: "white",
                    }}
                  />
                }
              >
                Send
              </Button>
            </Paper>

            <Box display={"flex"}>
              <img
                src={
                  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4r6D0yZx8hmSrOBGQuuijqbmyjERX7u9BM9bbUIPsDA&s"
                }
                width={"50px"}
                style={{ borderRadius: "50%", paddingRight: "10px" }}
                alt="logo"
              />
              <img
                src={
                  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4r6D0yZx8hmSrOBGQuuijqbmyjERX7u9BM9bbUIPsDA&s"
                }
                width={"50px"}
                style={{ borderRadius: "50%", paddingRight: "10px" }}
                alt="logo"
              />
              <img
                src={
                  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4r6D0yZx8hmSrOBGQuuijqbmyjERX7u9BM9bbUIPsDA&s"
                }
                width={"50px"}
                style={{ borderRadius: "50%", paddingRight: "10px" }}
                alt="logo"
              />
              <img
                src={
                  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4r6D0yZx8hmSrOBGQuuijqbmyjERX7u9BM9bbUIPsDA&s"
                }
                width={"50px"}
                style={{ borderRadius: "50%" }}
                alt="logo"
              />
            </Box>
          </Box>
        </Grid>
        <Grid item md={2} xs={12} textAlign={"center"}>
          <Typography variant="h4">Company</Typography>

          {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
            <Typography sx={{ paddingY: "10px" }}>About</Typography>
          ))}
        </Grid>
        <Grid item md={2} xs={12} textAlign={"center"}>
          <Typography variant="h4">Resources</Typography>
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item) => (
            <Typography sx={{ paddingY: "10px" }}>About</Typography>
          ))}
        </Grid>
        <Grid item md={3} xs={12} textAlign={"center"}>
          <Typography variant="h4">Products</Typography>
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item) => (
            <Typography sx={{ paddingY: "10px" }}>About</Typography>
          ))}
        </Grid>
      </Grid>

      <Box margin={"100px 0px"}>
        <Divider variant="middle" />
        <Box
          width={"100%"}
          display="flex"
          alignItems={"center"}
          justifyContent={"center"}
        >
          <Box
            sx={backToTopSX}
            onClick={scrollToTop}
          >
            <KeyboardArrowUpIcon />
          </Box>
        </Box>
      </Box>

      <Box
        display={"flex"}
        justifyContent={"space-between"}
        flexDirection={{ md: "row", xs: "column" }}
      >
        <Box>
          <Typography color="#74788b" marginBottom={'10px'}>
            Copyright © 2008-2023, weDevs Pte. Ltd. weDevs® is <br /> a
            registered trademark of weDevs Pte. Ltd.{" "}
          </Typography>
        </Box>

        <Box>
          <img
            src={"https://wedevs.com/img/wedevs/footer-payment-g-image.png"}
            height={"30px"}
            alt="company"
          />
        </Box>
      </Box>
    </Container>
  );
};

export default FooterSection;
