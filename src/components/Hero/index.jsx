import { Box, Button, Grid, Typography } from '@material-ui/core';
import React from 'react';
import useStyles from './HeroElement';
import heroimg from './../../videos/p1.jpg';

import { motion } from 'framer-motion';
const Hero = () => {
  const classes = useStyles();

  return (
    <>
      <Box component='section' className={classes.container}>
        <Box className={classes.video}>
         
           <img  className='herobackground'src= {heroimg}></img> 
        </Box>
        <Box className={classes.content}>
          <Grid container direction='column' spacing={4}>
            <Grid item>
              <motion.div
                initial={{ opacity: 0, y: -30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: '1', delay: '1.5' }}
              >
                <Typography className={classes.h2} variant='h2'>
                  WELCOME TO MY WEBSITE
                </Typography>
              </motion.div>
            </Grid>
            <Grid item>
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: '1', delay: '1.7' }}
              >
                <Typography className={classes.p} variant='p'>
                  Lorem ipsum dolor sitssss ssss amet, consectetur adipisicing
                  elit. Ex, ut.
                </Typography>
              </motion.div>
            </Grid>
            <Grid item>
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: '1', delay: '2' }}
              >
                <Button className={classes.btn} variant='contained'>
                  Get started
                </Button>
              </motion.div>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </>
  );
};

export default Hero;
