import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
// Assets
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';
import MyBackgroundImg from './coco-meme-review.png'
// Custom component & data
import IconLabelCardList from '../../components/IconLabelCardList'
import ContactForm from '../../components/ContactForm'
// HomeContactData icons
import PhoneIcon from '@material-ui/icons/Phone';
import PrintIcon from '@material-ui/icons/Print';
import MailIcon from '@material-ui/icons/Mail';
import RoomIcon from '@material-ui/icons/Room';

const homeContactData = [
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

const useStyles = makeStyles((theme) => ({
  landingRoot: {
    padding: theme.spacing(25, 0, 55),
  },
  landingText: {
    paddingRight: theme.spacing(50)
  },
  primaryButton: {
    color: "white",
    backgroundColor: "black",
    '&:hover': {
      background: "black",
    }
  }
}));

export default function HomePage(props) {
  const { t, id } = props;
  const classes = useStyles();
  const mobile = false

  const [registerArrowShown, setRegisterArrowShown] = useState(false);
  const [signInArrowShown, setSignInArrowShown] = useState(false);
  const registerButton = registerArrowShown ? <>{t("home.landingHololiveButton")} <ArrowRightAltIcon /></> : <>{t("home.landingHololiveButton")}</>
  const signInButton = signInArrowShown ? <>{t("home.landingAnimemeButton")} <ArrowRightAltIcon /></> : <>{t("home.landingAnimemeButton")}</>

  return (
    <div id={id}>
      <div className={classes.landingRoot} style={{ backgroundImage: `url(${MyBackgroundImg})` }}>
        <div maxWidth="sm" className={classes.landingText}>
          <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
            {t("home.landing")}
          </Typography>
          <div className={classes.landingButtons}>
            <Grid container spacing={2} justify="center">
              <Grid item>
                <Button
                  component="a"
                  className={classes.primaryButton}
                  variant="contained"
                  color="primary"
                  href="https://github.com/Borghese-Gladiator"
                  target="_blank"
                  rel="noopener noreferrer"

                  onMouseEnter={() => setRegisterArrowShown(true)}
                  onMouseLeave={() => setRegisterArrowShown(false)}
                >
                  {registerButton}
                </Button>
              </Grid>
              <Grid item>
                <Button
                  component="a"
                  className={classes.primaryButton}
                  variant="outlined"
                  color="primary"
                  href="https://github.com/Borghese-Gladiator"
                  target="_blank"
                  rel="noopener noreferrer"
                  onMouseEnter={() => setSignInArrowShown(true)}
                  onMouseLeave={() => setSignInArrowShown(false)}
                >
                  {signInButton}
                </Button>
              </Grid>
            </Grid>
          </div>
          <h3
            align="center"
            style={{
              fontSize: mobile ? '1.5em' : '1.7em',
              fontWeight: 'normal',
              marginTop: mobile ? '0.5em' : '1.5em',
            }}
          >
            {t("home.landingQuote")}
          </h3>
          <h3 align="right" style={{ paddingRight: '50px' }}>- {t("home.landingQuoteAuthor")}</h3>
        </div>
      </div>
      <br />
      <br />
      <Container>
        <Typography component="h3" variant="h3" align="center" color="textPrimary">
          {t("home.contactTitle")}
        </Typography>
        <br />
        <br />
        <IconLabelCardList iconLabelList={homeContactData} />
        <ContactForm
          messageTitle={t("home.messageTitle")}
          firstNameText={t("home.messageFirstName")}
          lastNameText={t("home.messageLastName")}
          emailText={t("home.messageEmail")}
          messageText={t("home.messageText")}
          messageButtonText={t("home.messageButtonText")}
        />
      </Container>
    </div>
  );
}