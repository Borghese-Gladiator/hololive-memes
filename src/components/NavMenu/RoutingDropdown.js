import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
// LanguageSelector
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
// LanguageSelector Icons
import TranslateIcon from '@material-ui/icons/Translate';

import CustomLink from '../CustomLink';

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 100,
  },
  select: {
    color: "white",
    fontSize: 18
  }
}));

// Cannot add styling directly onto TranslateIcon in IconComponent which requires string input
const colorInheritTranslateIcon = () => { return (<TranslateIcon style={{color:"inherit"}} />) }

export default function LanguageSelector(props) {
  const classes = useStyles();

  return (
    <FormControl aria-label="Change language" title="Saved Memes" className={classes.formControl}>
      <Select
        className={classes.select}
      >
        <MenuItem>
          <CustomLink ariaLabel={`Link to history page`} to={'/history'}>
            History
          </CustomLink>
        </MenuItem>
        <MenuItem>
          <CustomLink ariaLabel={`Link to history page`} to={'/favorites'}>
            Favorites
          </CustomLink>
        </MenuItem>
      </Select>
    </FormControl>
  )
}