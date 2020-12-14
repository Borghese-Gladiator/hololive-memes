import React from 'react'
import { withTranslation } from 'react-i18next'; // Translation with i18n
import { HashRouter, Route } from "react-router-dom"; // client-side routing
// Custom components
import NavMenu from './components/NavMenu/GuestNavMenu';
import Footer from './components/Footer'
// pages
import HomePage from './pages/HomePage';
import MemesPage from './pages/memes/MemesPage';
import HistoryPage from './pages/HistoryPage';
import FavoritesPage from './pages/FavoritesPage';

// footer icons
import MailIcon from '@material-ui/icons/Mail';
import RoomIcon from '@material-ui/icons/Room';
// logo
import logo from './constants/img/white_holomemes_logo.png';

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
  
  return (
    <HashRouter initialIndex={0}>
      <div style={{backgroundColor: "#DAE3E7"}}>
        <NavMenu logo={logo} langCallback={langCallback}>
          <Route exact path="/" render={(props) => <HomePage {...props} t={t} /> } />
          <Route path="/memes" render={(props) => <MemesPage {...props} t={t} /> } />
          <Route path="/history" render={(props) => <HistoryPage {...props} t={t} /> } />
          <Route path="/favorites" render={(props) => <FavoritesPage {...props} t={t} /> } />
          <Footer iconLabelList={footerContactData} />
        </NavMenu>
      </div>
    </HashRouter>
  )
}

export default withTranslation()(App);