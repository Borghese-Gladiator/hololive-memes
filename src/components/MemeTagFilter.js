import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

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
  const { filterByTagCallback } = props;
  const [tags, setTags] = React.useState([]);

  const handleRemoveClick = (tag) => {
    setTags(tags.filter((val, idx) => val !== tag )); // remove item
    filterByTagCallback(tags);
  }
  
  const handleClick = (tag) => {
    setTags(oldArray => [...oldArray, tag]); // add item
    filterByTagCallback(tags);
  }

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
          ['smug', 'angry', 'sleepy', 'surprised'].map((val, idx) => {
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
*/