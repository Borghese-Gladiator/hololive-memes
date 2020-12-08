import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
// custom React Router links
import CustomLink from '../CustomLink';
import CustomButtonLink from '../CustomButtonLink';
// LanguageSelector
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
// LanguageSelector Icons
import TranslateIcon from '@material-ui/icons/Translate';
// appbar Material UI components
import { AppBar, Button, CssBaseline, Divider, Toolbar, Typography } from '@material-ui/core';
// icons
import ExitToAppIcon from '@material-ui/icons/ExitToApp';

const useStyles2 = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1)
  }
}));

// Cannot add styling directly onto TranslateIcon in IconComponent which requires string input
const whiteTranslateIcon = () => { return (<TranslateIcon style={{color:"inherit"}} />) }

function LanguageSelector(props) {
  const { onSelectLanguage } = props;
  const classes = useStyles2();
  const [lang, setLang] = React.useState('en');

  const handleChange = (event) => {
    setLang(event.target.value);
    onSelectLanguage(event);
  };

  return (
    <FormControl className={classes.formControl}>
      <Select
        id="demo-simple-select"
        IconComponent={whiteTranslateIcon}
        value={lang}
        onChange={handleChange}
        style={{color:"inherit", fontSize: '18px' }}
      >
        <MenuItem value={'en'}>English</MenuItem>
        <MenuItem value={'es'}>Español</MenuItem>
        <MenuItem value={'zh'}>简体中文</MenuItem>
        <MenuItem value={'jp'}>日本語</MenuItem>
      </Select>
    </FormControl>
  )
}

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  toolbar: {
    paddingRight: 24, // keep right padding when drawer closed
  },
  toolbarIcon: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: '0 8px',
    ...theme.mixins.toolbar,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  logo: {
    height: '50px',
  },
  divider: {
    margin: theme.spacing(0, 0.5),
    background: "white",
  },
  grow: {
    flexGrow: 1,
  },
  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },
  },
  appBarSpacer: theme.mixins.toolbar,
}));
    

export default function PersistentDrawerLeft(props) {
  const classes = useStyles();
  const { logo, langCallback, signInText } = props;

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="absolute"
        className={classes.appBar}
        style={{
          backgroundColor: '#393e46',
          backgroundBlendMode: "normal,luminosity",
          backdropFilter: 'blur(5px)',
          boxShadow: '3px 6px 20px rgba(104,102,255,.44), -3px -6px 10px hsla(0,0%,100%,.6)'
        }}
      >
        <Toolbar className={classes.toolbar}>
          <CustomLink to={"/"}>
            <Button 
              aria-label={"back to home image"}
              color="inherit"
            >
              <Typography variant="button" display="block" gutterBottom>
                {""}
              </Typography>
              <img src={logo} className={classes.logo} alt="logo" />
            </Button>
          </CustomLink>
          <div className={classes.grow} />
          <div className={classes.sectionDesktop}>
            <CustomButtonLink 
              ariaLabel="sign-in"
              to="/signin"
              primary={signInText}
              icon={<ExitToAppIcon />} 
            />
            <Divider className={classes.divider} orientation="vertical" flexItem />
            <LanguageSelector onSelectLanguage={langCallback} />
          </div>
        </Toolbar>
      </AppBar>
      <div className={classes.appBarSpacer} />
    </div>
  );
}
