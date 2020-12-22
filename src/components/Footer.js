import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';

function Copyright({t}) {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {t("footer.copyrightLabel")}
      <Link color="inherit" href="/">
        HoloMemes
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useFooterStyles = makeStyles((theme) => ({
  footer: {
    // marginTop: theme.spacing(8),
    padding: theme.spacing(40, 20, 5),
    textAlign: "center"
  },
  listRoot: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
}));

export default function Footer(props) {
  const classes = useFooterStyles();
  const { t } = props;
  return (
    <footer className={classes.footer}>
      <Typography variant="subtitle1" gutterBottom>
        {t("footer.disclaimerLabel")}
      </Typography>
      <Copyright t={t} />
    </footer>
  );
}

Footer.propTypes = {
  description: PropTypes.string,
  title: PropTypes.string,
};