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
    position: 'relative',
    maxWidth: 800,
    margin: 'auto'
  },
  media: {
    maxHeight: 550,
    width: '100%',
    objectFit: 'cover'
  },
  overlay: {
    position: 'absolute',
    top: 0,
    right: 0,
    zIndex: theme.zIndex.speedDial + 1
  }
}));

export default function MemeCard(props) {
  const classes = useStyles();
  const { path, title, postID } = props;
 
  const [open, setOpen] = React.useState(false);
  const gifUrl = "https://" + window.location.hostname + props.path

  const handleClick = () => {
    // https://stackoverflow.com/questions/11401897/get-the-current-domain-name-with-javascript-not-the-path-etc
    navigator.clipboard.writeText(gifUrl);
    setOpen(true);

    // add to localStorage history
    const historyListStr = localStorage.getItem('history');
    if (!historyListStr) {
      // does not exist
      localStorage.setItem('history', JSON.stringify([{
        imgPath: path,
        title: title,
        id: postID
      }]));
    } else {
      const historyList = JSON.parse(historyListStr);
      if (!historyList.includes(postID)) {
        // no duplicates present
        historyList.push({
          imgPath: path,
          title: title,
          id: postID
        });
        localStorage.setItem('history', JSON.stringify(historyList));
      }
    }
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
        <img src={path} alt="loading..." className={classes.media} />
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