import { Box, Button, Grid, Typography } from '@material-ui/core'
import React from 'react'
import useStyles from './CodeElement'
import image from './../../videos/2.svg'
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
const Code = () => {
    const classes = useStyles()
    return (
        <>
         <Box className={classes.box}>
         <Grid container spacing={2} className={classes.firstgrid} direction='column' alignItems='center'>
            <Grid item xs={10}>
                <Typography className={classes.h2} variant='h3'>
                   WHY ME ?
                </Typography>
            </Grid>
            </Grid>
           <Grid container className={classes.maincontainer} spacing='4'>
           
               <Grid container item xs={10} md={5} >
               <Grid item xs={1} md={0} />
               <Grid item xs={10}>
                 <img className={classes.img} src={image} />
                 </Grid>
                 <Grid item xs={1} md={0}/>
                
                </Grid>
                <Grid item container direction='column' xs={10} md={5} spacing='4'>
              
               <Grid item>
               <Accordion className={classes.acco}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon className={classes.acco} />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={classes.heading}>CLEAN DESIGN</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
            sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      </Grid>
      <Grid item>
      <Accordion className={classes.acco}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon className={classes.acco} />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography className={classes.heading}>MODERN DESIGN</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
            sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      </Grid>
      <Grid item>
      <Accordion className={classes.acco}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon className={classes.acco} />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography className={classes.heading}>MOBILE FRIENDLY</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
            sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      </Grid>
      <Grid item>
      <Accordion className={classes.acco}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon className={classes.acco} />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography className={classes.heading}>OPTIMIZED CODE</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
            sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      </Grid>
              
               </Grid>
              
           </Grid>
         </Box>
        </>
    )
}

export default Code
