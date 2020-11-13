import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
// Assets
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';
import MyBackgroundImg from './coco-asacoco.png'
// Custom component & data
import CustomLink from '../../components/CustomLink'
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

  const [hololiveArrowShown, setHololiveArrowShown] = useState(false);
  const [animemeButtonShown, setAnimemeButtonShown] = useState(false);
  const hololiveButton = hololiveArrowShown ? <>{t("home.landingHololiveButton")} <ArrowRightAltIcon /></> : <>{t("home.landingHololiveButton")}</>
  const animemeButton = animemeButtonShown ? <>{t("home.landingAnimemeButton")} <ArrowRightAltIcon /></> : <>{t("home.landingAnimemeButton")}</>

  return (
    <div id={id}>
      <div className={classes.landingRoot} style={{ backgroundImage: `url(${MyBackgroundImg})` }}>
        <div className={classes.landingText}>
          <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
            {t("home.landing")}
          </Typography>
          <div className={classes.landingButtons}>
            <Grid container spacing={2} justify="center">
              <Grid item>
                <CustomLink
                  ariaLabel="Hololive Link"
                  to="/hololive"
                >
                  <Button
                    className={classes.primaryButton}
                    variant="contained"
                    color="primary"
                    onMouseEnter={() => setHololiveArrowShown(true)}
                    onMouseLeave={() => setHololiveArrowShown(false)}
                  >
                    {hololiveButton}
                  </Button>
                </CustomLink>
              </Grid>
              <Grid item>
                <CustomLink
                  ariaLabel="Animemes Link"
                  to="/animeme"
                >
                  <Button
                    className={classes.primaryButton}
                    variant="contained"
                    color="primary"
                    onMouseEnter={() => setAnimemeButtonShown(true)}
                    onMouseLeave={() => setAnimemeButtonShown(false)}
                  >
                    {animemeButton}
                  </Button>
                </CustomLink>
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
          nameText={t("home.messageName")}
          emailText={t("home.messageEmail")}
          messageText={t("home.messageText")}
          messageButtonText={t("home.messageButtonText")}
        />
      </Container>
    </div>
  );
}