import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import TextField from "@material-ui/core/TextField";
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

export default function MemeSearch(props) {
  const classes = useStyles();
  const { filterByTagCallback, removeFilterCallback } = props;
  const [tags, setTags] = useState([]);

  const handleRemoveClick = (tag) => {
    setTags(tags.filter((val, idx) => val !== tag )); // remove item
  }
  
  const handleClick = (tag) => {
    setTags(oldArray => [...oldArray, tag]); // add item
  }

  // Similar to componentDidMount and componentDidUpdate:
  useEffect(() => {
    console.log(tags);
    if (tags.length === 0) {
      removeFilterCallback();
    } else {
      filterByTagCallback(tags);
    }
  });


  return (
    <div className={classes.flexColCenter}>
      <div className={classes.flexRowCenter}>
        {
          tags.map((val, idx) => {
            return (
              <Button variant="contained" key={`${val} ${idx}`} onClick={() => handleRemoveClick(val)}>
                #{val}
              </Button>
          )})
        }
      </div>
      <div className={classes.flexRowCenter}>
        {
          ['smug', 'angry', 'sleepy', 'panic', 'happy'].map((val, idx) => {
            // disable if present in tags 
            return !tags.includes(val)
              ?
              <Button variant="contained" key={`${val} ${idx}`} onClick={() => handleClick(val)}>
                #{val}
              </Button>
              :
              <Button variant="contained" key={`${val} ${idx}`} onClick={() => handleClick(val)} disabled>
                #{val}
              </Button>
          })
        }
      </div>
    </div>
  );
}
/*
  const handleChange = (event, newValue) => {
    console.log(JSON.stringify(newValue, null, ' '));
    filterByTitleCallback(newValue);
  }
  
  <Autocomplete
    id="autocomplete"
    className={classes.autocomplete}
    multiple
    options={memePosts}
    getOptionLabel={option => option.title}
    onChange={handleChange}
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

  import React from "react";
  import TextField from "@material-ui/core/TextField";
  import Autocomplete from "@material-ui/lab/Autocomplete";

  export default function ComboBox() {
    return (
      <Autocomplete
        id="combo-box-demo"
        options={top100Films}
        getOptionLabel={option => option.title}
        style={{ width: 300 }}
        renderInput={params => (
          <TextField {...params} label="Combo box" variant="outlined" />
        )}
        onChange={(event, newValue) => {
          console.log(JSON.stringify(newValue, null, ' '));
        }}
      />
    );
  }

  const top100Films = [
    { id: 0, title: "The Shawshank Redemption", year: 1994 },
    { id: 1, title: "The Godfather", year: 1972 },
    { id: 2, title: "The Godfather: Part II", year: 1974 },
    { id: 3, title: "The Dark Knight", year: 2008 },
    { id: 4, title: "12 Angry Men", year: 1957 }
  ];
*/