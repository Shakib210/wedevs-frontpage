import { Box, Grid, Typography } from '@mui/material'
import React from 'react'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const viewProductSX = {
    backgroundColor: '#edf6fe',
    fontSize: '16px',
    color: '#1786f3',
    textAlign: 'center',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '230px',
    height: '70px',
    borderRadius: '5px',
    cursor: 'pointer',
    transition: ".5s ease",
    columnGap: '5px',
    "&:hover": {
        backgroundColor: '#007cf5',
        color: 'white',
        columnGap: '10px'
    }
}

const titleSX = (fontColor) => {
    return {
        fontSize: '16px',
        fontWeight: '700',
        "&:hover": {
            color: fontColor
        }
    }
}
const boxDesignSX = {
    padding:'10px',
    borderRadius: '10px',
    display:'flex',
    cursor:'pointer',
    "&:hover": {
        backgroundColor: '#eff4f4'
    }

}

const MenuCard = ({ data }) => {
    return (
        <Grid item sx={12} md={4} key={data.id} padding={'5px'}>
            <Grid container>
                {data.id !== '9' ? (
                    <Box sx={boxDesignSX}>
                        <Grid item xs={3}>
                            <img
                                src={data.img}
                                alt="logo"
                                width="40px"
                                height="40px"
                            />
                        </Grid>
                        <Grid item xs={9}>
                            <Typography sx={titleSX(data.hoverColor)} >{data.title}</Typography>
                            <Typography fontSize="14px" color='#637178'>
                                {data.description}
                            </Typography>
                        </Grid>
                    </Box>

                ) : (
                    <Box sx={viewProductSX}>
                        <Typography>View all products</Typography>  <ArrowForwardIcon sx={{ paddingLeft: '5px' }} />
                    </Box>
                )}
            </Grid>
        </Grid>
    )
}

export default MenuCard