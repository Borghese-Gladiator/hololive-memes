import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
// Material UI components
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid';
import Pagination from '@material-ui/lab/Pagination';
// top right form
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
// Custom component import
import MemeCard from './MemeCard'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding: theme.spacing(0, 15, 5),
    '& > *': {
      marginTop: theme.spacing(2),
    },
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 130,
  },
  marginTop: {
    marginTop: theme.spacing(5)
  },
  rightColumnFlex: {
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'flex-end'
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
  const { id, memeData, t } = props;
  // initialize pagination constants
  const [numItemsPerPage, setNumItemsPerPage] = React.useState(20);
  const [pageNumber, setPageNumber] = React.useState(1);
  const numPages = Math.ceil(memeData.length / numItemsPerPage);
  const handlePageChange = (event, value) => {
    setPageNumber(value);
    window.scrollTo(0, 0); // scroll to top
  };
  const handleSelectPage = (event) => {
    setPageNumber(1); // move back to 1st page
    setNumItemsPerPage(event.target.value);
  };
  
  return (
    <Container id={id} className={classes.root}>
      <div className={classes.rightColumnFlex}>
        <FormControl className={classes.formControl}>
          <InputLabel id="demo-simple-select-label">{t('memePage.memePerPageLabel')}</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={numItemsPerPage}
            onChange={handleSelectPage}
          >
            <MenuItem value={10}>10</MenuItem>
            <MenuItem value={20}>20</MenuItem>
            <MenuItem value={30}>30</MenuItem>
            <MenuItem value={40}>40</MenuItem>
            <MenuItem value={50}>50</MenuItem>
          </Select>
        </FormControl>
      </div>
      <Container className={classes.columnFlex}>
        <Grid container justify="center" spacing={1}>
          {memeData.slice(((pageNumber - 1)*(numItemsPerPage)), ((pageNumber)*(numItemsPerPage))).map((obj, idx) => (
            <Grid key={`${obj.name} ${idx}`} item xs={12} sm={6} lg={4} xl={3}>
              <MemeCard
                path={obj.imgPath}
                title={obj.title}
                postID={obj.id}
              />
            </Grid>
          ))}
        </Grid>
        <Pagination count={numPages} page={pageNumber} onChange={handlePageChange} color="primary" size="large" showFirstButton showLastButton className={classes.marginTop} />
      </Container>
    </Container>
  );
}
