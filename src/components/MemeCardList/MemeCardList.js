import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
// AboutRoles Container
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid';
import Pagination from '@material-ui/lab/Pagination';
// Custom component import
import MemeCard from './MemeCard'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    paddingBottom: theme.spacing(5),
    '& > *': {
      marginTop: theme.spacing(2),
    }
  },
  control: {
    padding: theme.spacing(2),
  },
  columnFlex: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  }
}));

export default function MemeCardList(props) {
  const classes = useStyles();
  const { id, memeData } = props;
  const numberOfItemsForPage = 30;
  const numPages = Math.ceil(memeData.length / numberOfItemsForPage);
  console.log(memeData.length);

  const [pageNumber, setPageNumber] = React.useState(1);
  const handleChange = (event, value) => {
    setPageNumber(value);
  };

  return (
    <Container id={id} className={clsx(classes.root, classes.columnFlex)}>
      <Grid container justify="center" spacing={1}>
        {memeData.slice(((pageNumber - 1)*(numberOfItemsForPage)), ((pageNumber)*(numberOfItemsForPage))).map((obj, idx) => (
          <Grid key={`${obj.name} ${idx}`} item xs={12} sm={6} lg={4} xl={3}>
            <MemeCard
              path={obj.imgPath}
              name={obj.title}
            />
          </Grid>
        ))}
      </Grid>
      <Pagination count={numPages} page={pageNumber} onChange={handleChange} color="primary" size="large" showFirstButton showLastButton />
    </Container>
  );
}
