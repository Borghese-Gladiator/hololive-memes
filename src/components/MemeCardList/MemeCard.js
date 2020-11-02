import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 800,
  },
  gifStyle: {
    maxHeight: 498
  }
}));

export default function MemeCard(props) {
  const { path } = props;
  // const { name } = props;
  // Formats name to only include filename & remove underscores globally
  // https://dmitripavlutin.com/replace-all-string-occurrences-javascript/
  // const formattedName = name.replace(/^.*[\\/]/, '').replace(/[_]+/g, ' ')
  
  const classes = useStyles();
  const handleCardClick = () => {
    // https://stackoverflow.com/questions/11401897/get-the-current-domain-name-with-javascript-not-the-path-etc
    const gifUrl = "https://" + window.location.hostname + props.path
    window.prompt("Copy to clipboard: Ctrl+C, Enter", gifUrl);
  }

  return (
    <Card className={classes.root}>
      <CardActionArea onClick={handleCardClick}>
        <img src={path} alt="loading..." className={classes.gifStyle} />
      </CardActionArea>
    </Card>
  )
}