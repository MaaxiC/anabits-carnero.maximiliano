import * as React from 'react';
import { styled } from '@mui/material/styles';
import { useState, useContext } from 'react';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Badge from '@mui/material/Badge';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import NotificationsIcon from '@mui/icons-material/Notifications';
import HomeIcon from '@mui/icons-material/Home';
import InventoryIcon from '@mui/icons-material/Inventory';
import InfoIcon from '@mui/icons-material/Info';
import ContactPageIcon from '@mui/icons-material/ContactPage';
import Avatar from '@mui/material/Avatar';
import FavoriteIcon from '@mui/icons-material/Favorite';
import SearchWidget from '../SearchWidget/SearchWidget';
import CartWidget from '../CartWidget/CartWidget';
import { Link } from 'react-router-dom';
import HeadphonesIcon from '@mui/icons-material/Headphones';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import Collapse from '@mui/material/Collapse';
import MicIcon from '@mui/icons-material/Mic';
import MusicNoteIcon from '@mui/icons-material/MusicNote';
import SpeakerIcon from '@mui/icons-material/Speaker';
import { Container } from '@mui/material';
import ThemeSwitch from './ThemeSwitch';
import ThemeContext from '../../../context/ThemeContext';


const drawerWidth = 240;

const pages = [
  {
    title: 'Home',
    url: '/'
  },
  {
    title: 'Favorites',
    url: '/favorites'
  },
  {
    title: 'Category',
    url: '/category/'
  },
  {
    title: 'AboutUs',
    url: '/aboutus'
  },
  {
    title: 'Contact',
    url: '/contact'
  }
]

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    ...(open && {
      ...openedMixin(theme),
      '& .MuiDrawer-paper': openedMixin(theme),
    }),
    ...(!open && {
      ...closedMixin(theme),
      '& .MuiDrawer-paper': closedMixin(theme),
    }),
  }),
);

function NavBar() {
  const [subMenu, setSubMenu] = useState(true);

  const handleClick = () => {
    setSubMenu(!subMenu);
  };

  const { theme } = useContext(ThemeContext);

  const [open, setOpen] = useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const [anchorEl, setAnchorEl] = useState(null);

  const isMenuOpen = Boolean(anchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const menuId = 'primary-search-account-menu';
    const renderMenu = (
      <Menu
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        id={menuId}
        keepMounted
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        open={isMenuOpen}
        onClose={handleMenuClose}
      >
        <MenuItem onClick={handleMenuClose}>My account</MenuItem>
        <MenuItem onClick={handleMenuClose}>History</MenuItem>
        <MenuItem onClick={handleMenuClose}>Privacy</MenuItem>
        <MenuItem onClick={handleMenuClose}>Log Out</MenuItem>
      </Menu>
    );

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position='fixed' open={open} theme={theme} >
        <Toolbar >
          <IconButton
            color='inherit'
            aria-label='open drawer'
            onClick={handleDrawerOpen}
            edge='start'
            sx={{
              marginRight: 5,
              ...(open && { display: 'none' }),
            }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant='h5' noWrap component={Link} to={'/'} color='white' sx={{ marginRight: 4, textDecoration: 'none' }} >
            Anabits
          </Typography>
          <img src='/logo-soundwaves-modified.png' alt='img-logo' width='70px' />
          <SearchWidget/>
          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
            <CartWidget/>
            <IconButton
              size='large'
              color='inherit'
            >
              <Badge badgeContent={0} color='error'>
                <NotificationsIcon />
              </Badge>
            </IconButton>
            <IconButton
              onClick={handleProfileMenuOpen}
            >   
              <Avatar src='/profile.jpg' alt='avatar' />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      <Drawer variant='permanent' open={open} >
        <DrawerHeader >
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List >
          {['Home', 'Favorites'].map((text, index) => (
            <ListItemButton
              component={Link} 
              to={pages[index].url}
              key={text}
              sx={{
                minHeight: 48,
                justifyContent: open ? 'initial' : 'center',
                px: 2.5,
              }}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 3 : 'auto',
                  justifyContent: 'center',
                }}
              >
                {index === 0 ? <HomeIcon/> : <FavoriteIcon /> }
              </ListItemIcon>
              <ListItemText primary={text} sx={{ opacity: open ? 1 : 0 }} />
            </ListItemButton>
          ))}
        </List>
        <Divider />
        <List>
          <ListItemButton 
          sx={{
            minHeight: 48,
            justifyContent: 'initial',
            px: 2.5,
          }}
          onClick={handleClick}
          >
            <ListItemIcon>
              <InventoryIcon />
            </ListItemIcon>
          <ListItemText primary="Category" />
          {subMenu ? <ExpandLess /> : <ExpandMore />}
          </ListItemButton>
          <Collapse in={subMenu} timeout="auto" unmountOnExit >
            <List component="div" disablePadding >
              <ListItemButton 
                sx={{ pl: 2.5 }}
                component={Link} 
                to={'/headphones'}
                >
                <ListItemIcon>
                  <HeadphonesIcon />
                </ListItemIcon>
                <ListItemText primary="Headphones" />
              </ListItemButton>
              <ListItemButton 
                sx={{ pl: 2.5 }}
                component={Link} 
                to={'/microphones'}
                >
                <ListItemIcon>
                  <MicIcon />
                </ListItemIcon>
                <ListItemText primary="Microphones" />
              </ListItemButton>
              <ListItemButton 
                sx={{ pl: 2.5 }}
                component={Link} 
                to={'/dj-consoles'}
                >
                <ListItemIcon>
                  <MusicNoteIcon />
                </ListItemIcon>
                <ListItemText primary="DJ Consoles" />
              </ListItemButton>
              <ListItemButton 
                sx={{ pl: 2.5 }}
                component={Link} 
                to={'/speakers'}
                >
                <ListItemIcon>
                  <SpeakerIcon />
                </ListItemIcon>
                <ListItemText primary="Speakers" />
              </ListItemButton>
            </List>
          </Collapse>
        </List>
        <Divider />
        <List>
          {['About Us', 'Contact'].map((text, index) => (
            <ListItemButton
              component={Link} 
              to={pages[index+3].url}
              key={text}
              sx={{
                minHeight: 48,
                justifyContent: open ? 'initial' : 'center',
                px: 2.5,
              }}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 3 : 'auto',
                  justifyContent: 'center',
                }}
              >
                {index === 0 ? <InfoIcon /> : <ContactPageIcon />}
              </ListItemIcon>
              <ListItemText primary={text} sx={{ opacity: open ? 1 : 0 }} />
            </ListItemButton>
          ))}
        </List>
        <Box sx={{ flexGrow: 1 }} />
        {open ? (
          <Container sx={{ marginLeft: 0 }}>
            <ThemeSwitch/>
          </Container>
        ) : (
          <Container sx={{ marginLeft: -2.5 }}>
            <ThemeSwitch/>
          </Container>
        )}
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, p: 1 }}>
        <DrawerHeader />
      </Box>
      {renderMenu}
    </Box>
  );
}

export default NavBar;