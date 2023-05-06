import { Box, Typography } from '@mui/material'
import React from 'react'

const GlanceCard = ({ data }) => {
    return (
        <Box width="100%" textAlign={"center"} sx={{ backgroundImage: data.bg }} paddingY={'25px'}>
            <img
                src={data.logo}
                alt="group"
                style={{
                    borderRadius: "50%",
                    boxShadow: "0 14px 41px 0 rgba(58,17,98,.1)",
                }}
            />

            <Typography variant="h4" pt="30px" fontWeight={'bold'}>
                {data.count}
            </Typography>
            <Typography pt="30px" color="#474b4f">
                {data.description}
            </Typography>
        </Box>
    )
}

export default GlanceCard