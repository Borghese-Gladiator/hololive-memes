import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
// Material UI components
import { makeStyles } from '@material-ui/core/styles';
import { Container, Grid, Typography, Fab, Paper, Button } from '@material-ui/core';
// custom components
import { SocialExternalLink, MemeFavoriteButton, MemeCard } from '../../components/MemeDetails';
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
    top: 100 // account for navbar
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
  let { memeID } = useParams(); // memeID from URL

  const classes = useStyles();
  const { memeData, t } = props;
  const memePost = memeData.find(meme => meme.id === memeID);
  const { id, imgPath, title, source, tags, userPosted, datePosted } = memePost;
  
  const formattedTitle = title.split('.')[0].replace(/^.*[\\/]/, '').replace(/[_-]+/g, ' ');
  
  const userLanguage = window.navigator.userLanguage || window.navigator.language || 'en-US';
  const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  const dateString = datePosted.toLocaleDateString(userLanguage, options);

  const handleBackClick = () => {
    window.history.back()
  };

  // Similar to componentDidMount and componentDidUpdate:
  useEffect(() => {
    window.scrollTo(0, 0); // scroll to top
  }, []);
  
  return (
    <Container id={id} style={{paddingTop: 20}}>
      <Paper className={classes.paperPadding}>
        <Fab color="primary" aria-label="add" className={classes.absoluteTopLeft} onClick={handleBackClick}>
          <ArrowBackIcon />
        </Fab>
        <Grid container>
          <Grid item xs={6} sm={5} md={4}>
            <Container>
              <Typography variant="body2" gutterBottom>
                {`${t("memeDetailsPage.postedByLabel")}: ${userPosted}`}
              </Typography>
              <Typography variant="body2" gutterBottom>
                {`${t("memeDetailsPage.datePostedLabel")}: ${dateString}`}
              </Typography>
              <Typography variant="h6" gutterBottom>
                {t("memeDetailsPage.sourceLabel")}
              </Typography>
              {
                source.length === 0 
                ?
                  <div>{t("memeDetailsPage.noSourceInfoLabel")}</div>
                :
                  source.map((val, idx) => {
                    return <SocialExternalLink key={`${val} ${idx}`} fullURL={val} />
                  })
              }
            </Container>
          </Grid>
          <Grid item xs={6} sm={6} md={5}>
            <Container>
              <Typography variant="h4" gutterBottom>
                {formattedTitle}
              </Typography>
              <MemeCard
                path={imgPath}
                title={title}
                postID={id}
              />
            </Container>
          </Grid>
          <Grid item xs={12} sm={5} md={3}>
            <MemeFavoriteButton
              path={imgPath}
              title={title}
              postID={id} 
            />
          </Grid>
        </Grid>
        <Container className={classes.flexRowCenter}>
          {
            tags.map((val, idx) => {
              return (
                <Button variant="contained" key={`${val} ${idx}`}>
                  #{val}
                </Button>
            )})
          }
        </Container>
      </Paper>
    </Container>
  );
}