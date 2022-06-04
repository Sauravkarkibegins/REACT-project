import { Box, Grid, Typography } from '@material-ui/core'
import React from 'react'
import useStyles from './FooterElement'
import Copy from '@material-ui/icons/Copyright';
const Footer = () => {
    const classes = useStyles()
    return (
        <>
         <Box display='flex' alignItems='center' className={classes.box}>
             <Grid container justify='center'>
            <Grid item>
                <Typography variant='h5' className={classes.typo}>
                    COPYRIGHT &#169; SAURAVKARKI.COM 2022
                </Typography>
            </Grid>
             </Grid>
         </Box>   
        </>
    )
}

export default Footer
