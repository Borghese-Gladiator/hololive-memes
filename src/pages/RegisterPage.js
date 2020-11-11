import React from 'react';
// use custom React Router + Material UI LInk with prop forwarding
import CustomLink from '../components/CustomLink';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  wrapper: {
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),
    paddingBottom: theme.spacing(2)
  },
  formContainer: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function RegisterPage(props) {
  const classes = useStyles();
  const { t } = props;

  // 100vh, so height of browser page is filled with background
  return (
    <Container component="main" maxWidth="xs" style={{height: "100vh"}}>
      <CssBaseline />
      <Paper className={classes.wrapper}>
        <div className={classes.formContainer}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          {t("register.title")}
        </Typography>
        <form className={classes.form} noValidate>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label={t("register.email")}
            name="email"
            autoComplete="email"
            autoFocus
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label={t("register.password")}
            type="password"
            id="password"
            autoComplete="current-password"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            {t("register.registerButton")}
          </Button>
          <Grid container>
            <Grid item xs>
              <CustomLink to="/forgotpassword">
                <Typography variant="body2">{t("register.forgotPass")}</Typography>
              </CustomLink>
            </Grid>
            <Grid item>
              <CustomLink to="/signin">
                <Typography variant="body2">{t("register.haveAcctText")}</Typography>
              </CustomLink>
            </Grid>
          </Grid>
        </form>
      </div>
      </Paper>
      <Box mt={8}>
        <Copyright />
      </Box>
    </Container>
  );
}