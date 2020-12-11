import React, { useState } from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
// Assets
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';
import MemeImg from '../constants/img/advertisement_meme.jpeg';
import MyBackgroundImg from '../constants/img/coco-meme-review.png'
// Custom component & data
import CustomLink from '../components/CustomLink'

const useStyles = makeStyles((theme) => ({
  landingRoot: {
    height: theme.spacing(93),
    objectFit: 'cover'
  },
  image: {
    height: theme.spacing(60),
    width: theme.spacing(60),
  },
  landingButtons: {
    paddingTop: theme.spacing(10),
    paddingRight: theme.spacing(30),
    paddingBottom: theme.spacing(15)
  },
  primaryButton: {
    height: 60,
    color: "white",
    backgroundColor: "black",
    '&:hover': {
      background: "black",
    }
  },
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
  },
  columnFlex: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  }
}));

export default function HomePage(props) {
  const { t, id } = props;
  const classes = useStyles();
  const [hololiveArrowShown, setHololiveArrowShown] = useState(false);
  const [howToUseButtonShown, setHowToUseButtonShown] = useState(false);
  const hololiveButton = hololiveArrowShown ? <>{t("home.landingHololiveButton")} <ArrowRightAltIcon /></> : <>{t("home.landingHololiveButton")}</>
  const howToUseButton = howToUseButtonShown ? <>{t("home.landingHowToUseButton")} <ArrowRightAltIcon /></> : <>{t("home.landingHowToUseButton")}</>

  return (
    <div id={id}>
      <div className={clsx(classes.landingRoot, classes.columnFlex)} style={{ backgroundImage: `url(${MyBackgroundImg})` }}>
        <Container className={clsx(classes.landingButtons, classes.columnFlex)}>
          <img src={MemeImg} alt="meme above meme button" className={classes.image} />
          <br />
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
        </Container>
      </div>
    </div>
  );
}