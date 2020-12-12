import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
// Material UI components
import { makeStyles } from '@material-ui/core/styles';
import { Container, Grid, Typography, Fab, Paper, Button } from '@material-ui/core';
// custom components
import { SocialExternalLink, MemeUtilButtons, MemeCard } from '../../components/MemeDetails';
// Material UI Icons
import ArrowBackIcon from '@material-ui/icons/ArrowBack';

const useStyles = makeStyles((theme) => ({
  root: {
  },
  paperPadding: {
    padding: theme.spacing(5, 0, 5)
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
  flexRowCenter: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    '& > *': { // add padding between elements
      margin: 5
    },
  }
}));


export default function MemeDetailsPage(props) {
  const classes = useStyles();
  const { memeData } = props;
  // memeID from URL
  let { memeID } = useParams();
  const memePost = memeData.find(meme => meme.id > memeID);
  // const { id, imgPath, title, source, tags, userPosted, datePosted } = memePost;
  const { id, imgPath, title, userPosted, datePosted } = memePost;
  const formattedTitle = title.split('.')[0].replace(/^.*[\\/]/, '').replace(/[_-]+/g, ' ');
  
  const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  const dateString = datePosted.toLocaleDateString("en-US", options);

  const tags = [
    'Hololive',
    'Aloe'
  ]
  const source = [
    'https://www.reddit.com/r/Hololive/comments/kbgoz2/i_drew_holofive_%E3%81%BB%E3%82%8D%E3%81%B5%E3%81%81%E3%81%84%E3%81%B6/',
    'https://twitter.com/Sco_ttie/status/1336958086272012290',
    'https://www.pixiv.net/en/artworks/82575432',
    'https://www.youtube.com/watch?v=dpEM6MyUjx8',
    'https://www.flaticon.com/search?word=pixiv'
  ];

  const handleBackClick = () => {
    window.history.back()
  };

  // Similar to componentDidMount and componentDidUpdate:
  useEffect(() => {
    window.scrollTo(0, 0); // scroll to top
  }, [])
  
  return (
    <Container id={id} style={{paddingTop: 20}}>
      <Paper className={classes.paperPadding}>
        <Fab color="primary" aria-label="add" className={classes.absoluteTopLeft} onClick={handleBackClick}>
          <ArrowBackIcon />
        </Fab>
        <Grid container>
          <Grid item xs={4}>
            <Container>
              <Typography variant="body2" gutterBottom>
                Date Posted (EST): {dateString}
              </Typography>
              <Typography variant="h6" gutterBottom>
                Source
              </Typography>
              {
                source.map((val, idx) => {
                  return <SocialExternalLink key={`${val} ${idx}`} fullURL={val} />
                })
              }
            </Container>
          </Grid>
          <Grid item xs={5}>
            <Container>
              <Typography variant="h4" gutterBottom>
                {formattedTitle}
              </Typography>
              <MemeCard
                path={imgPath}
                name={title}
                postID={id}
              />
            </Container>
          </Grid>
          <Grid item xs={3}>
            <MemeUtilButtons />
          </Grid>
        </Grid>
        <Container className={classes.flexRowCenter}>
          {
            tags.map((val, idx) => {
              return (
                <Button variant="contained">
                  #{val}
                </Button>
            )})
          }
        </Container>
      </Paper>
    </Container>
  );
}