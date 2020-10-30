import React from 'react'
// Translation with i18n
import { withTranslation } from 'react-i18next'
// Routing
import { HashRouter, Route } from "react-router-dom";
// Custom menu: nav and sidebar
import NavigationMenu from "./components/NavigationMenu"
// Pages
import HomePage from './pages/HomePage';
import BrowsePage from './pages/BrowsePage';
import HistoryDashboard from './pages/HistoryPage'
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
    { text: t('navMenu.HOME'), link: '/', iconFunc: () => { return <HomeIcon /> } },
    { text: t('navMenu.BROWSE'), link: "/browse", iconFunc: () => { return <PageviewIcon /> } },
    { text: t('navMenu.HISTORY'), link: "/history", iconFunc: () => { return <HistoryIcon /> } },
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
          <Route path="/browse" render={(props) => <BrowsePage {...props} t={t} /> } />
          <Route path="/history" render={(props) => <HistoryDashboard {...props} t={t} /> } />
        </NavigationMenu>
      </div>
    </HashRouter>
  );
}

export default withTranslation()(App);