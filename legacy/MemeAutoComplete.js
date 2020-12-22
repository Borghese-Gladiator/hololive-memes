import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
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
}));

export default function MemeSearch(props) {
  const classes = useStyles();
  const { memeData, filterByIDCallback, removeFilterCallback } = props;
  
  const handleChange = (event, newValue) => {
    // newValue is array of values that fit autocomplete
    console.log(JSON.stringify(newValue, null, ' '));
    if (newValue.length === 0) {
      removeFilterCallback();
    } else {
      filterByIDCallback(newValue[0].id);
    }
  }

  return (
    <div className={classes.flexColCenter}>
      <Autocomplete
        id="autocomplete"
        className={classes.autocomplete}
        multiple
        options={memeData}
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
    </div>
  );
}