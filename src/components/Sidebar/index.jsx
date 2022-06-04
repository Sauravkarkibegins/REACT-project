import { Box, Button, Grid, IconButton, Typography } from '@material-ui/core'
import { Close } from '@material-ui/icons'
import React from 'react'
import useStyles from './SidebarElement'
const Sidebar = ({isOpen , toggle}) => {
    const classes = useStyles()
    return (
        <>
            <Box isOpen={isOpen} onClick={toggle} className={
                isOpen? classes.box : classes.unbox
            } display={{ xs:'block' ,sm:'block' , md:'none'}}>
                <IconButton className={classes.iconbutton}>
                    <Close className={classes.close} />
                </IconButton>
               <Grid container className={classes.list} spacing={4}>
                   <Grid item xs={12} className={classes.listitem} >
                   <Typography variant='h5' >HOME</Typography>
                    
                   </Grid>
                   <Grid item xs={12} className={classes.listitem} >
                   <Typography variant='h5' >SERVICES</Typography>
                    
                   </Grid>
                   <Grid item xs={12} className={classes.listitem} >
                   <Typography variant='h5' >CONTACT</Typography>
                    
                   </Grid>
                   <Grid item xs={12} className={classes.listitem} >
                   <Typography variant='h5' >ABOUT</Typography>
                    
                   </Grid>
                   <Grid item xs={12} className={classes.listitem} >
                  
                <Button variant='contained' className={classes.button}>SIGN UP</Button>
              
                   </Grid>
               </Grid>
               
            
            </Box>
        </>
    )
}

export default Sidebar
