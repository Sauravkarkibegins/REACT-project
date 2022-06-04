import { Box, Button, Grid, Typography } from '@material-ui/core';
import React, { useEffect, useRef } from 'react';
import useStyles from './SectionElement';
import image from './../../videos/code.svg';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);
const Section = () => {
  const classes = useStyles();
  let about,
    para,
    box,
    btn,
    img = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      about,
      { opacity: 0, x: -100 },
      {
        opacity: 1,
        x: 0,
        duration: 1,
        ease: 'power3.in',

        scrollTrigger: {
          trigger: box,
          start: 'top center',
        },
      }
    );

    gsap.fromTo(
      img,
      { opacity: 0, x: 100 },
      {
        opacity: 1,
        x: 0,
        duration: 1.5,
        scrollTrigger: { trigger: box, start: 'top center' },
      }
    );
    gsap.fromTo(
      para,
      { opacity: 0 },
      {
        opacity: 1,
        delay: 0.5,
        duration: 1,
        scrollTrigger: { trigger: box, start: 'top center' },
      }
    );
    gsap.fromTo(
      btn,
      { opacity: 0, y: -100 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        scrollTrigger: { trigger: box, start: 'top center' },
      }
    );
  }, []);
  return (
    <>
      <Box ref={(el) => (box = el)} className={classes.box}>
        <Grid container className={classes.maincontainer} spacing='4'>
          <Grid item md={1} />
          <Grid item container direction='column' xs={10} md={5} spacing='4'>
            <Grid ref={(el) => (about = el)} item>
              <Typography className={classes.h5} variant='h5'>
                ABOUT
              </Typography>
            </Grid>
            <Grid item>
              <Typography ref={(el) => (para = el)} variant='h4'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae,
                eum.
              </Typography>
            </Grid>
            <Grid item>
              <Button
                ref={(el) => (btn = el)}
                className={classes.btn}
                variant='contained'
                color='default'
              >
                ITS ABOUT ME.
              </Button>
            </Grid>
          </Grid>

          <Grid container item xs={12} md={5}>
            <Grid item xs={1} md={0} />
            <Grid ref={(el) => (img = el)} item xs={10}>
              <img className={classes.img} src={image} />
            </Grid>
            <Grid item xs={1} md={0} />
          </Grid>
          <Grid item md={1} />
        </Grid>
      </Box>
    </>
  );
};

export default Section;
