import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 800,
    width: '100%',
    '& > * + *': {
      marginTop: theme.spacing(2),
    },
  },
  gifStyle: {
    maxHeight: 498
  }
}));

export default function MemeCard(props) {
  const { path } = props;
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const gifUrl = "https://" + window.location.hostname + props.path

  const handleClick = () => {
    // https://stackoverflow.com/questions/11401897/get-the-current-domain-name-with-javascript-not-the-path-etc
    navigator.clipboard.writeText(gifUrl);
    setOpen(true);
  };
  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
  };

  return (
    <Card className={classes.root}>
      <CardActionArea onClick={handleClick}>
        <img src={path} alt="loading..." className={classes.gifStyle} />
      </CardActionArea>
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success">
          URL copied to clipboard!
          <br />
          {gifUrl}
        </Alert>
      </Snackbar>
    </Card>
  )
}