import React from 'react'
// Translation with i18n
import { withTranslation } from 'react-i18next'
// Routing
import { HashRouter, Route } from "react-router-dom";
// Custom menu: nav and sidebar
import NavigationMenu from "./components/NavigationMenu"
// Pages
import HomePage from './pages/HomePage';
import HololiveMemesPage from './pages/HololiveMemesPage';
import AnimemesPage from './pages/AnimemesPage';
import HistoryDashboard from './pages/HistoryPage';
// Sidebar icons
import HomeIcon from '@material-ui/icons/Home'
import PageviewIcon from '@material-ui/icons/Pageview';
import HistoryIcon from '@material-ui/icons/History';
// load icons here
import logo from './logo.svg';

function App(props) {
  // custom hook to call i18n changeLanguage function
  const { t } = props;
  const langCallback = (event) => {
    let newLang = event.target.value;
    props.i18n.changeLanguage(newLang)
  }

  const navMenuRouteData = [
    { text: t('navMenu.home'), link: '/', iconFunc: () => { return <HomeIcon fontSize="large" /> } },
    { text: t('navMenu.hololive'), link: "/hololive", iconFunc: () => { return <PageviewIcon fontSize="large" /> } },
    { text: t('navMenu.animeme'), link: "/animeme", iconFunc: () => { return <PageviewIcon fontSize="large" /> } },
    { text: t('navMenu.history'), link: "/history", iconFunc: () => { return <HistoryIcon fontSize="large" /> } },
  ]
  
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
          <Route path="/animeme" render={(props) => <AnimemesPage {...props} t={t} /> } />
          <Route path="/history" render={(props) => <HistoryDashboard {...props} t={t} /> } />
        </NavigationMenu>
      </div>
    </HashRouter>
  );
}

export default withTranslation()(App);