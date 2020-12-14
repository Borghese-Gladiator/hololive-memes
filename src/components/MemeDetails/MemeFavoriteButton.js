import React from 'react';
import Button from '@material-ui/core/Button';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
// icons
import FavoriteIcon from '@material-ui/icons/Favorite';

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

export default function MemeCard(props) {
  const { postID } = props;
 
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    // add to localStorage history
    const favoriteIDSet = localStorage.getItem('favorite');
    if (favoriteIDSet) {
      favoriteIDSet.add(postID); 
      localStorage.setItem('favorite', favoriteIDSet);
    } else {
      let mySet = new Set();
      mySet.add(postID);
      localStorage.setItem('favorite', mySet);
    }
  }

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
  };

  return (
    <div>
      <Button variant="contained" color="primary" onClick={handleClick}>
        <FavoriteIcon style={{marginRight: 8}} />
        Favorite
      </Button>
      <Alert severity="info">This is an info alert — check it out!</Alert>
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="info">
          Added to favorites!
        </Alert>
      </Snackbar>
    </div>
  )
}