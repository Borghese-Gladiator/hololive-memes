import React from 'react'
import { withTranslation } from 'react-i18next'; // Translation with i18n
import { HashRouter, Route } from "react-router-dom"; // client-side routing
// Custom components
import AuthNavMenu from './components/NavMenu/AuthNavMenu';
import GuestNavMenu from './components/NavMenu/GuestNavMenu';
import Footer from './components/Footer'
// public pages - sign in relat4ed
import SigninPage from './pages/SigninPage';
import RegisterPage from './pages/RegisterPage';
import ForgotPasswordPage from './pages/ForgotPasswordPage';
// public pages
import HomePage from './pages/HomePage';
import MemesPage from './pages/MemesPage';
// protected pages
import HistoryPage from './pages/auth/HistoryPage';
import SavedPage from './pages/auth/SavedPage';

import logo from './constants/img/white_holomemes_logo.png';
// sidebar icons & assets
import HomeIcon from '@material-ui/icons/Home';
import HistoryIcon from '@material-ui/icons/History';
import HololiveLogo from './constants/img/hololive_black_white_logo.jpg';
// footer icons
import MailIcon from '@material-ui/icons/Mail';
import RoomIcon from '@material-ui/icons/Room';

const footerContactData = [
  {
    label: "+timtimysss@hotmail.com",
    icon: () => { return <MailIcon style={{fontSize: 30}} /> },
  },
  {
    label: "Eastern USA (EST UTC−05:00)",
    icon: () => { return <RoomIcon style={{fontSize: 30}} /> },
  },
];

function App(props) {
  // custom hook to call i18n changeLanguage function
  const { t } = props;
  const langCallback = (event) => {
    let newLang = event.target.value;
    props.i18n.changeLanguage(newLang)
  }
  
  const isUserSignedIn = false;
  if (isUserSignedIn) {
    const navMenuRouteData = [
      { text: t('navMenu.home'), link: '/', iconFunc: () => { return <HomeIcon fontSize="large" /> } },
      { text: t('navMenu.hololive'), link: "/memes", iconFunc: () => { return <img src={HololiveLogo} style={{height:"35px", width: "35px"}} alt="Hololive Logo" /> } },
      { text: t('navMenu.history'), link: "/history", iconFunc: () => { return <HistoryIcon fontSize="large" /> } },
      { text: t('navMenu.saved'), link: "/saved", iconFunc: () => { return <HistoryIcon fontSize="large" /> } },
    ]
    return (
      <HashRouter initialIndex={0}>
        <div style={{backgroundColor: "#DAE3E7"}}>
          <AuthNavMenu
            logo={logo}
            langCallback={langCallback}
            routeData={navMenuRouteData}
          >
            <Route exact path="/" render={(props) => <HomePage {...props} t={t} /> } />
            <Route path="/memes" render={(props) => <MemesPage {...props} t={t} /> } />
            <Route path="/history" render={(props) => <HistoryPage {...props} t={t} /> } />
            <Route path="/saved" render={(props) => <SavedPage {...props} t={t} /> } />
            <Footer iconLabelList={footerContactData} />
          </AuthNavMenu>
        </div>
      </HashRouter>
    )
  } else {
    return (
      <HashRouter initialIndex={0}>
        <div style={{backgroundColor: "#DAE3E7"}}>
          <GuestNavMenu
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
          </GuestNavMenu>
        </div>
      </HashRouter>
    )
  }
}

export default withTranslation()(App);