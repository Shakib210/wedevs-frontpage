import { Box, Typography } from '@mui/material'
import React from 'react'

const PeopleThinkCard = ({ item }) => {
    return (
        <Box display={"flex"} justifyContent={"center"} key={item} flexDirection={'column'}>
            <Box
                width={"100px"}
                sx={{ position: "relative", left: "40%" }}
            >
                <img
                    src={
                        "https://wedevs.com/_ipx/https://cdn.wedevs.com/uploads/2017/06/Jazib-Zaman-90x90.png?f=webp&q=100&s=78_78"
                    }
                    alt="test 1"
                    style={{
                        borderRadius: "50%",
                    }}
                    width={"100px"}
                />
            </Box>

            <Typography marginTop={"40px"} color="#758598">
                Amazed by the functionality of this plugin. It <br /> offers
                all in one solution for accepting, managing <br /> and
                payments...
            </Typography>
            <Typography color="#007cf5" variant="h5" marginTop={"40px"}>
                Jazib Zaman
            </Typography>
            <Typography color="#758598">Founder, WP Arena</Typography>
        </Box>
    )
}

export default PeopleThinkCard