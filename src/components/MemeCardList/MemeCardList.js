import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
// AboutRoles Container
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid';
// Custom component import
import MemeCard from './MemeCard'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1
  },
  control: {
    padding: theme.spacing(2),
  },
}));

export default function MemeCardList(props) {
  const classes = useStyles();
  const { id, memeData } = props
  console.log(memeData)

  return (
    <Container id={id} className={classes.root}>
      <Grid container justify="center" spacing={1}>
        {memeData.map((obj, idx) => (
          <Grid key={`${obj.name} ${idx}`} item xs={12} sm={6} lg={4} xl={3}>
            <MemeCard
              path={obj.imgPath}
              name={obj.title}
            />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
