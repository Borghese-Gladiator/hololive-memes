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
  const [isValid, setIsValid] = React.useState(true);

  const handleClick = () => {  
    // add to localStorage history
    const favoriteListStr = localStorage.getItem('favorite');
    if (!favoriteListStr) {
      // does not exist
      localStorage.setItem('favorite', JSON.stringify([postID]));
    } else {
      const favoriteList = JSON.parse(favoriteListStr);
      if (favoriteList.includes(postID)) {
        // duplicates present
        setIsValid(false);
      } else {
        setIsValid(true);
        favoriteList.push(postID);
        localStorage.setItem('favorite', JSON.stringify(favoriteList));
      }
    }
    // display alert after determining if valid
    setOpen(true);
  }

  function showAlert(isValid) {
    return isValid ? 
      <Alert onClose={handleClose} severity="info">
        Added to favorites!
      </Alert>
      :
      <Alert onClose={handleClose} severity="error">
        Duplicate key - it's already added!
      </Alert>
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
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        {showAlert(isValid)}
      </Snackbar>
    </div>
  )
}