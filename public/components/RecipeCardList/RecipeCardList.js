import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
// AboutRoles Container
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid';
// Custom component import
import RecipeCard from './RecipeCard'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding: "5vh",
  },
  control: {
    padding: theme.spacing(2),
  },
}));

export default function RecipeCardList(props) {
  const classes = useStyles();
  const { id, recipeData } = props

  return (
    <Container id={id} className={classes.root}>
      <Grid container justify="center" spacing={1}>
        {recipeData.map((obj, idx) => (
          <Grid key={`${obj.title} ${idx}`} item xs={12} sm={6} md={4} lg={3}>
            <RecipeCard
              name={obj.name}
              imgPath={obj.imgPath}
              starsNum={obj.stars}
              tags={obj.tags}
              ingredients={obj.ingredients}
              desc={obj.desc}
              user={obj.user}
              style={{background: "#fff"}}
            />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
