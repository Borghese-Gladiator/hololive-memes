import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
// custom React Router links
import CustomLink from '../CustomLink';
import CustomButtonLink from '../CustomButtonLink';
// custom component
import LanguageSelector from './LanguageSelector';
// appbar Material UI components
import { AppBar, Button, CssBaseline, Toolbar } from '@material-ui/core';
// dropdown button
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
// instruction Material UI components
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Backdrop from '@material-ui/core/Backdrop';
import Paper from '@material-ui/core/Paper';
// icons
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
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
  logo: {
    height: 50,
  },
  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex'
    },
  },
  appBarSpacer: theme.mixins.toolbar,
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
  const { logo, langCallback, signInText } = props;

  // how to use instructions
  const [open, setOpen] = React.useState(false);
  const handleClose = () => {
    setOpen(false);
  };
  const handleToggle = () => {
    setOpen(!open);
    console.log(open);
  };

  
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleDropdownClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="absolute"
        className={classes.appBar}
      >
        <Toolbar variant="dense">
          <CustomLink to={"/"}>
            <Button 
              aria-label={"back to home image"}
              className={classes.toolbarIcon}
            >
              <Typography variant="button" display="block" gutterBottom>
                {""}
              </Typography>
              <img src={logo} className={classes.logo} alt="logo" />
            </Button>
          </CustomLink>
          <div className={classes.grow} />
          <div className={classes.sectionDesktop}>
            <Button onClick={handleToggle} style={{color: 'inherit'}}>
              <Typography variant="button" gutterBottom>
                How to Use
              </Typography>
            </Button>
            <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick} style={{color: 'inherit'}}>
              <Typography variant="button" display="block" gutterBottom>
                Open Saved
              </Typography>
              { anchorEl ? <ChangeHistoryIcon /> : <DetailsIcon /> }
            </Button>
            <Menu
              id="simple-menu"
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={handleDropdownClose}
            >
              <MenuItem onClick={handleDropdownClose}>
                <CustomLink ariaLabel={`Link to history page`} to={'/history'}>
                  History
                </CustomLink>
              </MenuItem>
              <MenuItem onClick={handleDropdownClose}>
                <CustomLink ariaLabel={`Link to favorites page`} to={'/favorites'}>
                  Favorites
                </CustomLink>
              </MenuItem>
            </Menu>
            <LanguageSelector onSelectLanguage={langCallback} />
          </div>
        </Toolbar>
      </AppBar>
      <main>
        <div className={classes.appBarSpacer} />
        {props.children}
        {open ? (
          <Backdrop className={classes.backdrop} open={open} onClick={handleClose}>
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
