import React from 'react'
// Translation with i18n
import { withTranslation } from 'react-i18next'
// Routing
import { HashRouter, Route } from "react-router-dom";
// Custom components (menu: nav and sidebar)
import NavigationMenu from "./components/NavigationMenu"
import Footer from './components/Footer'
// Pages
import HomePage from './pages/HomePage';
import HololiveMemesPage from './pages/HololiveMemesPage';

import HistoryDashboard from './pages/HistoryPage';
import SigninPage from './pages/SigninPage';
import RegisterPage from './pages/RegisterPage';
import ForgotPasswordPage from './pages/ForgotPasswordPage';
// Sidebar icons
import HomeIcon from '@material-ui/icons/Home'
import HistoryIcon from '@material-ui/icons/History';
// load icons here
import logo from './constants/img/white_holomemes_logo.png';
import HololiveLogo from './constants/img/hololive_black_white_logo.jpg'

// import AnimemesPage from './pages/AnimemesPage';
// import AnimeImage from './constants/img/anime_logo.png'

function App(props) {
  // custom hook to call i18n changeLanguage function
  const { t } = props;
  const langCallback = (event) => {
    let newLang = event.target.value;
    props.i18n.changeLanguage(newLang)
  }

  const navMenuRouteData = [
    { text: t('navMenu.home'), link: '/', iconFunc: () => { return <HomeIcon fontSize="large" /> } },
    { text: t('navMenu.hololive'), link: "/hololive", iconFunc: () => { return <img src={HololiveLogo} style={{height:"35px", width: "35px"}} alt="Hololive Logo" /> } },
    // { text: t('navMenu.animeme'), link: "/animeme", iconFunc: () => { return <img src={AnimeImage} style={{height:"35px", width: "35px"}} alt="Anime Pic Logo" /> } },
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
          <Route path="/hololive" render={(props) => <HololiveMemesPage {...props} t={t} /> } />
          <Route path="/history" render={(props) => <HistoryDashboard {...props} t={t} /> } />
          <Route path="/signin" render={(props) => <SigninPage {...props} t={t} /> } />
          <Route path="/register" render={(props) => <RegisterPage {...props} t={t} /> } />
          <Route path="/forgotpassword" render={(props) => <ForgotPasswordPage {...props} t={t} /> } />
          <Footer />
        </NavigationMenu>
      </div>
    </HashRouter>
  );
}

export default withTranslation()(App);