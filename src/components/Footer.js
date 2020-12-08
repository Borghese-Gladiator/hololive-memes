import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
// IconLabelCardList
import IconButton from '@material-ui/core/IconButton';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
  root: {
    paddingLeft: '20%',
    paddingRight: '20%',
  },
  flexColumn: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  iconButton: {
    borderRadius: '50%',
    border: '5px solid #555'
  }
}));

function IconLabelCardList(props) {
  const classes = useStyles();
  const { iconLabelList } = props;

  return (
    <Container className={classes.root}>
      <Grid container spacing={1}>
        {iconLabelList.map((obj, idx) => (
          <Grid className={classes.flexColumn} key={`${obj.label} ${idx}`} item xs={12} sm={6} md={4} lg={3}>
            <IconButton aria-label={`${obj.label} ${idx}`} className={classes.iconButton}>
              {obj.icon()}
            </IconButton>
            {obj.label}
          </Grid>
        ))}
      </Grid>
    </Container>
  )
}

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        TastePerfect
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useFooterStyles = makeStyles((theme) => ({
  footer: {
    // marginTop: theme.spacing(8),
    padding: theme.spacing(6, 0),
  },
}));

export default function Footer(props) {
  const { iconLabelList } = props;
  const classes = useFooterStyles();
  return (
    <footer className={classes.footer}>
      <IconLabelCardList iconLabelList={iconLabelList} />
      <Container maxWidth="lg">
        <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
          Icon made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon"> www.flaticon.com</a>
        </Typography>
        <Copyright />
      </Container>
    </footer>
  );
}

Footer.propTypes = {
  description: PropTypes.string,
  title: PropTypes.string,
};