import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import IconButton from '@material-ui/core/IconButton';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
  root: {
    paddingLeft: '5%',
    paddingRight: '8%',
  },
  flexColumn: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  iconButton: {
    borderRadius: '50%',
    border: '5px solid #555'
  }
}));

export default function IconLabelCardList(props) {
  const classes = useStyles();
  const { iconLabelList } = props;

  return (
    <Container className={classes.root}>
      <Grid container spacing={1}>
        {iconLabelList.map((obj, idx) => (
          <Grid className={classes.flexColumn} key={`${obj.label} ${idx}`} item xs={12} sm={6} md={4} lg={3}>
            <IconButton aria-label={`${obj.label} ${idx}`} className={classes.iconButton}>
              {obj.icon()}
            </IconButton>
            {obj.label}
          </Grid>
        ))}
      </Grid>
    </Container>
  )
}