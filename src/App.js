import React from 'react'
// Translation with i18n
import { withTranslation } from 'react-i18next'
// Routing
import { HashRouter, Route } from "react-router-dom";
// Custom components (menu: nav and sidebar)
import NavigationMenu from "./components/NavigationMenu"
import Footer from './components/Footer'

// public sign in pages
import SigninPage from './pages/SigninPage';
import RegisterPage from './pages/RegisterPage';
import ForgotPasswordPage from './pages/ForgotPasswordPage';
// public Pages
import HomePage from './pages/HomePage';
import MemesPage from './pages/MemesPage';
// protected Pages
import HistoryPage from './pages/auth/HistoryPage';
import SavedPage from './pages/auth/SavedPage';

// Sidebar icons
import HomeIcon from '@material-ui/icons/Home'
import HistoryIcon from '@material-ui/icons/History';
// load icons here
import logo from './constants/img/white_holomemes_logo.png';
import HololiveLogo from './constants/img/hololive_black_white_logo.jpg'
// footerContactData icons
import PhoneIcon from '@material-ui/icons/Phone';
import PrintIcon from '@material-ui/icons/Print';
import MailIcon from '@material-ui/icons/Mail';
import RoomIcon from '@material-ui/icons/Room';

const footerContactData = [
  {
    label: "+123 999 999 999",
    icon: () => { return <PhoneIcon style={{fontSize: 80}} /> },
  },
  {
    label: "+101 999 999 999",
    icon: () => { return <PrintIcon style={{fontSize: 80}} /> },
  },
  {
    label: "+info@tasteperfect.org",
    icon: () => { return <MailIcon style={{fontSize: 80}} /> },
  },
  {
    label: "Chuo City, Tokyo, JP",
    icon: () => { return <RoomIcon style={{fontSize: 80}} /> },
  },
];

function App(props) {
  // custom hook to call i18n changeLanguage function
  const { t } = props;
  const langCallback = (event) => {
    let newLang = event.target.value;
    props.i18n.changeLanguage(newLang)
  }
  
  const navMenuRouteData = [
    { text: t('navMenu.home'), link: '/', iconFunc: () => { return <HomeIcon fontSize="large" /> } },
    { text: t('navMenu.hololive'), link: "/memes", iconFunc: () => { return <img src={HololiveLogo} style={{height:"35px", width: "35px"}} alt="Hololive Logo" /> } },
    { text: t('navMenu.history'), link: "/history", iconFunc: () => { return <HistoryIcon fontSize="large" /> } },
  ]
  
  // <Route path="/animeme" render={(props) => <AnimemesPage {...props} t={t} /> } />
  return (
    <HashRouter initialIndex={0}>
      <div style={{backgroundColor: "#DAE3E7"}}>
        <NavigationMenu
          routeData={navMenuRouteData}
          logo={logo}
          langCallback={langCallback}
          registerText={t('navMenu.register')}
          signInText={t('navMenu.signIn')}
        >
          <Route exact path="/" render={(props) => <HomePage {...props} t={t} /> } />
          <Route path="/memes" render={(props) => <MemesPage {...props} t={t} /> } />
          <Route path="/signin" render={(props) => <SigninPage {...props} t={t} /> } />
          <Route path="/register" render={(props) => <RegisterPage {...props} t={t} /> } />
          <Route path="/forgotpassword" render={(props) => <ForgotPasswordPage {...props} t={t} /> } />
          <Footer iconLabelList={footerContactData} />
        </NavigationMenu>
      </div>
    </HashRouter>
  );
}
// <Route path="/history" render={(props) => <HistoryPage {...props} t={t} /> } />

export default withTranslation()(App);