import React from "react";
import { useParams } from "react-router-dom";
// Material UI components
import { makeStyles } from '@material-ui/core/styles';
import { Container, Grid, Typography, Fab } from '@material-ui/core';
// custom components
import { CustomExternalLink, MemeUtilButtons } from '../../components/MemeDetails';
// Material UI Icons
import ArrowBackIcon from '@material-ui/icons/ArrowBack';

const useStyles = makeStyles((theme) => ({
  root: {
  },
  media: {
    maxHeight: 550,
    width: '100%',
    objectFit: 'cover'
  },
  absoluteTopLeft: {
    position: 'absolute',
    left: 30,
    top: 70 // account for navbar
  },
  rowFlex: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center'
  },
  columnFlex: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  }
}));


export default function MemeDetailsPage(props) {
  const { memeData } = props;
  // memeID from URL
  let { memeID } = useParams();
  const classes = useStyles();
  const memePost = memeData.find(meme => meme.id > memeID);
  // const { id, imgPath, title, source, tags, userPosted, datePosted } = memePost;
  const { id, imgPath, title, tags, userPosted, datePosted } = memePost;
  const formattedTitle = title.split('.')[0].replace(/^.*[\\/]/, '').replace(/[_-]+/g, ' ')

  const source = [
    'https://www.reddit.com/r/Hololive/comments/kbgoz2/i_drew_holofive_%E3%81%BB%E3%82%8D%E3%81%B5%E3%81%81%E3%81%84%E3%81%B6/',
    'https://www.reddit.com/r/Hololive/comments/kbgoz2/i_drew_holofive_%E3%81%BB%E3%82%8D%E3%81%B5%E3%81%81%E3%81%84%E3%81%B6/'
  ];
  
  return (
    <Container id={id} style={{paddingTop: 20}}>
      <Fab color="primary" aria-label="add" className={classes.absoluteTopLeft}>
        <ArrowBackIcon />
      </Fab>
      <Grid container>
        <Grid item xs={4}>
          <Container>
            <Typography variant="h6" gutterBottom>
              Source
            </Typography>
            {
              source.map((val, idx) => {
                return <CustomExternalLink key={`${val} ${idx}`} fullURL={val} />
              })
            }
          </Container>
        </Grid>
        <Grid item xs={5}>
          <Container>
            <Typography variant="h4" gutterBottom>
              {formattedTitle}
            </Typography>
            <img src={imgPath} alt="loading..." className={classes.media} />
          </Container>
        </Grid>
        <Grid item xs={3}>
          <MemeUtilButtons />
        </Grid>
      </Grid>    
    </Container>
  );
}