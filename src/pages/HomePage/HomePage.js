import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
// Assets
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';
import MyBackgroundImg from './opacity-70-food-background.png'
// Custom component & data
import FeatureRoles from '../../components/FeatureRoles'
import IconLabelCardList from '../../components/IconLabelCardList'
import ContactForm from '../../components/ContactForm'
import { homeIconLabelList, aboutRolesData } from '../../constants/homeConstants'

const useStyles = makeStyles((theme) => ({
  heroContent: {
    padding: theme.spacing(25, 0, 60),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
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
  const { id } = props
  const classes = useStyles();
  const mobile = false

  const [registerArrowShown, setRegisterArrowShown] = useState(false);
  const [signInArrowShown, setSignInArrowShown] = useState(false);
  const registerButton = registerArrowShown ? <>Register <ArrowRightAltIcon /></> : <>Register</>
  const signInButton = signInArrowShown ? <>Sign In <ArrowRightAltIcon /></> : <>Sign In</>

  return (
    <div id={id}>
      <div className={classes.heroContent} style={{ backgroundImage: `url(${MyBackgroundImg})` }}>
        <Container maxWidth="sm">
          <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
            Share Recipes with Friends 
          </Typography>
          <div className={classes.heroButtons}>
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
        </Container>
        <Container>
          <h3
            align="center"
            style={{
              fontSize: mobile ? '1.5em' : '1.7em',
              fontWeight: 'normal',
              marginTop: mobile ? '0.5em' : '1.5em',
            }}
          >
            "Food is the ingredient that binds us together."
          </h3>
          <h3 align="right" style={{ paddingRight: '50px' }}>- Vizzini{'   '}</h3>
        </Container>
      </div>
      <div>
        <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
          Features
        </Typography>
        <FeatureRoles aboutRolesData={aboutRolesData} />
      </div>
      <Container>
        <Typography component="h3" variant="h3" align="center" color="textPrimary">
          CONTACT US
        </Typography>
        <IconLabelCardList iconLabelList={homeIconLabelList} />
        <ContactForm />
      </Container>
    </div>
  );
}