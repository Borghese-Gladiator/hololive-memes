import React, { useState } from 'react'
import {
  Switch,
  Route,
  useRouteMatch
} from "react-router-dom";
// child pages
import MemeCardList from '../../components/MemeCardList';
import MemeDetailsPage from './MemeDetailsPage';
// load meme data
import { memePosts } from '../../constants/memeConstants';
// Material UI components
import { makeStyles } from '@material-ui/core/styles';
import TextField from "@material-ui/core/TextField";
import Button from '@material-ui/core/Button';
import Autocomplete from "@material-ui/lab/Autocomplete";

const useStyles = makeStyles((theme) => ({
  autocomplete: {
    width: 500,
    margin: theme.spacing(1),
  },
  flexColCenter: {
    display: 'flex',  
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
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

const FILTER_MAP = {
  All: () => true,
  Smug: meme => meme.tags.includes('smug'),
  Angry: meme => meme.tags.includes('angry'),
  Sleepy: meme => meme.tags.includes('sleepy'),
  Panic: meme => meme.tags.includes('panic'),
  Happy: meme => meme.tags.includes('happy'),
};
const FILTER_NAMES = Object.keys(FILTER_MAP);

export default function MemesPage() {
  let match = useRouteMatch();
  
  const classes = useStyles();
  const [filter, setFilter] = useState("All");
  const [IDListFilter, setIDListFilter] = useState("");

  const filterList = FILTER_NAMES.map(name => (
    name === filter
      ?
      <Button variant="contained" key={`${name}`} onClick={() => setFilter(name)} color="primary"style={{textDecoration: 'underline'}}>
        #{name}
      </Button>
      :
      <Button variant="contained" key={`${name}`} onClick={() => setFilter(name)}>
        #{name}
      </Button>
  ));

  const filteredMemeList = memePosts
  .filter(FILTER_MAP[filter])
  .filter(meme => {
    if (IDListFilter === "") {
      return true;
    } else {
      return IDListFilter.includes(meme.id)
    }
  });

  const handleAutcompleteChange = (event, newValue) => {
    // newValue is array of values that fit autocomplete // console.log(JSON.stringify(newValue, null, ' '));
    if (newValue && newValue.length > 0) {
      const idArray = newValue.map(val => val.id);
      setIDListFilter(idArray);
    } else {
      setIDListFilter(""); // default value
    }
  }

  return (
    <Switch>
      <Route path={`${match.path}/:memeID`}>
        <MemeDetailsPage memeData={memePosts} />
      </Route>
      <Route path={match.path}>
        <div className={classes.flexColCenter}>
          <Autocomplete
            id="autocomplete"
            className={classes.autocomplete}
            multiple
            options={memePosts}
            getOptionLabel={option => option.title}
            onChange={handleAutcompleteChange}
            renderInput={params => (
              <TextField
                {...params}
                variant="outlined"
                label="Search Memes"
                margin="normal"
                fullWidth
              />
            )}
          />
          <div className={classes.flexRowCenter}>
            {filterList}
          </div>
          <MemeCardList memeData={filteredMemeList} />
        </div>
      </Route>
    </Switch>
  )
}