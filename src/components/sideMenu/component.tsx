import { useMemo, useState } from "react";
import { styled, Theme, CSSObject } from '@mui/material/styles';
import {  Box, List, Toolbar, Divider, CssBaseline, IconButton, ListItem,
  ListItemButton, ListItemIcon, ListItemText, TextField} from '@mui/material';
  import { useNavigate } from "react-router-dom";
import MuiDrawer from '@mui/material/Drawer';
import { NavButton } from "./types";
import MuiAppBar, { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar';

import ChevronLeftIcon from '@mui/icons-material/ChevronRight';
import LibraryMusicIcon from '@mui/icons-material/LibraryMusic';
import MusicNoteIcon from '@mui/icons-material/MusicNote';
// import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import HomeIcon from '@mui/icons-material/Home';
import PersonIcon from '@mui/icons-material/Person';

const drawerWidth = 240;

interface AppBarProps extends MuiAppBarProps {
    open?: boolean;
}

const openedMixin = (theme: Theme): CSSObject => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== 'open',
  })<AppBarProps>(({ theme, open }) => ({
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

const closedMixin = (theme: Theme): CSSObject => ({
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
  ...theme.mixins.toolbar,
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

const SideMenu = () => {
    const navigate = useNavigate();

    const Buttons: NavButton[] = useMemo(
        () => [
            {
                text: "Home",
                icon: <HomeIcon />,
                onClick: () => navigate("/"),
            },
            {
                text: "Artists",
                icon: <PersonIcon />,
                onClick: () => navigate("/artists"),
            },
            {
                text: "Songs",
                icon: <MusicNoteIcon />,
                onClick: () => navigate("/songs"),
            },
            {
                text: "Albums",
                icon: <LibraryMusicIcon />,
                onClick: () => navigate("/albums"),
            },
            // {
            //   text: "Genres",
            //   icon: <LibraryBooksIcon />,
            //   onClick: () => navigate("/genres"),
            // },
            ], [navigate]
        );

    const [open, setOpen] = useState(false);

    const handleDrawerOpen = () => {
        setOpen(true);
      };

    const handleDrawerClose = () => {
        setOpen(false);
    };
    
    return ( 
    <>
    <CssBaseline />
    <AppBar position="fixed" open={open}>
      <Toolbar>
        <IconButton color="inherit" aria-label="open drawer" onClick={handleDrawerOpen} edge="start" sx={{ marginRight: 5, ...(open && { display: 'none' }), }}>
          <MenuIcon />
        </IconButton>
          <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
            <TextField label="Search" variant="filled" size="small" color="warning" sx={{ width: 500, maxWidth: '100%' }} />
            <IconButton>
              <SearchIcon sx={{ mr: 1, my: 0.5 }} />
            </IconButton>
          </Box>
      </Toolbar>
    </AppBar>
    <Drawer variant="permanent" open={open}>
      <DrawerHeader>
        <IconButton onClick={handleDrawerClose}>
          <ChevronLeftIcon />
        </IconButton>
      </DrawerHeader>
      <Divider />
        <List>
          {Buttons.map((button, index) => (
            <ListItem button key={`NavButton-${button.text}-${index}`} onClick={button.onClick} disablePadding sx={{ display: 'block' }}>
              <ListItemButton sx={{minHeight: 48, justifyContent: open ? 'initial' : 'center', px: 2.5,}}>
                <ListItemIcon sx={{minWidth: 0, mr: open ? 3 : 'auto', justifyContent: 'center',}}>{button.icon}</ListItemIcon>
                <ListItemText primary={button.text} sx={{ opacity: open ? 1 : 0 }}/>
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      <Divider />
    </Drawer>
    </>
  );
}
export default SideMenu;