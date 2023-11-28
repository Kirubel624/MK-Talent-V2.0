import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Logo from '@mui/icons-material/Diversity2';
import MenuIcon from '@mui/icons-material/Menu';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
// import Drawer from './Components/Drawer';
import { Divider, Drawer, List, ListItem, ListItemButton, ListItemText } from '@mui/material';

//creats an elevated header or navigation bar that stays fixed to the top of the page 
//and becomes elevated when the user scrolls down the page.
function ElevationScroll(props) {

    const { children } = props;

    //useScrollTrigger hook listens to scroll events and determine 
    //whether elevation needs to be applied or not and retuns boolean
    const trigger = useScrollTrigger({
        //The disableHysteresis option is set to true to disable the hysteresis effect, 
        //which delays the scroll trigger from activating.
        disableHysteresis: true,
        //threshold option is set to 0 to trigger the elevation 
        //as soon as the user starts scrolling.
        threshold: 0,
    });

    // function is used to clone the child element and add a new prop elevation to it. 
    return React.cloneElement(children, {
        elevation: trigger ? 4 : 0,
    });
}

const drawerWidth = 240;

const navItems = ['Home', 'About Us', 'Portfolio', 'Contact'];

function NavBar(props) {

    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen((prevState) => !prevState);
    };

    const drawer = (
        
        <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
            <Typography variant="h6" sx={{ my: 2 }}>
                Menu
            </Typography>
            <Divider />
            <List>
                {navItems.map((item) => (
                    <ListItem key={item} disablePadding>
                        <ListItemButton sx={{ textAlign: 'center' }}>
                            <ListItemText primary={item} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </Box>
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <div>
            <React.Fragment>
                <ElevationScroll {...props}>
                    <AppBar color='primary' position="fixed">
                        <Toolbar>
                            <IconButton
                                color="inherit"
                                aria-label="open drawer"
                                edge="start"
                                onClick={handleDrawerToggle}
                                sx={{ mr: 2, display: { sm: 'none' } }}
                            >
                                <MenuIcon />
                            </IconButton>
                            <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
                                <Logo />
                            </IconButton>
                            <Typography variant="h6" style={{ flexGrow: 1 }}>
                                EFCO inc
                            </Typography>
                            <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
                                {navItems.map((item) => (
                                    <Button key={item} sx={style.root}>
                                        {item}
                                    </Button>
                                ))}
                            </Box>
                        </Toolbar>
                    </AppBar>
                </ElevationScroll>
                <Toolbar />
                <Box component="nav">
                    <Drawer
                        container={container}
                        variant="temporary"
                        open={mobileOpen}
                        onClose={handleDrawerToggle}
                        ModalProps={{
                            keepMounted: true, // Better open performance on mobile.
                        }}
                        sx={{
                            display: { xs: 'block', sm: 'none' },
                            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                        }}
                    >
                        {drawer}
                    </Drawer>
                </Box>
                {/* <Container>
                    <Box sx={{ my: 2 }}>
                        {[...new Array(12)]
                            .map(
                                () => `Cras mattis consectetur purus sit amet fermentum.
Cras justo odio, dapibus ac facilisis in, egestas eget quam.
Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
Praesent commodo cursus magna, vel scelerisque nisl consectetur et.`,
                            )
                            .join('\n')}
                    </Box>
                </Container> */}
            </React.Fragment>
        </div>
    );
}

const style = {
    root: {
        color: '#fff',
        position: 'relative',
        padding: '10px',
        border: 'none',
        '&:before': {
          content: '""',
          position: 'absolute',
          bottom: '2px',
          left: 0,
          right: 0,
          borderBottom: '2px solid',
          borderRadius: '20px',
          borderColor: '#fff',
          transition: 'width 0.3s ease-in-out', // Add transition properties
          width: '0%', // Set initial width to 0
        },
        '&:hover': {
          '&:before': {
            width: '100%', // Increase width to 100% on hover
          },
        },
      },
}

export default NavBar;