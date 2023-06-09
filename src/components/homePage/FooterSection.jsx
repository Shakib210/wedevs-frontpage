import { Box, Button, Container, Grid, Typography } from "@mui/material";
import React from "react";
import logo from "../../assets/images/wedevs-logo.png";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import SendIcon from "@mui/icons-material/Send";
import Divider from "@mui/material/Divider";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import { companyData, productData, resourceData } from "../../assets/data/footerData";

const backToTopSX = {
  boxShadow: "0 20px 30px 0 rgba(17,31,98,.5)",
  width: "50px",
  height: "50px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  borderRadius: "50%",
  marginTop: "-25px",
  zIndex: "5",
  backgroundColor: "white",
  cursor: "pointer",
  animation: 'scrollToTop-data-v-29ac9170 1.5s ease-in-out 0s infinite'
}

const animatedIconSX = {
  animation: 'animateBox 1.5s ease-in-out 0s infinite',
  '@keyframes animateBox': {
    '0%': {
      transform: 'translateY(8px)',
      opacity: '0'
    },
    '25%': {
      opacity: '0.5'
    },
    '50%': {
      opacity: '1'
    },
    '75%': {
      opacity: '.5'
    },
    '100%': {
      transform: 'translateY(-8px)',
      opacity: '0'
    },
  },
}

const footerItemsSX = {
  paddingY: "10px",
  color: '#74788b',
  cursor: 'pointer',
  textAlign: { md: 'left', xs: 'center' },
  "&:hover": {
    color: '#007cf5'
  }
}

const SubscribeTextStyle = {
  color: '#2c3646'
}

const iconStyleSX = {
  fontSize: "18px",
  padding: " 0px 0px 5px 5px",
  transform: "rotate(-45deg)",
  color: "white",
}

const paperStyleSX = {
  p: "2px 10px",
  display: "flex",
  alignItems: "center",
  maxWidth: 400,
  marginY: "20px",
}

const logos = {
  facebook: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4r6D0yZx8hmSrOBGQuuijqbmyjERX7u9BM9bbUIPsDA&s",
  twitter: "https://cdn4.iconfinder.com/data/icons/social-media-icons-the-circle-set/48/twitter_circle-512.png",
  linkedin: "https://static.vecteezy.com/system/resources/previews/018/930/587/original/linkedin-logo-linkedin-icon-transparent-free-png.png",
  youtube: "https://w7.pngwing.com/pngs/679/48/png-transparent-youtube-logo-youtube-play-button-computer-icons-youtube-icon-angle-rectangle-desktop-wallpaper.png",
  companies: "https://wedevs.com/img/wedevs/footer-payment-g-image.png"
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
              <strong style={SubscribeTextStyle}>Subscribe</strong> to our newsletter
            </Typography>

            <Paper
              component="form"
              sx={paperStyleSX}
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
                    style={iconStyleSX}
                  />
                }
              >
                Send
              </Button>
            </Paper>

            <Box display={"flex"}>
              <img
                src={logos.facebook}
                width={"40px"}
                height={'40px'}
                style={{ borderRadius: "30%", paddingRight: "10px" }}
                alt="logo"
              />
              <img
                src={logos.twitter}
                width={"40px"}
                height={'40px'}
                alt="logo"
              />
              <img
                src={logos.linkedin}
                width={"60px"}
                height={'60px'}
                style={{ borderRadius: "50%", marginTop: '-10px' }}
                alt="logo"
              />
              <img
                src={logos.youtube}
                width={"70px"}
                height={'50px'}
                style={{ borderRadius: "50%", marginTop: '-5px', marginLeft: '-10px' }}
                alt="logo"
              />
            </Box>
          </Box>
        </Grid>
        <Grid item md={2} xs={12} textAlign={{ md: 'left', xs: 'center' }}>
          <Typography variant="h4">Company</Typography>

          {companyData.map((item) => (
            <Typography sx={footerItemsSX} >{item}</Typography>
          ))}
        </Grid>
        <Grid item md={2} xs={12} textAlign={{ md: 'left', xs: 'center' }}>
          <Typography variant="h4">Resources</Typography>
          {productData.map((item) => (
            <Typography sx={footerItemsSX} >{item}</Typography>
          ))}
        </Grid>
        <Grid item md={3} xs={12} textAlign={{ md: 'left', xs: 'center' }}>
          <Typography variant="h4">Products</Typography>
          {resourceData.map((item) => (
            <Typography sx={footerItemsSX} >{item}</Typography>
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
            <KeyboardArrowUpIcon fontSize="large" sx={animatedIconSX} />
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
            src={logos.companies}
            height={"30px"}
            alt="company"
          />
        </Box>
      </Box>
    </Container>
  );
};

export default FooterSection;
