import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
// Assets
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';
import MyBackgroundImg from './coco-asacoco.png'
// Custom component & data
import CustomLink from '../../components/CustomLink'

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
  const hololiveButton = hololiveArrowShown ? <>{t("home.landingHololiveButton")} <ArrowRightAltIcon /></> : <>{t("home.landingHololiveButton")}</>

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
                  to="/memes"
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
    </div>
  );
}