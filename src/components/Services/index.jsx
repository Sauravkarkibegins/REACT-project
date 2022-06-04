import React from 'react';
import useStyles from './ServiceElements';
import { Box, Button, Grid, Typography } from '@material-ui/core';
import Card from './../Card';

const Service = () => {
  const classes = useStyles();

  return (
    <>
      <Box component='section' className={classes.box}>
        <Grid
          container
          spacing={2}
          className={classes.firstgrid}
          direction='column'
          alignItems='center'
        >
          <Grid item xs={10}>
            <Typography className={classes.h2} variant='h3'>
              MY SERVICES
            </Typography>
          </Grid>
        </Grid>
        <Grid container justify='center' spacing={3}>
          <Grid item xs={10} sm={5} md={3}>
            <Card />
          </Grid>
          <Grid item xs={10} sm={5} md={3}>
            <Card />
          </Grid>
          <Grid item xs={10} sm={5} md={3}>
            <Card />
          </Grid>
        </Grid>
        <Grid
          container
          spacing={2}
          className={classes.lastgrid}
          direction='column'
          alignItems='center'
        >
          <Grid item xs={10}>
            <Button className={classes.btn} variant='contained'>
              WATCH MORE
            </Button>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default Service;
