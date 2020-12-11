import React, { useState } from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Backdrop from '@material-ui/core/Backdrop';
import Paper from '@material-ui/core/Paper';
// Assets
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';
import MemeImg from './advertisement_meme.jpeg';
import MyBackgroundImg from './coco-meme-review.png'
// Custom component & data
import CustomLink from '../components/CustomLink'

const useStyles = makeStyles((theme) => ({
  landingRoot: {
    height: theme.spacing(93)
  },
  image: {
    height: theme.spacing(50),
    width: theme.spacing(50),
  },
  landingButtons: {
    paddingRight: theme.spacing(30),
    paddingBottom: theme.spacing(30)
  },
  primaryButton: {
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

  const [open, setOpen] = React.useState(false);
  
  const handleClose = () => {
    setOpen(false);
  };
  const handleToggle = () => {
    setOpen(!open);
    console.log(open);
  };
  return (
    <div id={id}>
      <div className={clsx(classes.landingRoot, classes.columnFlex)} style={{ backgroundImage: `url(${MyBackgroundImg})` }}>
        <Container className={clsx(classes.landingButtons, classes.columnFlex)}>
          <img src={MemeImg} alt="meme above meme button" className={classes.image} />
          <br />
          <Grid container spacing={2} justify="center">
            <Grid item>
              <Button
                className={classes.primaryButton}
                variant="contained"
                color="primary"
                onMouseEnter={() => setHowToUseButtonShown(true)}
                onMouseLeave={() => setHowToUseButtonShown(false)}
                onClick={handleToggle}
              >
                {howToUseButton}
              </Button>
              {open ? (
                  <Backdrop className={classes.backdrop} open={open} onClick={handleClose}>
                    <Container>
                      <Paper className={classes.columnFlex} style={{
                        borderStyle: 'solid',                        
                        boxShadow: '10px 10px 5px black'
                      }}>
                        <Container>
                          <Typography paragraph>How to Use:</Typography>
                          <Typography paragraph>
                            1. Click "Memes" button to go to Memes page 
                          </Typography>
                          <Typography paragraph>
                            2. Click on Memes to copy to clipboard
                          </Typography>
                          <Typography paragraph>
                            3. Ctrl + V to paste URL into Discord (which will show the meme)
                          </Typography>
                          <Typography paragraph>
                            If you make an account, you can:
                          </Typography>
                          <ul>
                            <li>See history of recently clicked memes</li>
                            <li>Save memes with a favorite button</li>
                            <li>See latest r/Hololive Reddit memes (coming soon!)</li>
                          </ul>
                          <Typography style={{fontWeight:"bold"}}>
                            Keep up the shitposts people! Make something Coco can use for Meme Review.
                          </Typography>
                        </Container>
                      </Paper>
                    </Container>
                  </Backdrop>
                ) : null}
            </Grid>
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