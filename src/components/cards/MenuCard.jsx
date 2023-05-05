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

const MenuCard = ({ data }) => {
    return (
        <Grid item sx={12} md={4} padding={'10px'} key={data}>
            <Grid container>
                {data !== 9 ? (
                    <>
                        <Grid item xs={3}>
                            <img
                                src={
                                    "https://wedevs.com/_ipx/img/wedevs/front-page/dokan.png?w=100&f=webp&q=100"
                                }
                                alt="logo"
                                width="40px"
                                height="40px"
                            />
                        </Grid>
                        <Grid item xs={9}>
                            <Typography fontSize="16px" fontWeight={'700'}>Dokan Multivendor</Typography>
                            <Typography fontSize="14px" color='#637178'>
                                Build your dream multi vendor marketplace
                            </Typography>
                        </Grid>
                    </>

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