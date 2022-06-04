import {
  AppBar,
  Box,
  Button,
  IconButton,
  List,
  ListItem,
  ListItemText,
  Toolbar,
  Typography,
} from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import useStyles from './NavbarElement';
import MenuIcon from '@material-ui/icons/Menu';
import { motion } from 'framer-motion';
import { Opacity } from '@material-ui/icons';

const Navbar = ({ toggle }) => {
  const classes = useStyles();
  const [navBackground, setNavBackground] = useState('appbar');
  const navRef = React.useRef();
  navRef.current = navBackground;
  useEffect(() => {
    const handleScroll = () => {
      const show = window.scrollY > 80;
      if (show) {
        setNavBackground('appbar1');
      } else {
        setNavBackground('appbar');
      }
    };
    document.addEventListener('scroll', handleScroll);
    return () => {
      document.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <>
      <AppBar position='sticky' className={classes[navRef.current]}>
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: 'spring', stiffness: '300', delay: '1.5' }}
        >
          <Toolbar className={classes.toolbar}>
            <Typography className={classes.typography}>SAURAVKARKI</Typography>
            <Box display={{ xs: 'block', sm: 'block', md: 'none' }}>
              <IconButton>
                <MenuIcon onClick={toggle} className={classes.menuicon} />
              </IconButton>
            </Box>
            <Box display={{ xs: 'none', md: 'block' }}>
              <List className={classes.list}>
                <ListItem className={classes.listitem}>
                  <ListItemText primary='HOME' />
                </ListItem>
                <ListItem className={classes.listitem}>
                  <ListItemText primary='SERVICES' />
                </ListItem>
                <ListItem className={classes.listitem}>
                  <ListItemText primary='CONTACT' />
                </ListItem>
                <ListItem className={classes.listitem}>
                  <ListItemText primary='ABOUT' />
                </ListItem>
                <ListItem></ListItem>
              </List>
            </Box>
            <Box display={('flex', { xs: 'none', md: 'block' })}>
              <Button className={classes.button} variant='contained'>
                SIGN UP
              </Button>
            </Box>
          </Toolbar>
        </motion.div>
      </AppBar>
    </>
  );
};

export default Navbar;
