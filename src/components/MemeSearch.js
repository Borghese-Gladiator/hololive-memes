import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputAdornment from '@material-ui/core/InputAdornment';
import TextField from '@material-ui/core/TextField';
import SearchIcon from '@material-ui/icons/Search';

const useStyles = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(1),
  },
  flexCenter: {
    display: 'flex',
    flexAlign: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
}));

export default function InputWithIcon() {
  const classes = useStyles();

  return (
    <div className={classes.flexCenter}>
      <TextField
        className={classes.margin}
        id="input-with-icon-textfield"
        label="Search Memes"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          ),
        }}
      />
    </div>
  );
}
