import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
// List components
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
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
    padding: theme.spacing(40, 20,0),
  },
  listRoot: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
}));

export default function Footer(props) {
  const { iconLabelList } = props;
  const classes = useFooterStyles();
  return (
    <footer className={classes.footer}>
      <h3 style={{textAlign: "center"}}>
        Contact Developer
      </h3>
      <p style={{textAlign: "center"}}>
        If something's not working, make a meme about it (life lesson)
      </p>
      <List
        component="nav"
        className={classes.listRoot}
      >
        {iconLabelList.map((obj, idx) => (
          <ListItem button>
            <ListItemIcon>
              {obj.icon()}
            </ListItemIcon>
            <ListItemText secondary={obj.label} />
          </ListItem>
        ))}
        <ListItem button>
          <Typography variant="subtitle2" align="center" color="textSecondary" component="p">
            logo made with <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon"> www.flaticon.com</a>
          </Typography>
        </ListItem>
        <ListItem button>
          <Copyright />
        </ListItem>
      </List>
    </footer>
  );
}

Footer.propTypes = {
  description: PropTypes.string,
  title: PropTypes.string,
};