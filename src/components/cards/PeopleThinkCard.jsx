import { Box, Typography } from '@mui/material'
import React from 'react'

const PeopleThinkCard = ({ data }) => {
    return (
        <Box display={"flex"} justifyContent={"center"} key={data.id} flexDirection={'column'}>
            <Box
                width={"100px"}
                sx={{ position: "relative", left: "40%" }}
            >
                <img
                    src={data.image}
                    alt="test 1"
                    style={{
                        borderRadius: "50%",
                    }}
                    width={"100px"}
                />
            </Box>

            <Typography marginTop={"40px"} color="#758598">
                {data.description}
            </Typography>
            <Typography color="#007cf5" variant="h5" marginTop={"40px"}>
                {data.name}
            </Typography>
            <Typography color="#758598">{data.designation}</Typography>
        </Box>
    )
}

export default PeopleThinkCard