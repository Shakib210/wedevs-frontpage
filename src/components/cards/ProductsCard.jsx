import { Box } from '@mui/material'
import React from 'react'
import CompanyLogo from "../../assets/icons/cap.png";
import { Rating } from "react-simple-star-rating";

const sliderBoxSX = (index) => {
    return {
        padding: "10px",
        marginTop: index % 2 === 0 ? "30px" : "0px",
        backgroundImage:
            "linear-gradient(180deg,hsla(0,0%,100%,0),#fff)",
        boxShadow: "0 36px 64px 0 rgba(0,0,0,.05)",
        fontSize: "26px",
        textAlign: "center",
        paddingY: "30px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
    }
}

const ratingIconSX = {
    backgroundImage: "linear-gradient(183deg,#fff,#fff 79%)",
    boxShadow: "0 32px 45px 0 rgba(215,167,86,.23)",
    borderRadius: "50%",
    color: "#9b59b6",
    fontSize: "20px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
}


const ProductsCard = ({ index }) => {
    return (
        <Box width={"100%"} display={"flex"} justifyContent={"center"} key={index}>
            <Box
                height={"200px"}
                width={"200px"}
                sx={sliderBoxSX(index)}
            >
                <Box
                    sx={ratingIconSX}
                    width="80px"
                    height="80px"
                >
                    4.0
                </Box>

                <Rating size="20px" initialValue={"4"} />
                <img src={CompanyLogo} alt="company logo" />
            </Box>
        </Box>
    )
}

export default ProductsCard