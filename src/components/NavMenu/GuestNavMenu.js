import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
// custom React Router links
import CustomLink from '../CustomLink';
// custom component
import LanguageSelector from './LanguageSelector';
// Material UI components
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import MoreIcon from '@material-ui/icons/MoreVert';


import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

// instruction Material UI components
import Container from '@material-ui/core/Container';
import Backdrop from '@material-ui/core/Backdrop';
import Paper from '@material-ui/core/Paper';

import HelpIcon from '@material-ui/icons/Help';
import DetailsIcon from '@material-ui/icons/Details';
import ChangeHistoryIcon from '@material-ui/icons/ChangeHistory';

const useStyles = makeStyles((theme) => ({
  appBar: {
    backgroundColor: '#393e46',
    backgroundBlendMode: "normal,luminosity",
    backdropFilter: 'blur(5px)',
    boxShadow: '3px 6px 20px rgba(104,102,255,.44), -3px -6px 10px hsla(0,0%,100%,.6)',
    zIndex: theme.zIndex.drawer + 1
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  logo: {
    height: 50,
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },
  },
  sectionMobile: {
    display: 'flex',
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
  },
  columnFlex: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  }
}));

export default function GuestNavMenu(props) {
  const classes = useStyles();
  const { logo, langCallback, t } = props;
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);
  const [backdropOpen, setBackdropOpen] = React.useState(false);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };
  
  const menuId = 'primary-search-account-menu';
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={menuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      
      <MenuItem onClick={handleMenuClose}>
        <CustomLink ariaLabel={`Link to history page`} to={'/history'}>
          {t("navbar.dropdownHistoryRoute")}
        </CustomLink>
      </MenuItem>
      <MenuItem onClick={handleMenuClose}>
        <CustomLink ariaLabel={`Link to favorites page`} to={'/favorites'}>
          {t("navbar.dropdownFavoriteRoute")}
        </CustomLink>
      </MenuItem>
    </Menu>
  );

  const mobileMenuId = 'primary-search-account-menu-mobile';
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          aria-label="saved menu routing"
          aria-controls="primary-search-saved-menu"
          aria-haspopup="true"
          color="inherit"
        >
          { anchorEl ? <ChangeHistoryIcon /> : <DetailsIcon /> }
        </IconButton>
          {t("navbar.dropdownLabel")}
      </MenuItem>
    </Menu>
  );

  return (
    <div className={classes.grow}>
      <AppBar position="static" className={classes.appBar}>
        <Toolbar>
          <CustomLink to={"/"}>
            <IconButton
              edge="start"
              color="inherit"
              aria-label="open drawer"
            >
              <img src={logo} className={classes.logo} alt="logo" />
            </IconButton>
          </CustomLink>
          <div className={classes.grow} />
          <div className={classes.sectionDesktop}>
            <IconButton
              aria-label="saved menu routing"
              aria-controls="primary-search-saved-menu"
              aria-haspopup="true"
              color="inherit"
              onClick={() => setBackdropOpen(!backdropOpen)}
            >
              <HelpIcon />
            </IconButton>
            <Button
              aria-controls="simple-menu"
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
              style={{color: 'inherit'}}
            >
              <Typography variant="button" display="block" gutterBottom>
                {t("navbar.dropdownLabel")}
              </Typography>
              { anchorEl ? <ChangeHistoryIcon /> : <DetailsIcon /> }
            </Button>
            <LanguageSelector onSelectLanguage={langCallback} />
          </div>
          <div className={classes.sectionMobile}>
            <IconButton
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      {renderMenu}
      <main>
        {props.children}
        {backdropOpen ? (
          <Backdrop className={classes.backdrop} open={backdropOpen} onClick={() => setBackdropOpen(false)}>
            <Container>
              <Paper className={classes.columnFlex} style={{
                borderStyle: 'solid',                        
                boxShadow: '10px 10px 5px black'
              }}>
                <Container>
                  <Typography variant="h6" gutterBottom>
                    Disclaimer: This is a fanmade website and is not affiliated with Hololive.
                  </Typography>
                  <Typography paragraph>How to Use:</Typography>
                  <Typography paragraph>
                    1. Click "Memes" button to go to Memes page 
                  </Typography>
                  <Typography paragraph>
                    2. Click on Memes to copy to clipboard
                  </Typography>
                  <Typography paragraph>
                    3. Ctrl + V to paste URL into Discord (which will show the meme)
                  </Typography>
                  <Typography paragraph>
                    If you make an account, you can:
                  </Typography>
                  <ul>
                    <li>See history of recently clicked memes</li>
                    <li>Save memes with a favorite button</li>
                    <li>See latest r/Hololive Reddit memes (coming soon!)</li>
                  </ul>
                  <Typography style={{fontWeight:"bold"}}>
                    Keep up the shitposts people! Make something Coco can use for Meme Review.
                  </Typography>
                </Container>
              </Paper>
            </Container>
          </Backdrop>
        ) : null}
      </main>
    </div>
  );
}
